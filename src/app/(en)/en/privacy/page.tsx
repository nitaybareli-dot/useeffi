import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy-page";
import { en } from "@/content/en";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata(en, "privacy");

export default function Privacy() {
  return <PrivacyPage t={en} />;
}
