import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import styles from "./confetti_hero.module.css";

interface ConfettiHeroProps {
  title: ReactNode;
  subtitle: string;
  action?: ReactNode;
  media?: ReactNode;
}

/*
  `mobile` is an alternate placement for the stacked layout, where the copy
  runs nearly edge to edge and the only open ground is the strip above the
  title and the two channels beside the phone. A piece without one is desktop
  only. `zone: "gutter"` marks pieces that sit in the desktop column gap.
*/
interface Decoration {
  src: string;
  left: string;
  top: string;
  width: number;
  rotation: number;
  zone?: "gutter";
  mobile?: {
    left: string;
    top: string;
    width: number;
  };
}

const DECORATIONS: readonly Decoration[] = [
  {
    src: "/assets/confetti/yellow_bookmark.svg",
    left: "58.8%",
    top: "6.9%",
    width: 20,
    rotation: 52,
    zone: "gutter",
  },
  {
    src: "/assets/confetti/yellow_bookmark.svg",
    left: "15.0%",
    top: "8.3%",
    width: 18,
    rotation: -5,
  },
  {
    src: "/assets/confetti/orange_plus.svg",
    left: "46.4%",
    top: "9.3%",
    width: 22,
    rotation: 10,
  },
  {
    src: "/assets/confetti/blue_plus.svg",
    left: "33.7%",
    top: "11.2%",
    width: 33,
    rotation: 46,
    mobile: { left: "8.5%", top: "80.5%", width: 22 },
  },
  {
    src: "/assets/confetti/yellow_star.svg",
    left: "27.5%",
    top: "11.4%",
    width: 28,
    rotation: -43,
  },
  {
    src: "/assets/confetti/blue_plus.svg",
    left: "93.8%",
    top: "14.5%",
    width: 37,
    rotation: 3,
    mobile: { left: "87.5%", top: "12.2%", width: 18 },
  },
  {
    src: "/assets/confetti/red_bookmark.svg",
    left: "9.7%",
    top: "15.1%",
    width: 31,
    rotation: 52,
    mobile: { left: "8%", top: "58.5%", width: 20 },
  },
  {
    src: "/assets/confetti/yellow_plus.svg",
    left: "17.4%",
    top: "16.0%",
    width: 22,
    rotation: -25,
    mobile: { left: "85.5%", top: "64.5%", width: 18 },
  },
  {
    src: "/assets/confetti/orange_bookmark.svg",
    left: "58.3%",
    top: "17.3%",
    width: 25,
    rotation: 25,
    zone: "gutter",
  },
  {
    src: "/assets/confetti/green_plus.svg",
    left: "60.0%",
    top: "30.8%",
    width: 22,
    rotation: 17,
    zone: "gutter",
    mobile: { left: "90.6%", top: "3.6%", width: 20 },
  },
  {
    src: "/assets/confetti/green_star.svg",
    left: "93.7%",
    top: "43.5%",
    width: 22,
    rotation: -13,
  },
  {
    src: "/assets/confetti/green_star.svg",
    left: "60.6%",
    top: "47.3%",
    width: 20,
    rotation: 37,
    zone: "gutter",
  },
  {
    src: "/assets/confetti/blue_star.svg",
    left: "94.0%",
    top: "57.4%",
    width: 18,
    rotation: -43,
    mobile: { left: "92.5%", top: "55.5%", width: 16 },
  },
  {
    src: "/assets/confetti/green_plus.svg",
    left: "60.0%",
    top: "68.3%",
    width: 28,
    rotation: 48,
    zone: "gutter",
  },
  {
    src: "/assets/confetti/green_bookmark.svg",
    left: "57.7%",
    top: "80.3%",
    width: 21,
    rotation: 11,
    zone: "gutter",
    mobile: { left: "14.5%", top: "66.5%", width: 18 },
  },
  {
    src: "/assets/confetti/yellow_star.svg",
    left: "93.9%",
    top: "81.1%",
    width: 26,
    rotation: -38,
    mobile: { left: "86%", top: "83%", width: 22 },
  },
  {
    src: "/assets/confetti/orange_bookmark.svg",
    left: "5.5%",
    top: "91.0%",
    width: 20,
    rotation: -9,
  },
  {
    src: "/assets/confetti/blue_star.svg",
    left: "11.6%",
    top: "91.9%",
    width: 31,
    rotation: -21,
  },
  {
    src: "/assets/confetti/red_bookmark.svg",
    left: "34.5%",
    top: "92.0%",
    width: 27,
    rotation: -44,
    mobile: { left: "92%", top: "71.5%", width: 18 },
  },
  {
    src: "/assets/confetti/green_bookmark.svg",
    left: "22.3%",
    top: "92.8%",
    width: 22,
    rotation: 48,
    mobile: { left: "12.5%", top: "93.8%", width: 20 },
  },
  {
    src: "/assets/confetti/yellow_plus.svg",
    left: "28.6%",
    top: "93.0%",
    width: 20,
    rotation: -14,
  },
  {
    src: "/assets/confetti/orange_plus.svg",
    left: "57.3%",
    top: "93.1%",
    width: 20,
    rotation: -31,
    zone: "gutter",
    mobile: { left: "92%", top: "94.6%", width: 19 },
  },
] as const;

export function ConfettiHero({
  title,
  subtitle,
  action,
  media,
}: ConfettiHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.panel}>
        <div className={styles.decorations} aria-hidden="true">
          {DECORATIONS.map((decoration, index) => {
            const pieceStyle = {
              "--piece-left": decoration.left,
              "--piece-top": decoration.top,
              "--piece-width": `${decoration.width}px`,
              "--piece-rotation": `${decoration.rotation}deg`,
              ...(decoration.mobile && {
                "--piece-left-mobile": decoration.mobile.left,
                "--piece-top-mobile": decoration.mobile.top,
                "--piece-width-mobile": `${decoration.mobile.width}px`,
              }),
            } as CSSProperties;

            return (
              <span
                className={styles.piece}
                data-hero-decoration
                data-zone={decoration.zone}
                data-placement={decoration.mobile ? "both" : "desktop"}
                key={`${decoration.src}-${index}`}
                style={pieceStyle}
              >
                <Image src={decoration.src} alt="" width={110} height={110} />
              </span>
            );
          })}
        </div>

        <div
          className={`${styles.layout} ${media ? styles.layoutWithMedia : ""}`}
        >
          <div className={styles.content}>
            <h1 id="home-hero-title">{title}</h1>
            <p>{subtitle}</p>
            {action && <div className={styles.action}>{action}</div>}
          </div>

          {media && <div className={styles.media}>{media}</div>}
        </div>
      </div>
    </section>
  );
}
