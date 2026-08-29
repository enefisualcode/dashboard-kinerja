import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { htmlLang, isLocale, locales, type Locale } from "@/content/locales";
import { getDictionary } from "@/content/dictionary";
import { siteConfig } from "@/content/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.meta.homeTitle,
      template: `%s · ${siteConfig.name}`,
    },
    description: dict.meta.homeDescription,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.github.url }],
    creator: siteConfig.name,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        id: "/id",
        en: "/en",
        "x-default": "/id",
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: lang === "id" ? "id_ID" : "en_US",
      alternateLocale: lang === "id" ? "en_US" : "id_ID",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: `/${lang}`,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
    },
    // The apple touch icon comes from apple-icon.tsx via the file convention.
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale: Locale = lang;
  const dict = getDictionary(locale);

  return (
    <html lang={htmlLang[locale]} className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2.5 focus:text-[0.875rem] focus:text-white"
        >
          {dict.nav.skipToContent}
        </a>
        <Navbar locale={locale} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
