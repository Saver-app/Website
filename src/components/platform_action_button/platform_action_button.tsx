"use client";

import { useEffect, useState } from "react";

import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import {
  APP_STORE_DEEP_LINK,
  APP_STORE_URL,
  PLAY_STORE_URL,
} from "@/constants";

interface PlatformActionButtonProps {
  size?: "small" | "medium" | "large";
}

type MobilePlatform = "android" | "ios" | null;

interface ClientEnvironment {
  isInstagram: boolean;
  mobilePlatform: MobilePlatform;
}

const DEFAULT_CLIENT_ENVIRONMENT: ClientEnvironment = {
  isInstagram: false,
  mobilePlatform: null,
};

function detectClientEnvironment(): ClientEnvironment {
  const userAgent = navigator.userAgent;
  const isInstagram = /Instagram/i.test(userAgent);

  if (/android/i.test(userAgent)) {
    return { isInstagram, mobilePlatform: "android" };
  }

  const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent);
  const isIPadUsingDesktopMode =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;

  return {
    isInstagram,
    mobilePlatform:
      isIOSDevice || isIPadUsingDesktopMode ? "ios" : null,
  };
}

export function PlatformActionButton({
  size = "small",
}: PlatformActionButtonProps) {
  const [clientEnvironment, setClientEnvironment] =
    useState<ClientEnvironment>(DEFAULT_CLIENT_ENVIRONMENT);

  useEffect(() => {
    setClientEnvironment(detectClientEnvironment());
  }, []);

  if (clientEnvironment.mobilePlatform === "ios") {
    return (
      <DownloadActionButton
        href={
          clientEnvironment.isInstagram
            ? APP_STORE_DEEP_LINK
            : APP_STORE_URL
        }
        label="Download for iPhone"
        size={size}
        openInNewTab={!clientEnvironment.isInstagram}
      />
    );
  }

  if (clientEnvironment.mobilePlatform === "android") {
    return (
      <DownloadActionButton
        href={PLAY_STORE_URL}
        label="Download for Android"
        size={size}
        showAppleLogo={false}
      />
    );
  }

  return (
    <DownloadActionButton
      href="/download"
      label="Get Saver"
      size={size}
      showAppleLogo={false}
      openInNewTab={false}
    />
  );
}
