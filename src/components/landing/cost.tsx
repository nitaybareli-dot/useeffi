"use client";

import { useState } from "react";
import type { Landing } from "@/content/landing";
import { Label } from "./parts";

const WEEKS_PER_YEAR = 48;
const HOURS_PER_FTE_YEAR = 182 * 12;
const format = new Intl.NumberFormat("en-US");

/** The visitor's own numbers: hours of manual work a year and the full-time positions they add up to. */
export function Cost({ t }: { t: Landing }) {
  const c = t.cost;
  const [people, setPeople] = useState(20);
  const [hours, setHours] = useState(8);
  const yearly = people * hours * WEEKS_PER_YEAR;
  const fte = yearly / HOURS_PER_FTE_YEAR;
  const fteLabel = fte < 10 ? fte.toFixed(1) : String(Math.round(fte));
  const [fteBefore, fteAfter] = c.fte.split("{n}");

  const slider = (label: string, value: number, max: number, set: (n: number) => void) => (
    <label style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
        <span style={{ fontSize: 18, fontWeight: 500 }}>{label}</span>
        <span className="lp-mono" style={{ fontSize: 28 }}>
          {value}
        </span>
      </span>
      <input
        type="range"
        className="lp-range"
        min={1}
        max={max}
        step={1}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
      />
    </label>
  );

  return (
    <section className="lp-light">
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Label n="03">{c.label}</Label>
          <h2 className="lp-h2">{c.title}</h2>
        </div>
        <div className="lp-rv" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 80px)", alignItems: "stretch" }}>
          <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: 40, justifyContent: "center" }}>
            {slider(c.peopleLabel, people, 200, setPeople)}
            {slider(c.hoursLabel, hours, 30, setHours)}
            <span className="lp-mono" style={{ fontSize: 12, color: "#5c5c57" }}>
              {c.note}
            </span>
          </div>
          <div
            aria-live="polite"
            style={{
              flex: "1 1 380px",
              background: "#0a0a0a",
              color: "#fff",
              borderRadius: 10,
              padding: "clamp(28px, 4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 40,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 15, color: "var(--lp-soft)" }}>{c.yearLabel}</span>
              <span
                className="lp-mono"
                dir="ltr"
                style={{ textAlign: "end", fontSize: "clamp(56px, 7vw, 104px)", lineHeight: 1, letterSpacing: "-0.03em" }}
              >
                {format.format(yearly)}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 24, borderTop: "1px solid #262626" }}>
              <span style={{ fontSize: "clamp(24px, 2.4vw, 32px)", fontWeight: 500, lineHeight: 1.25 }}>
                {fteBefore}
                <span style={{ color: "var(--acc)" }}>{fteLabel}</span>
                {fteAfter}
              </span>
              <span style={{ fontSize: 16, color: "var(--lp-soft)" }}>{c.close}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
