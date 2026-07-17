import { Article } from "@/components/article/article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Saver",
  description:
    "Read the terms governing access to and use of Saver's services.",
};

export default function TermsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
