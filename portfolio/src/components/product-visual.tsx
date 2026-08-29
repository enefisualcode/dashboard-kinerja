import Image from "next/image";
import type { ReactNode } from "react";
import type { Locale } from "@/content/locales";
import type { Screenshot, ScreenshotPlaceholder } from "@/content/types";
import { getDictionary } from "@/content/dictionary";

/* -------------------------------------------------------------------------- */
/* Frames                                                                     */
/* -------------------------------------------------------------------------- */

/** A restrained browser chrome. Three dots and an address bar, nothing more. */
export function BrowserFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-frame border border-line bg-surface shadow-frame ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-2 border-b border-line bg-raised px-3.5 py-2.5"
      >
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
        </span>
        <span className="ml-1 h-4 flex-1 rounded-full bg-line/70" />
      </div>
      <div className="bg-surface">{children}</div>
    </div>
  );
}

/** A phone outline. No notch drawing, no glare — it should read as a device
 *  without competing with the screenshot inside it. */
export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border-[6px] border-ink/85 bg-ink shadow-frame ${className}`}
    >
      <div className="overflow-hidden rounded-[22px] bg-surface">{children}</div>
    </div>
  );
}

/**
 * A phone is a fixed-ish object: stretched to a full content column it stops
 * reading as a device. So a phone frame is always capped and centred, while a
 * browser frame fills whatever space it is given.
 */
function Frame({
  kind,
  children,
}: {
  kind: "browser" | "phone";
  children: ReactNode;
}) {
  if (kind === "browser") return <BrowserFrame>{children}</BrowserFrame>;
  return (
    <div className="mx-auto w-full max-w-[17.5rem]">
      <PhoneFrame>{children}</PhoneFrame>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Screenshot                                                                 */
/* -------------------------------------------------------------------------- */

export function ScreenshotFigure({
  shot,
  locale,
  priority = false,
  sizes,
  showCaption = true,
  className = "",
}: {
  shot: Screenshot;
  locale: Locale;
  priority?: boolean;
  sizes?: string;
  showCaption?: boolean;
  className?: string;
}) {
  const dict = getDictionary(locale);
  const resolvedSizes =
    sizes ?? (shot.frame === "phone" ? "18rem" : "(min-width: 1024px) 46rem, 100vw");

  return (
    <figure className={className}>
      <Frame kind={shot.frame}>
        <Image
          src={shot.src}
          alt={shot.alt[locale]}
          width={shot.width}
          height={shot.height}
          sizes={resolvedSizes}
          priority={priority}
          className="block h-auto w-full"
        />
      </Frame>
      {showCaption ? (
        <figcaption className="mt-3 flex flex-col gap-1 text-[0.8125rem] leading-relaxed text-muted">
          <span>{shot.caption[locale]}</span>
          {shot.demoData ? (
            <span className="font-mono text-[0.6875rem] tracking-wide text-faint">
              {dict.caseStudy.demoDataNote}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* -------------------------------------------------------------------------- */
/* Placeholder                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Shown where a real screenshot does not exist yet. It is deliberately an empty
 * labelled frame: inventing a convincing fake interface would misrepresent what
 * the product actually does.
 */
export function ScreenshotPlaceholderFigure({
  placeholder,
  locale,
  className = "",
  minHeight = "18rem",
}: {
  placeholder: ScreenshotPlaceholder;
  locale: Locale;
  className?: string;
  minHeight?: string;
}) {
  const dict = getDictionary(locale);

  return (
    <figure className={className}>
      <Frame kind={placeholder.frame}>
        <div
          style={{ minHeight }}
          className="flex flex-col items-center justify-center gap-2.5 bg-[repeating-linear-gradient(135deg,var(--color-raised)_0px,var(--color-raised)_10px,var(--color-bg)_10px,var(--color-bg)_20px)] px-6 py-12 text-center"
        >
          <span className="font-mono text-[0.625rem] tracking-[0.14em] text-faint uppercase">
            {dict.caseStudy.screenshotPending}
          </span>
          <span className="max-w-[22ch] text-[0.9375rem] leading-snug font-medium text-ink-soft">
            {placeholder.label[locale]}
          </span>
        </div>
      </Frame>
      <figcaption className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
        {dict.caseStudy.screenshotPendingNote}
      </figcaption>
    </figure>
  );
}

/* -------------------------------------------------------------------------- */
/* Whichever exists                                                           */
/* -------------------------------------------------------------------------- */

/** The lead visual for a project: its first screenshot, or its first
 *  placeholder if none has been added yet. */
export function LeadVisual({
  screenshots,
  placeholders,
  locale,
  priority = false,
  sizes,
  className = "",
}: {
  screenshots: Screenshot[];
  placeholders: ScreenshotPlaceholder[];
  locale: Locale;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  if (screenshots.length > 0) {
    return (
      <ScreenshotFigure
        shot={screenshots[0]}
        locale={locale}
        priority={priority}
        sizes={sizes}
        className={className}
      />
    );
  }
  if (placeholders.length > 0) {
    return (
      <ScreenshotPlaceholderFigure
        placeholder={placeholders[0]}
        locale={locale}
        className={className}
      />
    );
  }
  return null;
}
