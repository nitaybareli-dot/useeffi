import type { MetadataRoute } from "next";
import { SITE_URL, pagePath } from "@/lib/site";

const kinds = ["home", "privacy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return kinds.flatMap((kind) => {
    const languages = {
      he: `${SITE_URL}${pagePath(kind, "he")}`,
      en: `${SITE_URL}${pagePath(kind, "en")}`,
    };
    return (["he", "en"] as const).map((lang) => ({
      url: languages[lang],
      changeFrequency: "monthly" as const,
      priority: kind === "home" ? 1 : 0.3,
      alternates: { languages },
    }));
  });
}
