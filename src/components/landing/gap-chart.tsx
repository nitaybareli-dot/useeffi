import type { Landing } from "@/content/landing";
import { Label } from "./parts";

// Illustrative series (not measured data). Plot area: x 90–1040, y 50–390.
const ADOPTING =
  "M90.0,362.8 L129.6,363.6 L169.2,362.8 L208.8,352.4 L248.3,354.1 L287.9,342.0 L327.5,336.7 L367.1,332.2 L406.7,317.5 L446.2,313.3 L485.8,297.6 L525.4,290.4 L565.0,277.8 L604.6,260.6 L644.2,241.8 L683.8,235.9 L723.3,219.4 L762.9,198.5 L802.5,178.0 L842.1,165.3 L881.7,149.6 L921.2,124.0 L960.8,116.2 L1000.4,86.4 L1040.0,70.4";
const WAITING =
  "M90.0,362.8 L129.6,362.3 L169.2,361.2 L208.8,359.1 L248.3,355.3 L287.9,348.9 L327.5,351.8 L367.1,346.3 L406.7,343.5 L446.2,343.4 L485.8,339.7 L525.4,341.4 L565.0,339.2 L604.6,335.7 L644.2,329.6 L683.8,329.4 L723.3,328.0 L762.9,323.6 L802.5,322.4 L842.1,321.4 L881.7,315.1 L921.2,313.6 L960.8,315.0 L1000.4,310.1 L1040.0,308.4";
const AREA =
  "M90.0,362.8 L129.6,363.6 L169.2,362.8 L208.8,352.4 L248.3,354.1 L287.9,342.0 L327.5,336.7 L367.1,332.2 L406.7,317.5 L446.2,313.3 L485.8,297.6 L525.4,290.4 L565.0,277.8 L604.6,260.6 L644.2,241.8 L683.8,235.9 L723.3,219.4 L762.9,198.5 L802.5,178.0 L842.1,165.3 L881.7,149.6 L921.2,124.0 L960.8,116.2 L1000.4,86.4 L1040.0,70.4 L1040.0,308.4 L1000.4,310.1 L960.8,315.0 L921.2,313.6 L881.7,315.1 L842.1,321.4 L802.5,322.4 L762.9,323.6 L723.3,328.0 L683.8,329.4 L644.2,329.6 L604.6,335.7 L565.0,339.2 L525.4,341.4 L485.8,339.7 L446.2,343.4 L406.7,343.5 L367.1,346.3 L327.5,351.8 L287.9,348.9 L248.3,355.3 L208.8,359.1 L169.2,361.2 L129.6,362.3 L90.0,362.8 Z";
const A_END = { x: 1040, y: 70.4 };
const B_END = { x: 1040, y: 308.4 };
const X_TICKS = [90, 327.5, 565, 802.5, 1040];

/** Two organizations, same start: the one adopting AI pulls away. Time runs left to right in both languages. */
export function GapChart({ t }: { t: Landing }) {
  const g = t.gap;
  const font = "var(--font-sans), sans-serif";
  // The chart itself runs left to right; Hebrew labels inside it still read right to left.
  const dir = t.lang === "he" ? "rtl" : "ltr";
  return (
    <section>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
        <div className="lp-head lp-rv">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Label n="04">{g.label}</Label>
            <h2 className="lp-h2">
              {g.titleA}
              <span className="lp-dim">{g.titleB}</span>
            </h2>
          </div>
          <p className="lp-lead">{g.lead}</p>
        </div>
        <div className="lp-rv" style={{ border: "1px solid var(--lp-line)", borderRadius: 10, padding: "clamp(20px, 3vw, 36px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginBottom: 20 }}>
            <span style={{ fontSize: 18, fontWeight: 500 }}>{g.chartTitle}</span>
            <span className="lp-mono" style={{ fontSize: 12, color: "var(--lp-mute)" }}>
              {g.illustration}
            </span>
          </div>
          <div dir="ltr" style={{ overflowX: "auto" }}>
            <svg viewBox="0 0 1200 440" width="100%" role="img" aria-label={g.chartAlt} style={{ display: "block", overflow: "visible", minWidth: 640 }}>
              {[50, 135, 220, 305].map((y) => (
                <line key={y} x1="90" y1={y} x2="1040" y2={y} stroke="#1a1a1a" />
              ))}
              {X_TICKS.map((x) => (
                <line key={x} x1={x} y1="50" x2={x} y2="390" stroke="#1f1f1f" strokeDasharray="3 5" />
              ))}
              <line x1="90" y1="390" x2="1040" y2="390" stroke="#3a3a3a" />
              <path className="lp-late" d={AREA} style={{ fill: "var(--acc)" }} fillOpacity="0.07" />
              <path className="lp-draw-scroll" pathLength={1} d={WAITING} fill="none" stroke="#8c8c8c" strokeWidth="2" strokeLinejoin="round" />
              <path className="lp-draw-scroll" pathLength={1} d={ADOPTING} fill="none" strokeWidth="2.5" strokeLinejoin="round" style={{ stroke: "var(--acc)" }} />
              <circle cx="90" cy="362.8" r="4" fill="#fff" />
              <g className="lp-late">
                <circle cx={A_END.x} cy={A_END.y} r="5" style={{ fill: "var(--acc)" }} />
                <circle cx={B_END.x} cy={B_END.y} r="5" fill="#8c8c8c" />
                <rect x="1056" y={A_END.y - 15} width="132" height="30" rx="15" fill="#000" strokeWidth="1.2" style={{ stroke: "var(--acc)" }} />
                <text x="1122" y={A_END.y + 5} textAnchor="middle" fill="#fff" fontSize="14" style={{ fontFamily: font, direction: dir }}>
                  {g.adopting}
                </text>
                <rect x="1056" y={B_END.y - 15} width="132" height="30" rx="15" fill="#000" stroke="#5a5a5a" strokeWidth="1.2" />
                <text x="1122" y={B_END.y + 5} textAnchor="middle" fill="#c7c7c7" fontSize="14" style={{ fontFamily: font, direction: dir }}>
                  {g.waiting}
                </text>
                <line x1="1000" y1={A_END.y + 28} x2="1000" y2={B_END.y - 12} stroke="#fff" strokeDasharray="2 4" />
                <text x="985" y={(A_END.y + B_END.y) / 2 + 8} textAnchor={dir === "rtl" ? "start" : "end"} fill="#fff" fontSize="22" fontWeight="500" style={{ fontFamily: font, direction: dir }}>
                  {g.gapWord}
                </text>
              </g>
              {X_TICKS.map((x, i) => (
                <text key={x} x={x} y="418" textAnchor="middle" fill="#8c8c8c" fontSize="13" style={{ fontFamily: font, direction: dir }}>
                  {g.ticks[i]}
                </text>
              ))}
            </svg>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", marginTop: 20, fontSize: 13, color: "var(--lp-soft)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 18, height: 3, borderRadius: 2, background: "var(--acc)" }} />
              {g.legendAdopting}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 18, height: 3, borderRadius: 2, background: "#8c8c8c" }} />
              {g.legendWaiting}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
