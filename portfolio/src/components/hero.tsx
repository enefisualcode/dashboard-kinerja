import Image from "next/image";
import type { Locale } from "@/content/locales";
import type { Dictionary } from "@/content/dictionary";
import { siteConfig } from "@/content/site";
import { href } from "@/lib/i18n";
import { ArrowRight, ButtonLink } from "./primitives";
import { BrowserFrame, PhoneFrame } from "./product-visual";

/**
 * The hero visual: two real product screenshots, overlapped like a small
 * product gallery rather than a collage. On phones the stack collapses to the
 * single wide shot, because an overlapped composition at 375px is just noise.
 */
function HeroVisual({ caption }: { caption: string }) {
  return (
    <div className="relative">
      <BrowserFrame className="w-full">
        <Image
          src="/screenshots/tracker-summary.png"
          alt=""
          width={2560}
          height={1800}
          priority
          sizes="(min-width: 1024px) 34rem, 100vw"
          className="block h-auto w-full"
        />
      </BrowserFrame>

      <PhoneFrame className="absolute -right-1 -bottom-6 hidden w-[7.25rem] sm:block lg:-right-5 lg:w-[8.25rem]">
        <Image
          src="/screenshots/finance-dash-mobile.png"
          alt=""
          width={1170}
          height={2532}
          sizes="9rem"
          className="block h-auto w-full"
        />
      </PhoneFrame>

      <p className="mt-4 max-w-[24ch] font-mono text-[0.6875rem] tracking-[0.1em] text-faint uppercase sm:mt-10">
        {caption}
      </p>
    </div>
  );
}

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">{dict.hero.eyebrow}</p>

            <h1 className="mt-5 max-w-[19ch] text-balance">
              <span className="block font-mono text-[0.8125rem] font-medium tracking-[0.06em] text-muted">
                {siteConfig.name}
              </span>
              <span className="display-xl mt-3 block text-ink">{dict.hero.headline}</span>
            </h1>

            <p className="lede mt-6 max-w-[46ch] text-pretty">{dict.hero.subhead}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href={href("/work", locale)} variant="primary">
                {dict.hero.primaryCta}
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href={href("/contact", locale)} variant="secondary">
                {dict.hero.secondaryCta}
              </ButtonLink>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-2.5 gap-y-2">
              {dict.hero.categories.map((category) => (
                <li
                  key={category}
                  className="font-mono text-[0.6875rem] tracking-[0.08em] text-faint uppercase after:ml-2.5 after:text-line-strong after:content-['/'] last:after:content-['']"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <HeroVisual caption={dict.hero.visualCaption} />
        </div>
      </div>
    </section>
  );
}
