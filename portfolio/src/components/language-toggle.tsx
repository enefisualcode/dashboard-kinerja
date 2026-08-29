"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, localeShort, type Locale } from "@/content/locales";
import { swapLocale } from "@/lib/i18n";
import { rememberLocale } from "@/lib/locale-cookie";

/**
 * ID | EN. Two real links, so the control works without JavaScript, is
 * keyboard-reachable, and can be opened in a new tab like any other link.
 * The choice is written to a cookie the middleware reads, so it survives to the
 * next visit and to a bare "/" entry.
 */
export function LanguageToggle({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line bg-surface p-0.5 ${className}`}
      role="group"
      aria-label={localeNames[locale] === localeNames.id ? "Pilih bahasa" : "Choose language"}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={swapLocale(pathname, code)}
            hrefLang={code}
            lang={code}
            aria-current={active ? "true" : undefined}
            onClick={() => rememberLocale(code)}
            className={`min-h-9 rounded-full px-3 font-mono text-[0.6875rem] leading-none font-medium tracking-[0.08em] transition-colors duration-150 ${
              active
                ? "bg-ink text-white"
                : "text-muted hover:bg-raised hover:text-ink"
            } flex items-center`}
          >
            <span aria-hidden="true">{localeShort[code]}</span>
            <span className="sr-only">{localeNames[code]}</span>
          </Link>
        );
      })}
    </div>
  );
}
