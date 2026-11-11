"use client";

import { track } from "@vercel/analytics";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { HeDict } from "@/content/types";
import { CtaLink } from "../cta-link";
import { Frame, Label, pad } from "../ui";

/**
 * Industry tabs. Each tab button carries the industry id (#real-estate,
 * #banking, ...), so a link to that hash scrolls here and opens the tab.
 */
export function Industries({ t }: { t: HeDict }) {
  const u = t.industries;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const fromHash = () => {
      const index = u.tabs.findIndex((tab) => `#${tab.id}` === window.location.hash);
      if (index >= 0) setActive(index);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [u.tabs]);

  const select = (index: number, focus = false) => {
    setActive(index);
    track("industry_tab", { industry: u.tabs[index].id });
    if (focus) tabs.current[index]?.focus();
  };

  // Arrow keys follow reading direction: in RTL the "next" tab is to the left.
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const count = u.tabs.length;
    if (event.key === "ArrowLeft") select((active + 1) % count, true);
    else if (event.key === "ArrowRight") select((active - 1 + count) % count, true);
    else if (event.key === "Home") select(0, true);
    else if (event.key === "End") select(count - 1, true);
    else return;
    event.preventDefault();
  };

  return (
    <section id="industries" className="border-b border-line">
      <Frame>
        <div className={`reveal flex flex-col items-center pb-10 pt-16 text-center md:pb-12 md:pt-24 ${pad}`}>
          <Label>{u.eyebrow}</Label>
          <h2 className="type-h2 mt-6 max-w-3xl">{u.title}</h2>
          <p className="type-lead mt-6 max-w-2xl">{u.lead}</p>
        </div>

        <div className="flex justify-start overflow-x-auto px-5 pb-10 [scrollbar-width:none] sm:px-10 lg:justify-center md:pb-12">
          <div role="tablist" aria-label={u.eyebrow} className="inline-flex shrink-0 gap-1 rounded-full bg-fog p-1">
            {u.tabs.map((tab, index) => {
              const selected = index === active;
              return (
                <button
                  key={tab.id}
                  ref={(node) => {
                    tabs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={tab.id}
                  aria-selected={selected}
                  aria-controls={`${tab.id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(index)}
                  onKeyDown={onKeyDown}
                  className={`h-11 shrink-0 scroll-mt-40 rounded-full px-5 text-[15px] transition-colors ${
                    selected ? "bg-paper font-medium text-ink shadow-sm" : "text-body hover:text-accent"
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {u.tabs.map((tab, index) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`${tab.id}-panel`}
            aria-labelledby={tab.id}
            hidden={index !== active}
            className="border-t border-line lg:grid-cols-[0.9fr_1.1fr] [&:not([hidden])]:grid"
          >
            <div className={`flex flex-col justify-between gap-8 bg-fog py-10 lg:py-14 ${pad}`}>
              <p className="max-w-md text-balance text-2xl font-medium leading-snug text-ink sm:text-[28px]">
                {tab.intro}
              </p>
              <p className="type-eyebrow">{tab.name}</p>
            </div>
            <ul className="lg:border-s lg:border-line">
              {tab.cases.map((item, caseIndex) => (
                <li
                  key={item.title}
                  className={`py-7 ${pad} ${caseIndex > 0 ? "border-t border-line" : "max-lg:border-t max-lg:border-line"}`}
                >
                  <h3 className="type-h3">{item.title}</h3>
                  <p className="type-card mt-1.5 max-w-xl">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div
          className={`flex flex-col gap-5 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between ${pad}`}
        >
          <p className="type-item">{u.note}</p>
          <CtaLink href="#contact" location="industries" arrow className="shrink-0">
            {u.cta}
          </CtaLink>
        </div>
      </Frame>
    </section>
  );
}
