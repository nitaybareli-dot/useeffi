import type { Landing } from "@/content/landing";
import { Badge } from "./badge";
import { BadgeStack } from "./badge-stack";

/**
 * Hero: the promise on one side, and the digital team on the other, as a stack
 * of staff badges that takes turns coming forward.
 */
export function Hero({ t }: { t: Landing }) {
  const h = t.hero;
  return (
    <section className="lp-grid lp-hero" style={{ borderBottom: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-hero-in">
        <div className="lp-hero-copy">
          <span className="lp-eyebrow">
            <span className="lp-pulse" aria-hidden="true" />
            {h.eyebrow}
          </span>
          <h1 className="lp-h1">
            {h.titleA}{" "}
            <span className="lp-dim">{h.titleB}</span>
          </h1>
          <p className="lp-lead lp-hero-sub">{h.sub}</p>
        </div>
        <div className="lp-hero-team">
          <BadgeStack count={t.team.length}>
            {t.team.map((agent) => (
              <Badge key={agent.id} agent={agent} t={t} />
            ))}
          </BadgeStack>
          <p className="lp-hero-note">{h.note}</p>
        </div>
      </div>
    </section>
  );
}
