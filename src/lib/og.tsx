import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/**
 * Social share card. Kept in English for both languages because the image
 * renderer does not shape right-to-left text. The Hebrew card leaves out
 * the second line, since the Hebrew site has no "not just X" headings.
 */
export function renderOgImage({ withTagline = true }: { withTagline?: boolean } = {}) {
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
          {withTagline ? <div>Not just in slide decks.</div> : null}
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#b4b4b0" }}>
          useeffi.com
        </div>
      </div>
    ),
    ogSize,
  );
}
