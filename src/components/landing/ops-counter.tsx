"use client";

import { useEffect, useState } from "react";

const format = new Intl.NumberFormat("en-US");

/** Demo counter that keeps ticking, so the log feels live. */
export function OpsCounter() {
  const [count, setCount] = useState(1284);
  useEffect(() => {
    const timer = setInterval(() => setCount((n) => n + 1 + Math.floor(Math.random() * 3)), 1600);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="lp-mono" dir="ltr" style={{ fontSize: 20, color: "#fff" }}>
      {format.format(count)}
    </span>
  );
}
