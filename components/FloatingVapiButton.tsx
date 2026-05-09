"use client";

import Vapi from "@vapi-ai/web";
import { useEffect, useRef, useState } from "react";

const PUBLIC_KEY = "7d565e75-2f45-4fd4-bd5c-b506aacdeb18";
const ASSISTANT_ID = "f18f7ae5-025f-4b55-9c63-1dad21ff4d0c";

export default function FloatingVapiButton() {
  const vapiRef = useRef<Vapi | null>(null);
  const [active, setActive] = useState(false);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    const v = new Vapi(PUBLIC_KEY);
    vapiRef.current = v;
    v.on("call-start", () => {
      setActive(true);
      setConnecting(false);
    });
    v.on("call-end", () => {
      setActive(false);
      setConnecting(false);
    });
    v.on("error", () => {
      setActive(false);
      setConnecting(false);
    });
    return () => {
      try {
        v.stop();
      } catch {}
    };
  }, []);

  const toggle = async () => {
    const v = vapiRef.current;
    if (!v) return;
    if (active || connecting) {
      v.stop();
      setActive(false);
      setConnecting(false);
      return;
    }
    setConnecting(true);
    try {
      await v.start(ASSISTANT_ID);
    } catch {
      setConnecting(false);
    }
  };

  const label = active
    ? "End call"
    : connecting
      ? "Connecting…"
      : "Talk to our AI receptionist";

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 group"
      aria-label={label}
    >
      <span className="relative inline-flex items-center whitespace-nowrap gap-1.5 md:gap-2.5 px-3 py-1.5 md:px-5 md:py-3 rounded-full bg-ink/85 border border-accent/40 backdrop-blur-xl text-cream text-[11px] md:text-sm font-medium shadow-glow transition-all duration-300 hover:border-accent hover:shadow-[0_0_50px_-5px_rgba(108,92,231,0.7)]">
        <span className="relative flex w-1.5 h-1.5 md:w-2.5 md:h-2.5">
          <span
            className={`absolute inset-0 rounded-full ${
              active ? "bg-emerald-400" : "bg-accent"
            } animate-ping opacity-60`}
          />
          <span
            className={`relative w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full ${
              active ? "bg-emerald-400" : "bg-accent"
            }`}
          />
        </span>
        <svg
          viewBox="0 0 24 24"
          className="w-2.5 h-2.5 md:w-4 md:h-4 text-accent-soft"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
        </svg>
        {label}
      </span>
    </button>
  );
}
