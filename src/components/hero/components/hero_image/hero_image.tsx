"use client";

import { useBezelImageRenderer } from "@/hooks/useBezelImageRenderer";
import { DEVICE_BEZEL_CONFIGURATION_MAP } from "@/lib/device_bezel_configuration_map";
import type { Bezel, ImageSrcsetEntry } from "@/types/shared";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./hero_image.module.css";

interface HeroImageProps {
  src: string;
  srcset?: ImageSrcsetEntry[];
  alt: string;
  bezel: Bezel;
  loading?: "eager" | "lazy";
}

export function HeroImage({
  src,
  srcset,
  alt,
  bezel,
  loading = "eager",
}: HeroImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(loading === "eager");

  useEffect(() => {
    if (loading === "eager" || shouldRender) {
      return;
    }

    const container = containerRef.current;

    if (!container || !("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [loading, shouldRender]);

  useBezelImageRenderer({
    canvasRef,
    src,
    srcset,
    bezel: bezel,
    enabled: shouldRender,
  });

  const bezelConfig = DEVICE_BEZEL_CONFIGURATION_MAP[bezel];

  return (
    <div ref={containerRef} className={styles.heroImage}>
      <div
        className={styles.shadow}
        style={
          {
            ["--bottom-offset"]: `${bezelConfig.shadowBottomOffset}px`,
          } as React.CSSProperties
        }
      >
        <Image
          src="/app_view/iphone_shadow.png"
          alt=""
          width={592}
          height={68}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <canvas ref={canvasRef} className={styles.imageCanvas} aria-label={alt} />
    </div>
  );
}
