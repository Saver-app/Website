import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Saver",
  description:
    "Contact Saver support for help with the app, your account, subscriptions, or anything else.",
};

export default function SupportPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
