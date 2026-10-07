"use client";

import { useState, type FormEvent } from "react";
import { PiCheckCircle, PiPaperPlaneTilt, PiWarningCircle } from "react-icons/pi";

import { site } from "@/data/site";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string; fallback?: boolean };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (res.ok && json.ok) {
        setStatus({ state: "sent" });
        form.reset();
        return;
      }
      if (json.error === "not-configured") {
        // No email service yet: hand the message to the visitor's mail app if an address is set.
        if (site.email) {
          const body = `${data.message}\n\n${data.name} <${data.email}>`;
          window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(data.subject || "Hello")}&body=${encodeURIComponent(body)}`;
          setStatus({ state: "idle" });
          return;
        }
        setStatus({
          state: "error",
          message: "The form isn't connected to an inbox yet. Please message me on LinkedIn for now.",
          fallback: true,
        });
        return;
      }
      setStatus({ state: "error", message: json.error ?? "Something went wrong. Please try again." });
    } catch {
      setStatus({ state: "error", message: "Couldn't reach the server. Check your connection and try again." });
    }
  }

  const sending = status.state === "sending";

  return (
    <form onSubmit={onSubmit} className="panel rounded-3xl p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Full name</span>
          <input name="name" required maxLength={100} autoComplete="name" placeholder="Your name" className="field" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium">Email address</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@example.com"
            className="field"
          />
        </label>
        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium">Subject</span>
          <input name="subject" maxLength={150} placeholder="Project, role or question" className="field" />
        </label>
        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium">Message</span>
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="Tell me about your project..."
            className="field resize-y"
          />
        </label>
        {/* Hidden from people; catches bots that fill in every field. */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={sending} className="btn btn-primary disabled:cursor-wait disabled:opacity-70">
          {sending ? "Sending..." : "Send Message"}
          <PiPaperPlaneTilt className="size-4" />
        </button>

        <p aria-live="polite" className="text-sm">
          {status.state === "sent" && (
            <span className="inline-flex items-center gap-2 text-accent-ink">
              <PiCheckCircle className="size-5" />
              Thanks, your message is on its way.
            </span>
          )}
          {status.state === "error" && (
            <span className="inline-flex items-start gap-2 text-live">
              <PiWarningCircle className="mt-0.5 size-5 shrink-0" />
              <span>
                {status.message}
                {status.fallback && (
                  <>
                    {" "}
                    <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="underline">
                      Open LinkedIn
                    </a>
                  </>
                )}
              </span>
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
