import { Article } from "@/components/article/article";
import { createPageMetadata } from "@/lib/site_metadata";
import type { Metadata } from "next";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Saver",
  description:
    "Learn how Saver handles personal data, cookies, device storage, integrations, and privacy rights.",
  path: "/privacy",
}) satisfies Metadata;

export default function PrivacyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
