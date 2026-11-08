import { useEffect } from "react";

export const SITE_URL = "https://joshua.slaar.de";
export const DEFAULT_TITLE = "Joshua Slaar";

export interface PageMetaProps {
  readonly title?: string;
  readonly description?: string;
  /** Canonical path starting with "/", e.g. "/projects/movetopia" */
  readonly path?: string;
  /** If true, sets robots meta to "noindex, nofollow" (useful for 404 / hidden pages) */
  readonly noindex?: boolean;
}

/**
 * Removes static fallback SEO tags (`[data-static-seo]`) from `index.html`
 * once React mounts so React 19's native `<title>`, `<meta>`, and `<link>`
 * hoisting can manage `<head>` without duplicate tags.
 */
function removeStaticSeoFallbacks() {
  if (typeof document !== "undefined") {
    for (const el of document.head.querySelectorAll("[data-static-seo]")) {
      el.remove();
    }
  }
}

/**
 * Declaratively renders document `<title>`, `<meta>`, and `<link rel="canonical">`
 * using React 19 native head hoisting.
 */
export default function PageMeta({
  title,
  description,
  path,
  noindex = false,
}: Readonly<PageMetaProps>) {
  useEffect(() => {
    removeStaticSeoFallbacks();
  }, []);

  let fullTitle = DEFAULT_TITLE;
  if (title) {
    fullTitle = title.includes(DEFAULT_TITLE)
      ? title
      : `${title} | ${DEFAULT_TITLE}`;
  }

  let canonicalUrl: string | undefined;
  if (path) {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    canonicalUrl = `${SITE_URL}${normalizedPath}`;
  }

  return (
    <>
      <title>{fullTitle}</title>
      <meta property="og:title" content={fullTitle} />
      <meta property="og:type" content="website" />
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {canonicalUrl && (
        <>
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:url" content={canonicalUrl} />
        </>
      )}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
    </>
  );
}
