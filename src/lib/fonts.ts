import { Frank_Ruhl_Libre, Geist, Heebo, IBM_Plex_Mono } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const heebo = Heebo({
  subsets: ["hebrew"],
  variable: "--font-heebo",
  display: "swap",
});

/** Editorial serif for the big headlines and the names on the team badges. */
export const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-serif",
  display: "swap",
});

/** Small technical labels and numbers on the landing page. */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = `${geist.variable} ${heebo.variable} ${plexMono.variable} ${frankRuhl.variable}`;
