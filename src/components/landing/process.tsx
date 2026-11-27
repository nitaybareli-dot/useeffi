import type { Landing } from "@/content/landing";
import { Label } from "./parts";
import { Stepper } from "./stepper";

/** Our approach: four steps you can scroll or click through, one at a time. */
export function Process({ t }: { t: Landing }) {
  const p = t.process;
  return (
    <section style={{ borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
          <Label n="04">{p.label}</Label>
          <h2 className="lp-h2" style={{ fontSize: "clamp(32px, 3.6vw, 56px)" }}>
            {p.titleA}{" "}
            <span className="lp-dim">{p.titleB}</span>
          </h2>
          <p className="lp-lead" style={{ margin: 0, maxWidth: 600 }}>
            {p.lead}
          </p>
        </div>
        <Stepper p={p} />
      </div>
    </section>
  );
}
