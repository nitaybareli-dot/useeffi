import type { Landing } from "@/content/landing";
import { Label } from "./parts";

/** How working with us goes, step by step, with the stress on how little it asks of you. */
export function Process({ t }: { t: Landing }) {
  const p = t.process;
  return (
    <section style={{ borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
          <Label n="03">{p.label}</Label>
          <h2 className="lp-h2" style={{ fontSize: "clamp(32px, 3.6vw, 56px)" }}>
            {p.titleA}{" "}
            <span className="lp-dim">{p.titleB}</span>
          </h2>
          <p className="lp-lead" style={{ margin: 0, maxWidth: 600 }}>
            {p.lead}
          </p>
        </div>
        <ol className="lp-process">
          {p.steps.map((step, i) => (
            <li key={step.title} className="lp-rv">
              <span className="lp-mono" aria-hidden="true">
                0{i + 1}
              </span>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
