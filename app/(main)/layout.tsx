import { APP_ID, IS_WAITLIST_ENABLED, THEME, WEB_APP_URL } from "@/constants";
import type { Metadata, Viewport } from "next";

import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { EmailForm } from "@/components/email_form/email_form";
import { Hero } from "@/components/hero/hero";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import "@/global.css";
import { ThemeProvider } from "@/providers/theme_provider";
import { Section } from "@/components/section/section";
import { MultiColumnFooter } from "@/components/multi_column_footer/multi_column_footer";

export const metadata: Metadata = {
  /**
   * `title` and `description` are visible in search results.
   * Recommended length for title is max 60 characters.
   * Recommended length for description is max 160 characters.
   */
  title: "Saver: Tasks, Bookmarks, and Habits in One Place",
  description: "Saver brings bookmarks, todos, and habits into one simple, shared space. Create collaborative spaces, capture what matters as you find it, and stay seamlessly in sync across all your devices.",

  /**
   * Your website URL.
   */
  metadataBase: new URL("https://saver-app.com"),

  /**
   * Info inside `openGraph` and `twitter` is used to show rich previews
   * on social media when someone shares a link to your website.
   *
   * AppView comes with a tool to help you generate an Open Graph image,
   * run the dev server and go to `http://localhost:3000/open-graph-builder`.
   */
  openGraph: {
    title: "Saver: Tasks, Bookmarks, and Habits in One Place",
    description: "Saver brings bookmarks, todos, and habits into one simple, shared space. Create collaborative spaces, capture what matters as you find it, and stay seamlessly in sync across all your devices.",
    url: "https://saver-app.com",
    images: [
        {
          url: "/ogpreview20260718.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saver: Tasks, Bookmarks, and Habits in One Place",
    description: "Saver brings bookmarks, todos, and habits into one simple, shared space. Create collaborative spaces, capture what matters as you find it, and stay seamlessly in sync across all your devices.",
    images: ["/ogpreview20260718.png"],
  },
};

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
    <html lang="en" data-theme={THEME}>
      <head>
        <title>Saver App</title>
        {/* This makes Safari on iOS show the App Store download banner */}
        {!IS_WAITLIST_ENABLED && (
          <meta name="apple-itunes-app" content={`app-id=${APP_ID}`} />
        )}

        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />

        <ThemeStyle />
        <MaterialSymbolsLink />
      </head>
      <body>
        <ThemeProvider>
          {!IS_WAITLIST_ENABLED && (
            <>
              <Navbar
                icon={<AppIcon src="/app_view/saver_app_icon_dark.png" />}
                appName="Saver"
                links={[
                  { label: "Download", href: "/download" },
                  { label: "Features", href: "#features" },
                  { label: "Pricing", href: "#pricing" },
                ]}
                action={<DownloadActionButton label="Open Web App" href={WEB_APP_URL} showAppleLogo={false} />}
                actionHref={WEB_APP_URL}
              />

              {children}

              {/*
                There is also a <MultiColumnFooter> component available
                in case you need more space for links.
              */}
              <MultiColumnFooter
                appIcon={<AppIcon src="/app_view/saver_app_icon_white.png" size={48} mask={true} />}
                footnoteLeading={<span>© 2026 Paul Gerling. All rights reserved.</span>}
                footnoteTrailing={
                  <span>
                    <a href="/privacy" style={{ textDecoration: "none", color: "inherit" }}>Privacy</a>
                    {" · "}
                    <a href="/terms" style={{ textDecoration: "none", color: "inherit" }}>Terms</a>
                    {" · "}
                    <a href="/return-policy" style={{ textDecoration: "none", color: "inherit" }}>Return Policy</a>
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
                    { label: "Features", href: "#features" },
                    { label: "Pricing", href: "#pricing" },
                    { label: "Release Notes", href: "/release-notes" },
                  ]}
                />
                <MultiColumnFooter.Stack>
                  <MultiColumnFooter.Column
                    title="Support"
                    links={[
                      { label: "Contact Us", href: "/support" },
                    ]}
                  />
                  <MultiColumnFooter.Column
                    title="Community"
                    links={[
                      { label: "Discord", href: "https://discord.gg/f7BGpQFSeF", external: true },
                    ]}
                  />
                </MultiColumnFooter.Stack>
                <MultiColumnFooter.Column
                  title="Legal"
                  links={[
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms of Service", href: "/terms" },
                    { label: "Return & Refund Policy", href: "/return-policy" },
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
                subtitle="Save all you need in one place and access it from any device, anytime."
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
