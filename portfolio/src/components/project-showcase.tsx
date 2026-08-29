import Link from "next/link";
import type { Locale } from "@/content/locales";
import type { Dictionary } from "@/content/dictionary";
import type { Project } from "@/content/types";
import { href } from "@/lib/i18n";
import { ArrowRight, StatusBadge, Tag } from "./primitives";
import { LeadVisual } from "./product-visual";
import { Reveal } from "./reveal";

/**
 * A large editorial showcase, one per featured project. Layouts alternate so
 * the page reads as a sequence of spreads rather than a grid of cards. The
 * screenshot is given more weight than any technology label.
 */
export function ProjectShowcase({
  project,
  locale,
  dict,
  index,
  priority = false,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  index: number;
  priority?: boolean;
}) {
  const visualFirst = index % 2 === 1;

  return (
    <Reveal as="article" className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
      <div className={visualFirst ? "lg:order-2" : undefined}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.8125rem] font-medium tracking-[0.08em] text-faint">
            {project.id}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
          <StatusBadge status={project.status} locale={locale} size="sm" />
        </div>

        <h3 className="display-md mt-4 text-ink">
          <Link
            href={href(`/work/${project.slug}`, locale)}
            className="transition-colors hover:text-accent-deep"
          >
            {project.name}
          </Link>
        </h3>

        <p className="mt-1.5 font-mono text-[0.75rem] tracking-[0.06em] text-faint uppercase">
          {project.kind[locale]}
        </p>

        <p className="mt-5 text-[1.0625rem] leading-snug font-medium text-balance text-ink-soft">
          {project.tagline[locale]}
        </p>

        <p className="prose-body mt-4 max-w-[52ch] text-pretty">{project.summary[locale]}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag.en}>
              <Tag>{tag[locale]}</Tag>
            </li>
          ))}
        </ul>

        <p className="mt-7">
          <Link href={href(`/work/${project.slug}`, locale)} className="arrow-link group">
            {dict.work.viewCaseStudy}
            <ArrowRight />
            <span className="sr-only"> — {project.name}</span>
          </Link>
        </p>
      </div>

      <div className={visualFirst ? "lg:order-1" : undefined}>
        <LeadVisual
          screenshots={project.screenshots}
          placeholders={project.placeholders}
          locale={locale}
          priority={priority}
          sizes="(min-width: 1024px) 34rem, 100vw"
        />
      </div>
    </Reveal>
  );
}
