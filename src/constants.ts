import { Caveat, Dancing_Script } from "next/font/google";
import { ColorScheme } from "./types/shared";

/**
 * "system" - follows the user's system appearance
 * "light" - forces your website to always use light theme
 * "dark" - forces your website to always use dark theme
 */
export const THEME: "system" | "light" | "dark" = "system";

/**
 * Your App Store App ID without the 'id' prefix.
 * You can find it in your App Store Connect.
 * Go to your app -> App Information -> Apple ID.
 *
 * Example: "6502667826"
 */
export const APP_ID = "6766563672";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`;
export const APP_STORE_DEEP_LINK =
  `itms-apps://itunes.apple.com/app/id${APP_ID}`;
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.saverapp.paket";
export const SAFARI_EXTENSION_APP_ID = "6771103161";
export const SAFARI_EXTENSION_APP_STORE_URL =
  `https://apps.apple.com/app/id${SAFARI_EXTENSION_APP_ID}`;
export const WEB_APP_URL = "https://app.saver-app.com";

/**
 * Custom fonts for 'whimsical' and 'cursive' font styles.
 * Default system font is used for all other font styles.
 * See https://nextjs.org/docs/app/getting-started/fonts#google-fonts
 */
export const WHIMSICAL_FONT = Caveat({ subsets: ["latin"] });
export const CURSIVE_FONT = Dancing_Script({ subsets: ["latin"] });

export const MATERIAL_SYMBOLS = [
  "send",
  "check_circle",
  "star",
  "mail",
  "open_in_new",
  "open_in_full",
  "play_arrow",
  "pause",
  "lock",
  "target",
  "smartphone",
  "language",
  "extension",
  "smart_toy",
  "menu",
  "close",
] as const;

// Neutral
export const COLORS: ColorScheme = {
  LIGHT: {
    "text-primary": "#000000",
    "text-secondary": "rgba(60, 60, 67, 0.60)",
    "fill-0": "#FFFFFF",
    "fill-1": "#F2F2F7",
    "fill-2": "#E5E5EA",
    "fill-3": "#D1D1D6",
    "accent-brand": "#000000",
    "accent-orange": "#FF8D28",
    "accent-green": "#34C759",
    "accent-red": "#FF3B30",
    "accent-blue": "#007AFF",
    "accent-indigo": "#5856D6",
    "accent-mint": "#00C7BE",
    "accent-purple": "#AF52DE",
    "accent-pink": "#FF2D55",
  },
  DARK: {
    "text-primary": "#FFFFFF",
    "text-secondary": "rgba(235, 235, 245, 0.60)",
    "fill-0": "#000000",
    "fill-1": "#121214",
    "fill-2": "#272729",
    "fill-3": "#3A3A3C",
    "accent-brand": "#FFFFFF",
    "accent-orange": "#FF9230",
    "accent-green": "#30D158",
    "accent-red": "#FF453A",
    "accent-blue": "#0A84FF",
    "accent-indigo": "#5E5CE6",
    "accent-mint": "#63E6E2",
    "accent-purple": "#BF5AF2",
    "accent-pink": "#FF375F",
  },
} as const;

export const MAX_RELEASE_NOTES_PER_PAGE = 5;

export const IS_WAITLIST_ENABLED = false;
