"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/content/locales";
import type { Dictionary } from "@/content/dictionary";
import { siteConfig } from "@/content/site";
import { href } from "@/lib/i18n";
import { LanguageToggle } from "./language-toggle";
import { GitHubMark } from "./primitives";

export function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const links = [
    { label: dict.nav.work, path: "/work" },
    { label: dict.nav.about, path: "/about" },
    { label: dict.nav.contact, path: "/contact" },
  ];

  /**
   * The scrolled treatment is a purely visual DOM concern, so it is toggled on
   * the element directly instead of round-tripping through React state on every
   * scroll event.
   */
  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    const apply = () => {
      node.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
    };

    apply();
    window.addEventListener("scroll", apply, { passive: true });
    return () => window.removeEventListener("scroll", apply);
  }, []);

  // Escape closes the panel and returns focus to the button that opened it.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (path: string) => pathname.startsWith(`/${locale}${path}`);

  return (
    <header
      ref={headerRef}
      data-scrolled="false"
      className="sticky top-0 z-50 border-b border-transparent bg-bg transition-colors duration-200 data-[scrolled=true]:border-line data-[scrolled=true]:bg-bg/85 data-[scrolled=true]:backdrop-blur-md data-[scrolled=true]:backdrop-saturate-150"
    >
      <nav className="container-page" aria-label={siteConfig.wordmark}>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <Link
            href={href("/", locale)}
            className="font-mono text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink transition-colors hover:text-accent-deep"
          >
            {siteConfig.wordmark}
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.path}
                href={href(link.path, locale)}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-150 ${
                  isActive(link.path) ? "text-accent-deep" : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <span aria-hidden="true" className="mx-2 h-5 w-px bg-line" />

            <LanguageToggle locale={locale} />

            <a
              href={siteConfig.github.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={dict.nav.github}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-raised hover:text-ink"
            >
              <GitHubMark />
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle locale={locale} />
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-raised"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
                {open ? (
                  <path
                    d="m5 5 10 10M15 5 5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 6h14M3 13h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* A short panel, not a fullscreen takeover. Each link closes it on the
            way out, so no route-change effect is needed. */}
        <div id="mobile-nav" hidden={!open} className="border-t border-line pb-4 md:hidden">
          <ul className="flex flex-col py-2">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={href(link.path, locale)}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`flex min-h-12 items-center rounded-lg px-2 text-[1.0625rem] transition-colors ${
                    isActive(link.path) ? "text-accent-deep" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.github.url}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center gap-2 rounded-lg px-2 text-[1.0625rem] text-ink"
              >
                <GitHubMark />
                GitHub
                <span className="sr-only">({dict.common.externalLink})</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
