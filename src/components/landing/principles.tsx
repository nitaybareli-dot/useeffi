import type { Landing } from "@/content/landing";
import { Label } from "./parts";
import { RulesList } from "./rules-list";

/** How we work: a short numbered list, set like the contents page of a report. */
export function Principles({ t }: { t: Landing }) {
  const p = t.principles;
  return (
    <section style={{ borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section lp-principles">
        <div className="lp-rv lp-principles-head" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Label n="04">{p.label}</Label>
          <h2 className="lp-h2">
            {p.titleA}{" "}
            <span className="lp-dim">{p.titleB}</span>
          </h2>
        </div>
        <RulesList items={p.items} />
      </div>
    </section>
  );
}
