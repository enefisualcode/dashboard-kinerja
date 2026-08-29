import Link from "next/link";
import type { Locale } from "@/content/locales";
import type { Dictionary } from "@/content/dictionary";
import type { Project } from "@/content/types";
import { href } from "@/lib/i18n";
import { ArrowRight, StatusBadge, Tag } from "./primitives";

/**
 * Used for "Currently Building" and for the Work index. Smaller than a
 * showcase, but the same materials: number, status, name, benefit line, tags.
 * The whole card is one link — the arrow is decoration, not a second target.
 */
export function ProjectCard({
  project,
  locale,
  dict,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
}) {
  // A shipped project invites a case study; an unfinished one invites a look at
  // where it has got to.
  const cta =
    project.status === "research"
      ? dict.work.exploreResearch
      : project.status === "active"
        ? dict.work.viewCaseStudy
        : dict.work.viewProgress;

  return (
    <article className="group card relative flex w-full flex-col p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card sm:p-7">
      <div
        aria-hidden="true"
        className="mb-6 h-0.5 w-10 rounded-full"
        style={{ background: project.tint }}
      />

      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[0.75rem] tracking-[0.08em] text-faint">
          {project.id}
        </span>
        <StatusBadge status={project.status} locale={locale} size="sm" />
      </div>

      <h3 className="mt-4 text-[1.3125rem] leading-tight font-semibold tracking-[-0.02em] text-ink">
        <Link href={href(`/work/${project.slug}`, locale)} className="before:absolute before:inset-0">
          {project.name}
        </Link>
      </h3>

      <p className="mt-1.5 font-mono text-[0.6875rem] tracking-[0.06em] text-faint uppercase">
        {project.kind[locale]}
      </p>

      <p className="mt-4 text-[0.9375rem] leading-relaxed text-pretty text-ink-soft">
        {project.tagline[locale]}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <li key={tag.en}>
            <Tag>{tag[locale]}</Tag>
          </li>
        ))}
      </ul>

      <p className="arrow-link mt-auto pt-7 text-[0.9375rem] group-hover:text-accent-deep">
        {cta}
        <ArrowRight />
      </p>
    </article>
  );
}
