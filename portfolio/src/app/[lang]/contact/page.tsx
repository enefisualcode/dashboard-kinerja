import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/content/locales";
import { getDictionary } from "@/content/dictionary";
import { ContactChannels } from "@/components/home-sections";

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
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
    alternates: {
      canonical: `/${lang}/contact`,
      languages: { id: "/id/contact", en: "/en/contact", "x-default": "/id/contact" },
    },
    openGraph: {
      title: dict.meta.contactTitle,
      description: dict.meta.contactDescription,
      url: `/${lang}/contact`,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <section className="pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="container-page">
        <p className="eyebrow">{dict.nav.contact}</p>
        <h1 className="display-xl mt-3 max-w-[14ch] text-balance text-ink">
          {dict.contactPage.heading}
        </h1>
        <p className="lede mt-5 max-w-[54ch] text-pretty">{dict.contactPage.intro}</p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactChannels locale={lang} dict={dict} />

          <div>
            <h2 className="eyebrow-muted">{dict.contactPage.helpfulHeading}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {dict.contactPage.helpfulItems.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 font-mono text-[0.75rem] text-faint"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-pretty text-ink-soft">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <h2 className="eyebrow-muted">{dict.cta.examplesLabel}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {dict.cta.examples.map((example) => (
                  <li
                    key={example}
                    className="rounded-full border border-line bg-surface px-3.5 py-2 text-[0.875rem] text-ink-soft"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted">
              {dict.cta.reassurance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
