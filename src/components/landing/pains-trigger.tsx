"use client";

import { useEffect, useRef } from "react";

/**
 * Plays each pain line's strike-out once, at a readable pace, when the line
 * reaches the middle of the screen. Scrolling only starts it; it does not
 * scrub it. Without JavaScript, or with reduced motion, the lines simply show
 * their final, struck-out state.
 */
export function PainsTrigger() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const rows = Array.from(section.querySelectorAll<HTMLElement>(".lp-pain"));
    // Rows already above the fold-line when the page loads stay in their final state.
    const line = window.innerHeight * 0.6;
    const pending = rows.filter((row) => row.getBoundingClientRect().top > line);
    pending.forEach((row) => row.setAttribute("data-wait", ""));

    // Lines that cross the trigger together still play one after another,
    // so each strike-out gets its own moment.
    const GAP = 900;
    let nextStart = 0;
    const timers: number[] = [];
    const play = (row: Element) => {
      const now = performance.now();
      const at = Math.max(now, nextStart);
      nextStart = at + GAP;
      timers.push(
        window.setTimeout(() => {
          row.removeAttribute("data-wait");
          row.setAttribute("data-play", "");
        }, at - now),
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const hits = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        for (const entry of hits) {
          observer.unobserve(entry.target);
          play(entry.target);
        }
      },
      { rootMargin: "0px 0px -40% 0px" },
    );
    pending.forEach((row) => observer.observe(row));
    return () => {
      observer.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return <span ref={ref} hidden />;
}
