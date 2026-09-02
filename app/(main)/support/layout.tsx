import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/site_metadata";

export const metadata = createPageMetadata({
  title: "Support | Saver",
  description:
    "Contact Saver support for help with the app, your account, subscriptions, or anything else.",
  path: "/support",
}) satisfies Metadata;

export default function SupportPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
