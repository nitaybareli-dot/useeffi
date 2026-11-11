"use client";

import { useEffect, useState } from "react";
import { CtaLink } from "../cta-link";

/**
 * Mobile-only bar pinned to the bottom of the screen. Shows once the hero
 * has scrolled out of view, and hides while the contact section is on screen.
 */
export function StickyCta({ label }: { label: string }) {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;

    const heroObserver = new IntersectionObserver(([entry]) => {
      // Past the hero only when it is out of view above the viewport.
      setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    // Stays hidden from the contact section down, including the footer.
    const contactObserver = new IntersectionObserver(([entry]) =>
      setAtContact(entry.isIntersecting || entry.boundingClientRect.top < 0),
    );
    heroObserver.observe(hero);
    contactObserver.observe(contact);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !atContact;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={visible ? undefined : true}
      inert={!visible}
    >
      <CtaLink href="#contact" location="sticky_mobile" arrow className="w-full">
        {label}
      </CtaLink>
    </div>
  );
}
