"use client";

import { useEffect, useRef, useState } from "react";

type StepKey = "submit" | "text" | "call";

const STEPS: { key: StepKey; label: string; sub: string }[] = [
  {
    key: "submit",
    label: "Customer submits quote request",
    sub: "They fill out the form on your website.",
  },
  {
    key: "text",
    label: "You get a text instantly",
    sub: "Name, number, and what they need.",
  },
  {
    key: "call",
    label: "You call immediately",
    sub: "Connected before anyone else sees the lead.",
  },
];

export default function LiveDemo() {
  const [active, setActive] = useState<number>(-1);
  const [running, setRunning] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const run = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setRunning(true);
    setActive(0);
    timers.current.push(
      setTimeout(() => setActive(1), 1400),
      setTimeout(() => setActive(2), 3000),
      setTimeout(() => setRunning(false), 4400)
    );
  };

  const reached = (i: number) => active >= i;

  return (
    <section id="demo" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-radial-soft opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Live demo</span>
          <h2 className="mt-3 md:mt-5 text-2xl md:text-5xl font-bold tracking-tight text-cream">
            Watch a quote request turn into a call.
          </h2>
          <div className="mt-5 md:mt-7">
            <button
              onClick={run}
              disabled={running}
              className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative flex w-2 h-2">
                <span
                  className={`absolute inset-0 rounded-full bg-cream/80 ${
                    running ? "" : "animate-ping opacity-70"
                  }`}
                />
                <span className="relative w-2 h-2 rounded-full bg-cream" />
              </span>
              {running ? "Running…" : "Simulate a quote request"}
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-6 md:mt-12 grid md:grid-cols-3 gap-3 md:gap-5 w-full max-w-full">
          <div className="hidden md:block absolute top-7 left-[14%] right-[14%] h-px bg-line">
            <div
              className="h-px bg-gradient-to-r from-accent via-accent-soft to-accent transition-all duration-700"
              style={{
                width:
                  active >= 2
                    ? "100%"
                    : active >= 1
                    ? "50%"
                    : active >= 0
                    ? "8%"
                    : "0%",
              }}
            />
          </div>

          {STEPS.map((s, i) => (
            <div
              key={s.key}
              className={`card p-2.5 md:p-5 transition-all duration-500 ${
                reached(i) ? "border-accent/50" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 md:gap-3">
                <span
                  className={`relative flex w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full border transition-all duration-500 ${
                    reached(i)
                      ? "bg-accent text-cream border-accent shadow-glow"
                      : "bg-ink text-cream/50 border-line"
                  }`}
                >
                  {reached(i) ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                  ) : (
                    <span className="text-sm font-semibold">{i + 1}</span>
                  )}
                  {active === i && (
                    <span className="absolute inset-0 rounded-full bg-accent/40 animate-pulseGlow" />
                  )}
                </span>
                <div>
                  <div className="text-cream font-semibold">{s.label}</div>
                  <div className="text-xs text-cream/50">Step {i + 1}</div>
                </div>
              </div>
              <p className="mt-2 md:mt-4 text-cream/65 text-xs md:text-sm leading-snug md:leading-relaxed">
                {s.sub}
              </p>

              <div className="mt-3 md:mt-5">
                {s.key === "submit" && <FormSubmit active={active === 0} reached={reached(0)} />}
                {s.key === "text" && <TextSent active={active === 1} reached={reached(1)} />}
                {s.key === "call" && <CallNow active={active === 2} reached={reached(2)} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormSubmit({ active, reached }: { active: boolean; reached: boolean }) {
  return (
    <div
      className={`rounded-2xl border bg-cream/[0.03] p-2.5 md:p-4 h-[104px] md:h-32 transition-all duration-500 ${
        reached ? "border-accent/40" : "border-line opacity-70"
      }`}
    >
      <div className="text-[10px] uppercase tracking-wider text-cream/45">
        Quote request form
      </div>
      <div className="mt-1 md:mt-2 space-y-1 md:space-y-1.5">
        <div className="h-1.5 md:h-2 rounded bg-cream/10 w-2/3" />
        <div className="h-4 md:h-5 rounded bg-cream/[0.06] border border-line" />
        <div className="h-1.5 md:h-2 rounded bg-cream/10 w-1/2" />
      </div>
      <div
        className={`mt-1.5 md:mt-2 inline-flex items-center justify-center text-[11px] font-semibold px-3 py-1 md:py-1.5 rounded-md transition-all ${
          active
            ? "bg-accent text-cream shadow-glow scale-[1.03]"
            : reached
            ? "bg-accent/30 text-cream"
            : "bg-cream/[0.05] text-cream/50"
        }`}
      >
        {active ? "Submitting…" : "Request quote"}
      </div>
    </div>
  );
}

function TextSent({ active, reached }: { active: boolean; reached: boolean }) {
  return (
    <div
      className={`rounded-2xl border bg-cream/[0.03] p-2.5 md:p-4 h-[104px] md:h-32 transition-all duration-500 ${
        reached ? "border-accent/40" : "border-line opacity-60"
      }`}
    >
      <div className="text-[10px] uppercase tracking-wider text-accent-soft">
        DockIntake · now
      </div>
      <div
        className={`mt-1 text-[13px] text-cream font-medium transition-all duration-500 ${
          active
            ? "translate-y-0 opacity-100"
            : reached
            ? "opacity-100"
            : "translate-y-1 opacity-40"
        }`}
      >
        New lead: John — 612-555-1234
      </div>
      <div className="text-[13px] text-cream/65">Needs AC repair today.</div>
      <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-cream/45">
        <svg
          viewBox="0 0 24 24"
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        Sent in 4 seconds
      </div>
    </div>
  );
}

function CallNow({ active, reached }: { active: boolean; reached: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-2.5 md:p-4 h-[104px] md:h-32 flex items-center gap-3 md:gap-4 transition-all duration-500 ${
        reached
          ? "border-accent/50 bg-accent/10"
          : "border-line bg-cream/[0.03] opacity-60"
      }`}
    >
      <span
        className={`relative inline-flex w-11 h-11 items-center justify-center rounded-full border ${
          reached ? "border-accent bg-accent/20" : "border-line"
        }`}
      >
        {active && (
          <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
        )}
        <svg
          viewBox="0 0 24 24"
          className={`relative w-5 h-5 ${
            reached ? "text-accent-soft" : "text-cream/40"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
        </svg>
      </span>
      <div>
        <div className="text-cream font-semibold text-sm">
          {active ? "Calling John now…" : "On the call · 0:08"}
        </div>
        <div className="text-xs text-cream/55">AC repair · John</div>
        <div className="mt-1 text-[11px] text-accent-soft">+$420 job</div>
      </div>
    </div>
  );
}
