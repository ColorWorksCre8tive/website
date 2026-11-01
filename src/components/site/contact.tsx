"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight, Instagram, Facebook, Linkedin, CheckCircle2, Loader2 } from "lucide-react";
import { SITE } from "@/lib/site-data";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact({ submitted = false }: { submitted?: boolean }) {
  const [formState, setFormState] = useState<FormState>(submitted ? "success" : "idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);

    try {
            const response = await fetch("/project-inquiry-form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormState("success");
        window.history.replaceState({}, "", "/?submitted=true");
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        setFormState("error");
      }
    } catch (err) {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="cw-section bg-background relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[36%] h-[40%] bg-coral-soft/60 -z-10"
        aria-hidden="true"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="cw-container relative">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <img src="/images/brand/Say Hello.svg" alt="" width={130} height={96} className="w-28 md:w-32 h-auto mb-7" loading="lazy" decoding="async" />
          <p className="cw-eyebrow mb-5">Let's work together</p>
          <h2 className="cw-display text-4xl md:text-5xl lg:text-6xl">
            We're ready to bring <br className="hidden md:block" />
            your project <span className="text-coral">to life.</span>
          </h2>
          <p className="mt-6 text-lg text-slate leading-relaxed max-w-xl">
            Let's talk about your branding strategy, your latest project needs, or
            how to achieve your design goals. Email is the best way to reach us.
          </p>
        </div>

        {formState === "success" && (
          <div className="rounded-3xl border border-sage/40 bg-sage/10 p-7 md:p-10 mb-10 lg:mb-14 flex items-center gap-4">
            <CheckCircle2 className="text-sage shrink-0" size={32} />
            <div>
              <h3 className="font-display text-xl font-bold text-navy">
                Thanks — your message is on its way!
              </h3>
              <p className="text-sm text-slate mt-1">
                We'll be in touch within 1 business day. In the meantime, feel
                free to browse our work above.
              </p>
            </div>
          </div>
        )}

        {formState === "error" && (
          <div className="rounded-3xl border border-coral/40 bg-coral-soft/30 p-7 md:p-10 mb-10 lg:mb-14 flex items-center gap-4">
            <div className="text-coral shrink-0 text-2xl">!</div>
            <div>
              <h3 className="font-display text-xl font-bold text-navy">
                Something went wrong.
              </h3>
              <p className="text-sm text-slate mt-1">
                Please try again, or email us directly at{" "}
                <a href={`mailto:${SITE.email}`} className="text-coral font-semibold underline">
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>
        )}

        <form
          name="project-inquiry"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-card p-7 md:p-10 shadow-[0_24px_60px_-30px_rgba(36,51,84,0.30)] mb-10 lg:mb-14"
          aria-label="Project inquiry form"
        >
          <input type="hidden" name="form-name" value="project-inquiry" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-7">
            <div>
              <h3 className="font-display text-2xl font-bold text-navy">
                Start a project
              </h3>
              <p className="text-sm text-slate mt-1">
                Tell us a bit about what you need. We'll be in touch within 1 business day.
              </p>
            </div>
            <p className="text-xs text-slate md:text-right shrink-0">
              Or email us at{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-coral">
                {SITE.email}
              </a>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            <Field label="Your name" htmlFor="cf-name">
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="cw-input"
                placeholder="Jane Designer"
                disabled={formState === "submitting"}
              />
            </Field>
            <Field label="Email" htmlFor="cf-email">
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="cw-input"
                placeholder="you@example.com"
                disabled={formState === "submitting"}
              />
            </Field>
            <Field label="Company / Organization" htmlFor="cf-org" optional>
              <input
                id="cf-org"
                name="organization"
                type="text"
                className="cw-input"
                placeholder="Acme Co."
                disabled={formState === "submitting"}
              />
            </Field>
          </div>

          <div className="mt-4 md:mt-5">
            <Field label="What can we help with?" htmlFor="cf-msg">
              <textarea
                id="cf-msg"
                name="message"
                required
                rows={3}
                className="cw-input resize-none"
                placeholder="I'm looking for help with..."
                disabled={formState === "submitting"}
              />
            </Field>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="cw-btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formState === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <ArrowUpRight size={16} />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <ContactCard
            href={`mailto:${SITE.email}`}
            icon={<Mail size={20} />}
            label="Email us"
            value={SITE.email}
            accent="coral"
          />
          <ContactCard
            href={SITE.social.instagram}
            icon={<Instagram size={20} />}
            label="Follow along"
            value="@colorworkscreative"
            accent="gold"
            external
          />
          <ContactCard
            href="#top"
            icon={<MapPin size={20} />}
            label="Service area"
            value="Austin, San Antonio & Beyond"
            accent="sage"
          />
          <ContactCard
            href={SITE.phoneHref}
            icon={<Phone size={20} />}
            label="Text or call"
            value={SITE.phone}
            accent="navy"
          />
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs font-semibold text-navy mb-1.5">
        {label}
        {optional && <span className="text-slate/60 font-normal"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  accent,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: "coral" | "gold" | "sage" | "navy";
  external?: boolean;
}) {
  const tones: Record<string, string> = {
    coral: "bg-coral-soft text-coral",
    gold: "bg-gold/15 text-[#a07a16]",
    sage: "bg-sage/15 text-sage-deep",
    navy: "bg-navy/10 text-navy",
  };
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 md:p-5 transition-all hover:border-coral/40 hover:shadow-lg hover:shadow-navy/5"
    >
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${tones[accent]}`}>
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate/70">{label}</p>
        <p className="font-display text-base font-bold text-navy truncate">{value}</p>
      </div>
      <ArrowUpRight size={16} className="ml-auto text-slate group-hover:text-coral transition-colors" />
    </a>
  );
}
