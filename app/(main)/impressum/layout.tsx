import { Article } from "@/components/article/article";
import { createPageMetadata } from "@/lib/site_metadata";
import type { Metadata } from "next";

export const metadata = createPageMetadata({
  title: "Legal Notice | Saver",
  description: "Provider and contact information for Saver.",
  path: "/impressum",
}) satisfies Metadata;

export default function ImpressumPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
