import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { Locale } from "@/content/locales";
import type { ProjectStatus } from "@/content/types";
import { getDictionary } from "@/content/dictionary";

/* -------------------------------------------------------------------------- */
/* Icons — inline so no icon dependency is shipped.                            */
/* -------------------------------------------------------------------------- */

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={`h-4 w-4 shrink-0 ${className}`}
    >
      <path
        d="M2.5 8h11m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={`h-3.5 w-3.5 shrink-0 ${className}`}
    >
      <path
        d="M4.5 11.5 11.5 4.5m0 0H5.75m5.75 0v5.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHubMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`h-4 w-4 ${className}`} fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Buttons — a <button> stays a button, a <Link> stays a link.                 */
/* -------------------------------------------------------------------------- */

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-[0.9375rem] font-medium " +
  "min-h-11 px-5 transition-colors duration-150 focus-visible:outline-2 " +
  "focus-visible:outline-offset-3";

const variants = {
  primary:
    "bg-ink text-white hover:bg-accent-deep focus-visible:outline-accent-deep",
  secondary:
    "bg-surface text-ink border border-line-strong hover:border-ink hover:bg-raised focus-visible:outline-accent",
  ghost: "text-ink-soft hover:text-accent-deep focus-visible:outline-accent",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link className={`${buttonBase} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function ExternalButtonLink({
  variant = "secondary",
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className={`${buttonBase} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Labels                                                                     */
/* -------------------------------------------------------------------------- */

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-2.5 py-1 text-[0.75rem] leading-none font-medium text-muted">
      {children}
    </span>
  );
}

export function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-raised px-2 py-1 font-mono text-[0.6875rem] leading-none tracking-wide text-muted">
      {children}
    </span>
  );
}

const statusStyles: Record<ProjectStatus, { dot: string; text: string; bg: string }> = {
  active: { dot: "bg-accent", text: "text-accent-deep", bg: "bg-accent-soft" },
  "in-development": { dot: "bg-amber", text: "text-amber", bg: "bg-amber-soft" },
  research: { dot: "bg-violet", text: "text-violet", bg: "bg-violet-soft" },
  prototype: { dot: "bg-faint", text: "text-muted", bg: "bg-raised" },
};

export function StatusBadge({
  status,
  locale,
  size = "md",
}: {
  status: ProjectStatus;
  locale: Locale;
  size?: "sm" | "md";
}) {
  const style = statusStyles[status];
  const label = getDictionary(locale).status[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${style.bg} ${style.text} ${
        size === "sm" ? "px-2 py-0.5 text-[0.625rem]" : "px-2.5 py-1 text-[0.6875rem]"
      } font-mono leading-none font-medium tracking-[0.1em] uppercase`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {label}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Section scaffolding                                                        */
/* -------------------------------------------------------------------------- */

export function SectionHeading({
  label,
  heading,
  intro,
  id,
  align = "start",
}: {
  label?: string;
  heading: string;
  intro?: string;
  id?: string;
  align?: "start" | "center";
}) {
  return (
    <header
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      {label ? <p className="eyebrow">{label}</p> : null}
      <h2 id={id} className="display-lg max-w-2xl text-balance text-ink">
        {heading}
      </h2>
      {intro ? (
        <p className={`lede max-w-xl text-pretty ${align === "center" ? "mx-auto" : ""}`}>
          {intro}
        </p>
      ) : null}
    </header>
  );
}
