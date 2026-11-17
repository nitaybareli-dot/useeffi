import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/**
 * Social share card. Kept in English for both languages because the image
 * renderer does not shape right-to-left text.
 */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#000000",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 56, fontWeight: 600, letterSpacing: -3 }}>
          effi
          <div style={{ display: "flex", width: 20, height: 20, marginLeft: 8, borderRadius: 5, background: "#5b8cff" }} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: -3,
          }}
        >
          <div>What took days</div>
          <div style={{ color: "#6b6b6b" }}>now takes minutes.</div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#b4b4b0" }}>
          useeffi.com
        </div>
      </div>
    ),
    ogSize,
  );
}
