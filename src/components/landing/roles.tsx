"use client";

import { track } from "@vercel/analytics";
import { useState } from "react";
import type { Landing } from "@/content/landing";
import { Label } from "./parts";

/**
 * Pick an industry and see three roles a digital team member could fill there,
 * set like small job ads. Meant to spark ideas for the visitor's own business.
 */
export function Roles({ t }: { t: Landing }) {
  const r = t.roles;
  const [active, setActive] = useState(0);
  const tab = r.tabs[active];

  return (
    <section className="lp-light" style={{ borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 48px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Label n="03">{r.label}</Label>
          <h2 className="lp-h2">
            {r.titleA}{" "}
            <span className="lp-dim">{r.titleB}</span>
          </h2>
        </div>
        <div role="tablist" aria-label={r.label} className="lp-tabs">
          {r.tabs.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`role-tab-${item.id}`}
              aria-selected={i === active}
              aria-controls="role-panel"
              className="lp-tab"
              onClick={() => {
                setActive(i);
                track("industry_tab", { industry: item.id });
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div id="role-panel" role="tabpanel" aria-labelledby={`role-tab-${tab.id}`} className="lp-ads" key={tab.id}>
          {tab.roles.map((role, i) => (
            <article key={role.title} className="lp-ad" style={{ animationDelay: `${i * 70}ms` }}>
              <span className="lp-ad-tag lp-mono">{r.wanted}</span>
              <h3 className="lp-ad-title">{role.title}</h3>
              <p className="lp-ad-does">{role.does}</p>
            </article>
          ))}
        </div>
        <p className="lp-rv" style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "var(--lp-soft)", maxWidth: 760 }}>
          {r.close}
        </p>
      </div>
    </section>
  );
}
