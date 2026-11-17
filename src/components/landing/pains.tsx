import type { Landing } from "@/content/landing";
import { Label } from "./parts";

/**
 * Pain points. As each line scrolls in, Effi's green block runs along it and
 * strikes it out (the text stays readable), and the answer appears beside it.
 */
export function Pains({ t }: { t: Landing }) {
  const p = t.pains;
  return (
    <section>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Label n="01">{p.label}</Label>
          <h2 className="lp-h2">{p.title}</h2>
        </div>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--lp-line)" }}>
          {p.items.map((item, i) => (
            <li
              key={item.pain}
              className="lp-pain"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px clamp(16px, 3vw, 48px)",
                padding: "clamp(22px, 2.4vw, 32px) 0",
                borderBottom: "1px solid var(--lp-line)",
              }}
            >
              <span className="lp-mono" style={{ flex: "0 0 32px", fontSize: 13, color: "var(--lp-mute)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ flex: "1 1 480px", minWidth: 0 }}>
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    fontSize: "clamp(22px, 2.7vw, 40px)",
                    fontWeight: 500,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span className="lp-pain-words">{item.pain}</span>
                  <span className="lp-strike" aria-hidden="true" />
                  <span className="lp-runner" aria-hidden="true" />
                </span>
              </span>
              <span className="lp-answer" style={{ flex: "0 1 380px", minWidth: 0 }}>
                <span style={{ fontSize: 13, color: "var(--lp-mute)" }}>
                  {p.afterPrefix}
                </span>
                <span style={{ display: "flex", alignItems: "baseline", gap: 12, fontSize: "clamp(17px, 1.4vw, 20px)", fontWeight: 500, lineHeight: 1.4 }}>
                  <span aria-hidden="true" style={{ flex: "0 0 10px", width: 10, height: 10, borderRadius: 3, background: "var(--acc)", transform: "translateY(-2px)" }} />
                  {item.after}
                </span>
              </span>
            </li>
          ))}
        </ol>
        <p className="lp-rv" style={{ margin: 0, fontSize: "clamp(22px, 2.4vw, 34px)", fontWeight: 500, lineHeight: 1.3 }}>
          {p.closeA} <span style={{ color: "var(--acc)" }}>{p.closeB}</span>
        </p>
      </div>
    </section>
  );
}
