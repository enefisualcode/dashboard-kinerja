import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/content/locales";
import { getDictionary } from "@/content/dictionary";
import { siteConfig } from "@/content/site";
import { href } from "@/lib/i18n";
import { ArrowRight, ButtonLink, TechTag } from "@/components/primitives";
import { GithubCta } from "@/components/home-sections";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
    alternates: {
      canonical: `/${lang}/about`,
      languages: { id: "/id/about", en: "/en/about", "x-default": "/id/about" },
    },
    openGraph: {
      title: dict.meta.aboutTitle,
      description: dict.meta.aboutDescription,
      url: `/${lang}/about`,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <section className="pt-12 pb-4 sm:pt-16">
        <div className="container-page">
          <p className="eyebrow">{dict.about.label}</p>
          <h1 className="display-xl mt-3 max-w-[14ch] text-balance text-ink">
            {dict.aboutPage.heading}
          </h1>
          <p className="lede mt-5 max-w-[54ch] text-pretty">{dict.aboutPage.intro}</p>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="about-body-heading">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:gap-16">
            <h2 id="about-body-heading" className="display-md text-balance text-ink">
              {dict.about.heading}
            </h2>

            <div className="flex flex-col gap-4">
              {dict.about.body.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-[1.25rem] font-medium text-ink"
                      : "prose-body text-pretty"
                  }
                >
                  {paragraph}
                </p>
              ))}

              <p className="prose-body text-pretty">
                {lang === "id" ? (
                  <>
                    Sebagian besar yang ada di portofolio ini berawal dari pekerjaan saya
                    sendiri, lalu tumbuh menjadi alat yang dipakai setiap hari. Kodenya
                    terbuka di{" "}
                    <a
                      href={siteConfig.github.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline"
                    >
                      GitHub
                    </a>
                    .
                  </>
                ) : (
                  <>
                    Most of what is in this portfolio started from my own work and grew
                    into a tool I use every day. The code lives on{" "}
                    <a
                      href={siteConfig.github.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline"
                    >
                      GitHub
                    </a>
                    .
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad hairline" aria-labelledby="principles-heading">
        <div className="container-page">
          <h2 id="principles-heading" className="display-md text-balance text-ink">
            {dict.about.principlesHeading}
          </h2>

          <ul className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {dict.about.principles.map((principle, index) => (
              <Reveal as="li" key={principle.title} delay={index * 60} className="max-w-md">
                <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-muted">
                  {principle.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad hairline" aria-labelledby="process-page-heading">
        <div className="container-page">
          <h2 id="process-page-heading" className="display-md text-balance text-ink">
            {dict.aboutPage.howIWorkHeading}
          </h2>

          <ol className="mt-10 flex flex-col gap-px overflow-hidden rounded-frame border border-line bg-line">
            {dict.process.steps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-2 bg-surface p-6 sm:grid-cols-[4rem_minmax(0,18rem)_minmax(0,1fr)] sm:items-baseline sm:gap-6 sm:p-7"
              >
                <span className="font-mono text-[0.75rem] tracking-[0.1em] text-accent-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink">
                  {step.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-pretty text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad hairline" aria-labelledby="tools-heading">
        <div className="container-page">
          <h2 id="tools-heading" className="display-md text-balance text-ink">
            {dict.aboutPage.toolsHeading}
          </h2>
          <p className="lede mt-4 max-w-[52ch] text-pretty">{dict.aboutPage.toolsIntro}</p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dict.aboutPage.toolGroups.map((group) => (
              <div key={group.title}>
                <h3 className="eyebrow-muted">{group.title}</h3>
                <ul className="mt-3.5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <TechTag>{item}</TechTag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad hairline" aria-labelledby="about-cta-heading">
        <div className="container-page">
          <h2 id="about-cta-heading" className="display-lg max-w-[18ch] text-balance text-ink">
            {dict.aboutPage.ctaHeading}
          </h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={href("/contact", lang)} variant="primary">
              {dict.cta.button}
              <ArrowRight />
            </ButtonLink>
            <GithubCta dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
