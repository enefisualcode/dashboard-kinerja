import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/content/locales";
import { getDictionary } from "@/content/dictionary";
import { activeCategories, projects } from "@/content/projects";
import { WorkFilters } from "@/components/work-filters";
import { ClientCta } from "@/components/home-sections";

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
    title: dict.meta.workTitle,
    description: dict.meta.workDescription,
    alternates: {
      canonical: `/${lang}/work`,
      languages: { id: "/id/work", en: "/en/work", "x-default": "/id/work" },
    },
    openGraph: {
      title: dict.meta.workTitle,
      description: dict.meta.workDescription,
      url: `/${lang}/work`,
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-16">
        <div className="container-page">
          <p className="eyebrow">{dict.work.indexLabel}</p>
          <h1 className="display-xl mt-3 max-w-[12ch] text-balance text-ink">
            {dict.work.indexHeading}
          </h1>
          <p className="lede mt-5 max-w-[52ch] text-pretty">{dict.work.indexIntro}</p>

          <div className="mt-11">
            <WorkFilters
              projects={projects}
              categories={activeCategories}
              locale={lang}
              dict={dict}
            />
          </div>
        </div>
      </section>

      <ClientCta locale={lang} dict={dict} />
    </>
  );
}
