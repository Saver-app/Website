import { Article } from "@/components/article/article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Saver",
  description: "Learn about statutory withdrawal and Saver's voluntary refund policy.",
};

export default function ReturnPolicyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
