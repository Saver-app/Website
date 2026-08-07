import { Article } from "@/components/article/article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice | Saver",
  description: "Provider and contact information for Saver.",
};

export default function ImpressumPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
