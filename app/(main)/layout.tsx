import { APP_ID, IS_WAITLIST_ENABLED, THEME } from "@/constants";
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
  title: "Saver App",
  description: "Saver is an To Do, Habit and Bookmarks app.",

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
    title: "Saver App",
    description: "Saver App description",
    url: "https://saver-app.com",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 720,
        alt: "",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saver App",
    description: "Saver App description",
    images: ["/og-preview.png"],
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
                  { label: "Download", href: "https://twitter.com/yourprofile", external: true },
                  { label: "Features", href: "#features" },
                  // Uncomment the line below once you're ready to start using Release Notes
                  // { label: "Release Notes", href: "/release-notes" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Web App", href: "https://saver-app.com/app", external: true },
                ]}
                action={<DownloadActionButton />}
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
                    <a href="/impressum" style={{ textDecoration: "none", color: "inherit" }}>Legal Notice</a>
                  </span>
                }
              >
                <MultiColumnFooter.Column
                  title="Product"
                  links={[
                    { label: "Features", href: "#features" },
                    { label: "Pricing", href: "#pricing" },
                  ]}
                />
                <MultiColumnFooter.Column
                  title="Company"
                  links={[
                    { label: "Support", href: "/support", external: true },
                    { label: "Contact", href: "/contact", external: true },
                  ]}
                />
                <MultiColumnFooter.Column
                  title="Follow Us"
                  links={[
                    { label: "Twitter", href: "https://twitter.com/yourprofile", external: true },
                    { label: "LinkedIn", href: "https://linkedin.com/company/yourcompany", external: true },
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
