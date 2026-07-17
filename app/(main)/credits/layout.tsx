import { Article } from "@/components/article/article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credits | Saver",
  description: "Credits and third-party attributions for Saver.",
};

export default function CreditsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
