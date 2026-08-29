import type { Bilingual } from "./locales";

/**
 * Central place for everything personal. Fill in the placeholders below and the
 * whole site updates — nothing else needs editing.
 *
 * `null` means "not published yet": the UI hides the link entirely instead of
 * rendering a dead or invented one.
 */
export const siteConfig = {
  name: "Nanda Nabil Falah",
  shortName: "Nabil",
  wordmark: "NABIL.",

  /** Set this to the real deployed origin before going live. */
  url: "https://nandanabil.dev",

  github: {
    username: "enefisualcode",
    url: "https://github.com/enefisualcode",
  },

  /** Add the real address here when you are ready to publish it. */
  email: null as string | null,

  /** Add the real profile URL here when you are ready to publish it. */
  linkedin: null as string | null,

  /** Optional: "https://wa.me/62..." */
  whatsapp: null as string | null,

  role: {
    id: "Membangun produk digital yang berguna",
    en: "Building useful digital products",
  } satisfies Bilingual,
} as const;

export type ContactChannel = {
  key: "email" | "linkedin" | "github" | "whatsapp";
  href: string;
  label: string;
  /** What the visitor should expect from this channel. */
  hint: Bilingual;
};

/** Only the channels that actually have a value are returned. */
export function contactChannels(): ContactChannel[] {
  const channels: ContactChannel[] = [
    {
      key: "github",
      href: siteConfig.github.url,
      label: "GitHub",
      hint: {
        id: "Kode dan proyek yang sedang dikerjakan.",
        en: "Code and work in progress.",
      },
    },
  ];

  if (siteConfig.email) {
    channels.unshift({
      key: "email",
      href: `mailto:${siteConfig.email}`,
      label: "Email",
      hint: {
        id: "Cara paling langsung untuk mulai diskusi.",
        en: "The most direct way to start a conversation.",
      },
    });
  }

  if (siteConfig.linkedin) {
    channels.push({
      key: "linkedin",
      href: siteConfig.linkedin,
      label: "LinkedIn",
      hint: { id: "Untuk urusan profesional.", en: "For professional enquiries." },
    });
  }

  if (siteConfig.whatsapp) {
    channels.push({
      key: "whatsapp",
      href: siteConfig.whatsapp,
      label: "WhatsApp",
      hint: { id: "Untuk obrolan cepat.", en: "For a quick chat." },
    });
  }

  return channels;
}
