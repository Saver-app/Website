import type { CSSProperties } from "react";

import styles from "./section.module.css";

interface SectionProps {
  title?: string;
  children?: React.ReactNode;
  navigationAnchor?: string;
  paddingTop?: number;
  paddingBottom?: number;
}

type SectionStyle = CSSProperties & {
  "--section-padding-top"?: string;
  "--section-padding-bottom"?: string;
};

export function Section({
  title,
  children,
  navigationAnchor,
  paddingTop,
  paddingBottom,
}: SectionProps) {
  const style: SectionStyle = {
    "--section-padding-top":
      paddingTop === undefined ? undefined : `${paddingTop}px`,
    "--section-padding-bottom":
      paddingBottom === undefined ? undefined : `${paddingBottom}px`,
  };

  return (
    <section className={styles.section} id={navigationAnchor} style={style}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}
