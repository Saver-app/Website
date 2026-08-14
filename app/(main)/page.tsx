import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { PlatformActionButton } from "@/components/platform_action_button/platform_action_button";
import { Section } from "@/components/section/section";
import { WEB_APP_URL } from "@/constants";
import styles from "./page.module.css";

const SCREENSHOTS = {
  tasks: "/assets/saver_tasks.png",
  bookmarks: "/assets/saver_bookmarks.png",
  habits: "/assets/saver_habits.png",
  spaces: "/assets/saver_spaces.png",
} as const;

interface Plan {
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  billing: string;
  features: readonly string[];
  action: string;
  href: string;
  featured?: boolean;
}

const plans: readonly Plan[] = [
  {
    name: "Free",
    description: "For unlimited offline use in the mobile apps.",
    price: "€0",
    billing: "No account or subscription required",
    features: [
      "Unlimited offline spaces",
      "Unlimited local tasks and bookmarks",
      "Unlimited local habits",
      "Works without an internet connection",
    ],
    action: "Download Saver",
    href: "/download",
  },
  {
    name: "Plus",
    description: "For personal productivity across mobile and the web.",
    price: "€3.99",
    priceSuffix: "/ month",
    billing: "or €39.99 billed yearly",
    features: [
      "Sync between the mobile and web apps",
      "6 spaces",
      "750 tasks and 300 bookmarks",
      "15 active habits",
      "5 collaborators across all spaces",
    ],
    action: "Choose Plus",
    href: WEB_APP_URL,
    featured: true,
  },
  {
    name: "Pro",
    description: "For shared spaces, teams, and Discord communities.",
    price: "€5.99",
    priceSuffix: "/ month",
    billing: "or €59.99 billed yearly",
    features: [
      "Sync between the mobile and web apps",
      "20 spaces",
      "3,000 tasks and 1,500 bookmarks",
      "50 active habits",
      "10 collaborators across all spaces",
      "Custom Discord bot branding",
    ],
    action: "Choose Pro",
    href: WEB_APP_URL,
  },
];

export default function Page() {
  return (
    <>
      <Section paddingTop={100}>
        <Hero
          title={
            <>
              Tasks, bookmarks, and habits.
              <br />
              {"All\u00A0together."}
            </>
          }
          subtitle="Organize them in spaces, collaborate, and stay in sync everywhere."
          media={
            <Hero.Image
              src={SCREENSHOTS.tasks}
              bezel="iPhone 17 Pro Silver"
              alt="Saver showing organized lists and tasks"
            />
          }
          action={
            <>
              <div className={styles.heroActions}>
                <PlatformActionButton size="medium" />
                <DownloadActionButton
                  href="#platforms"
                  label="Explore All Platforms"
                  size="medium"
                  showAppleLogo={false}
                  variant="secondary"
                  openInNewTab={false}
                />
              </div>
              <p className={styles.platformNote}>
                Free offline · no account needed
              </p>
            </>
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
                bezel="iPhone 17 Pro Silver"
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
                bezel="iPhone 17 Pro Silver"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.18 }}
              />
            }
            textAlignment="leading"
          />

          <CardGrid.StackedCard
            maxWidth="full"
            title="Everything has its place"
            description="Group related tasks, bookmarks, and habits into custom spaces. Create unlimited spaces locally on mobile, then sync the ones you need across Saver."
            media={
              <CardGrid.StackedCard.Image
                src={SCREENSHOTS.spaces}
                alt="Saver showing four offline spaces"
                bezel="iPhone 17 Pro Silver"
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
            <h2>Take Saver with you, even offline.</h2>
            <p>
              Create unlimited spaces, tasks, bookmarks, and habits locally on
              your iPhone or Android device, even without an internet
              connection. You only need a subscription when you want to sync
              your data.
            </p>
          </div>

          <dl className={styles.appFacts}>
            <div>
              <dt>Unlimited locally</dt>
              <dd>
                Your offline mobile content is not restricted by plan limits.
              </dd>
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

      <Section title="Choose how you use Saver" navigationAnchor="platforms">
        <CardGrid rowHeight={280} mobileRowHeight={190}>
          <CardGrid.IconCard
            maxWidth="half"
            iconName="smartphone"
            title="iPhone & Android apps"
            description="Get Saver from the App Store or Google Play and use it locally with no account, connection, or item limits."
          />

          <CardGrid.IconCard
            maxWidth="half"
            iconName="language"
            title="Web app"
            description="Open Saver in your browser on a computer or phone. Nothing needs to be installed."
          />

          <CardGrid.IconCard
            maxWidth="half"
            iconName="extension"
            title="Safari & Chrome extensions"
            description="Save bookmarks from Safari or Chrome without leaving the page you are viewing."
          />

          <CardGrid.IconCard
            maxWidth="half"
            iconName="smart_toy"
            title="Discord bot"
            description="Create, find, and share Saver tasks and bookmarks without leaving your Discord server."
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
                href={plan.href}
                target={plan.href.startsWith("http") ? "_blank" : undefined}
                rel={plan.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {plan.action}
              </a>
            </article>
          ))}
        </div>

        <p className={styles.billingNote}>
          <strong>
            Offline use in the mobile apps stays free and unlimited.
          </strong>{" "}
          A subscription is only required when you want to sync your data, and
          the listed limits apply to synced content. Plus and Pro renew
          automatically until cancelled. Monthly plans are billed monthly and
          yearly plans yearly. You can cancel at any time and keep access through
          the current paid term. Applicable taxes and the final localized total
          are shown at checkout. Eligible new users may see a seven day free trial
          at checkout.
        </p>
      </Section>

      <Section paddingTop={60} paddingBottom={160}>
        <div className={styles.closingCallout}>
          <h2>Start with the next thing you want to keep.</h2>
          <p>
            Use Saver on mobile, in the web app, from Safari or Chrome, or inside
            Discord.
          </p>
          <div className={styles.closingActions}>
            <PlatformActionButton size="medium" />
            <DownloadActionButton
              href="#platforms"
              label="Explore All Platforms"
              size="medium"
              showAppleLogo={false}
              variant="secondary"
              openInNewTab={false}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
