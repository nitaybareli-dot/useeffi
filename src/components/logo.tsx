/** Plain lowercase wordmark. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      dir="ltr"
      className={`inline-block text-[1.65rem] font-medium leading-none tracking-[-0.055em] ${className}`}
    >
      effi
    </span>
  );
}
