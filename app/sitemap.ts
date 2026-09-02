import type { MetadataRoute } from "next";

import { MAX_RELEASE_NOTES_PER_PAGE, SITE_URL } from "@/constants";
import { readTotalReleaseNotesPageCount } from "@/lib/release_notes_helpers";

export const dynamic = "force-static";

const PUBLIC_ROUTES = [
  "",
  "/download",
  "/support",
  "/release-notes",
  "/privacy",
  "/terms",
  "/return-policy",
  "/data-request",
  "/impressum",
  "/credits",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const releaseNotesPageCount = await readTotalReleaseNotesPageCount(
    MAX_RELEASE_NOTES_PER_PAGE,
  );
  const releaseNotesPages = Array.from(
    { length: releaseNotesPageCount },
    (_, index) => `/release-notes/${index + 1}`,
  );

  return [...PUBLIC_ROUTES, ...releaseNotesPages].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path.startsWith("/release-notes") ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/download" ? 0.9 : 0.5,
  }));
}
