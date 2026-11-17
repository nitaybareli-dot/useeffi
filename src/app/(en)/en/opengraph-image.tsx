import { renderOgImage } from "@/lib/og";

export const alt = "Effi: what took days now takes minutes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
