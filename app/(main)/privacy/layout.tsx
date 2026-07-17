import { Article } from "@/components/article/article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Saver",
  description:
    "Learn how Saver collects, uses, shares, and protects personal information.",
};

export default function PrivacyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
