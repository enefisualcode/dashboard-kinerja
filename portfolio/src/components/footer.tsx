import Link from "next/link";
import type { Locale } from "@/content/locales";
import type { Dictionary } from "@/content/dictionary";
import { contactChannels, siteConfig } from "@/content/site";
import { href } from "@/lib/i18n";
import { ArrowUpRight } from "./primitives";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const channels = contactChannels();

  const pages = [
    { label: dict.nav.work, path: "/work" },
    { label: dict.nav.about, path: "/about" },
    { label: dict.nav.contact, path: "/contact" },
  ];

  return (
    <footer className="hairline mt-8 bg-bg">
      <div className="container-page py-14 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <Link
              href={href("/", locale)}
              className="font-mono text-[0.9375rem] font-semibold text-ink"
            >
              {siteConfig.wordmark}
            </Link>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
              {dict.footer.tagline}
            </p>
          </div>

          <div className="flex gap-12 sm:gap-16">
            <nav aria-label={dict.footer.navHeading}>
              <h2 className="eyebrow-muted">{dict.footer.navHeading}</h2>
              <ul className="mt-3.5 flex flex-col gap-2.5">
                {pages.map((page) => (
                  <li key={page.path}>
                    <Link
                      href={href(page.path, locale)}
                      className="text-[0.9375rem] text-ink-soft transition-colors hover:text-accent-deep"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="eyebrow-muted">{dict.footer.connectHeading}</h2>
              <ul className="mt-3.5 flex flex-col gap-2.5">
                {channels.map((channel) => (
                  <li key={channel.key}>
                    <a
                      href={channel.href}
                      {...(channel.key === "email"
                        ? {}
                        : { target: "_blank", rel: "noreferrer noopener" })}
                      className="group inline-flex items-center gap-1.5 text-[0.9375rem] text-ink-soft transition-colors hover:text-accent-deep"
                    >
                      {channel.label}
                      {channel.key !== "email" ? (
                        <ArrowUpRight className="text-faint transition-colors group-hover:text-accent" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hairline mt-12 flex flex-col gap-2 pt-6 text-[0.8125rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
