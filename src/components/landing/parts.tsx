"use client";

import { track } from "@vercel/analytics";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

/** Arrow that points toward the reading end of the line. */
export function Arrow() {
  return (
    <svg className="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

/**
 * "Book a call" goes straight to the chat with Effi: the chat is centred on
 * screen and the first answer box gets focus, so the visitor can just type.
 * Without JavaScript the plain #contact link still works.
 */
function onCtaClick(event: MouseEvent<HTMLAnchorElement>, href: string, location: string) {
  track("cta_click", { location });
  if (href !== "#contact") return;
  const chat = document.getElementById("contact-chat");
  if (!chat) return;
  event.preventDefault();
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  chat.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "center" });
  history.replaceState(null, "", "#contact");
  window.setTimeout(() => document.getElementById("contact-chat-input")?.focus({ preventScroll: true }), still ? 0 : 600);
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
    <a href={href} onClick={(event) => onCtaClick(event, href, location)} className={`lp-btn lp-btn-${size}`}>
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
