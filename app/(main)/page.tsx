import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { ConfettiHero } from "@/components/confetti_hero/confetti_hero";
import { Hero } from "@/components/hero/hero";
import { Icon } from "@/components/icon/icon";
import { PlatformActionButton } from "@/components/platform_action_button/platform_action_button";
import { Section } from "@/components/section/section";
import {
  DISCORD_BOT_URL,
  MATERIAL_SYMBOLS,
  WEB_APP_URL,
} from "@/constants";
import styles from "./page.module.css";

import DiscordLogo from "@/public/app_view/discord_logo.svg";

const SCREENSHOTS = {
  tasks: "/assets/saver_tasks.webp",
  shareSheet: "/assets/saver_share_sheet.webp",
  shareExtension: "/assets/saver_share_extension.webp",
  spaces: "/assets/saver_spaces.webp",
  habits: "/assets/saver_habits.webp",
} as const;

/*
  The other half of the promise. Each route is somewhere you already are when
  you find the thing, so the copy names the moment rather than the product.
  Icons carry the same tile language as the platform list below, so the two
  sections read as one family.
*/
/* A Material symbol name, or a brand mark where the service has its own. */
type SectionIcon =
  | (typeof MATERIAL_SYMBOLS)[number]
  | React.FC<React.SVGProps<SVGSVGElement>>;

function SectionIcon({ icon, size }: { icon: SectionIcon; size: number }) {
  if (typeof icon === "string") {
    return <Icon name={icon} size={size} />;
  }

  const Logo = icon;

  return <Logo width={size} height={size} />;
}

/* Keys a mixed icon list, where a brand mark has no name of its own. */
function iconKey(icon: SectionIcon, fallback: string) {
  return typeof icon === "string" ? icon : fallback;
}

interface CaptureRoute {
  icon: SectionIcon;
  title: string;
  description?: string;
}

/* The two routes almost everyone arrives through, and the pair the phones show. */
const captureRoutes: readonly CaptureRoute[] = [
  {
    icon: "ios_share",
    title: "Share sheet",
    description: "Send links, text, and notes from any app on your phone.",
  },
  {
    icon: "extension",
    title: "Safari & Chrome",
    description: "Save the page you’re viewing without leaving it.",
  },
] as const;

/*
  Real routes, but niche ones, and neither is in the screenshots. Norma demotes
  its Siri/Action Button/Widget entry points the same way rather than giving
  them a row each.
*/
const secondaryCaptureRoutes: readonly CaptureRoute[] = [
  {
    icon: DiscordLogo,
    title: "Discord",
  },
  {
    icon: "tablet_mac",
    title: "reMarkable",
  },
] as const;

interface Platform {
  /* Grammarly leads each column with a cluster of platform marks, not one icon. */
  icons: readonly SectionIcon[];
  title: string;
  description: string;
  href: string;
}

const platforms: readonly Platform[] = [
  {
    icons: ["smartphone", "tablet_mac"],
    title: "iPhone & Android",
    description:
      "Start without an account and keep as much as you like on your phone.",
    href: "/download#mobile",
  },
  {
    icons: ["language", "desktop_windows"],
    title: "Web app",
    description: "Open your synced spaces from any browser.",
    href: WEB_APP_URL,
  },
  {
    icons: ["extension", "public"],
    title: "Safari & Chrome",
    description: "Adds Saver to the browser you already use.",
    href: "/download#extensions",
  },
  {
    icons: ["smart_toy", DiscordLogo],
    title: "Discord bot",
    description: "Runs in your server, for you and anyone you share a space with.",
    href: DISCORD_BOT_URL,
  },
  {
    icons: ["tablet_mac", "sync"],
    title: "reMarkable",
    description:
      "Pair the tablet with your synced tasks and send reminders to your phone.",
    href: "https://docs.saver-app.com/remarkable",
  },
] as const;

interface Plan {
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  billing: string;
  yearlySaving?: string;
  featureIntro?: string;
  features: readonly string[];
  action: string;
  href: string;
  featured?: boolean;
}

