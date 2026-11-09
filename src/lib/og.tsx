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
          background: "#0b0b0b",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 56, fontWeight: 500, letterSpacing: -3 }}>effi</div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: -3,
          }}
        >
          <div>AI that works inside</div>
          <div>the organization.</div>
          <div style={{ color: "#8c8c88" }}>Not just in slide decks.</div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#a0a09c" }}>
          useeffi.com
        </div>
      </div>
    ),
    ogSize,
  );
}
