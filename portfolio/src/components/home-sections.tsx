import Link from "next/link";
import type { Locale } from "@/content/locales";
import type { Dictionary } from "@/content/dictionary";
import { contactChannels, siteConfig } from "@/content/site";
import { href } from "@/lib/i18n";
import {
  ArrowRight,
  ArrowUpRight,
  ButtonLink,
  ExternalButtonLink,
  SectionHeading,
} from "./primitives";
import { Reveal } from "./reveal";

/* -------------------------------------------------------------------------- */
/* What I Build                                                               */
/* -------------------------------------------------------------------------- */

export function Capabilities({ dict }: { dict: Dictionary }) {
  return (
    <section className="section-pad hairline" aria-labelledby="capabilities-heading">
      <div className="container-page">
        <SectionHeading
          id="capabilities-heading"
          label={dict.capabilities.label}
          heading={dict.capabilities.heading}
          intro={dict.capabilities.intro}
        />

        <ul className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {dict.capabilities.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 60} className="max-w-sm">
              <p
                aria-hidden="true"
                className="font-mono text-[0.75rem] tracking-[0.08em] text-faint"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2.5 text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-muted">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export function AboutSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-pad hairline" aria-labelledby="about-heading">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="eyebrow">{dict.about.label}</p>
            <h2 id="about-heading" className="display-lg mt-3 text-balance text-ink">
              {dict.about.heading}
            </h2>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              {dict.about.body.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-[1.125rem] font-medium text-ink"
                      : "prose-body text-pretty"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-7">
              <Link href={href("/about", locale)} className="arrow-link">
                {dict.about.readMore}
                <ArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* How I Work                                                                 */
/* -------------------------------------------------------------------------- */

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section className="section-pad hairline" aria-labelledby="process-heading">
      <div className="container-page">
        <SectionHeading
          id="process-heading"
          label={dict.process.label}
          heading={dict.process.heading}
        />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-frame border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col bg-surface p-6 sm:p-7">
              <span className="font-mono text-[0.75rem] tracking-[0.1em] text-accent-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[1.0625rem] leading-snug font-semibold tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-pretty text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Client CTA                                                                 */
/* -------------------------------------------------------------------------- */

export function ClientCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-pad hairline" aria-labelledby="cta-heading">
      <div className="container-page">
        <div className="card overflow-hidden">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-14 lg:p-14">
            <div>
              <p className="eyebrow">{dict.cta.label}</p>
              <h2 id="cta-heading" className="display-lg mt-3 text-balance text-ink">
                {dict.cta.heading}
              </h2>
              <p className="lede mt-4 max-w-[38ch] text-pretty">{dict.cta.subheading}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href={href("/contact", locale)} variant="primary">
                  {dict.cta.button}
                  <ArrowRight />
                </ButtonLink>
              </div>

              <p className="mt-5 max-w-[42ch] text-[0.9375rem] leading-relaxed text-muted">
                {dict.cta.reassurance}
              </p>
            </div>

            <div className="lg:pt-1">
              <p className="eyebrow-muted">{dict.cta.examplesLabel}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {dict.cta.examples.map((example) => (
                  <li
                    key={example}
                    className="rounded-full border border-line bg-raised px-3.5 py-2 text-[0.875rem] text-ink-soft"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact channels — shared by the contact page and the about page footer CTA */
/* -------------------------------------------------------------------------- */

export function ContactChannels({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const channels = contactChannels();
  const hasDirect = channels.some((channel) => channel.key !== "github");

  return (
    <div>
      <h2 className="eyebrow-muted">{dict.contactPage.channelsHeading}</h2>

      <ul className="mt-4 flex flex-col gap-px overflow-hidden rounded-frame border border-line bg-line">
        {channels.map((channel) => (
          <li key={channel.key}>
            <a
              href={channel.href}
              {...(channel.key === "email"
                ? {}
                : { target: "_blank", rel: "noreferrer noopener" })}
              className="group flex items-baseline justify-between gap-4 bg-surface px-5 py-4 transition-colors hover:bg-raised"
            >
              <span>
                <span className="block text-[1.0625rem] font-medium text-ink">
                  {channel.label}
                </span>
                <span className="mt-0.5 block text-[0.875rem] text-muted">
                  {channel.hint[locale]}
                </span>
              </span>
              <ArrowUpRight className="mt-1 text-faint transition-colors group-hover:text-accent" />
            </a>
          </li>
        ))}
      </ul>

      {!hasDirect ? (
        <div className="mt-5 rounded-xl border border-line bg-raised p-5">
          <p className="text-[0.875rem] font-medium text-ink">
            {dict.contactPage.pendingHeading}
          </p>
          <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted">
            {dict.contactPage.pendingBody}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function GithubCta({ dict }: { dict: Dictionary }) {
  return (
    <ExternalButtonLink href={siteConfig.github.url} variant="secondary">
      GitHub
      <ArrowUpRight />
      <span className="sr-only">({dict.common.externalLink})</span>
    </ExternalButtonLink>
  );
}
