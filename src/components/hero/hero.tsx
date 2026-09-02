import { buildClassNameForFontStyle } from "@/lib/utils";
import type { FontStyle } from "@/types/shared";
import { HeroImage } from "./components/hero_image/hero_image";
import { HeroVideo } from "./components/hero_video/hero_video";
import styles from "./hero.module.css";

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  titleFontStyle?: FontStyle;
  badges?: React.ReactNode;
  media: React.ReactNode;
  action?: React.ReactNode;
  /**
   * "split" places the copy next to the media inside the page grid.
   * "showcase" is a full-bleed, centre-aligned panel with the media below the
   * copy and cropped by the panel edge.
   */
  variant?: "split" | "showcase";
}

export function Hero({
  title,
  subtitle,
  titleFontStyle = "sans",
  badges,
  media,
  action,
  variant = "split",
}: HeroProps) {
  const titleFontStyleClass = buildClassNameForFontStyle(titleFontStyle, {
    whimsical: styles.whimsical,
    cursive: styles.cursive,
  });

  if (variant === "showcase") {
    return (
      <div className={styles.showcase}>
        <div className={styles.showcasePanel}>
          <div className={styles.showcaseContent}>
            {badges && <div className={styles.badges}>{badges}</div>}

            <h1 className={`${styles.showcaseTitle} ${titleFontStyleClass}`}>
              {title}
            </h1>
            <p className={styles.showcaseSubtitle}>{subtitle}</p>

            {action && <div className={styles.showcaseAction}>{action}</div>}
          </div>

          <div className={styles.showcaseMedia}>{media}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        {badges && <div className={styles.badges}>{badges}</div>}

        <h1 className={`${styles.title} ${titleFontStyleClass}`}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        {action && <div className={styles.action}>{action}</div>}
      </div>
      <div className={styles.media}>{media}</div>
    </div>
  );
}

Hero.Image = HeroImage;
Hero.Video = HeroVideo;
