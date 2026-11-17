"use client";

import { track } from "@vercel/analytics";
import type { CSSProperties, ReactNode } from "react";

/** Arrow that points toward the reading end of the line. */
export function Arrow() {
  return (
    <svg className="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

/** Link styled as the primary button that reports clicks to Vercel Analytics. */
export function CtaButton({
  href,
  location,
  size = "lg",
  arrow = false,
  children,
}: {
  href: string;
  location: string;
  size?: "md" | "lg";
  arrow?: boolean;
  children: ReactNode;
}) {
  return (
    <a href={href} onClick={() => track("cta_click", { location })} className={`lp-btn lp-btn-${size}`}>
      {children}
      {arrow ? <Arrow /> : null}
    </a>
  );
}

/** Section label: number, rule, name. */
export function Label({ n, children, style }: { n: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <div className="lp-label" style={style}>
      <span className="lp-mono" style={{ letterSpacing: "0.08em" }}>
        {n}
      </span>
      <i aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
