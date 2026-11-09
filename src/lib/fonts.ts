import { Geist, Heebo } from "next/font/google";

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

export const fontVariables = `${geist.variable} ${heebo.variable}`;
