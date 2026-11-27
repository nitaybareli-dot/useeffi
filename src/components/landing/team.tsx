import type { Landing } from "@/content/landing";
import { Label } from "./parts";

/** The people behind Effi, with a slot for a short personal story. */
export function Team({ t }: { t: Landing }) {
  const m = t.team;
  return (
    <section style={{ borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 48px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
          <Label n="05">{m.label}</Label>
          <h2 className="lp-h2" style={{ fontSize: "clamp(32px, 3.6vw, 56px)" }}>
            {m.title}
          </h2>
          <p className="lp-lead" style={{ margin: 0 }}>
            {m.lead}
          </p>
        </div>

        <ul className="lp-rv lp-team">
          {m.members.map((p) => (
            <li key={p.name}>
              <span className="lp-team-photo" aria-hidden="true">
                {p.name.trim()[0]}
              </span>
              <span className="lp-team-name">{p.name}</span>
              <span className="lp-team-role">{p.role}</span>
            </li>
          ))}
        </ul>

        <div className="lp-rv lp-team-story">
          <span className="lp-mono">{m.storyHint}</span>
          <p>{m.storyDraft}</p>
        </div>
      </div>
    </section>
  );
}
