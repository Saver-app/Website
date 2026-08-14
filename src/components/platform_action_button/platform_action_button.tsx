"use client";

import { useEffect, useState } from "react";

import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { APP_STORE_URL, WEB_APP_URL } from "@/constants";

interface PlatformActionButtonProps {
  size?: "small" | "medium" | "large";
}

type MobilePlatform = "android" | "ios" | null;

function detectMobilePlatform(): MobilePlatform {
  const userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return "android";
  }

  const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent);
  const isIPadUsingDesktopMode =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;

  return isIOSDevice || isIPadUsingDesktopMode ? "ios" : null;
}

export function PlatformActionButton({
  size = "small",
}: PlatformActionButtonProps) {
  const [mobilePlatform, setMobilePlatform] =
    useState<MobilePlatform>(null);

  useEffect(() => {
    setMobilePlatform(detectMobilePlatform());
  }, []);

  if (mobilePlatform === "ios") {
    return (
      <DownloadActionButton
        href={APP_STORE_URL}
        label="Download for iPhone"
        size={size}
      />
    );
  }

  if (mobilePlatform === "android") {
    return (
      <DownloadActionButton
        href="/download#mobile"
        label="Download for Android"
        size={size}
        showAppleLogo={false}
        openInNewTab={false}
      />
    );
  }

  return (
    <DownloadActionButton
      href={WEB_APP_URL}
      label="Open Web App"
      size={size}
      showAppleLogo={false}
    />
  );
}
