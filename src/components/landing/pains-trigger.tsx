"use client";

import { useEffect, useRef } from "react";

/**
 * Plays each pain line's strike-out at a readable pace when the line reaches
 * the middle of the screen, and slowly rewinds it when you scroll back up past
 * it, so it can play again on the way down. Scrolling only starts and rewinds
 * the lines; it does not scrub them. Without JavaScript, or with reduced
 * motion, the lines simply show their final, struck-out state.
 */
export function PainsTrigger() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const rows = Array.from(section.querySelectorAll<HTMLElement>(".lp-pain"));
    // Rows already above the trigger line when the page loads start struck out.
    const line = window.innerHeight * 0.6;
    const on = new Map<Element, boolean>();
    const timers = new Map<Element, number>();
    for (const row of rows) {
      const below = row.getBoundingClientRect().top > line;
      on.set(row, !below);
      if (below) row.setAttribute("data-wait", "");
    }

    // Lines that cross the trigger together still play one after another,
    // so each strike-out gets its own moment.
    const GAP = 900;
    let nextStart = 0;
    const play = (row: Element) => {
      if (on.get(row)) return;
      on.set(row, true);
      const now = performance.now();
      const at = Math.max(now, nextStart);
      nextStart = at + GAP;
      timers.set(
        row,
        window.setTimeout(() => {
          timers.delete(row);
          row.removeAttribute("data-wait");
          row.removeAttribute("data-undo");
          row.setAttribute("data-play", "");
        }, at - now),
      );
    };
    const rewind = (row: Element) => {
      if (!on.get(row)) return;
      on.set(row, false);
      const pending = timers.get(row);
      if (pending !== undefined) {
        // It never started playing, so there is nothing to rewind.
        window.clearTimeout(pending);
        timers.delete(row);
        return;
      }
      row.removeAttribute("data-play");
      row.setAttribute("data-undo", "");
    };

    // Play at 60% of the screen height; rewind only once the line is back
    // near the bottom edge, so small scrolls don't flip it back and forth.
    const playAt = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          .forEach((entry) => play(entry.target));
      },
      { rootMargin: "0px 0px -40% 0px" },
    );
    const rewindAt = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting && entry.boundingClientRect.top > 0) rewind(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    rows.forEach((row) => {
      playAt.observe(row);
      rewindAt.observe(row);
    });
    return () => {
      playAt.disconnect();
      rewindAt.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return <span ref={ref} hidden />;
}
