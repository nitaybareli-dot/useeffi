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
          background: "#fcfbf8",
          color: "#0a0a0a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 56, fontWeight: 600, letterSpacing: -3 }}>
          effi
          <div style={{ display: "flex", width: 20, height: 20, marginLeft: 8, borderRadius: 5, background: "#3b6ef5" }} />
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
          <div>AI solutions,</div>
          <div style={{ color: "#a3a19b" }}>tailored to your organization.</div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#77756f" }}>
          useeffi.com
        </div>
      </div>
    ),
    ogSize,
  );
}
