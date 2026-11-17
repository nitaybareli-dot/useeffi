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

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.removeAttribute("data-wait");
          entry.target.setAttribute("data-play", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -40% 0px" },
    );
    pending.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return <span ref={ref} hidden />;
}
