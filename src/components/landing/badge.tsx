import type { Agent, Landing } from "@/content/landing";
import { Avatar } from "./avatar";

/** Thin barcode drawn from the badge number, so each badge gets its own. */
function Barcode({ seed }: { seed: string }) {
  const bars: { x: number; w: number }[] = [];
  let x = 0;
  let n = [...seed].reduce((sum, ch) => sum * 31 + ch.charCodeAt(0), 7);
  while (x < 118) {
    n = (n * 1103515245 + 12345) % 2147483648;
    const w = 1 + (n % 3);
    bars.push({ x, w });
    x += w + 1 + ((n >> 4) % 3);
  }
  return (
    <svg width="120" height="22" viewBox="0 0 120 22" aria-hidden="true">
      {bars.map((b) => (
        <rect key={b.x} x={b.x} y="0" width={b.w} height="22" fill="currentColor" />
      ))}
    </svg>
  );
}

/**
 * A staff ID badge for one digital team member: the face, name, role and what
 * they are responsible for. Used in the hero stack.
 */
export function Badge({ agent, t }: { agent: Agent; t: Landing }) {
  const b = t.badge;
  return (
    <article className="lp-badge" data-tone={agent.tone}>
      <span className="lp-badge-slot" aria-hidden="true" />
      <div className="lp-badge-head lp-mono">
        <span>{b.head}</span>
        <span>{agent.code}</span>
      </div>
      <div className="lp-badge-id">
        <span className="lp-badge-photo">
          <Avatar size={84} tone={agent.tone} />
        </span>
        <div style={{ minWidth: 0 }}>
          <h3 className="lp-badge-name">{agent.name}</h3>
          <p className="lp-badge-role">{agent.role}</p>
        </div>
      </div>
      <dl className="lp-badge-rows">
        <div>
          <dt className="lp-mono">{b.dutyLabel}</dt>
          <dd>{agent.duty}</dd>
        </div>
        <div className="lp-badge-pair">
          <div>
            <dt className="lp-mono">{b.teamLabel}</dt>
            <dd>{agent.team}</dd>
          </div>
          <div>
            <dt className="lp-mono">{b.hoursLabel}</dt>
            <dd>{b.hours}</dd>
          </div>
        </div>
      </dl>
      <div className="lp-badge-foot">
        <span className="lp-badge-status">
          <span className="lp-pulse" aria-hidden="true" />
          {b.status}
        </span>
        <span className="lp-badge-code">
          <Barcode seed={agent.code} />
        </span>
      </div>
    </article>
  );
}
