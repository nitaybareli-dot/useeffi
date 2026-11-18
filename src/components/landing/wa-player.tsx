"use client";

import { useEffect, useRef } from "react";

/**
 * Plays the WhatsApp demo like a live chat: when the phone scrolls into view,
 * Effi "types" and the messages arrive one by one. Without JavaScript, or with
 * reduced motion, the whole conversation is simply shown.
 */
export function WaPlayer() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const body = ref.current?.closest<HTMLElement>("[data-wa-body]");
    if (!body) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const messages = Array.from(body.querySelectorAll<HTMLElement>("[data-wa]"));
    const typing = body.querySelector<HTMLElement>("[data-wa-typing]");
    // Already on screen when the page loads: leave it as it is.
    if (body.getBoundingClientRect().top < window.innerHeight * 0.8) return;

    messages.forEach((m) => (m.hidden = true));
    if (typing) typing.hidden = true;

    const timers: number[] = [];
    const wait = (ms: number) => new Promise<void>((done) => timers.push(window.setTimeout(done, ms)));
    let cancelled = false;

    const play = async () => {
      await wait(400);
      for (const message of messages) {
        if (cancelled) return;
        const incoming = message.dataset.wa === "in";
        if (incoming && typing) {
          typing.hidden = false;
          await wait(1000);
          typing.hidden = true;
        } else {
          await wait(1200);
        }
        if (cancelled) return;
        message.hidden = false;
        message.setAttribute("data-wa-new", "");
        await wait(600);
      }
      if (typing && !cancelled) typing.hidden = false;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        void play();
      },
      { threshold: 0.4 },
    );
    io.observe(body);
    return () => {
      cancelled = true;
      io.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      messages.forEach((m) => (m.hidden = false));
      if (typing) typing.hidden = false;
    };
  }, []);

  return <span ref={ref} hidden />;
}
