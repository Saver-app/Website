"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import styles from "./contact_form.module.css";

const SUPPORT_EMAIL = "support@saver-app.dev";
const WHATSAPP_URL = "https://wa.me/message/JWNX7BB22E4UA1";
const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "8975af3a-4d99-404d-bd52-5c826047bb3d";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const formData = Object.fromEntries(new FormData(form));
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const result: unknown = await response.json();
      const wasAccepted =
        typeof result === "object" &&
        result !== null &&
        "success" in result &&
        result.success === true;

      if (!response.ok || !wasAccepted) {
        throw new Error("Support request could not be delivered");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const onInput = () => {
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  };

  return (
    <div className={styles.card}>
      <form
        className={styles.form}
        action={FORM_ENDPOINT}
        method="POST"
        onSubmit={onSubmit}
        onInput={onInput}
      >
        <input
          type="hidden"
          name="access_key"
          value={WEB3FORMS_ACCESS_KEY}
        />
        <input type="hidden" name="subject" value="New Saver support request" />
        <input
          className={styles.honeypot}
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          aria-hidden="true"
        />

        <div className={styles.twoColumnRow}>
          <div className={styles.field}>
            <label htmlFor="support-name">Name</label>
            <input
              id="support-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="support-email">Email</label>
            <input
              id="support-email"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="support-topic">What do you need help with?</label>
          <div className={styles.selectWrapper}>
            <select id="support-topic" name="topic" defaultValue="App support">
              <option>App support</option>
              <option>Account or sign-in</option>
              <option>Subscription or billing</option>
              <option>Report illegal content or abuse</option>
              <option>Feedback or feature request</option>
              <option>Something else</option>
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="support-message">Message</label>
          <textarea
            id="support-message"
            name="message"
            rows={7}
            placeholder="Describe the issue and include any steps that might help us reproduce it."
            required
          />
        </div>

        <div className={styles.formFooter}>
          <p className={styles.privacyNote}>
            Web3Forms delivers these details to Saver Support. We use them to
            respond to your request. See our <a href="/privacy">Privacy Policy</a>.
          </p>
          <button
            className={styles.submitButton}
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
        </div>

        <div className={styles.status} aria-live="polite">
          {status === "success" && (
            <p className={styles.successMessage}>
              Thanks! Your message has been sent to Saver Support.
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMessage} role="alert">
              We could not send your message. Please email us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> instead.
            </p>
          )}
        </div>
      </form>

      <div className={styles.alternative}>
        <p>Contact us directly:</p>
        <div className={styles.alternativeLinks}>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          <span aria-hidden="true">·</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
