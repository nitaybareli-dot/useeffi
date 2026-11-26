import type { Landing } from "@/content/landing";
import { Label } from "./parts";

/** How we work: a short numbered list, set like the contents page of a report. */
export function Principles({ t }: { t: Landing }) {
  const p = t.principles;
  return (
    <section style={{ borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section lp-principles">
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Label n="04">{p.label}</Label>
          <h2 className="lp-h2">
            {p.titleA}{" "}
            <span className="lp-dim">{p.titleB}</span>
          </h2>
        </div>
        <ol className="lp-rules">
          {p.items.map((item, i) => (
            <li key={item.title} className="lp-rv">
              <span className="lp-mono" aria-hidden="true">
                0{i + 1}
              </span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
