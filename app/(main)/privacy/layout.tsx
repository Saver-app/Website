import { Article } from "@/components/article/article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Saver",
  description:
    "Learn how Saver handles personal data, cookies, device storage, integrations, and privacy rights.",
};

export default function PrivacyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
