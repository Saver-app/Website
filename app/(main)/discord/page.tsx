import { redirect } from "next/navigation";

const DISCORD_SERVER_URL = "https://discord.gg/f7BGpQFSeF";

export default function DiscordPage() {
  redirect(DISCORD_SERVER_URL);
}
