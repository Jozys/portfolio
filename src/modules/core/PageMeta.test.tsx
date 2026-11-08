import path from "node:path";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageMeta from "./PageMeta";
import {
  buildSitemapXml,
  extractActiveProjectRoutes,
  resolveSitemapRoutes,
} from "../../../scripts/sitemapPlugin.js";
import { getAllProjects } from "../../data/Projects";

describe("PageMeta", () => {
  it("removes [data-static-seo] fallbacks and hoists React 19 title, meta, and canonical tags", () => {
    const staticTitle = document.createElement("title");
    staticTitle.setAttribute("data-static-seo", "");
    staticTitle.textContent = "Joshua Slaar";
    document.head.appendChild(staticTitle);

    render(
      <PageMeta
        title="MoveTopia"
        description="Fitness tracking app"
        path="/projects/movetopia"
      />,
    );

    expect(document.head.querySelectorAll("[data-static-seo]")).toHaveLength(0);
    expect(document.title).toBe("MoveTopia | Joshua Slaar");
    expect(
      document.head
        .querySelector('meta[name="description"]')
        ?.getAttribute("content"),
    ).toBe("Fitness tracking app");
    expect(
      document.head
        .querySelector('link[rel="canonical"]')
        ?.getAttribute("href"),
    ).toBe("https://joshua.slaar.de/projects/movetopia");
    expect(
      document.head
        .querySelector('meta[property="og:url"]')
        ?.getAttribute("content"),
    ).toBe("https://joshua.slaar.de/projects/movetopia");
    expect(
      document.head
        .querySelector('meta[name="robots"]')
        ?.getAttribute("content"),
    ).toBe("index, follow");
  });

  it("sets noindex, nofollow when noindex is true", () => {
    render(<PageMeta title="Not Found" description="404" noindex />);

    expect(
      document.head
        .querySelector('meta[name="robots"]')
        ?.getAttribute("content"),
    ).toBe("noindex, nofollow");
  });
});

describe("sitemapPlugin", () => {
  const routerFilePath = path.resolve(
    process.cwd(),
    "src/modules/core/Router.tsx",
  );
  const projectsFilePath = path.resolve(
    process.cwd(),
    "src/data/Projects.tsx",
  );

  it("dynamically extracts all non-disabled project routes from Projects.tsx", () => {
    const extracted = extractActiveProjectRoutes(projectsFilePath);
    const activeRoutesFromRuntime = getAllProjects().map((p) => p.route);

    expect(extracted.sort()).toEqual(activeRoutesFromRuntime.sort());
    expect(extracted).not.toContain("shakeit");
  });

  it("resolves static routes and expands /projects/:id while excluding redirects, wildcards, and /ui5", () => {
    const routes = resolveSitemapRoutes({ routerFilePath, projectsFilePath });

    expect(routes).toContain("/home");
    expect(routes).toContain("/projects");
    expect(routes).toContain("/me");
    expect(routes).toContain("/privacy");
    expect(routes).toContain("/projects/movetopia");
    expect(routes).toContain("/projects/teckboard");

    // Redirects, hidden showcase, disabled projects, and wildcard must not be indexed
    expect(routes).not.toContain("/");
    expect(routes).not.toContain("/about");
    expect(routes).not.toContain("/datenschutz");
    expect(routes).not.toContain("/ui5");
    expect(routes).not.toContain("*");
    expect(routes).not.toContain("/projects/shakeit");
  });

  it("builds valid sitemap XML for https://joshua.slaar.de", () => {
    const xml = buildSitemapXml({
      routes: ["/home", "/projects/movetopia"],
      lastmod: "2026-11-08",
    });

    expect(xml).toContain("<loc>https://joshua.slaar.de/home</loc>");
    expect(xml).toContain(
      "<loc>https://joshua.slaar.de/projects/movetopia</loc>",
    );
    expect(xml).toContain("<lastmod>2026-11-08</lastmod>");
  });
});
