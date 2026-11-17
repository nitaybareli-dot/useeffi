import type { Landing } from "@/content/landing";
import { CtaButton } from "./parts";
import { Wordmark } from "./wordmark";

const TANGLE = [
  "M1190,200 C1150,80 1100,330 1060,210 C1030,110 980,90 970,190 C960,300 1060,300 1030,220 C1000,140 920,130 900,230 C885,310 960,320 950,250 C940,170 860,150 830,210 C810,250 780,260 760,220 C740,180 700,200 640,200",
  "M1190,140 C1120,140 1110,260 1050,280 C990,300 1000,150 940,160 C880,170 920,290 870,290 C820,290 850,160 800,170 C760,180 780,240 740,240 C710,240 690,200 640,200",
  "M1190,270 C1140,300 1090,120 1030,140 C980,160 1010,260 960,270 C900,280 880,120 840,130 C800,140 820,230 780,220 C750,212 720,200 640,200",
];
const STRAIGHT = [
  "M600,200 C560,200 540,120 500,120 L40,120",
  "M600,200 L40,200",
  "M600,200 C560,200 540,280 500,280 L40,280",
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
        <div>
          <Wordmark size="clamp(36px, 4.2vw, 60px)" loop />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--lp-soft)" }}>
          <span className="lp-pulse" style={{ width: 8, height: 8, borderRadius: 999, background: "var(--acc)" }} />
          <span>{h.eyebrow}</span>
        </div>
        <h1 className="lp-h1" style={{ maxWidth: 1100 }}>
          {h.titleA}{" "}
          <span className="lp-dim">{h.titleB}</span>
        </h1>
        <div className="lp-head" style={{ gap: "28px 48px" }}>
          <p className="lp-lead" style={{ maxWidth: 580, fontSize: "clamp(18px, 1.6vw, 22px)", color: "#c7c7c7" }}>
            {h.sub}
          </p>
          <CtaButton href="#contact" location="hero" arrow>
            {h.cta}
          </CtaButton>
        </div>

        <div style={{ marginTop: "clamp(16px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: 14 }}>
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
          <svg viewBox="0 0 1200 400" width="100%" role="img" aria-label={h.flowAlt} style={{ display: "block", overflow: "visible" }}>
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
                {[114, 194, 274].map((y) => (
                  <rect key={y} x="34" y={y} width="12" height="12" rx="2" style={{ fill: "var(--acc)" }} />
                ))}
              </g>
              <rect x="598" y="178" width="44" height="44" rx="6" fill="#000" stroke="#fff" strokeWidth="1.5" />
              <rect className="lp-pulse" x="613" y="193" width="14" height="14" rx="2" style={{ fill: "var(--acc)" }} />
            </g>
            <text x="620" y="252" textAnchor="middle" fill="#fff" fontSize="13" style={{ fontFamily: "var(--font-plex-mono), monospace" }} letterSpacing="2">
              EFFI
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
