"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The principles as a numbered list. The one in the middle of the screen is
 * highlighted and Effi's block slides beside it, so the list reads one item at
 * a time. Without JavaScript every item simply shows in full.
 */
export function RulesList({ items }: { items: { title: string; text: string }[] }) {
  const [active, setActive] = useState(-1);
  const [top, setTop] = useState(0);
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const node = list.current;
    if (!node) return;
    const rows = Array.from(node.querySelectorAll<HTMLLIElement>("li"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = rows.indexOf(entry.target as HTMLLIElement);
          setActive(i);
          setTop(rows[i].offsetTop + rows[i].offsetHeight / 2);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    rows.forEach((row) => io.observe(row));
    return () => io.disconnect();
  }, []);

  return (
    <ol ref={list} className="lp-rules" data-live={active >= 0 ? "" : undefined} style={{ ["--dot-y" as string]: `${top}px` }}>
      {items.map((item, i) => (
        <li key={item.title} data-active={i === active ? "" : undefined}>
          <span className="lp-mono" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <strong>{item.title}</strong>
          <p>{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
