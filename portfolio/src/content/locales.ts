export const locales = ["id", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

export const localeNames: Record<Locale, string> = {
  id: "Bahasa Indonesia",
  en: "English",
};

export const localeShort: Record<Locale, string> = {
  id: "ID",
  en: "EN",
};

/** HTML `lang` value for each locale. */
export const htmlLang: Record<Locale, string> = {
  id: "id-ID",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** A bilingual string. Both languages are always required — no fallbacks, so a
 *  missing translation is a type error rather than an English string leaking
 *  into the Indonesian page. */
export type Bilingual = Record<Locale, string>;
