"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@/components/icon/icon";
import styles from "./navbar.module.css";

interface NavbarProps {
  icon: React.ReactNode;
  appName: string;
  links?: { label: string; href: string; external?: boolean }[];
  action: React.ReactNode;
}

export function Navbar({ icon, appName, links, action }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(width < 768px)");

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        setMobileMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <>
      <div className={styles.spacer}></div>
      <div className={styles.navbarContainer}>
        <nav className={styles.navbar}>
          <div className={styles.content}>
            <Link className={styles.appIdentity} href="/">
              <div className={styles.appIconContainer}>{icon}</div>

              <div className={styles.appName}>{appName}</div>
            </Link>

            <ul className={styles.navLinks}>
              {links?.map((link) => {
                const href = link.href.startsWith("#")
                  ? `/${link.href}`
                  : link.href;

                return (
                  <li key={link.href} className={styles.navLinkItem}>
                    {link.external ? (
                      <a href={href}>{link.label}</a>
                    ) : (
                      <Link href={href}>{link.label}</Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className={styles.action}>{action}</div>

            <button
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <Icon
                name={mobileMenuOpen ? "close" : "menu"}
                filled
                size="large"
              />
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileMenuLinks}>
              {links?.map((link) => {
                const href = link.href.startsWith("#")
                  ? `/${link.href}`
                  : link.href;

                return (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={href} onClick={closeMenu}>
                        {link.label}
                      </a>
                    ) : (
                      <Link href={href} onClick={closeMenu}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className={styles.mobileMenuAction} onClick={closeMenu}>
              {action}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
