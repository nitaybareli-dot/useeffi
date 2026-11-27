"use client";

import { useState, type CSSProperties } from "react";
import type { Landing } from "@/content/landing";
import { CtaButton, Label } from "./parts";

const WEEKS_PER_MONTH = 4.33;

/** Savings calculator: a few sliders and a live estimate of what Effi could save. */
export function Calc({ t }: { t: Landing }) {
  const c = t.calc;
  const [employees, setEmployees] = useState(5);
  const [hours, setHours] = useState(10);
  const [cost, setCost] = useState(80);

  const hoursMonth = Math.round(employees * hours * WEEKS_PER_MONTH * c.share);
  const monthly = Math.round((hoursMonth * cost) / 100) * 100;
  const yearly = monthly * 12;
  const fmt = (n: number) => n.toLocaleString(t.lang === "he" ? "he-IL" : "en-US");
  const money = (n: number) => (t.lang === "he" ? `${fmt(n)} ${c.currency}` : `${c.currency}${fmt(n)}`);

  const sliders = [
    { id: "employees", label: c.employees, value: employees, set: setEmployees, min: 1, max: 50, step: 1, show: fmt(employees) },
    { id: "hours", label: c.hours, value: hours, set: setHours, min: 1, max: 30, step: 1, show: fmt(hours) },
    { id: "cost", label: c.cost, value: cost, set: setCost, min: 40, max: 250, step: 5, show: money(cost) },
  ];

  return (
    <section style={{ borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 56px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
          <Label n="03">{c.label}</Label>
          <h2 className="lp-h2" style={{ fontSize: "clamp(32px, 3.6vw, 56px)" }}>
            {c.titleA} <span className="lp-dim">{c.titleB}</span>
          </h2>
          <p className="lp-lead" style={{ margin: 0 }}>
            {c.lead}
          </p>
        </div>

        <div className="lp-rv lp-calc">
          <div className="lp-calc-inputs">
            {sliders.map((s) => (
              <label key={s.id} className="lp-calc-row">
                <span className="lp-calc-top">
                  <span>{s.label}</span>
                  <b className="lp-mono">{s.show}</b>
                </span>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => s.set(Number(e.target.value))}
                  style={{ "--p": `${((s.value - s.min) / (s.max - s.min)) * 100}%` } as CSSProperties}
                />
              </label>
            ))}
            <p className="lp-calc-note">{c.shareNote}</p>
          </div>

          <div className="lp-calc-out" aria-live="polite">
            <div>
              <span>{c.monthly}</span>
              <strong className="lp-calc-big">{money(monthly)}</strong>
            </div>
            <div className="lp-calc-split">
              <div>
                <span>{c.yearly}</span>
                <strong>{money(yearly)}</strong>
              </div>
              <div>
                <span>{c.hoursSaved}</span>
                <strong>
                  {fmt(hoursMonth)} <small>{c.perMonth}</small>
                </strong>
              </div>
            </div>
            <CtaButton href="#contact" location="calc" size="md" arrow>
              {c.cta}
            </CtaButton>
            <p className="lp-calc-note">{c.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
