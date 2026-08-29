import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/content/locales";
import { getDictionary } from "@/content/dictionary";
import { buildingProjects, featuredProjects } from "@/content/projects";
import { href } from "@/lib/i18n";
import { Hero } from "@/components/hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { ProjectCard } from "@/components/project-card";
import {
  AboutSection,
  Capabilities,
  ClientCta,
  Process,
} from "@/components/home-sections";
import { ArrowRight, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/reveal";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Hero locale={lang} dict={dict} />

      {/* ---- Selected Work ------------------------------------------------ */}
      <section className="section-pad hairline" aria-labelledby="work-heading">
        <div className="container-page">
          <SectionHeading
            id="work-heading"
            label={dict.work.sectionLabel}
            heading={dict.work.sectionHeading}
            intro={dict.work.sectionIntro}
          />

          <div className="mt-14 flex flex-col gap-20 sm:gap-24 lg:gap-28">
            {featuredProjects.map((project, index) => (
              <ProjectShowcase
                key={project.slug}
                project={project}
                locale={lang}
                dict={dict}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Currently Building ------------------------------------------- */}
      <section className="section-pad hairline" aria-labelledby="building-heading">
        <div className="container-page">
          <SectionHeading
            id="building-heading"
            label={dict.work.buildingLabel}
            heading={dict.work.buildingHeading}
            intro={dict.work.buildingIntro}
          />

          <div className="mt-11 grid gap-5 sm:grid-cols-2">
            {buildingProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70} className="flex">
                <ProjectCard project={project} locale={lang} dict={dict} />
              </Reveal>
            ))}
          </div>

          <p className="mt-9">
            <Link href={href("/work", lang)} className="arrow-link">
              {dict.work.allProjects}
              <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      <Capabilities dict={dict} />
      <AboutSection locale={lang} dict={dict} />
      <Process dict={dict} />
      <ClientCta locale={lang} dict={dict} />
    </>
  );
}
