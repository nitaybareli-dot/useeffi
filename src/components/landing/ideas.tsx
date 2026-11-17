"use client";

import { track } from "@vercel/analytics";
import { useState } from "react";
import type { Landing } from "@/content/landing";
import { Label } from "./parts";

/** Pick an industry, get four "what if" questions to start thinking about your own business. */
export function Ideas({ t }: { t: Landing }) {
  const d = t.ideas;
  const [active, setActive] = useState(0);
  const tab = d.tabs[active];

  return (
    <section className="lp-light">
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(36px, 4vw, 56px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Label n="05">{d.label}</Label>
          <h2 className="lp-h2">
            {d.titleA}
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
                  border: `1px solid ${selected ? "#0a0a0a" : "#c9c5bb"}`,
                  background: selected ? "#0a0a0a" : "transparent",
                  color: selected ? "#fff" : "#0a0a0a",
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
                background: "#fff",
                border: "1px solid #e4e0d6",
                borderRadius: 10,
                padding: 28,
                minHeight: 168,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 28,
              }}
            >
              <span className="lp-mono" style={{ fontSize: 13, color: "#5c5c57" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: "clamp(21px, 1.8vw, 26px)", fontWeight: 500, lineHeight: 1.3 }}>
                {d.whatIf} {idea}
              </span>
            </div>
          ))}
        </div>
        <p className="lp-rv" style={{ margin: 0, fontSize: 18, color: "#44443f" }}>
          {d.close}
        </p>
      </div>
    </section>
  );
}
