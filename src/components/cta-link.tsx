"use client";

import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

const variants = {
  solid: "bg-ink text-paper hover:bg-ink/80",
  outline: "border border-ink/20 text-ink hover:border-ink",
  inverse: "bg-paper text-ink hover:bg-paper/85",
  outlineDark: "border border-white/30 text-paper hover:border-paper",
} as const;

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
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors ${
        size === "sm" ? "px-4 py-2 text-[13px]" : "px-6 py-3 text-[15px]"
      } ${variants[variant]} ${className}`}
    >
      {children}
      {arrow ? <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" /> : null}
    </a>
  );
}
