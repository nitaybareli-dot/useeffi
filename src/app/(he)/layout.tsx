import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { he } from "@/content/he";
import { fontVariables } from "@/lib/fonts";
import { buildMetadata } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = buildMetadata(he);
export const viewport: Viewport = { themeColor: "#ffffff" };

/** Root layout for the Hebrew (default, RTL) tree. */
export default function HebrewLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={fontVariables}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
