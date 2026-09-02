import {
  Caveat,
  Dancing_Script,
  Figtree,
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { ColorScheme } from "./types/shared";

export const THEME: "system" | "light" | "dark" = "system";

export const SITE_URL = "https://saver-app.com";
export const APP_ID = "6766563672";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`;
export const APP_STORE_DEEP_LINK =
  `itms-apps://itunes.apple.com/app/id${APP_ID}`;
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.saverapp.paket";
export const SAFARI_EXTENSION_APP_ID = "6771103161";
export const SAFARI_EXTENSION_APP_STORE_URL =
  `https://apps.apple.com/app/id${SAFARI_EXTENSION_APP_ID}`;
export const CHROME_EXTENSION_URL =
  "https://chromewebstore.google.com/detail/niippnpocnnlkdlmibpongjakhidfjhb?utm_source=item-share-cb";
export const DISCORD_BOT_URL =
  "https://discord.com/oauth2/authorize?client_id=1416353094970642464";
export const WEB_APP_URL = "https://app.saver-app.com";

/**
 * Body/UI typeface. Exposed as `--font-sans-family` and consumed through the
 * `--font-body` token in `global.css`.
 */
export const BODY_FONT = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-family",
});

/**
 * Display typeface used for headlines and other large type. Exposed as
 * `--font-display-family` and consumed through the `--font-display` token.
 */
export const DISPLAY_FONT = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-family",
});

/**
 * Heavy geometric grotesque used for marketing headlines, in the vein of
 * Jitter's display type: very bold, tight tracking, tight leading. Exposed as
 * `--font-heavy-family` and consumed through the `--font-heavy` token. Only the
 * landing page reaches for it; the rest of the site stays on `--font-display`.
 */
export const DISPLAY_HEAVY_FONT = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800", "900"],
  variable: "--font-heavy-family",
});

/**
 * Custom fonts for 'whimsical' and 'cursive' font styles.
 * Default system font is used for all other font styles.
 * See https://nextjs.org/docs/app/getting-started/fonts#google-fonts
 */
export const WHIMSICAL_FONT = Caveat({ subsets: ["latin"] });
export const CURSIVE_FONT = Dancing_Script({ subsets: ["latin"] });

export const MATERIAL_SYMBOLS = [
  "send",
  "ios_share",
  "sync",
  "group",
  "bookmark_add",
  "check_circle",
  "list",
  "repeat",
  "cloud_off",
  "workspaces",
  "star",
  "mail",
  "open_in_new",
  "open_in_full",
  "play_arrow",
  "pause",
  "lock",
  "target",
  "smartphone",
  "tablet_mac",
  "desktop_windows",
  "language",
  "public",
  "extension",
  "smart_toy",
  "menu",
  "close",
] as const;

// Warm neutral system with the Saver gold as the single accent hue.
export const COLORS: ColorScheme = {
  LIGHT: {
    "text-primary": "#17161A",
    "text-secondary": "rgba(23, 22, 26, 0.62)",
    "fill-0": "#FFFFFF",
    "fill-1": "#FFFFFF",
    "fill-2": "#F3F3F1",
    "fill-3": "#E7E4DD",
    "accent-brand": "#17161A",
    "accent-gold": "#9A6E10",
    "accent-orange": "#C2410C",
    "accent-green": "#15803D",
    "accent-red": "#DC2626",
    "accent-blue": "#0E91CE",
    "accent-indigo": "#4338CA",
    "accent-mint": "#0F766E",
    "accent-purple": "#7E22CE",
    "accent-pink": "#DB2777",
  },
  DARK: {
    "text-primary": "#FAFAF8",
    "text-secondary": "rgba(250, 250, 248, 0.60)",
    "fill-0": "#1C1A17",
    "fill-1": "#100F0D",
    "fill-2": "#171614",
    "fill-3": "#2D2B27",
    "accent-brand": "#FAFAF8",
    "accent-gold": "#EFC463",
    "accent-orange": "#FB923C",
    "accent-green": "#4ADE80",
    "accent-red": "#F87171",
    "accent-blue": "#5BC8F3",
    "accent-indigo": "#818CF8",
    "accent-mint": "#5EEAD4",
    "accent-purple": "#C084FC",
    "accent-pink": "#F472B6",
  },
} as const;

export const MAX_RELEASE_NOTES_PER_PAGE = 5;

export const IS_WAITLIST_ENABLED = false;
