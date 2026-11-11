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

/** Small eyebrow label above a heading. Colors come from `.type-eyebrow`. */
export function Label({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className="type-eyebrow flex items-center gap-2.5">
      <span aria-hidden="true" className={`h-1.5 w-1.5 ${dark ? "bg-accent-on-dark" : "bg-accent"}`} />
      {children}
    </p>
  );
}

/** Two digit counter: 01, 02, 03. */
export const num = (index: number) => String(index + 1).padStart(2, "0");

export const headingClass = "type-h2";

export function SectionHead({
  label,
  title,
  lead,
  action,
  dark = false,
  className = "py-16 sm:py-24",
}: {
  label?: string;
  title: string;
  lead?: string;
  action?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between ${pad} ${className}`}
    >
      <div className="max-w-3xl">
        {label ? <Label dark={dark}>{label}</Label> : null}
        <h2 className={`${label ? "mt-6" : ""} ${headingClass}`}>{title}</h2>
        {lead ? <p className="type-lead mt-6 max-w-2xl">{lead}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
