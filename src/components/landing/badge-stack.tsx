"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fans the team badges like a stack of ID cards on a lanyard. Every few seconds
 * the front badge swings aside and goes to the back, so the next team member
 * comes forward. Pauses on hover, off screen and with reduced motion; the
 * badges are always readable without JavaScript.
 */
export function BadgeStack({ children, count }: { children: ReactNode[]; count: number }) {
  const [front, setFront] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const frontRef = useRef<number>(0);
  const paused = useRef(false);
  const visible = useRef(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    const io = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
    });
    if (node) io.observe(node);
    const timers: number[] = [];
    const tick = window.setInterval(() => {
      if (paused.current || !visible.current || document.hidden) return;
      const current = frontRef.current ?? 0;
      setLeaving(current);
      timers.push(
        window.setTimeout(() => {
          frontRef.current = (current + 1) % count;
          setFront(frontRef.current);
        }, 420),
        window.setTimeout(() => setLeaving(null), 560),
      );
    }, 4200);
    return () => {
      io.disconnect();
      window.clearInterval(tick);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [count]);

  return (
    <div
      ref={ref}
      className="lp-stack"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div className="lp-lanyard" aria-hidden="true">
        <span />
        <span />
      </div>
      {children.map((child, i) => {
        const depth = (i - front + count) % count;
        return (
          <div key={i} className="lp-stack-card" data-depth={depth} data-leaving={leaving === i ? "" : undefined}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
