"use client";

import { useState } from "react";
import Link from "next/link";

export default function SmsConsentUI() {
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
  }

  function handleCheckboxToggle() {
    setAgreed((v) => !v);
    setSaved(false);
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value);
    setSaved(false);
  }

  const smsEnabled = saved && agreed;

  return (
    <div className="min-h-screen bg-ink text-cream">
      {/* Background layers */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid mask-radial-soft opacity-20" />
        <div
          className="glow-blob"
          style={{
            width: 520,
            height: 520,
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.3,
          }}
        />
      </div>

      {/* Minimal nav */}
      <header className="border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="DockIntake"
              width={40}
              height={40}
              className="w-9 h-9 rounded-xl"
            />
            <span className="text-base font-semibold tracking-tight text-cream">
              DockIntake
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-cream/55 hover:text-cream transition-colors flex items-center gap-1.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Back to site
          </Link>
        </div>
      </header>

      {/* Page body */}
      <main className="relative max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Page header */}
        <div className="mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#c8c2ff] bg-[rgba(108,92,231,0.1)] border border-[rgba(108,92,231,0.25)]">
            Settings
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-cream">
            SMS Lead Alerts{" "}
            <span className="text-cream/40 font-normal">(Optional)</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-cream/65 leading-relaxed max-w-lg">
            Receive operational SMS notifications for new customer lead
            submissions. This feature is optional and can be enabled or disabled
            at any time.
          </p>
        </div>

        {/* Settings card */}
        <div className="relative card p-6 md:p-8 space-y-6">
          {/* Inner glow only when SMS is actively enabled */}
          {smsEnabled && (
            <div
              aria-hidden
              className="absolute inset-0 rounded-[1.25rem] pointer-events-none"
              style={{
                boxShadow: "inset 0 0 40px rgba(108,92,231,0.10)",
              }}
            />
          )}

          {/* Mobile number field */}
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-cream/80"
            >
              Mobile Number
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cream/30">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              </span>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 555-5555"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.10] text-cream placeholder:text-cream/25 text-sm focus:outline-none focus:border-[rgba(108,92,231,0.55)] focus:ring-1 focus:ring-[rgba(108,92,231,0.35)] transition-colors"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06]" />

          {/* Optional checkbox */}
          <div className="flex items-start gap-3">
            <button
              role="checkbox"
              aria-checked={agreed}
              onClick={handleCheckboxToggle}
              className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[rgba(108,92,231,0.5)] ${
                agreed
                  ? "bg-[#6c5ce7] border-[#6c5ce7] shadow-[0_0_12px_rgba(108,92,231,0.45)]"
                  : "bg-white/[0.04] border-white/[0.14] hover:border-white/[0.28]"
              }`}
            >
              {agreed && (
                <svg
                  viewBox="0 0 12 12"
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1.5 6l3 3 6-6" />
                </svg>
              )}
            </button>
            <span className="text-sm text-cream/70 leading-relaxed">
              Enable SMS lead notifications
            </span>
          </div>

          {/* Consent disclosure — always visible */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] px-4 py-3.5 text-xs text-cream/50 leading-relaxed">
            By enabling SMS notifications, you agree to receive operational text
            messages from DockIntake regarding new customer lead submissions.
            Message frequency varies. Message and data rates may apply. Reply{" "}
            <strong className="text-cream/70 font-medium">STOP</strong> to opt
            out. Reply{" "}
            <strong className="text-cream/70 font-medium">HELP</strong> for
            help.
          </div>

          {/* Helper text */}
          <p className="text-xs text-cream/40 leading-relaxed -mt-1">
            You may continue using DockIntake without enabling SMS notifications.
          </p>

          {/* CTA */}
          <div className="space-y-3">
            <button
              onClick={handleSave}
              className="btn-primary w-full justify-center"
            >
              {agreed ? (
                <>
                  Enable SMS Notifications
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
                  </svg>
                </>
              ) : (
                <>
                  Save Settings
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </>
              )}
            </button>

            {/* Status indicator — appears after save */}
            {saved && (
              <div className="flex items-center justify-center gap-2 text-xs text-cream/55 animate-fade-in">
                {smsEnabled ? (
                  <>
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                      <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                    </span>
                    Status: SMS notifications enabled
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-cream/25 flex-shrink-0" />
                    Status: SMS notifications disabled
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* What messages look like */}
        <div className="mt-10 md:mt-14">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-px flex-1 bg-white/[0.07]" />
            <span className="text-xs font-medium tracking-widest uppercase text-cream/35">
              What messages look like
            </span>
            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <div className="flex justify-start">
            <div className="max-w-xs w-full">
              <p className="text-[11px] text-cream/35 mb-2 ml-1">DockIntake</p>
              <div className="sms-bubble">
                <p className="text-xs font-semibold text-[#c8c2ff] mb-0.5">
                  New Roofing Lead
                </p>
                <p className="text-sm text-cream leading-snug">
                  Name: John Smith
                  <br />
                  Phone: (555) 555-5555
                  <br />
                  Service: Roof Repair
                </p>
                <p className="mt-3 text-xs text-cream/40">
                  Reply STOP to opt out.
                </p>
              </div>
              <p className="mt-2 ml-1 text-[11px] text-cream/30 flex items-center gap-1.5">
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
                Delivered in seconds
              </p>
            </div>
          </div>
        </div>

        {/* Bottom compliance note */}
        <p className="mt-10 md:mt-14 text-xs text-cream/30 text-center leading-relaxed">
          Standard message and data rates may apply. Carriers are not liable for
          delayed or undelivered messages.{" "}
          <Link
            href="/privacy-policy"
            className="underline decoration-white/20 underline-offset-4 hover:text-cream/55 transition-colors"
          >
            Privacy Policy
          </Link>{" "}
          ·{" "}
          <Link
            href="/terms"
            className="underline decoration-white/20 underline-offset-4 hover:text-cream/55 transition-colors"
          >
            Terms of Service
          </Link>
        </p>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-white/[0.07] py-8">
        <p className="text-center text-xs text-cream/30">
          © {new Date().getFullYear()} DockIntake. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