const plans: readonly Plan[] = [
  {
    name: "Free",
    description: "Free sync plus unlimited offline use.",
    price: "€0",
    billing: "No subscription required",
    features: [
      "2 synced spaces",
      "75 synced tasks and 25 bookmarks",
      "3 active habits",
      "2 collaborators across all spaces",
      "Unlimited offline use on mobile",
      "No account needed for offline use",
    ],
    action: "Start Free",
    href: "/download",
  },
  {
    name: "Plus",
    description: "Personal sync across your devices.",
    price: "€3.99",
    priceSuffix: "/ month",
    billing: "or €39.99 billed yearly",
    yearlySaving: "Save 17%",
    featureIntro: "Everything in Free, plus more sync capacity:",
    features: [
      "6 synced spaces",
      "750 synced tasks and 300 bookmarks",
      "15 active habits",
      "5 collaborators across all spaces",
    ],
    action: "Start Plus",
    href: WEB_APP_URL,
    featured: true,
  },
  {
    name: "Pro",
    description: "Larger spaces and shared projects.",
    price: "€5.99",
    priceSuffix: "/ month",
    billing: "or €59.99 billed yearly",
    yearlySaving: "Save 17%",
    featureIntro: "Everything in Plus, plus more sync capacity:",
    features: [
      "20 synced spaces",
      "3,000 synced tasks and 1,500 bookmarks",
      "50 active habits",
      "10 collaborators across all spaces",
      "Custom Discord bot branding",
    ],
    action: "Start Pro",
    href: WEB_APP_URL,
  },
];

const spaceContents = [
  { icon: "check_circle", label: "Tasks" },
  { icon: "list", label: "Lists" },
  { icon: "bookmark_add", label: "Bookmarks" },
  { icon: "repeat", label: "Habits" },
] as const satisfies readonly {
  icon: (typeof MATERIAL_SYMBOLS)[number];
  label: string;
}[];

/*
  Every note carries a tile from the same set as the capture routes below, so
  the three rows keep one rhythm instead of starting rich and going flat.
*/
const spaceNotes = [
  {
    icon: "group",
    title: "Share with others",
    description:
      "Invite people into a space so everyone works from the same tasks, lists, bookmarks, and habits. Nothing to copy or keep in sync.",
  },
  {
    icon: "cloud_off",
    title: "Works offline, too",
    description:
      "Spaces work offline on your phone, with no account required. Sync when you want them on another device, or when you’re ready to share.",
  },
] as const satisfies readonly {
  icon: (typeof MATERIAL_SYMBOLS)[number];
  title: string;
  description: string;
}[];

