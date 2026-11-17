import type { Landing } from "@/content/landing";
import { Avatar } from "./avatar";
import { OpsCounter } from "./ops-counter";
import { Label } from "./parts";

function Status({ text, waiting }: { text: string; waiting?: boolean }) {
  const dot = { width: 6, height: 6, borderRadius: 99 } as const;
  return waiting ? (
    <span style={{ flex: "0 0 auto", fontSize: 12, padding: "5px 10px", borderRadius: 4, background: "var(--acc)", color: "#000", display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span className="lp-pulse" style={{ ...dot, background: "#000" }} />
      {text}
    </span>
  ) : (
    <span style={{ flex: "0 0 auto", fontSize: 12, padding: "5px 10px", borderRadius: 4, border: "1px solid #2a2a2a", color: "#c7c7c7", display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span style={{ ...dot, background: "var(--acc)" }} />
      {text}
    </span>
  );
}

/** What the manager receives from Effi, next to what Effi does in the background. */
export function Chat({ t }: { t: Landing }) {
  const c = t.chat;
  return (
    <section style={{ borderTop: "1px solid #1c1c1c" }}>
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

        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px, 3vw, 40px)", alignItems: "flex-start" }}>
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

          {/* Background log */}
          <div style={{ flex: "1 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ fontSize: 13, color: "var(--lp-mute)" }}>{c.logLabel}</span>
            <div style={{ border: "1px solid #262626", borderRadius: 10, overflow: "hidden", background: "#070707" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "16px 24px", borderBottom: "1px solid var(--lp-line)", background: "#0b0b0b" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#c7c7c7" }}>
                  <span className="lp-pulse" style={{ width: 8, height: 8, borderRadius: 99, background: "var(--acc)" }} />
                  {c.logTitle}
                  <span className="lp-mono" style={{ fontSize: 12, color: "var(--lp-mute)" }}>
                    · {c.logDemo}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, fontSize: 13, color: "var(--lp-mute)" }}>
                  {c.logCount}
                  <OpsCounter />
                </div>
              </div>
              {c.log.map((row) => (
                <div key={row.time} className="lp-rv" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 20px", padding: "18px 24px", borderTop: "1px solid #1a1a1a" }}>
                  <span className="lp-mono" dir="ltr" style={{ flex: "0 0 48px", fontSize: 13, color: "var(--lp-mute)" }}>
                    {row.time}
                  </span>
                  <span style={{ flex: "1 1 320px", fontSize: 16, lineHeight: 1.5, color: "#e6e6e6" }}>{row.text}</span>
                  <Status text={row.status} waiting={row.waiting} />
                </div>
              ))}
              <div style={{ padding: "16px 24px", borderTop: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: 10 }} aria-hidden="true">
                <span className="lp-mono" dir="ltr" style={{ fontSize: 13, color: "var(--lp-mute)" }}>
                  08:32
                </span>
                <span className="lp-caret" style={{ width: 9, height: 18, background: "var(--acc)" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="lp-rv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", borderTop: "1px solid var(--lp-line)" }}>
          {c.facts.map((fact) => (
            <div key={fact.title} style={{ padding: "24px 0", paddingInlineEnd: 24, display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 17, fontWeight: 500 }}>{fact.title}</span>
              <span style={{ fontSize: 15, color: "var(--lp-soft)" }}>{fact.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
