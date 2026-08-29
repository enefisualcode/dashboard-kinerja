"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/content/locales";
import type { Dictionary } from "@/content/dictionary";
import type { Project, ProjectCategory } from "@/content/types";
import { projectCount } from "@/lib/i18n";
import { ProjectCard } from "./project-card";

type Filter = ProjectCategory | "all";

/**
 * Client-side filtering, deliberately without URL state: with five projects and
 * four categories, a shareable filtered URL is not worth the extra navigation
 * and the scroll restoration it drags along.
 */
export function WorkFilters({
  projects,
  categories,
  locale,
  dict,
}: {
  projects: Project[];
  categories: ProjectCategory[];
  locale: Locale;
  dict: Dictionary;
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter, projects],
  );

  const options: { key: Filter; label: string }[] = [
    { key: "all", label: dict.work.filterAll },
    ...categories.map((category) => ({
      key: category as Filter,
      label: dict.work.filters[category],
    })),
  ];

  return (
    <div>
      <div
        role="group"
        aria-label={dict.work.filterLabel}
        className="-mx-1 flex flex-wrap gap-2 px-1"
      >
        {options.map((option) => {
          const active = option.key === filter;
          return (
            <button
              key={option.key}
              type="button"
              onClick={() => setFilter(option.key)}
              aria-pressed={active}
              className={`min-h-10 rounded-full border px-4 text-[0.875rem] font-medium transition-colors duration-150 ${
                active
                  ? "border-accent bg-accent-soft text-accent-deep"
                  : "border-line bg-surface text-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-5 font-mono text-[0.75rem] tracking-wide text-faint">
        {projectCount(visible.length, dict.work.countOne, dict.work.countMany)}
      </p>

      {visible.length === 0 ? (
        <p className="mt-8 rounded-frame border border-dashed border-line-strong p-10 text-center text-[0.9375rem] text-muted">
          {dict.work.empty}
        </p>
      ) : (
        <>
          {/* The cards are h3s; this keeps the heading order unbroken without
              repeating the page title on screen. */}
          <h2 className="sr-only">{dict.work.indexLabel}</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <li key={project.slug} className="flex">
                <ProjectCard project={project} locale={locale} dict={dict} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
