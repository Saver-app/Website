import type { Metadata } from "next";

import { Article } from "@/components/article/article";
import { Section } from "@/components/section/section";

const DISCORD_SERVER_URL = "https://discord.gg/f7BGpQFSeF";

export const metadata: Metadata = {
  title: "Join Saver on Discord",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DiscordPage() {
  return (
    <>
      <meta
        httpEquiv="refresh"
        content={`0; url=${DISCORD_SERVER_URL}`}
      />
      <main>
        <Section paddingTop={70} paddingBottom={120}>
          <Article>
            <h1>Join Saver on Discord</h1>
            <p>
              You are being redirected. If nothing happens, {" "}
              <a href={DISCORD_SERVER_URL}>open the Saver Discord server</a>.
            </p>
          </Article>
        </Section>
      </main>
    </>
  );
}
