"use client";

import { track } from "@vercel/analytics";
import { useEffect, useState } from "react";
import { Avatar } from "./avatar";
import { goToChat } from "./parts";

/**
 * A small Effi in the corner that shows up once the hero is scrolled away and
 * steps aside when the chat is on screen. The first time it appears it says
 * "let's talk" for a moment, then stays quiet until hovered.
 */
export function EffiFloat({ label }: { label: string }) {
  const [on, setOn] = useState(false);
  const [peek, setPeek] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    let pastHero = false;
    let chatVisible = false;
    let peeked = false;
    let timer = 0;

    const update = () => {
      const show = pastHero && !chatVisible;
      setOn(show);
      if (show && !peeked) {
        peeked = true;
        setPeek(true);
        timer = window.setTimeout(() => setPeek(false), 3200);
      }
    };
    const onScroll = () => {
      const next = window.scrollY > window.innerHeight * 0.9;
      if (next !== pastHero) {
        pastHero = next;
        update();
      }
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        chatVisible = entry.isIntersecting;
        update();
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    if (contact) io.observe(contact);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <button
      type="button"
      className="lp-float"
      data-on={on ? "" : undefined}
      data-peek={peek ? "" : undefined}
      aria-label={label}
      tabIndex={on ? 0 : -1}
      aria-hidden={on ? undefined : true}
      onClick={() => {
        track("cta_click", { location: "float" });
        goToChat();
      }}
    >
      <span className="lp-float-tip">{label}</span>
      <span className="lp-float-bob">
        <span className="lp-float-face">
          <Avatar size={52} />
        </span>
      </span>
    </button>
  );
}
