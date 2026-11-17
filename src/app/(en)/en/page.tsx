import { Landing } from "@/components/landing/landing";
import { en } from "@/content/en";
import { landingEn } from "@/content/landing";

export default function HomePage() {
  return <Landing shell={en} t={landingEn} />;
}
