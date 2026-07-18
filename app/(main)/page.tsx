import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import styles from "./page.module.css";

const APP_URL = "https://app.saver-app.com";
const SCREENSHOTS = {
  tasks:
    "/assets/Simulator Screenshot - iPhone 17 Pro - 2026-07-16 at 14.58.01.png",
  bookmarks:
    "/assets/Simulator Screenshot - iPhone 17 Pro - 2026-07-16 at 14.58.16.png",
  habits:
    "/assets/Simulator Screenshot - iPhone 17 Pro - 2026-07-16 at 14.58.22.png",
  spaces:
    "/assets/Simulator Screenshot - iPhone 17 Pro - 2026-07-16 at 15.05.16.png",
} as const;

interface Plan {
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  billing: string;
  features: readonly string[];
  action: string;
  featured?: boolean;
}

const plans: readonly Plan[] = [
  {
    name: "Free",
    description: "For unlimited local use on your mobile device.",
    price: "€0",
    billing: "No account or subscription required",
    features: [
      "Unlimited offline spaces",
      "Unlimited local tasks and bookmarks",
      "Unlimited local habits",
      "Works without an internet connection",
    ],
    action: "Start offline",
  },
  {
    name: "Plus",
    description: "For personal productivity across all your devices.",
    price: "€3.99",
    priceSuffix: "/ month",
    billing: "or €39.99 billed yearly",
    features: [
      "Sync across supported devices",
      "6 spaces",
      "750 tasks and 300 bookmarks",
      "15 active habits",
      "5 collaborators across all spaces",
    ],
    action: "Choose Plus",
    featured: true,
  },
  {
    name: "Pro",
    description: "For shared spaces, teams, and Discord communities.",
    price: "€5.99",
    priceSuffix: "/ month",
    billing: "or €59.99 billed yearly",
    features: [
      "Sync across supported devices",
      "20 spaces",
      "3,000 tasks and 1,500 bookmarks",
      "50 active habits",
      "10 collaborators across all spaces",
      "Custom Discord bot branding",
    ],
    action: "Choose Pro",
  },
];

export default function Page() {
  return (
    <>
      <Section paddingTop={100}>
        <Hero
          title="Keep it all together."
          subtitle="Tasks, bookmarks, habits, and shared spaces in one app, locally on mobile or synced when you need it."
          media={
            <Hero.Image
              src={SCREENSHOTS.tasks}
              bezel="iPhone 17 Black"
              alt="Saver showing organized lists and tasks"
            />
          }
          action={
            <DownloadActionButton
              href={APP_URL}
              label="Open Saver"
              size="medium"
              showAppleLogo={false}
            />
          }
        />
      </Section>

      <Section title="See what Saver keeps together" navigationAnchor="features">
        <CardGrid rowHeight={520}>
          <CardGrid.StackedCard
            maxWidth="half"
            title="Bookmarks worth finding again"
            description="Save useful links in folders and keep them close to the work they belong to."
            media={
              <CardGrid.StackedCard.Image
                src={SCREENSHOTS.bookmarks}
                alt="Saver showing bookmark folders and saved links"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.18 }}
              />
            }
            textAlignment="leading"
          />

          <CardGrid.StackedCard
            maxWidth="half"
            title="Habits you can actually follow"
            description="See your routine, progress, and streaks without turning it into a spreadsheet."
            media={
              <CardGrid.StackedCard.Image
                src={SCREENSHOTS.habits}
                alt="Saver showing weekly habit progress"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.18 }}
              />
            }
            textAlignment="leading"
          />

          <CardGrid.StackedCard
            maxWidth="full"
            title="Unlimited spaces, even offline"
            description="Keep Personal, Work, Travel Plans, and Home on your phone without an account or subscription."
            media={
              <CardGrid.StackedCard.Image
                src={SCREENSHOTS.spaces}
                alt="Saver showing four offline spaces"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.12 }}
              />
            }
            layoutDirection="reverse"
            textAlignment="leading"
          />
        </CardGrid>
      </Section>

      <Section>
        <div className={styles.appInformation}>
          <div className={styles.appInformationCopy}>
            <p className={styles.eyebrow}>Offline first</p>
            <h2>Your mobile app works without a subscription.</h2>
            <p>
              Create unlimited spaces, tasks, bookmarks, and habits locally on
              your mobile device, even without an internet connection. You only
              need a subscription when you want to sync your data.
            </p>
          </div>

          <dl className={styles.appFacts}>
            <div>
              <dt>Unlimited locally</dt>
              <dd>Your offline mobile content is not restricted by plan limits.</dd>
            </div>
            <div>
              <dt>No account needed</dt>
              <dd>Start using the mobile app locally without signing in.</dd>
            </div>
            <div>
              <dt>Sync when you want</dt>
              <dd>Subscribe when you are ready to use the same data elsewhere.</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section title="Saver beyond the mobile app">
        <CardGrid rowHeight={280}>
          <CardGrid.IconCard
            maxWidth="third"
            iconName="smartphone"
            title="Mobile, even offline"
            description="Use Saver locally with no account, no connection, and no item limits."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="extension"
            title="Browser extensions"
            description="Save from Safari or Chrome without leaving the page. Currently in development and not public yet."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="smart_toy"
            title="Discord bot"
            description="Connect Saver with Discord and bring saved tasks and bookmarks into your community workflow."
          />
        </CardGrid>
      </Section>

      <Section
        title="Use it free. Subscribe when you want to sync."
        navigationAnchor="pricing"
      >
        <div className={styles.pricing}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.plan} ${plan.featured ? styles.featuredPlan : ""}`}
            >
              <div className={styles.planName}>
                <h3>{plan.name}</h3>
                {plan.featured && <span>Popular</span>}
              </div>

              <p className={styles.planDescription}>{plan.description}</p>

              <div className={styles.planPrice}>
                <p>
                  <strong>{plan.price}</strong>
                  {plan.priceSuffix && <span>{plan.priceSuffix}</span>}
                </p>
                <small>{plan.billing}</small>
              </div>

              <div className={styles.planDetails}>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <a
                className={styles.planAction}
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
              >
                {plan.action}
              </a>
            </article>
          ))}
        </div>

        <p className={styles.billingNote}>
          <strong>Offline mobile use stays free and unlimited.</strong> A
          subscription is only required when you want to sync your data, and the
          listed limits apply to synced content. Plus and Pro renew automatically
          until cancelled. Monthly plans are billed monthly and yearly plans
          yearly. You can cancel at any time and keep access through the current
          paid term. Applicable taxes and the final localized total are shown at
          checkout. Eligible new users may see a seven day free trial at checkout.
        </p>
      </Section>

      <Section paddingTop={60} paddingBottom={160}>
        <div className={styles.closingCallout}>
          <h2>Start with the next thing you want to keep.</h2>
          <p>Use Saver offline for free, then subscribe whenever you want to sync.</p>
          <DownloadActionButton
            href={APP_URL}
            label="Open Saver"
            size="medium"
            showAppleLogo={false}
          />
        </div>
      </Section>
    </>
  );
}
