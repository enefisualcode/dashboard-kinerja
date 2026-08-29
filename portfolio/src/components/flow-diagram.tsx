import type { Locale } from "@/content/locales";
import type { FlowStep } from "@/content/types";

/**
 * A "how it works" flow, drawn with CSS boxes and one small inline arrow — no
 * diagramming library. It runs left-to-right with space, and stacks vertically
 * on narrow screens with the arrow rotated to point down.
 */
export function FlowDiagram({
  steps,
  locale,
  tint,
}: {
  steps: FlowStep[];
  locale: Locale;
  tint: string;
}) {
  return (
    <ol className="flex flex-col gap-0 md:flex-row md:items-stretch md:gap-0">
      {steps.map((step, index) => (
        <li
          key={step.label.en}
          className="flex flex-col md:flex-1 md:flex-row md:items-stretch"
        >
          <div className="card flex-1 p-5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: tint }}
              />
              <span className="font-mono text-[0.6875rem] tracking-[0.1em] text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-[0.9375rem] leading-snug font-semibold text-ink">
              {step.label[locale]}
            </p>
            <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-pretty text-muted">
              {step.detail[locale]}
            </p>
          </div>

          {index < steps.length - 1 ? (
            <div
              aria-hidden="true"
              className="flex shrink-0 items-center justify-center py-2 md:px-2 md:py-0"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="h-4 w-4 rotate-90 text-line-strong md:rotate-0"
              >
                <path
                  d="M2.5 8h11m0 0-4-4m4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
