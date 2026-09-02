import { Article } from "@/components/article/article";
import { createPageMetadata } from "@/lib/site_metadata";
import type { Metadata } from "next";

export const metadata = createPageMetadata({
  title: "Return & Refund Policy | Saver",
  description: "Learn about statutory withdrawal and Saver's voluntary refund policy.",
  path: "/return-policy",
}) satisfies Metadata;

export default function ReturnPolicyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
