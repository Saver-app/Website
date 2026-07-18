import { Article } from "@/components/article/article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return Policy | Saver",
  description: "Read Saver's return and refund policy.",
};

export default function ReturnPolicyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
