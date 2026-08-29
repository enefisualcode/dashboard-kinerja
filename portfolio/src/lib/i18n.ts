import type { Bilingual, Locale } from "@/content/locales";

/** Read one side of a bilingual string. */
export function t(value: Bilingual, locale: Locale): string {
  return value[locale];
}

/** Build an in-site path for a locale: `href("/work", "en") === "/en/work"`. */
export function href(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** Swap the locale in a pathname, keeping the rest of the route intact. */
export function swapLocale(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${next}`;
  segments[0] = next;
  return `/${segments.join("/")}`;
}

/** "2 projects" / "2 project" without pulling in an Intl plural dependency. */
export function projectCount(n: number, one: string, many: string): string {
  return n === 1 ? one : many.replace("{n}", String(n));
}
