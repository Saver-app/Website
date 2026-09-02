import { ContactForm } from "@/components/contact_form/contact_form";
import { Section } from "@/components/section/section";
import styles from "./support.module.css";

export default function SupportPage() {
  return (
    <main className={styles.main}>
      <Section paddingTop={64} paddingBottom={140}>
        <div className={styles.intro}>
          <h1>How can we help?</h1>
          <p className={styles.subtitle}>
            Tell us what is going on and we will reply to the email address you
            provide.
          </p>
        </div>

        <ContactForm />
      </Section>
    </main>
  );
}
