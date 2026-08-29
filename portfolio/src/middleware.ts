import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/content/locales";

const COOKIE = "NEXT_LOCALE";

/** Pick a locale from the stored preference, then the browser, then the default. */
function resolveLocale(request: NextRequest): string {
  const stored = request.cookies.get(COOKIE)?.value;
  if (stored && isLocale(stored)) return stored;

  const header = request.headers.get("accept-language") ?? "";
  // Indonesian stays the default, so English only wins when it is genuinely
  // ranked ahead of Indonesian in the header.
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    if (tag.startsWith("id")) return "id";
    if (tag.startsWith("en")) return "en";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except Next internals, the metadata routes, and static files.
  matcher: [
    "/((?!_next|api|favicon.ico|icon.svg|screenshots|robots.txt|sitemap.xml|opengraph-image).*)",
  ],
};
