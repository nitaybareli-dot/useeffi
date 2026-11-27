import type { Landing } from "@/content/landing";
import { Avatar } from "./avatar";
import { Label } from "./parts";

/** Why Effi and why now, next to Effi's employee card. */
export function Why({ t }: { t: Landing }) {
  const w = t.why;
  return (
    <section className="lp-light" style={{ borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section lp-why">
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px, 3vw, 40px)" }}>
          <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Label n="06">{w.label}</Label>
            <h2 className="lp-h2" style={{ fontSize: "clamp(32px, 3.6vw, 56px)" }}>
              {w.titleA} <span className="lp-dim">{w.titleB}</span>
            </h2>
          </div>
          <ol className="lp-rv lp-why-list">
            {w.points.map((p) => (
              <li key={p.title}>
                <b>{p.title}</b>
                <span>{p.text}</span>
              </li>
            ))}
          </ol>
          <p className="lp-rv lp-why-close">{w.close}</p>
        </div>

        <div className="lp-rv lp-idcard" aria-label={`${w.card.heading}: ${w.card.name}`}>
          <div className="lp-idcard-head">
            <span className="lp-mono">{w.card.heading}</span>
            <span className="lp-idcard-chip" aria-hidden="true" />
          </div>
          <div className="lp-idcard-who">
            <Avatar size={64} />
            <strong>{w.card.name}</strong>
          </div>
          <dl>
            {w.card.rows.map((r) => (
              <div key={r.k}>
                <dt>{r.k}</dt>
                <dd>{r.v}</dd>
              </div>
            ))}
          </dl>
          <div className="lp-idcard-status">
            <span className="lp-pulse" />
            {w.card.status}
          </div>
        </div>
      </div>
    </section>
  );
}
