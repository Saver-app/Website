import {
  BODY_FONT,
  DISPLAY_FONT,
  DISPLAY_HEAVY_FONT,
  IS_WAITLIST_ENABLED,
  SITE_URL,
  THEME,
  WEB_APP_URL,
} from "@/constants";
import type { Metadata, Viewport } from "next";

import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { EmailForm } from "@/components/email_form/email_form";
import { Hero } from "@/components/hero/hero";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { PlatformActionButton } from "@/components/platform_action_button/platform_action_button";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import "@/global.css";
import { ThemeProvider } from "@/providers/theme_provider";
import { Section } from "@/components/section/section";
import { MultiColumnFooter } from "@/components/multi_column_footer/multi_column_footer";
import { createPageMetadata } from "@/lib/site_metadata";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...createPageMetadata({
    title: "Saver: Tasks, Bookmarks, and Habits in One Place",
    description:
      "Keep bookmarks, tasks, and habits together in one space for a trip, a class, or a project, and send things in from your share sheet, browser, Discord, or reMarkable. Free offline, sync when you need it.",
    path: "/",
  }),
} satisfies Metadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme={THEME}
      className={`${BODY_FONT.variable} ${DISPLAY_FONT.variable} ${DISPLAY_HEAVY_FONT.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />

        <ThemeStyle />
        <MaterialSymbolsLink />
      </head>
      <body>
        <ThemeProvider>
          {!IS_WAITLIST_ENABLED && (
            <>
              <Navbar
                icon={
                  <AppIcon
                    src="/app_view/saver_app_icon_dark_128.webp"
                    size={36}
                  />
                }
                appName="Saver"
                links={[
                  { label: "Download", href: "/download" },
                  { label: "Capture", href: "#capture" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Docs", href: "https://docs.saver-app.com", external: true },
                ]}
                action={<PlatformActionButton />}
                mobileAction={
                  <DownloadActionButton
                    href={WEB_APP_URL}
                    label="Open web app"
                    showAppleLogo={false}
                    variant="secondary"
                  />
                }
              />

              {children}

              {/*
                There is also a <MultiColumnFooter> component available
                in case you need more space for links.
              */}
              <MultiColumnFooter
                appIcon={
                  <AppIcon
                    src="/app_view/saver_app_icon_dark_128.webp"
                    size={44}
                  />
                }
                tagline={
                  <>
                    Keep bookmarks, tasks, and habits in one space, and save to
                    it from wherever you are. Free and offline on mobile, then
                    sync when you need to.
                  </>
                }
                footnoteLeading={<span>© 2026 Paul Gerling. All rights reserved.</span>}
                footnoteTrailing={
                  <span>
                    <a href="/privacy" style={{ textDecoration: "none", color: "inherit" }}>Privacy</a>
                    {" · "}
                    <a href="/terms" style={{ textDecoration: "none", color: "inherit" }}>Terms</a>
                    {" · "}
                    <a href="/return-policy" style={{ textDecoration: "none", color: "inherit" }}>Refunds & Withdrawal</a>
                    {" · "}
                    <a href="/impressum" style={{ textDecoration: "none", color: "inherit" }}>Legal Notice</a>
                    {" · "}
                    <a href="/credits" style={{ textDecoration: "none", color: "inherit" }}>Credits</a>
                  </span>
                }
              >
                <MultiColumnFooter.Column
                  title="Saver"
                  links={[
                    { label: "Web App", href: WEB_APP_URL, external: true },
                    { label: "Mobile Apps", href: "/download#mobile" },
                    { label: "Browser Extensions", href: "/download#extensions" },
                    { label: "Capture", href: "/#capture" },
                    { label: "Pricing", href: "/#pricing" },
                    { label: "Release Notes", href: "/release-notes" },
                  ]}
                />
                <MultiColumnFooter.Stack>
                  <MultiColumnFooter.Column
                    title="Support"
                    links={[
                      { label: "Contact Us", href: "/support" },
                      { label: "Feedback & Roadmap", href: "https://saverapp.canny.io", external: true },
                    ]}
                  />
                  <MultiColumnFooter.Column
                    title="Community"
                    links={[
                      { label: "Discord", href: "https://discord.com/invite/f7BGpQFSeF", external: true },
                      { label: "Patreon", href: "https://www.patreon.com/cw/saverapp", external: true },
                      { label: "Reddit", href: "https://www.reddit.com/r/SaverApp/", external: true },
                    ]}
                  />
                </MultiColumnFooter.Stack>
                <MultiColumnFooter.Column
                  title="Legal"
                  links={[
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms of Service", href: "/terms" },
                    { label: "Refunds & Withdrawal", href: "/return-policy" },
                    { label: "Personal Data Request", href: "/data-request" },
                    { label: "Legal Notice", href: "/impressum" },
                  ]}
                />
                <MultiColumnFooter.Column
                  title="Follow Us"
                  links={[
                    { label: "GitHub", href: "https://github.com/Saver-app", external: true },
                    { label: "YouTube", href: "https://www.youtube.com/@saverapp", external: true },
                    { label: "Instagram", href: "https://www.instagram.com/get.saver/", external: true },
                    { label: "Twitter", href: "https://x.com/SaverAppX", external: true },
                  ]}
                />
              </MultiColumnFooter>
            </>
          )}

          {IS_WAITLIST_ENABLED && (
            <Section paddingTop={60}>
              <Hero
                title="Saver"
                subtitle="Keep your bookmarks, tasks, and habits together wherever you use Saver."
                media={
                  <Hero.Image
                    src="/app_view/screenshot_placeholder.png"
                    alt=""
                    bezel="iPhone 17 Black"
                  />
                }
                action={
                  <>
                    <EmailForm
                      providerConfig={{
                        provider: "loops",
                        config: {
                          formId: "your-loops-form-id",
                        },
                      }}
                    />
                    {/*
                      You can also use a simple button to redirect users
                      to a custom page where you collect emails
                    */}
                    {/* <GetNotifiedActionButton href="your-email-form-link" /> */}
                  </>
                }
              />
            </Section>
          )}
        </ThemeProvider>

        {/* <PlausibleAnalytics domain="your-app-domain.com" /> */}
        {/* <TelemetryDeckAnalytics appID="your-telemetrydeck-app-id" clientUser="anonymous" /> */}
        {/* <VercelAnalytics /> */}
      </body>
    </html>
  );
}
