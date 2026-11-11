"use client";

import { useEffect, useState } from "react";

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "referrer"] as const;
type Tracking = Partial<Record<(typeof KEYS)[number], string>>;
const STORAGE_KEY = "effi_attribution";

/** Reads UTM tags and the referrer from the first page view of the visit. */
function readAttribution(): Tracking {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved) as Tracking;
  } catch {
    // Storage blocked: fall through to the current URL.
  }
  const params = new URLSearchParams(window.location.search);
  const external = document.referrer && !document.referrer.startsWith(window.location.origin);
  const value: Tracking = {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    referrer: external ? document.referrer : "",
  };
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Not critical.
  }
  return value;
}

/** Hidden inputs that send attribution with the contact form. */
export function TrackingFields() {
  const [values, setValues] = useState<Tracking>({});
  useEffect(() => {
    // Browser-only values, read once after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValues(readAttribution());
  }, []);
  return (
    <>
      {KEYS.map((key) => (
        <input key={key} type="hidden" name={key} value={values[key] ?? ""} />
      ))}
    </>
  );
}
