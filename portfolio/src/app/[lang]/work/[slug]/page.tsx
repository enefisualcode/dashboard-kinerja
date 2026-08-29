import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/content/locales";
import { getDictionary, type Dictionary } from "@/content/dictionary";
import { projectBySlug, projects } from "@/content/projects";
import type { Project } from "@/content/types";
import { href } from "@/lib/i18n";
import {
  ArrowRight,
  ArrowUpRight,
  ButtonLink,
  ExternalButtonLink,
  GitHubMark,
  StatusBadge,
  Tag,
  TechTag,
} from "@/components/primitives";
import {
  ScreenshotFigure,
  ScreenshotPlaceholderFigure,
} from "@/components/product-visual";
import { FlowDiagram } from "@/components/flow-diagram";
import { ClientCta } from "@/components/home-sections";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const project = projectBySlug(slug);
  if (!project) return {};

  const dict = getDictionary(lang);
  const title = `${project.name} — ${dict.meta.caseStudySuffix}`;
  const description = project.tagline[lang];
  const path = `/work/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: {
        id: `/id${path}`,
        en: `/en${path}`,
        "x-default": `/id${path}`,
      },
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/${lang}${path}`,
      images: project.screenshots[0]
        ? [{ url: project.screenshots[0].src, alt: project.screenshots[0].alt[lang] }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Section scaffolding                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Every section shares one full-width hairline and one left margin. Only the
 * measure changes: prose is capped for readability, diagrams and galleries get
 * the whole column.
 */
function Section({
  id,
  title,
  children,
  wide = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <Reveal
      as="section"
      className="scroll-mt-28 border-t border-line pt-5"
      aria-labelledby={`${id}-heading`}
    >
      <h2 id={`${id}-heading`} className="eyebrow">
        {title}
      </h2>
      <div className={`mt-5 ${wide ? "" : "max-w-[44rem]"}`}>{children}</div>
    </Reveal>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="prose-body text-pretty">{children}</p>;
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const project = projectBySlug(slug);
  if (!project) notFound();

  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const study = project.caseStudy;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <>
      {/* ---- Hero --------------------------------------------------------- */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="container-page">
          <Link
            href={href("/work", locale)}
            className="inline-flex items-center gap-2 text-[0.875rem] text-muted transition-colors hover:text-accent-deep"
          >
            <ArrowRight className="rotate-180" />
            {dict.caseStudy.backToWork}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[0.8125rem] tracking-[0.08em] text-faint">
              {project.id}
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
            <StatusBadge status={project.status} locale={locale} />
            <span className="font-mono text-[0.75rem] tracking-[0.06em] text-faint">
              {project.year}
            </span>
          </div>

          <h1 className="display-xl mt-5 max-w-[16ch] text-balance text-ink">
            {project.name}
          </h1>
          <p className="mt-2 font-mono text-[0.75rem] tracking-[0.08em] text-faint uppercase">
            {project.kind[locale]}
          </p>
          <p className="lede mt-6 max-w-[46ch] text-pretty">{project.tagline[locale]}</p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag.en}>
                <Tag>{tag[locale]}</Tag>
              </li>
            ))}
          </ul>

          {project.screenshots[0] ? (
            <div className="mt-12">
              <ScreenshotFigure
                shot={project.screenshots[0]}
                locale={locale}
                priority
                sizes="(min-width: 1024px) 72rem, 100vw"
              />
            </div>
          ) : project.placeholders[0] ? (
            <div className="mt-12">
              <ScreenshotPlaceholderFigure
                placeholder={project.placeholders[0]}
                locale={locale}
                minHeight="22rem"
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* ---- Body --------------------------------------------------------- */}
      <div className="container-page">
        <div className="flex flex-col gap-14 pb-4 sm:gap-16">
          <Section id="overview" title={dict.caseStudy.overview}>
            <Paragraph>{study.overview[locale]}</Paragraph>
          </Section>

          <Section id="problem" title={dict.caseStudy.problem}>
            <Paragraph>{study.problem[locale]}</Paragraph>
          </Section>

          <Section id="idea" title={dict.caseStudy.idea}>
            <Paragraph>{study.idea[locale]}</Paragraph>
          </Section>

          <Section id="solution" title={dict.caseStudy.solution}>
            <Paragraph>{study.solution[locale]}</Paragraph>
          </Section>

          <Section id="how" title={dict.caseStudy.howItWorks} wide>
            <FlowDiagram steps={study.flow} locale={locale} tint={project.tint} />
          </Section>

          <Section id="features" title={dict.caseStudy.keyFeatures} wide>
            <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {study.features.map((feature) => (
                <li key={feature.title.en}>
                  <h3 className="text-[1rem] font-semibold tracking-[-0.01em] text-ink">
                    {feature.title[locale]}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-muted">
                    {feature.body[locale]}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          {project.screenshots.length > 1 || project.placeholders.length > 0 ? (
            <Section id="screens" title={dict.caseStudy.screenshots} wide>
              <ScreenshotGallery project={project} locale={locale} />
            </Section>
          ) : null}

          <Section id="build" title={dict.caseStudy.behindTheBuild}>
            <Paragraph>{study.behindTheBuild[locale]}</Paragraph>

            <div className="mt-7">
              <p className="eyebrow-muted">{dict.caseStudy.technologies}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <TechTag>{tech}</TechTag>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="challenges" title={dict.caseStudy.challenges}>
            <ul className="flex flex-col gap-7">
              {study.challenges.map((challenge) => (
                <li key={challenge.title.en}>
                  <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink">
                    {challenge.title[locale]}
                  </h3>
                  <p className="prose-body mt-2 text-pretty">{challenge.body[locale]}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="status" title={dict.caseStudy.status} wide>
            <div className="card p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge status={project.status} locale={locale} />
              </div>
              <p className="prose-body mt-4 max-w-[62ch] text-pretty">
                {study.statusNote[locale]}
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <StatusList
                  title={dict.caseStudy.statusDone}
                  items={study.statusDone.map((item) => item[locale])}
                  tone="done"
                />
                <StatusList
                  title={dict.caseStudy.statusNotYet}
                  items={study.statusNotYet.map((item) => item[locale])}
                  tone="pending"
                />
              </div>
            </div>
          </Section>

          <Section id="links" title={dict.caseStudy.links} wide>
            <ProjectLinks project={project} locale={locale} dict={dict} />
          </Section>
        </div>
      </div>

      {/* ---- Neighbours --------------------------------------------------- */}
      <nav
        aria-label={dict.caseStudy.nextProject}
        className="container-page mt-16 mb-4"
      >
        <div className="hairline grid gap-px overflow-hidden pt-px sm:grid-cols-2">
          {previous ? (
            <NeighbourLink
              project={previous}
              locale={locale}
              label={dict.caseStudy.prevProject}
              direction="prev"
            />
          ) : (
            <span />
          )}
          {next ? (
            <NeighbourLink
              project={next}
              locale={locale}
              label={dict.caseStudy.nextProject}
              direction="next"
            />
          ) : null}
        </div>
      </nav>

      <ClientCta locale={locale} dict={dict} />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Pieces                                                                     */
/* -------------------------------------------------------------------------- */

function ScreenshotGallery({ project, locale }: { project: Project; locale: Locale }) {
  // The lead visual is already shown in the hero, so the gallery picks up from
  // the second one.
  const rest = project.screenshots.slice(1);
  const items = rest.length + project.placeholders.length;
  const wideItems =
    rest.some((shot) => shot.frame === "browser") ||
    project.placeholders.some((p) => p.frame === "browser");

  return (
    <div
      className={`grid gap-10 ${
        items === 1 ? "" : wideItems ? "lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {rest.map((shot) => (
        <ScreenshotFigure
          key={shot.src}
          shot={shot}
          locale={locale}
          sizes={
            shot.frame === "phone" ? "18rem" : "(min-width: 1024px) 34rem, 100vw"
          }
        />
      ))}
      {project.placeholders.map((placeholder) => (
        <ScreenshotPlaceholderFigure
          key={placeholder.note}
          placeholder={placeholder}
          locale={locale}
          minHeight={placeholder.frame === "phone" ? "24rem" : "18rem"}
        />
      ))}
    </div>
  );
}

function StatusList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "done" | "pending";
}) {
  return (
    <div>
      <h3 className="eyebrow-muted">{title}</h3>
      <ul className="mt-3.5 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] leading-snug">
            <span
              aria-hidden="true"
              className={`mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                tone === "done" ? "bg-accent" : "border border-line-strong bg-transparent"
              }`}
            />
            <span className={tone === "done" ? "text-ink-soft" : "text-muted"}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectLinks({
  project,
  locale,
  dict,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <div className="flex flex-col gap-6">
      {project.liveUrl ? (
        <div className="flex flex-wrap gap-3">
          <ExternalButtonLink href={project.liveUrl} variant="primary">
            {project.liveLabel ? project.liveLabel[locale] : dict.caseStudy.liveSite}
            <ArrowUpRight />
            <span className="sr-only">({dict.common.externalLink})</span>
          </ExternalButtonLink>
        </div>
      ) : null}

      <ul className="flex flex-col gap-px overflow-hidden rounded-frame border border-line bg-line">
        {project.repositories.map((repo) =>
          repo.private ? (
            <li
              key={repo.name}
              className="flex items-start justify-between gap-4 bg-surface px-5 py-4"
            >
              <span>
                <span className="flex items-center gap-2 font-mono text-[0.875rem] text-ink-soft">
                  <GitHubMark className="text-faint" />
                  {repo.name}
                </span>
                <span className="mt-1 block text-[0.875rem] text-muted">
                  {repo.role[locale]}
                </span>
              </span>
              <span className="mt-0.5 shrink-0 rounded-full border border-line bg-raised px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-faint uppercase">
                {dict.caseStudy.privateRepo}
              </span>
            </li>
          ) : (
            <li key={repo.name}>
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-start justify-between gap-4 bg-surface px-5 py-4 transition-colors hover:bg-raised"
              >
                <span>
                  <span className="flex items-center gap-2 font-mono text-[0.875rem] text-ink">
                    <GitHubMark className="text-faint" />
                    {repo.name}
                  </span>
                  <span className="mt-1 block text-[0.875rem] text-muted">
                    {repo.role[locale]}
                  </span>
                </span>
                <ArrowUpRight className="mt-1.5 text-faint transition-colors group-hover:text-accent" />
              </a>
            </li>
          ),
        )}
      </ul>

      <div>
        <ButtonLink href={href("/work", locale)} variant="secondary">
          {dict.caseStudy.backToWork}
        </ButtonLink>
      </div>
    </div>
  );
}

function NeighbourLink({
  project,
  locale,
  label,
  direction,
}: {
  project: Project;
  locale: Locale;
  label: string;
  direction: "prev" | "next";
}) {
  return (
    <Link
      href={href(`/work/${project.slug}`, locale)}
      className={`group flex flex-col gap-1.5 bg-bg py-7 transition-colors hover:bg-raised ${
        direction === "next" ? "sm:items-end sm:text-right" : ""
      }`}
    >
      <span className="eyebrow-muted">{label}</span>
      <span className="flex items-center gap-2 text-[1.0625rem] font-medium text-ink transition-colors group-hover:text-accent-deep">
        {direction === "prev" ? <ArrowRight className="rotate-180" /> : null}
        {project.name}
        {direction === "next" ? <ArrowRight /> : null}
      </span>
    </Link>
  );
}
