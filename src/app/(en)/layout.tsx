import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { en } from "@/content/en";
import { fontVariables } from "@/lib/fonts";
import { buildMetadata } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = buildMetadata(en);
export const viewport: Viewport = { themeColor: "#f6f2ea", colorScheme: "only light" };

/** Root layout for the English (LTR) tree, served under /en. */
export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={fontVariables}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
