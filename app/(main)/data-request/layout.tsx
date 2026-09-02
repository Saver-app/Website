import { Article } from "@/components/article/article";
import { createPageMetadata } from "@/lib/site_metadata";
import type { Metadata } from "next";

export const metadata = createPageMetadata({
  title: "Personal Data Request | Saver",
  description:
    "Request access to, correction of, or deletion of your personal information held by Saver.",
  path: "/data-request",
}) satisfies Metadata;

export default function DataRequestPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
