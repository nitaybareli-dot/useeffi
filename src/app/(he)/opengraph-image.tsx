import { renderOgImage } from "@/lib/og";

export const alt = "Effi: AI solutions tailored to your organization";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
