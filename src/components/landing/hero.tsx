import type { Landing } from "@/content/landing";
import { Wordmark } from "./wordmark";

// Drawn for a 690-wide box so the art can sit beside the headline.
const TANGLE = [
  "M664,240 C641.6,48 613.6,448 591.2,256 C574.4,96 546.4,64 540.8,224 C535.2,400 591.2,400 574.4,272 C557.6,144 512.8,128 501.6,288 C493.2,416 535.2,432 529.6,320 C524,192 479.2,160 462.4,256 C451.2,320 434.4,336 423.2,272 C412,208 389.6,240 356,240",
  "M664,144 C624.8,144 619.2,336 585.6,368 C552,400 557.6,160 524,176 C490.4,192 512.8,384 484.8,384 C456.8,384 473.6,176 445.6,192 C423.2,208 434.4,304 412,304 C395.2,304 384,240 356,240",
  "M664,352 C636,400 608,112 574.4,144 C546.4,176 563.2,336 535.2,352 C501.6,368 490.4,112 468,128 C445.6,144 456.8,288 434.4,272 C417.6,259.2 400.8,240 356,240",
];
const STRAIGHT = [
  "M333.6,240 C311.2,240 300,112 277.6,112 L20,112",
  "M333.6,240 L20,240",
  "M333.6,240 C311.2,240 300,368 277.6,368 L20,368",
];
const TANGLE_STROKES = ["#5a5a5a", "#3e3e3e", "#4a4a4a"];

export function Hero({ t }: { t: Landing }) {
  const h = t.hero;
  return (
    <section className="lp-grid" style={{ borderBottom: "1px solid #1c1c1c", overflow: "hidden" }}>
      <div
        className="lp-wrap"
        style={{
          paddingBlock: "clamp(56px, 8vw, 112px) clamp(40px, 5vw, 64px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(28px, 3vw, 40px)",
        }}
      >
        <div className="lp-hero-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(24px, 2.6vw, 36px)" }}>
            <div>
              <Wordmark size="clamp(36px, 4.2vw, 60px)" loop />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--lp-soft)" }}>
              <span className="lp-pulse" style={{ width: 8, height: 8, borderRadius: 999, background: "var(--acc)" }} />
              <span>{h.eyebrow}</span>
            </div>
            <h1 className="lp-h1 lp-hero-title">
              {h.titleA}{" "}
              <span className="lp-dim">{h.titleB}</span>
            </h1>
            <p className="lp-lead" style={{ maxWidth: 560, fontSize: "clamp(18px, 1.5vw, 21px)", color: "#c7c7c7" }}>
              {h.sub}
            </p>
          </div>

          <div className="lp-hero-art" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, fontSize: 13 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ color: "var(--lp-soft)" }}>{h.before.label}</span>
                <span style={{ color: "var(--lp-mute)" }}>{h.before.text}</span>
              </div>
              <div className="lp-fade-in" style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: "end" }}>
                <span style={{ color: "var(--acc)" }}>{h.after.label}</span>
                <span style={{ color: "#c7c7c7" }}>{h.after.text}</span>
              </div>
            </div>
            <svg viewBox="0 40 690 400" width="100%" role="img" aria-label={h.flowAlt} style={{ display: "block", overflow: "visible" }}>
              <g className="lp-flow-art">
                <g fill="none" strokeLinecap="round">
                  {TANGLE.map((d, i) => (
                    <path
                      key={d}
                      className="lp-draw"
                      pathLength={1}
                      d={d}
                      stroke={TANGLE_STROKES[i]}
                      strokeWidth="1.5"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    />
                  ))}
                  {STRAIGHT.map((d) => (
                    <path key={d} className="lp-draw-late" pathLength={1} d={d} strokeWidth="2" style={{ stroke: "var(--acc)" }} />
                  ))}
                </g>
                {TANGLE.map((d, i) => (
                  <circle key={d} r="3" fill={i === 0 ? "#bdbdbd" : "#8c8c8c"}>
                    <animateMotion dur={`${9 + i}s`} begin={`${i * 2}s`} repeatCount="indefinite" path={d} />
                  </circle>
                ))}
                <g className="lp-fade-in">
                  {[0, 1, 2, 0, 2].map((line, i) => (
                    <circle key={i} r="4" style={{ fill: "var(--acc)" }}>
                      <animateMotion dur="1.6s" begin={`${[0, 0.55, 1.05, 0.8, 0.25][i]}s`} repeatCount="indefinite" path={STRAIGHT[line]} />
                    </circle>
                  ))}
                  {[106, 234, 362].map((y) => (
                    <rect key={y} x="14" y={y} width="12" height="12" rx="2" style={{ fill: "var(--acc)" }} />
                  ))}
                </g>
                <rect x="322.8" y="218" width="44" height="44" rx="6" fill="#000" stroke="#fff" strokeWidth="1.5" />
                <rect className="lp-pulse" x="337.8" y="233" width="14" height="14" rx="2" style={{ fill: "var(--acc)" }} />
              </g>
              <text x="344.8" y="292" textAnchor="middle" fill="#fff" fontSize="13" style={{ fontFamily: "var(--font-plex-mono), monospace" }} letterSpacing="2">
                EFFI
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
