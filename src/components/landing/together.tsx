import type { Landing } from "@/content/landing";
import { Label } from "./parts";

/** Joint scoping: you know the business, we know the technology, the overlap is the solution. */
export function Together({ t }: { t: Landing }) {
  const g = t.together;
  const font = "var(--font-sans), sans-serif";
  // Labels sit on the reading-start circle in each language.
  const [startX, endX] = t.lang === "he" ? [800, 400] : [400, 800];
  return (
    <section>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(48px, 6vw, 80px)" }}>
        <div className="lp-head lp-rv">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Label n="05">{g.label}</Label>
            <h2 className="lp-h2">
              {g.titleA}
              <span className="lp-dim">{g.titleB}</span>
            </h2>
          </div>
          <p className="lp-lead" style={{ maxWidth: 520, fontSize: 19, color: "#c7c7c7" }}>
            {g.lead}
          </p>
        </div>

        <svg
          className="lp-rv"
          viewBox="0 0 1200 440"
          width="100%"
          role="img"
          aria-label={g.vennAlt}
          style={{ display: "block", maxWidth: 1000, marginInline: "auto", overflow: "visible" }}
        >
          <g className={t.lang === "he" ? "lp-venn-a" : "lp-venn-b"}>
            <circle cx={startX === 800 ? 720 : 480} cy="220" r="200" stroke="#fff" strokeWidth="1" fillOpacity="0.07" style={{ fill: "var(--acc)" }} />
            <text x={startX} y="208" textAnchor="middle" fill="#fff" fontSize="40" fontWeight="500" style={{ fontFamily: font }}>
              {g.you}
            </text>
            <text x={startX} y="244" textAnchor="middle" fill="#a3a3a3" fontSize="18" style={{ fontFamily: font }}>
              {g.youText}
            </text>
          </g>
          <g className={t.lang === "he" ? "lp-venn-b" : "lp-venn-a"}>
            <circle cx={endX === 400 ? 480 : 720} cy="220" r="200" stroke="#fff" strokeWidth="1" fillOpacity="0.07" style={{ fill: "var(--acc)" }} />
            <text x={endX} y="208" textAnchor="middle" fill="#fff" fontSize="40" fontWeight="500" style={{ fontFamily: font }}>
              {g.us}
            </text>
            <text x={endX} y="244" textAnchor="middle" fill="#a3a3a3" fontSize="18" style={{ fontFamily: font }}>
              {g.usText}
            </text>
          </g>
          <g className="lp-venn-mid">
            <text x="600" y="228" textAnchor="middle" fontSize="22" fontWeight="600" style={{ fontFamily: font, fill: "var(--acc)" }}>
              {g.solution}
            </text>
          </g>
        </svg>

        <ol
          className="lp-rv"
          style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", borderTop: "1px solid #262626" }}
        >
          {g.steps.map((step) => (
            <li key={step.title} style={{ padding: "32px 0 0", paddingInlineEnd: 32, display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="lp-mono" style={{ fontSize: 13, color: "var(--lp-mute)" }}>
                {step.when}
              </span>
              <h3 style={{ margin: 0, fontSize: "clamp(26px, 2.4vw, 34px)", fontWeight: 500 }}>{step.title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--lp-soft)" }}>{step.text}</p>
            </li>
          ))}
        </ol>

        <div
          className="lp-rv"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 1,
            background: "var(--lp-line)",
            border: "1px solid var(--lp-line)",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {g.principles.map((item) => (
            <div key={item.title} style={{ background: "#000", padding: 28, display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 26, fontWeight: 500 }}>{item.title}</span>
              <span style={{ fontSize: 15, color: "var(--lp-soft)" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
