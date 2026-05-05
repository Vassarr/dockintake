"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { from: "ai" | "caller"; text: string };

const QUICK_REPLIES = ["AC repair", "Roof leak", "Get a quote"];

const RESPONSES: Record<string, string> = {
  "AC repair":
    "Got it — AC repair. What's your zip code? I can have someone out today.",
  "Roof leak":
    "Sorry to hear that. Is it actively leaking? I'll send a crew over.",
  "Get a quote":
    "Easy. What kind of work and what's the address? You'll get a text quote within the hour.",
};

export default function FloatingAIButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (!open) return;
    setMessages([
      { from: "ai", text: "Thanks for calling — what do you need help with?" },
    ]);
    setSpeaking(true);
    const t = setTimeout(() => setSpeaking(false), 900);
    return () => clearTimeout(t);
  }, [open]);

  const pickReply = (label: string) => {
    setMessages((m) => [...m, { from: "caller", text: label }]);
    setSpeaking(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "ai",
          text: RESPONSES[label] ?? "Got it. A real person will text you in a minute.",
        },
      ]);
      setSpeaking(false);
    }, 900);
  };

  const showQuickReplies =
    !speaking &&
    messages.length > 0 &&
    messages[messages.length - 1].from === "ai" &&
    messages.length <= 1;

  return (
    <>
      {/* Persistent floating button — voice receptionist */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 group"
        aria-label="Talk to AI receptionist"
      >
        <span className="relative inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-ink/85 border border-accent/40 backdrop-blur-xl text-cream text-sm font-medium shadow-glow transition-all duration-300 hover:border-accent hover:shadow-[0_0_50px_-5px_rgba(108,92,231,0.7)]">
          <span className="relative flex w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
            <span className="relative w-2.5 h-2.5 rounded-full bg-accent" />
          </span>
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-accent-soft"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
          </svg>
          Talk to AI receptionist
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/65 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full md:max-w-md mx-4 mb-4 md:mb-0 rounded-3xl border border-line bg-gradient-to-b from-[#16161d] to-[#0e0e14] p-5 md:p-6 shadow-card animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Call header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="relative inline-flex w-10 h-10 items-center justify-center rounded-full bg-accent/15 border border-accent/30">
                <span className="absolute inset-0 rounded-full bg-accent/30 animate-pulseGlow" />
                <svg
                  viewBox="0 0 24 24"
                  className="relative w-4 h-4 text-accent-soft"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-cream font-semibold">AI receptionist</div>
                <div className="text-xs text-cream/55 inline-flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </span>
                  On call · 00:0{Math.min(messages.length * 3, 9)}
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="End call"
                className="ml-auto w-9 h-9 rounded-full bg-red-500/90 hover:bg-red-500 inline-flex items-center justify-center text-cream"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 rotate-[135deg]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
                </svg>
              </button>
            </div>

            {/* Voice waveform */}
            <div className="rounded-2xl border border-line bg-cream/[0.02] px-4 py-3 flex items-center gap-1.5 h-14">
              {Array.from({ length: 22 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full transition-all duration-200 ${
                    speaking ? "bg-accent-soft" : "bg-cream/15"
                  }`}
                  style={{
                    height: speaking
                      ? `${20 + Math.abs(Math.sin((i + Date.now() / 200) * 0.6)) * 60}%`
                      : "18%",
                    animation: speaking
                      ? `pulseGlow ${0.6 + (i % 5) * 0.1}s ease-in-out ${i * 0.04}s infinite`
                      : undefined,
                  }}
                />
              ))}
            </div>

            {/* Transcript */}
            <div className="mt-4 space-y-2.5 text-sm">
              {messages.map((m, i) => (
                <div key={i} className="animate-fade-up">
                  <div
                    className={`text-[10px] uppercase tracking-wider mb-1 ${
                      m.from === "ai" ? "text-accent-soft" : "text-cream/45"
                    }`}
                  >
                    {m.from === "ai" ? "AI receptionist" : "You"}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-3 leading-relaxed ${
                      m.from === "ai"
                        ? "bg-cream/[0.04] border border-line text-cream/85"
                        : "bg-accent/15 border border-accent/30 text-cream"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick replies (voice prompts) */}
            {showQuickReplies && (
              <>
                <div className="mt-4 text-[10px] uppercase tracking-wider text-cream/45">
                  Try saying
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => pickReply(q)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm text-cream border border-accent/40 bg-accent/10 hover:bg-accent/20 hover:border-accent transition"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 text-accent-soft"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 1a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4z" />
                        <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v3" />
                      </svg>
                      “{q}”
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="mt-5 pt-4 border-t border-line flex items-center justify-between gap-3">
              <p className="text-xs text-cream/45">
                Demo of the voice AI. Yours on the AI plan.
              </p>
              <a href="#pricing" className="btn-primary !py-2 !px-4 !text-xs">
                See pricing
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
