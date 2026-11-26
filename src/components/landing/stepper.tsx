"use client";

import { useEffect, useRef, useState } from "react";
import type { Landing } from "@/content/landing";

/**
 * The four steps of our approach as a path. Effi's block moves along it as the
 * section scrolls into view, and one step at a time is shown in full below, so
 * there is little to read at once. Every step can also be picked by hand.
 */
export function Stepper({ p }: { p: Landing["process"] }) {
  const steps = p.steps;
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const picked = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (picked.current) return;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the path enters the lower part of the screen, 1 when it nears the top.
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - rect.top) / (vh * 0.65)));
      setActive(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [steps.length]);

  const step = steps[active];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div ref={ref} className="lp-stepper" style={{ ["--active" as string]: active, ["--count" as string]: steps.length }}>
      <div className="lp-stepper-rail">
        <span className="lp-stepper-track" aria-hidden="true">
          <span className="lp-stepper-fill" />
          <span className="lp-stepper-dot" />
        </span>
        <ol className="lp-stepper-path">
        {steps.map((item, i) => (
          <li key={item.title} data-state={i < active ? "done" : i === active ? "now" : "next"}>
            <button
              type="button"
              aria-current={i === active ? "step" : undefined}
              onClick={() => {
                picked.current = true;
                setActive(i);
              }}
            >
              <span className="lp-mono lp-stepper-num">{pad(i + 1)}</span>
              <span className="lp-stepper-title">{item.title}</span>
            </button>
          </li>
        ))}
        </ol>
      </div>

      <div className="lp-stepper-card" key={active} aria-live="polite">
        <span className="lp-mono lp-stepper-count">
          {pad(active + 1)} {p.of} {pad(steps.length)}
        </span>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
        <div className="lp-stepper-output">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
          <span>
            <b>{p.outputLabel}:</b> {step.output}
          </span>
        </div>
      </div>
    </div>
  );
}
