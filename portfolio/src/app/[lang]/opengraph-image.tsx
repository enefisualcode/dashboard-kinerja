import { ImageResponse } from "next/og";
import { isLocale } from "@/content/locales";
import { getDictionary } from "@/content/dictionary";
import { siteConfig } from "@/content/site";

export const alt = "Nanda Nabil Falah — Digital Product Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The share card, per locale. Built from the same palette as the site so a
 * shared link looks like the page it opens.
 */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "id";
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F7F5",
          padding: "76px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#0E7C6F",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#0A5B52",
              display: "flex",
            }}
          >
            {dict.hero.eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 30, color: "#6B6B66", display: "flex" }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 70,
              lineHeight: 1.08,
              letterSpacing: -2.4,
              color: "#171717",
              maxWidth: 940,
              display: "flex",
            }}
          >
            {dict.hero.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 23,
            color: "#90908A",
          }}
        >
          {dict.hero.categories.slice(0, 4).map((category, index) => (
            <div key={category} style={{ display: "flex", gap: 16 }}>
              {index > 0 ? <div style={{ display: "flex" }}>·</div> : null}
              <div style={{ display: "flex" }}>{category}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