export default function Page() {
  return (
    <>
      <ConfettiHero
        title={
          /*
            Two sentences on one line reads as a run-on once the title wraps,
            so each is its own block on mobile and the breaks land on the
            full stop instead of orphaning "One" onto the line above.
          */
          <>
            <span className={styles.heroTitleSentence}>
              Bookmarks, tasks, and habits.
            </span>{" "}
            <span className={styles.heroTitleSentence}>
              One less app to juggle.
            </span>
          </>
        }
        subtitle="Send it over from wherever you found it and it lands in the space it belongs to"
        action={
          <div className={styles.heroActionStack}>
            <div className={styles.heroActions}>
              <PlatformActionButton size="medium" />
              <span className={styles.desktopOnlyAction}>
                <DownloadActionButton
                  href={WEB_APP_URL}
                  label="Open web app"
                  size="medium"
                  showAppleLogo={false}
                  variant="secondary"
                />
              </span>
              <span className={styles.mobileOnlyAction}>
                <DownloadActionButton
                  href="#platforms"
                  label="See all Saver platforms"
                  size="medium"
                  showAppleLogo={false}
                  variant="secondary"
                  openInNewTab={false}
                />
              </span>
            </div>
            <p className={styles.heroNote}>
              Free offline. No account required.
            </p>
          </div>
        }
        media={
          <div className={styles.heroProductPreview}>
            <Hero.Image
              src={SCREENSHOTS.tasks}
              alt="Saver showing organized lists and tasks"
              bezel="iPhone 17 Pro Silver"
            />
          </div>
        }
      />

      <section className={styles.spaceStory} aria-labelledby="spaces-title">
        <header className={styles.spaceStoryHeader}>
          <h2 id="spaces-title">Keep the whole plan together.</h2>
          <p>
            A trip is more than a to-do list. Keep packing tasks, booking
            links, and the habits you’re building in one place. The same goes
            for a course, a move, or whatever comes next.
          </p>
          <a
            className={styles.spaceLink}
            href="https://docs.saver-app.com/features/spaces"
            target="_blank"
            rel="noreferrer"
          >
            What is a space? <span aria-hidden="true">→</span>
          </a>
        </header>

        <div className={styles.spaceGrid}>
          <div className={styles.spaceStoryMedia}>
            <div className={styles.spaceStoryPhones}>
              {/*
                The switcher alone only argues for the idea of spaces, and it
                sits over an empty list while it does. A populated space behind
                it shows what the note above actually promises lands in one.
              */}
              <div
                className={`${styles.spaceStoryPhone} ${styles.spaceStoryPhoneSpace}`}
              >
                <Hero.Image
                  src={SCREENSHOTS.habits}
                  alt="A Saver space holding habits with their weekly streaks"
                  bezel="iPhone 17 Pro Silver"
                  loading="lazy"
                />
              </div>
              <div
                className={`${styles.spaceStoryPhone} ${styles.spaceStoryPhoneSwitcher}`}
              >
                <Hero.Image
                  src={SCREENSHOTS.spaces}
                  alt="Saver showing Personal, Work, Travel Plans, and Home spaces"
                  bezel="iPhone 17 Pro Silver"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={styles.spaceNotes}>
            <article className={`${styles.spaceNote} ${styles.spaceNoteLead}`}>
              <h3>
                <span className={styles.spaceNoteIcon} aria-hidden="true">
                  <Icon name="workspaces" size={18} />
                </span>
                One space for the whole thing
              </h3>
              <p>
                Create one for whatever you’re planning: a trip to Japan, a new
                semester, anything. Tasks, lists, bookmarks, and habits all stay
                together inside it.
              </p>

              <ul className={styles.spaceContents}>
                {spaceContents.map((item) => (
                  <li key={item.label}>
                    <Icon name={item.icon} size={17} />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </article>

            {spaceNotes.map((note) => (
              <article key={note.title} className={styles.spaceNote}>
                <h3>
                  <span className={styles.spaceNoteIcon} aria-hidden="true">
                    <Icon name={note.icon} size={18} />
                  </span>
                  {note.title}
                </h3>
                <p>{note.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section paddingTop={110} navigationAnchor="capture">
        {/*
          The header sits inside the grid rather than above it, so the phone
          panel starts level with the heading instead of below the intro.
        */}
        <div className={styles.captureGrid}>
          <div className={styles.captureColumn}>
            <header
              className={`${styles.editorialHeader} ${styles.captureHeader}`}
            >
              <h2>Save it from wherever you find it.</h2>
              <p>
                Things worth saving rarely show up at the right moment. Send
                them straight to Saver instead of stopping to make a note.
              </p>
            </header>

            <dl className={styles.captureRoutes}>
              {captureRoutes.map((route) => (
                <div key={route.title} className={styles.captureRoute}>
                  <dt>
                    <span className={styles.captureRouteIcon} aria-hidden="true">
                      <SectionIcon icon={route.icon} size={18} />
                    </span>
                    {route.title}
                  </dt>
                  <dd>{route.description}</dd>
                </div>
              ))}
            </dl>

            <p className={styles.captureAlso}>
              <span className={styles.captureAlsoLabel}>You can also save from</span>
              {secondaryCaptureRoutes.map((route) => (
                <span key={route.title} className={styles.captureAlsoItem}>
                  <span className={styles.captureAlsoIcon} aria-hidden="true">
                    <SectionIcon icon={route.icon} size={16} />
                  </span>
                  <strong>{route.title}</strong>
                </span>
              ))}
            </p>

            <p className={styles.captureNote}>
              Everything you save becomes a task, a bookmark, or a habit in
              the space you choose, ready to manage from anywhere.
            </p>
          </div>

          <div className={styles.captureMedia}>
            <div className={styles.capturePhones}>
              <div
                className={`${styles.capturePhone} ${styles.capturePhoneShare}`}
              >
                <Hero.Image
                  src={SCREENSHOTS.shareSheet}
                  alt="An iPhone share sheet offering Saver for a Hakone travel article"
                  bezel="iPhone 17 Pro Silver"
                  loading="lazy"
                />
              </div>
              <div
                className={`${styles.capturePhone} ${styles.capturePhoneSave}`}
              >
                <Hero.Image
                  src={SCREENSHOTS.shareExtension}
                  alt="Saver saving the Hakone article as a bookmark in the Japan Trip space"
                  bezel="iPhone 17 Pro Silver"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section paddingTop={110} navigationAnchor="platforms">
        <header className={styles.editorialHeader}>
          <h2>Saver accross your devices.</h2>
          <p>
            Start with the mobile app. Add the web app, the browser extensions,
            your reMarkable, or the Discord bot when you want them.
          </p>
        </header>
        <ol className={styles.platformList}>
          {platforms.map((platform) => (
            <li key={platform.title} className={styles.platformItem}>
              <a
                className={styles.platformLink}
                href={platform.href}
                target={platform.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  platform.href.startsWith("http") ? "noreferrer" : undefined
                }
              >
                <span className={styles.platformIcons} aria-hidden="true">
                  {platform.icons.map((icon, index) => (
                    <span
                      key={iconKey(icon, `${platform.title}-${index}`)}
                      className={styles.platformIcon}
                    >
                      <SectionIcon icon={icon} size={18} />
                    </span>
                  ))}
                </span>
                <div className={styles.platformCopy}>
                  <h3>{platform.title}</h3>
                  <p>{platform.description}</p>
                </div>
                {platform.title === "Web app" && (
                  <span className={styles.mobilePlatformNote}>
                    Best for reviewing larger spaces on a computer.
                  </span>
                )}
              </a>
            </li>
          ))}
        </ol>
      </Section>

      <Section paddingTop={110} navigationAnchor="pricing">
        <header className={styles.editorialHeader}>
          <h2>Sync for free. Upgrade for more space.</h2>
          <p>
            Every plan syncs across your devices. Plus and Pro raise the limits
            for synced spaces, items, habits, and collaborators.
          </p>
        </header>

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
                <small>
                  {plan.billing}
                  {plan.yearlySaving && (
                    <span className={styles.planSaving}>
                      {plan.yearlySaving}
                    </span>
                  )}
                </small>
              </div>

              <a
                className={styles.planAction}
                href={plan.href}
                target={plan.href.startsWith("http") ? "_blank" : undefined}
                rel={plan.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {plan.action}
              </a>

              <div className={styles.planDetails}>
                {plan.featureIntro && (
                  <p className={styles.planFeatureIntro}>{plan.featureIntro}</p>
                )}
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check_circle" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.billingNote}>
          Offline use is free and unlimited. Paid plans renew until cancelled;
          synced-data limits vary by plan. Taxes and the final price appear at
          checkout.{" "}
          <a href="/terms">See subscription terms.</a>
        </p>
      </Section>

      <div className={`${styles.band} ${styles.closingBand}`}>
        <div className={styles.closingPanel}>
          <h2>Start with the thing you keep forgetting.</h2>
          <p className={styles.closingBody}>
            A link for later. A task that keeps slipping. A habit you want to
            stick to. Put it in Saver.
          </p>
          <div className={styles.closingActions}>
            <PlatformActionButton size="medium" />
            <span className={styles.desktopOnlyAction}>
              <DownloadActionButton
                href={WEB_APP_URL}
                label="Open web app"
                size="medium"
                showAppleLogo={false}
                variant="secondary"
              />
            </span>
            <span className={styles.mobileOnlyAction}>
              <DownloadActionButton
                href="#platforms"
                label="See all Saver platforms"
                size="medium"
                showAppleLogo={false}
                variant="secondary"
                openInNewTab={false}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
