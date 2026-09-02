import type { CSSProperties } from "react";

import styles from "./section.module.css";

interface SectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  navigationAnchor?: string;
  paddingTop?: number;
  paddingBottom?: number;
  /** Use 1 when the section header doubles as the page title. */
  headingLevel?: 1 | 2;
  /** Editorial headers place the label beside a left-aligned block of copy. */
  headerLayout?: "centered" | "editorial";
}

type SectionStyle = CSSProperties & {
  "--section-padding-top"?: string;
  "--section-padding-bottom"?: string;
};

export function Section({
  title,
  subtitle,
  children,
  navigationAnchor,
  paddingTop,
  paddingBottom,
  headingLevel = 2,
  headerLayout = "centered",
}: SectionProps) {
  const style: SectionStyle = {
    "--section-padding-top":
      paddingTop === undefined ? undefined : `${paddingTop}px`,
    "--section-padding-bottom":
      paddingBottom === undefined ? undefined : `${paddingBottom}px`,
  };

  const hasHeader = Boolean(title || subtitle);
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section className={styles.section} id={navigationAnchor} style={style}>
      {hasHeader && (
        <header className={`${styles.header} ${styles[headerLayout]}`}>
          <div className={styles.headerCopy}>
            {title && <Heading className={styles.title}>{title}</Heading>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </header>
      )}
      {children}
    </section>
  );
}
