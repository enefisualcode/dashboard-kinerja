import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** The home-screen icon: the wordmark's initial on the site's ink, with the
 *  single teal accent the rest of the design uses for state. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#171717",
          color: "#F7F7F5",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        N
        <div
          style={{
            position: "absolute",
            right: 34,
            top: 44,
            width: 20,
            height: 20,
            borderRadius: 999,
            background: "#0E7C6F",
            display: "flex",
          }}
        />
      </div>
    ),
    size,
  );
}
