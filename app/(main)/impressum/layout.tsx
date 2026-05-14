import { Article } from "@/components/article/article";

export default function ImpressumPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
