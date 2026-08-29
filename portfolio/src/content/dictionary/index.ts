import type { Locale } from "../locales";
import type { Dictionary } from "./types";
import { id } from "./id";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = { id, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
