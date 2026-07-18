import { Article } from "@/components/article/article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Data Request | Saver",
  description:
    "Request access to, correction of, or deletion of your personal information held by Saver.",
};

export default function DataRequestPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
