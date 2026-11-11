"use client";

import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

const variants = {
  /** Primary: accent fill. */
  solid: "bg-accent text-white hover:bg-accent-hover",
  /** Secondary on a light background. */
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  /** Primary on a dark background. */
  inverse: "bg-accent text-white hover:bg-accent-hover",
  /** Secondary on a dark background. */
  outlineDark: "border border-white text-white hover:bg-white hover:text-ink",
} as const;

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-base font-medium transition-colors";

/** Pill link that reports the click to Vercel Analytics. */
export function CtaLink({
  href,
  location,
  variant = "solid",
  size = "md",
  arrow = false,
  className = "",
  onNavigate,
  children,
}: {
  href: string;
  location: string;
  variant?: keyof typeof variants;
  size?: "sm" | "md";
  arrow?: boolean;
  className?: string;
  onNavigate?: () => void;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={() => {
        track("cta_click", { location });
        onNavigate?.();
      }}
      className={`${buttonBase} ${size === "sm" ? "h-10 px-5 text-[15px]" : "h-12 px-7"} ${
        variants[variant]
      } ${className}`}
    >
      {children}
      {/* Points toward the reading end: left in Hebrew, right in English. */}
      {arrow ? <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" /> : null}
    </a>
  );
}
