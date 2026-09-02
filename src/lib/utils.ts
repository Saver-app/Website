import type {
	ClientRuntimeTheme,
	FontStyle,
	ImageSrcsetEntry,
} from "../types/shared";
import { CURSIVE_FONT, WHIMSICAL_FONT } from "../constants";

export function findSrcForTheme(
	src: string,
	srcset: ImageSrcsetEntry[] | undefined,
	theme: ClientRuntimeTheme,
): string {
	const targetSrcsetEntry = srcset?.find((entry) => entry.theme === theme);

	if (targetSrcsetEntry === undefined) {
		return src;
	}

	return targetSrcsetEntry.src;
}

export function buildClassNameForFontStyle(
	fontStyle: FontStyle,
	extraClassName: Partial<Record<FontStyle, string>> = {
		sans: "",
		mono: "",
		rounded: "",
		whimsical: "",
		cursive: "",
	},
): string {
	switch (fontStyle) {
		case "sans":
			return `${extraClassName.sans}`;
		case "mono":
			return `monoFont ${extraClassName.mono}`;
		case "rounded":
			return `roundedFont ${extraClassName.rounded}`;
		case "whimsical":
			return `whimsicalFont ${WHIMSICAL_FONT.className} ${extraClassName.whimsical}`;
		case "cursive":
			return `cursiveFont ${CURSIVE_FONT.className} ${extraClassName.cursive}`;
		default:
			return "";
	}
}

const IMAGE_LOAD_RETRY_DELAYS = [200, 700] as const;

function loadImageOnce(src: string): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image();

		// Register handlers before assigning src. Safari can resolve memory-cached
		// images immediately, especially during a Next.js Fast Refresh.
		img.onload = () => resolve(img);
		img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
		img.src = src;
	});
}

export async function loadImage(src: string): Promise<HTMLImageElement> {
	let lastError: unknown;

	for (let attempt = 0; attempt <= IMAGE_LOAD_RETRY_DELAYS.length; attempt += 1) {
		try {
			return await loadImageOnce(src);
		} catch (error) {
			lastError = error;

			const retryDelay = IMAGE_LOAD_RETRY_DELAYS[attempt];
			if (retryDelay !== undefined) {
				await new Promise((resolve) => window.setTimeout(resolve, retryDelay));
			}
		}
	}

	throw lastError instanceof Error
		? lastError
		: new Error(`Failed to load image: ${src}`);
}

export function loadVideo(src: string): Promise<HTMLVideoElement> {
	return new Promise((resolve, reject) => {
		const video = document.createElement("video");

		video.crossOrigin = "anonymous";
		video.muted = true;
		video.loop = true;
		video.playsInline = true;
		video.preload = "auto";

		function cleanup() {
			video.removeEventListener("loadeddata", handleLoadedData);
			video.removeEventListener("error", handleError);
		}

		function handleLoadedData() {
			cleanup();
			resolve(video);
		}

		function handleError() {
			cleanup();
			reject(new Error(`Failed to load video: ${src}`));
		}

		video.addEventListener("loadeddata", handleLoadedData);
		video.addEventListener("error", handleError);
		video.src = src;
		video.load();
	});
}
