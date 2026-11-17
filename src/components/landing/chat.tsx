import type { Landing } from "@/content/landing";
import { Avatar } from "./avatar";
import { Label } from "./parts";

/** What a manager receives from Effi in the morning, next to the ways you stay in control. */
export function Chat({ t }: { t: Landing }) {
  const c = t.chat;
  return (
    <section className="lp-dark" style={{ borderTop: "1px solid #1c1c1c" }}>
      <div className="lp-wrap lp-section" style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
        <div className="lp-head lp-rv">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Label n="02">{c.label}</Label>
            <h2 className="lp-h2">
              {c.titleA}{" "}
              <span className="lp-dim">{c.titleB}</span>
            </h2>
          </div>
          <p className="lp-lead">{c.lead}</p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 96px)", alignItems: "flex-start" }}>
          {/* Phone: a light, WhatsApp-style conversation with Effi */}
          <div style={{ flex: "0 1 400px", minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ fontSize: 13, color: "var(--lp-mute)" }}>{c.phoneLabel}</span>
            <div style={{ border: "1px solid #2a2a2a", borderRadius: 40, padding: 10, background: "#0b0b0b" }}>
              <div style={{ borderRadius: 31, overflow: "hidden", background: "#efeae2", display: "flex", flexDirection: "column", color: "#111b21" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: "#f6f6f6", borderBottom: "1px solid #e2e2e2" }}>
                  <svg className="lp-back" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#027eb5" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                    <path d="m11 18-6-6 6-6" />
                  </svg>
                  <Avatar size={38} round />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                    <span style={{ fontSize: 16, fontWeight: 600 }}>{c.name}</span>
                    <span style={{ fontSize: 12, color: "#667781" }}>{c.online}</span>
                  </div>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#54656f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                </div>
                <div style={{ padding: "14px 10px 16px", display: "flex", flexDirection: "column", gap: 6, minHeight: 500 }}>
                  <span style={{ alignSelf: "center", fontSize: 12, color: "#54656f", background: "#fff", padding: "4px 12px", borderRadius: 8, boxShadow: "0 1px 0.5px rgba(11,20,26,0.13)", marginBottom: 4 }}>
                    {c.today}
                  </span>
                  <div className="lp-wa-in lp-rv">
                    {c.greeting}
                    <span className="lp-wa-meta">07:58</span>
                  </div>
                  <div className="lp-wa-in lp-rv">
                    <strong style={{ fontWeight: 600 }}>{c.doneTitle}</strong>
                    {c.done.map((line) => (
                      <span key={line} style={{ display: "block" }}>
                        ✓ {line}
                      </span>
                    ))}
                    <span className="lp-wa-meta">08:00</span>
                  </div>
                  <div className="lp-rv" style={{ alignSelf: "flex-start", maxWidth: "85%", display: "flex", flexDirection: "column", gap: 2 }}>
                    <div className="lp-wa-in" style={{ maxWidth: "none" }}>
                      <strong style={{ fontWeight: 600, display: "block" }}>{c.approvalTitle}</strong>
                      {c.approvalItem}
                      <span style={{ display: "block", color: "#54656f" }}>{c.approvalDetail}</span>
                      <span className="lp-wa-meta">08:01</span>
                    </div>
                    {/* Reply buttons, as they appear in the app. Illustration only. */}
                    {[c.approve, c.details].map((label) => (
                      <span
                        key={label}
                        aria-hidden="true"
                        style={{ background: "#fff", borderRadius: 8, padding: "9px 12px", textAlign: "center", fontSize: 14.5, fontWeight: 500, color: "#008069", boxShadow: "0 1px 0.5px rgba(11,20,26,0.13)" }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="lp-wa-out lp-rv">
                    {c.reply}
                    <span className="lp-wa-meta">
                      08:14
                      <svg width="16" height="11" viewBox="0 0 16 11" aria-hidden="true">
                        <path d="M11.1 1 5.4 7.6 2.9 5.2l-.8.9 3.3 3.1L12 1.8zM15 1 9.3 7.6l-.8-.7-.8.9 1.6 1.4L15.8 1.8z" fill="#53bdeb" />
                      </svg>
                    </span>
                  </div>
                  <div className="lp-wa-in lp-rv">
                    {c.ack}
                    <span className="lp-wa-meta">08:14</span>
                  </div>
                  <div className="lp-wa-in" style={{ display: "flex", gap: 4, padding: "11px 14px" }} role="img" aria-label={c.typing}>
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="lp-dot" style={{ width: 7, height: 7, borderRadius: 99, background: "#8696a0" }} />
                    ))}
                  </div>
                </div>
                <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: "#f0f2f5" }}>
                  <span style={{ flex: 1, background: "#fff", borderRadius: 999, padding: "9px 14px", fontSize: 14, color: "#8696a0" }}>{c.messagePlaceholder}</span>
                  <span style={{ width: 38, height: 38, borderRadius: 999, background: "#00a884", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                      <rect x="9" y="3" width="6" height="11" rx="3" />
                      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* You stay in control */}
          <ul className="lp-rv" style={{ flex: "1 1 320px", minWidth: 0, margin: 0, padding: 0, listStyle: "none", alignSelf: "center", display: "flex", flexDirection: "column" }}>
            {c.facts.map((fact, i) => (
              <li key={fact.title} style={{ padding: "24px 0", borderTop: i ? "1px solid var(--lp-line)" : undefined, display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 500 }}>{fact.title}</span>
                <span style={{ fontSize: 16, color: "var(--lp-soft)" }}>{fact.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
