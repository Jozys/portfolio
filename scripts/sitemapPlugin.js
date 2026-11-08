import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

export const DEFAULT_SITE_URL = "https://joshua.slaar.de";

/**
 * Extracts all active (non-disabled) project route slugs from `src/data/Projects.tsx`
 * using the TypeScript AST.
 *
 * @param {string} projectsFilePath
 * @returns {string[]}
 */
export function extractActiveProjectRoutes(projectsFilePath) {
  const sourceText = fs.readFileSync(projectsFilePath, "utf8");
  const sourceFile = ts.createSourceFile(
    projectsFilePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  /** @type {string[]} */
  const routes = [];

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "projects" &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      for (const prop of node.initializer.properties) {
        if (
          ts.isPropertyAssignment(prop) &&
          ts.isObjectLiteralExpression(prop.initializer)
        ) {
          let routeValue = null;
          let isDisabled = false;

          for (const field of prop.initializer.properties) {
            if (
              !ts.isPropertyAssignment(field) ||
              !ts.isIdentifier(field.name)
            ) {
              continue;
            }
            if (
              field.name.text === "route" &&
              ts.isStringLiteral(field.initializer)
            ) {
              routeValue = field.initializer.text.trim();
            }
            if (
              field.name.text === "disable" &&
              field.initializer.kind === ts.SyntaxKind.TrueKeyword
            ) {
              isDisabled = true;
            }
          }

          if (routeValue && !isDisabled) {
            routes.push(routeValue);
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return routes;
}

/**
 * Checks whether a JSX node or any of its children renders `<Navigate ... />`.
 *
 * @param {ts.Node} node
 * @returns {boolean}
 */
function containsNavigateElement(node) {
  let found = false;
  function walk(current) {
    if (
      (ts.isJsxSelfClosingElement(current) ||
        ts.isJsxOpeningElement(current)) &&
      ts.isIdentifier(current.tagName) &&
      current.tagName.text === "Navigate"
    ) {
      found = true;
      return;
    }
    ts.forEachChild(current, walk);
  }
  walk(node);
  return found;
}

/**
 * Extracts all indexable routes from `src/modules/core/Router.tsx` and expands
 * `/projects/:id` with active project routes from `src/data/Projects.tsx`.
 *
 * @param {object} options
 * @param {string} options.routerFilePath
 * @param {string} options.projectsFilePath
 * @returns {string[]}
 */
export function resolveSitemapRoutes({ routerFilePath, projectsFilePath }) {
  const routerSource = fs.readFileSync(routerFilePath, "utf8");
  const sourceFile = ts.createSourceFile(
    routerFilePath,
    routerSource,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  const projectSlugs = extractActiveProjectRoutes(projectsFilePath);
  /** @type {Set<string>} */
  const resolvedRoutes = new Set();

  function visit(node) {
    if (ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) {
      if (ts.isIdentifier(node.tagName) && node.tagName.text === "Route") {
        let routePath = null;
        let isRedirect = false;

        for (const attr of node.attributes.properties) {
          if (!ts.isJsxAttribute(attr) || !ts.isIdentifier(attr.name)) {
            continue;
          }
          if (
            attr.name.text === "path" &&
            attr.initializer &&
            ts.isStringLiteral(attr.initializer)
          ) {
            routePath = attr.initializer.text.trim();
          }
          if (
            attr.name.text === "element" &&
            attr.initializer &&
            containsNavigateElement(attr.initializer)
          ) {
            isRedirect = true;
          }
        }

        if (routePath && routePath !== "*" && !isRedirect) {
          if (routePath.includes(":id")) {
            for (const slug of projectSlugs) {
              resolvedRoutes.add(routePath.replace(":id", slug));
            }
          } else {
            resolvedRoutes.add(routePath);
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return Array.from(resolvedRoutes);
}

/**
 * Builds the XML string for `sitemap.xml`.
 *
 * @param {object} options
 * @param {string[]} options.routes
 * @param {string} [options.siteUrl]
 * @returns {string}
 */
export function buildSitemapXml({ routes, siteUrl = DEFAULT_SITE_URL }) {
  const normalizedBase = siteUrl.replace(/\/+$/, "");

  const urlEntries = routes
    .map((route) => {
      const normalizedRoute = route.startsWith("/") ? route : `/${route}`;

      return [
        "  <url>",
        `    <loc>${normalizedBase}${normalizedRoute}</loc>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlEntries,
    "</urlset>",
    "",
  ].join("\n");
}

/**
 * Vite plugin that dynamically generates `sitemap.xml` in the build output directory
 * from `Router.tsx` and `Projects.tsx`.
 *
 * @param {object} [options]
 * @param {string} [options.siteUrl]
 * @returns {import("vite").Plugin}
 */
export default function sitemapPlugin(options = {}) {
  const siteUrl = options.siteUrl || DEFAULT_SITE_URL;
  let outDir = "build";
  let rootDir = process.cwd();
  let isBuild = false;

  function generateCurrentSitemapXml() {
    const routerFilePath = path.resolve(rootDir, "src/modules/core/Router.tsx");
    const projectsFilePath = path.resolve(rootDir, "src/data/Projects.tsx");
    const routes = resolveSitemapRoutes({
      routerFilePath,
      projectsFilePath,
    });
    return { routes, xml: buildSitemapXml({ routes, siteUrl }) };
  }

  return {
    name: "portfolio-dynamic-sitemap",
    configResolved(config) {
      rootDir = config.root;
      outDir = config.build.outDir;
      isBuild = config.command === "build" && !process.env.VITEST;
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (
          req.url === "/sitemap.xml" ||
          req.url?.startsWith("/sitemap.xml?")
        ) {
          const { xml } = generateCurrentSitemapXml();
          res.setHeader("Content-Type", "application/xml; charset=utf-8");
          res.statusCode = 200;
          res.end(xml);
          return;
        }
        next();
      });
    },
    closeBundle() {
      if (!isBuild) return;

      const { routes, xml } = generateCurrentSitemapXml();
      const outputDir = path.resolve(rootDir, outDir);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      const sitemapPath = path.join(outputDir, "sitemap.xml");
      fs.writeFileSync(sitemapPath, xml, "utf8");
      console.log(
        `\n✓ Generated dynamic sitemap.xml with ${routes.length} routes at ${sitemapPath}`,
      );
    },
  };
}
