import { Landing } from "@/components/landing/landing";
import { he } from "@/content/he";
import { landingHe } from "@/content/landing";

export default function HomePage() {
  return <Landing shell={he} t={landingHe} />;
}
