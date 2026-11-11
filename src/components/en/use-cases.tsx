"use client";

import { track } from "@vercel/analytics";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Dict } from "@/content/types";
import { Frame, Label, headingClass, pad } from "../ui";

export function UseCases({ t }: { t: Dict }) {
  const u = t.industries;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number, focus = false) => {
    setActive(index);
    track("industry_tab", { industry: u.tabs[index].name });
    if (focus) tabs.current[index]?.focus();
  };

  // Arrow keys follow reading direction: in RTL the "next" tab is to the left.
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const forward = t.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
    const backward = t.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
    const count = u.tabs.length;
    if (event.key === forward) select((active + 1) % count, true);
    else if (event.key === backward) select((active - 1 + count) % count, true);
    else if (event.key === "Home") select(0, true);
    else if (event.key === "End") select(count - 1, true);
    else return;
    event.preventDefault();
  };

  return (
    <section id="industries" className="border-b border-line">
      <Frame>
        <div className={`reveal flex flex-col items-center pb-12 pt-16 text-center sm:pt-24 ${pad}`}>
          <Label>{u.eyebrow}</Label>
          <h2 className={`mt-6 max-w-3xl ${headingClass}`}>{u.title}</h2>
          <p className="type-lead mt-6 max-w-2xl">{u.lead}</p>
        </div>

        <div className="flex justify-start overflow-x-auto px-5 pb-12 [scrollbar-width:none] sm:justify-center sm:px-10">
          <div
            role="tablist"
            aria-label={u.eyebrow}
            className="inline-flex shrink-0 gap-1 rounded-full bg-fog p-1"
          >
            {u.tabs.map((tab, index) => {
              const selected = index === active;
              return (
                <button
                  key={tab.name}
                  ref={(node) => {
                    tabs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`industry-tab-${index}`}
                  aria-selected={selected}
                  aria-controls={`industry-panel-${index}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(index)}
                  onKeyDown={onKeyDown}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                    selected ? "bg-paper text-ink shadow-sm" : "text-mute hover:text-accent"
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
            key={tab.name}
            role="tabpanel"
            id={`industry-panel-${index}`}
            aria-labelledby={`industry-tab-${index}`}
            hidden={index !== active}
            className="border-t border-line lg:grid-cols-[0.9fr_1.1fr] [&:not([hidden])]:grid"
          >
            <div className={`flex flex-col justify-between gap-10 bg-fog py-10 lg:py-14 ${pad}`}>
              <p className="max-w-md text-balance text-2xl font-medium leading-snug text-ink sm:text-3xl sm:leading-snug">
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

        <p className={`border-t border-line py-7 text-mute ${pad}`}>
          {u.note}{" "}
          <a
            href="#contact"
            className="whitespace-nowrap text-accent underline underline-offset-4 hover:text-accent-hover"
          >
            {u.noteCta}
          </a>
        </p>
      </Frame>
    </section>
  );
}
