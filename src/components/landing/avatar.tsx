import type { Tone } from "@/content/landing";

/**
 * Effi's face: the block from the logo, with eyes that blink and glance.
 * `round` gives the circular crop used for chat profile pictures; `invert` is the
 * dark face used inside blue buttons; `tone` colours a digital team member.
 */
export function Avatar({ size, round = false, invert = false, tone }: { size: number; round?: boolean; invert?: boolean; tone?: Tone }) {
  const skin = invert ? "#0a0a0a" : tone ? `var(--tone-${tone})` : "var(--acc)";
  const ink = invert ? "var(--acc)" : "#0a0a0a";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" style={{ flex: `0 0 ${size}px`, display: "block" }}>
      {round ? <circle cx="20" cy="20" r="20" style={{ fill: skin }} /> : <rect width="40" height="40" rx="11" style={{ fill: skin }} />}
      <g className="lp-look">
        <rect className="lp-eye" x="12" y="13" width="5" height="10" rx="2.5" style={{ fill: ink }} />
        <rect className="lp-eye" x="23" y="13" width="5" height="10" rx="2.5" style={{ fill: ink }} />
      </g>
      <path d="M15 28 Q20 31.5 25 28" fill="none" style={{ stroke: ink }} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
