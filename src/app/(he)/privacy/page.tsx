import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy-page";
import { he } from "@/content/he";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata(he, "privacy");

export default function Privacy() {
  return <PrivacyPage t={he} />;
}
