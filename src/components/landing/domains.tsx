"use client";

import { track } from "@vercel/analytics";
import { useState } from "react";
import type { Landing } from "@/content/landing";
import { Label } from "./parts";

/**
 * Pick an industry and see three kinds of work we help with there. Each card
 * shows, in a small flow, where the work comes from and what Effi turns it into.
 */
export function Domains({ t }: { t: Landing }) {
  const r = t.domains;
  const [active, setActive] = useState(0);
  const tab = r.tabs[active];

  return (
    <section className="lp-light" style={{ borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(28px, 3vw, 40px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Label n="01">{r.label}</Label>
          <h2 className="lp-h2" style={{ fontSize: "clamp(32px, 3.6vw, 56px)" }}>
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
              id={`domain-tab-${item.id}`}
              aria-selected={i === active}
              aria-controls="domain-panel"
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
        <div id="domain-panel" role="tabpanel" aria-labelledby={`domain-tab-${tab.id}`} className="lp-ads" key={tab.id}>
          {tab.items.map((item, i) => (
            <article key={item.title} className="lp-ad" style={{ animationDelay: `${i * 70}ms` }}>
              <div className="lp-mini" aria-hidden="true">
                <span className="lp-mini-chip">{item.from}</span>
                <span className="lp-mini-line" />
                <span className="lp-mini-effi" />
                <span className="lp-mini-line" />
                <span className="lp-mini-chip lp-mini-out">{item.to}</span>
              </div>
              <h3 className="lp-ad-title">{item.title}</h3>
              <p className="lp-ad-does">{item.does}</p>
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
