"use client";

import { track } from "@vercel/analytics";
import { useState } from "react";
import type { Landing } from "@/content/landing";
import { Label } from "./parts";

/** Pick an industry, get three short "what if" ideas to start thinking about your own business. */
export function Ideas({ t }: { t: Landing }) {
  const d = t.ideas;
  const [active, setActive] = useState(0);
  const tab = d.tabs[active];

  return (
    <section className="lp-light" style={{ borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(36px, 4vw, 56px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Label n="03">{d.label}</Label>
          <h2 className="lp-h2" style={{ fontSize: "clamp(32px, 3.6vw, 56px)" }}>
            {d.titleA}{" "}
            <span className="lp-dim">{d.titleB}</span>
          </h2>
        </div>
        <div role="tablist" aria-label={d.label} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {d.tabs.map((item, i) => {
            const selected = i === active;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`idea-tab-${item.id}`}
                aria-selected={selected}
                aria-controls="idea-panel"
                onClick={() => {
                  setActive(i);
                  track("industry_tab", { industry: item.id });
                }}
                className="lp-chip"
                style={{
                  cursor: "pointer",
                  font: "inherit",
                  fontSize: 16,
                  fontWeight: selected ? 500 : 400,
                  padding: "12px 20px",
                  minHeight: 48,
                  borderRadius: 6,
                  border: `1px solid ${selected ? "var(--lp-fg)" : "var(--lp-border2)"}`,
                  background: selected ? "var(--lp-fg)" : "transparent",
                  color: selected ? "var(--lp-bg)" : "var(--lp-fg)",
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div
          id="idea-panel"
          role="tabpanel"
          aria-labelledby={`idea-tab-${tab.id}`}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}
        >
          {tab.ideas.map((idea, i) => (
            <div
              key={idea}
              className="lp-idea"
              style={{
                background: "var(--lp-card)",
                border: "1px solid var(--lp-border)",
                borderRadius: 14,
                padding: 28,
                minHeight: 150,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 28,
              }}
            >
              <span className="lp-mono" style={{ fontSize: 13, color: "var(--acc)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: "clamp(21px, 1.8vw, 26px)", fontWeight: 500, lineHeight: 1.3 }}>
                {d.whatIf} {idea}
              </span>
            </div>
          ))}
        </div>
        <p className="lp-rv" style={{ margin: 0, fontSize: 18, color: "var(--lp-soft)" }}>
          {d.close}
        </p>
      </div>
    </section>
  );
}
