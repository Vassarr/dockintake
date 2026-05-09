"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#demo", label: "Demo" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div
        aria-hidden
        className={`absolute inset-0 backdrop-blur-xl bg-ink/70 transition-opacity duration-300 will-change-[opacity] ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        aria-hidden
        className={`absolute left-0 right-0 bottom-0 h-px bg-line transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="DockIntake"
            width={44}
            height={44}
            className="w-10 h-10 md:w-11 md:h-11 rounded-xl animate-logoBreathe motion-reduce:animate-none"
          />
          <span className="text-lg md:text-xl font-semibold tracking-tight text-cream">
            DockIntake
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-cream/70">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="text-sm text-cream/70 hover:text-cream">
            Try Demo
          </a>
          <a href="#pricing" className="btn-primary !py-2 !px-4 !text-sm">
            Get Started
          </a>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden inline-flex w-9 h-9 items-center justify-center rounded-lg border border-line"
          onClick={() => setOpen((s) => !s)}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-cream"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-ink/90 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3 text-cream/80">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
