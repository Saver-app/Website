import { Article } from "@/components/article/article";
import { createPageMetadata } from "@/lib/site_metadata";
import type { Metadata } from "next";

export const metadata = createPageMetadata({
  title: "Terms of Service | Saver",
  description:
    "Read the terms governing access to and use of Saver's services.",
  path: "/terms",
}) satisfies Metadata;

export default function TermsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
