import type { Landing } from "@/content/landing";
import { Avatar } from "./avatar";
import { CtaButton } from "./parts";

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
const TANGLE_OPACITY = [1, 0.7, 0.85];

export function Hero({ t }: { t: Landing }) {
  const h = t.hero;
  return (
    <section className="lp-grid" style={{ borderBottom: "1px solid var(--lp-border)", overflow: "hidden" }}>
      <div
        className="lp-wrap"
        style={{
          paddingBlock: "clamp(48px, 6vw, 88px) clamp(40px, 5vw, 64px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(24px, 2.6vw, 36px)",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--lp-soft)" }}>
          <span className="lp-pulse" style={{ width: 8, height: 8, borderRadius: 999, background: "var(--acc)" }} />
          <span>{h.eyebrow}</span>
        </div>
        <h1 className="lp-h1" style={{ maxWidth: 1100, fontSize: "clamp(40px, 5.2vw, 80px)" }}>
          {h.titleA}{" "}
          <span className="lp-dim">{h.titleB}</span>
        </h1>
        <p className="lp-lead" style={{ maxWidth: 620, fontSize: "clamp(18px, 1.6vw, 22px)", color: "var(--lp-fg2)" }}>
          {h.sub}
        </p>

        <ul className="lp-badges">
          {h.badges.map((b) => (
            <li key={b.text}>
              <BadgeIcon name={b.icon} />
              <span>{b.text}</span>
            </li>
          ))}
        </ul>

        <div className="lp-hero-cta">
          <p className="lp-hero-q">{h.ctaQuestion}</p>
          <div className="lp-hero-btns">
            <CtaButton href="#contact" location="hero" size="lg">
              <span className="lp-btn-effi">
                <Avatar size={26} invert />
              </span>
              {h.ctaPrimary}
            </CtaButton>
            <a href="#in-action" className="lp-btn lp-btn-lg lp-btn-ghost">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
              {h.ctaSecondary}
            </a>
          </div>
        </div>

        <div style={{ alignSelf: "stretch", textAlign: "start", marginTop: "clamp(8px, 2vw, 24px)", display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, fontSize: 13 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ color: "var(--lp-soft)" }}>{h.before.label}</span>
              <span style={{ color: "var(--lp-mute)" }}>{h.before.text}</span>
            </div>
            <div className="lp-fade-in" style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: "end" }}>
              <span style={{ color: "var(--acc)" }}>{h.after.label}</span>
              <span style={{ color: "var(--lp-fg2)" }}>{h.after.text}</span>
            </div>
          </div>
          <Flow viewBox="0 70 1200 270" className="lp-flow-wide" label={h.flowAlt} />
          <Flow viewBox="230 90 780 230" className="lp-flow-narrow" label={h.flowAlt} />
        </div>
      </div>
    </section>
  );
}

/**
 * The flow drawing: tangled lines go into Effi's box and come out straight.
 * Phones get a closer crop so the drawing isn't tiny.
 */
function Flow({ viewBox, className, label }: { viewBox: string; className: string; label: string }) {
  return (
    <svg viewBox={viewBox} width="100%" role="img" aria-label={label} className={className} style={{ display: "block", overflow: "visible" }}>
      <g className="lp-flow-art">
        <g fill="none" strokeLinecap="round">
          {TANGLE.map((d, i) => (
            <path
              key={d}
              className="lp-draw"
              pathLength={1}
              d={d}
              style={{ stroke: "var(--lp-tangle)", opacity: TANGLE_OPACITY[i], animationDelay: `${i * 0.25}s` }}
              strokeWidth="1.5"
            />
          ))}
          {STRAIGHT.map((d) => (
            <path key={d} className="lp-draw-late" pathLength={1} d={d} strokeWidth="2" style={{ stroke: "var(--acc)" }} />
          ))}
        </g>
        {TANGLE.map((d, i) => (
          <circle key={d} r="3" style={{ fill: i === 0 ? "var(--lp-fg2)" : "var(--lp-mute)" }}>
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
        <rect x="598" y="178" width="44" height="44" rx="6" strokeWidth="1.5" style={{ fill: "var(--lp-bg)", stroke: "var(--lp-fg)" }} />
        <rect className="lp-pulse" x="613" y="193" width="14" height="14" rx="2" style={{ fill: "var(--acc)" }} />
      </g>
      <text x="620" y="252" textAnchor="middle" fontSize="13" style={{ fill: "var(--lp-fg)", fontFamily: "var(--font-plex-mono), monospace" }} letterSpacing="2">
        EFFI
      </text>
    </svg>
  );
}

/** Line icons for the hero facts. */
function BadgeIcon({ name }: { name: "moon" | "coins" | "heart" | "infinity" }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;
  if (name === "moon") return <svg {...common}><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>;
  if (name === "coins")
    return (
      <svg {...common}>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  if (name === "heart") return <svg {...common}><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>;
  return <svg {...common}><path d="M7 8.5c-2 0-3.5 1.6-3.5 3.5S5 15.5 7 15.5c3.5 0 6.5-7 10-7 2 0 3.5 1.6 3.5 3.5S19 15.5 17 15.5c-3.5 0-6.5-7-10-7z" /></svg>;
}
