import type { Locale } from "@/content/locales";

/**
 * Remember the reader's language choice so a bare "/" lands on it next time.
 * The middleware reads this cookie. A year, lax, no other data — it is a
 * display preference, not tracking.
 */
export function rememberLocale(next: Locale): void {
  if (typeof document === "undefined") return;
  document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
}
