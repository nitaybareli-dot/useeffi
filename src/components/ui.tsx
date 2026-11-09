import type { ReactNode } from "react";

/** Horizontal padding shared by every block inside the frame. */
export const pad = "px-5 sm:px-10";

/** Page column. From tablet up it carries the hairlines that run down both sides. */
export function Frame({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] md:border-x ${
        dark ? "border-white/12" : "border-line"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Label({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-[13px] ${dark ? "text-dim" : "text-mute"}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 ${dark ? "bg-paper" : "bg-ink"}`} />
      {children}
    </p>
  );
}

/**
 * Renders a heading in two tones: the first sentence (or clause) in full
 * strength and the rest in grey.
 */
export function TwoTone({ text, dark = false }: { text: string; dark?: boolean }) {
  const match = text.match(/^(.+?[.?!])\s+(.+)$/) ?? text.match(/^(.+?,)\s+(.+)$/);
  if (!match) return <>{text}</>;
  return (
    <>
      {match[1]} <span className={dark ? "text-white/45" : "text-faint"}>{match[2]}</span>
    </>
  );
}

export const headingClass =
  "text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-light leading-[1.08] tracking-[-0.025em]";

export function SectionHead({
  label,
  title,
  lead,
  action,
  dark = false,
}: {
  label: string;
  title: string;
  lead?: string;
  action?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`reveal flex flex-col gap-8 py-16 sm:py-24 lg:flex-row lg:items-end lg:justify-between ${pad}`}
    >
      <div className="max-w-3xl">
        <Label dark={dark}>{label}</Label>
        <h2 className={`mt-6 ${headingClass}`}>
          <TwoTone text={title} dark={dark} />
        </h2>
        {lead ? (
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-dim" : "text-mute"}`}>
            {lead}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
