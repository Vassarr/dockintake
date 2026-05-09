"use client";

import Vapi from "@vapi-ai/web";
import { useEffect, useRef, useState } from "react";

const PUBLIC_KEY = "7d565e75-2f45-4fd4-bd5c-b506aacdeb18";
const ASSISTANT_ID = "f18f7ae5-025f-4b55-9c63-1dad21ff4d0c";

export default function VapiButton() {
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
      : "Talk to AI agent";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="mt-7 btn-secondary w-full"
    >
      <span className="relative flex w-2 h-2">
        {(active || connecting) && (
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-70" />
        )}
        <span
          className={`relative w-2 h-2 rounded-full ${
            active ? "bg-emerald-400" : connecting ? "bg-accent" : "bg-accent-soft"
          }`}
        />
      </span>
      {label}
    </button>
  );
}
