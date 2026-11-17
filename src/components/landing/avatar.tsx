/**
 * Effi's face: the green block from the logo, with eyes that blink and glance.
 * `round` gives the circular crop used for chat profile pictures.
 */
export function Avatar({ size, round = false }: { size: number; round?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" style={{ flex: `0 0 ${size}px`, display: "block" }}>
      {round ? <circle cx="20" cy="20" r="20" style={{ fill: "var(--acc)" }} /> : <rect width="40" height="40" rx="11" style={{ fill: "var(--acc)" }} />}
      <g className="lp-look">
        <rect className="lp-eye" x="12" y="13" width="5" height="10" rx="2.5" fill="#0a0a0a" />
        <rect className="lp-eye" x="23" y="13" width="5" height="10" rx="2.5" fill="#0a0a0a" />
      </g>
      <path d="M15 28 Q20 31.5 25 28" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
