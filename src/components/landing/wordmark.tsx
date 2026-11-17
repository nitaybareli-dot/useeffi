const TAIL = ["c", "i", "e", "n", "c", "y"];

/**
 * The Effi wordmark. With `loop`, "efficiency" folds into "effi" and the
 * green block, then opens again: the name explains itself without a caption.
 */
export function Wordmark({ size, loop = false, slow = false }: { size: string; loop?: boolean; slow?: boolean }) {
  return (
    <span
      className={`lp-wm${loop ? " lp-wm-loop" : ""}${slow ? " lp-wm-slow" : ""}`}
      style={{ fontSize: size }}
      role="img"
      aria-label="effi"
    >
      <span aria-hidden="true">effi</span>
      <span className="lp-wm-tail" aria-hidden="true">
        {TAIL.map((letter, i) => (
          // The last letter folds first.
          <span key={i} style={{ animationDelay: `${(TAIL.length - 1 - i) * 0.07}s` }}>
            {letter}
          </span>
        ))}
      </span>
      <span className="lp-wm-block" aria-hidden="true" />
    </span>
  );
}
