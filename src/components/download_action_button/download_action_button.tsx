import { APP_STORE_URL } from "@/constants";
import AppleLogo from "@/public/app_view/apple_logo.svg";
import styles from "./download_action_button.module.css";

interface DownloadActionButtonProps {
  href?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  showAppleLogo?: boolean;
  variant?: "primary" | "secondary";
  openInNewTab?: boolean;
}

export function DownloadActionButton({
  href = APP_STORE_URL,
  label = "Download",
  size = "small",
  showAppleLogo = true,
  variant = "primary",
  openInNewTab = true,
}: DownloadActionButtonProps) {
  let appleLogoSize;

  switch (size) {
    case "small":
      appleLogoSize = 18;
      break;
    case "medium":
      appleLogoSize = 20;
      break;
    case "large":
      appleLogoSize = 24;
      break;
    default:
      appleLogoSize = 18;
  }
  return (
    <a
      href={href}
      className={`${styles.downloadActionButton} ${styles[size]} ${styles[variant]}`}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noreferrer" : undefined}
    >
      <div className={styles.label}>
        {showAppleLogo && (
          <div className={styles.appleLogo}>
            <AppleLogo width={appleLogoSize} height={appleLogoSize} />
          </div>
        )}
        
        <div className={styles.downloadLabel}>{label}</div>
      </div>
    </a>
  );
}
