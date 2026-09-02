import { Article } from "@/components/article/article";
import { createPageMetadata } from "@/lib/site_metadata";
import type { Metadata } from "next";

export const metadata = createPageMetadata({
  title: "Credits | Saver",
  description: "Credits and third-party attributions for Saver.",
  path: "/credits",
}) satisfies Metadata;

export default function CreditsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
