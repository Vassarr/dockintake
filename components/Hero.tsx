import GridBackground from "./GridBackground";

const trustItems = [
  "Live in 48 hours",
  "Works with your existing site",
  "No new software required",
];

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-3 md:pb-16 overflow-hidden">
      <GridBackground />

      <div className="relative max-w-5xl mx-auto px-5 md:px-6 text-center">
        <div className="inline-flex animate-fade-in">
          <span className="eyebrow">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-70" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
            For HVAC · Roofing · Plumbing · Electrical
          </span>
        </div>

        <h1
          className="mt-4 md:mt-5 text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] md:leading-[1.05] text-cream animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          Turn quote requests into{" "}
          <span className="relative whitespace-nowrap">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-soft via-accent to-accent-soft bg-[length:200%_100%] animate-shimmer">
              booked work.
            </span>
          </span>
        </h1>

        <p
          className="mt-4 md:mt-5 max-w-2xl mx-auto text-base md:text-xl text-cream/75 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.12s" }}
        >
          When someone fills out your form, you know instantly — so you can
          call first.
        </p>

        <div
          className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a href="#how" className="btn-primary">
            See How It Works
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#demo" className="btn-secondary">
            Simulate a Quote Request
          </a>
        </div>

        <ul
          className="mt-5 md:mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 md:gap-x-6 md:gap-y-3 text-xs md:text-sm text-cream/55 animate-fade-up"
          style={{ animationDelay: "0.34s" }}
        >
          {trustItems.map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-accent-soft"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l4 4L19 6" />
              </svg>
              {t}
            </li>
          ))}
        </ul>

        {/* Hero preview frame: form → text */}
        <div
          className="relative mt-5 md:mt-14 mx-auto max-w-3xl w-full animate-fade-up"
          style={{ animationDelay: "0.42s" }}
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent/40 via-transparent to-transparent blur-xl opacity-60" />
          <div className="relative card p-2.5 md:p-7 text-left">
            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-2.5 md:gap-5">
              {/* Form side */}
              <div className="rounded-2xl border border-line bg-cream/[0.03] p-2.5 md:p-4">
                <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-cream/45">
                  Your website form
                </div>
                <div className="mt-1.5 md:mt-3 space-y-1 md:space-y-2">
                  <div className="h-2 md:h-3 rounded bg-cream/10 w-2/3" />
                  <div className="h-5 md:h-7 rounded-md bg-cream/[0.06] border border-line" />
                  <div className="h-2 md:h-3 rounded bg-cream/10 w-1/2" />
                  <div className="h-5 md:h-7 rounded-md bg-cream/[0.06] border border-line" />
                  <div className="mt-1 md:mt-2 inline-flex items-center justify-center w-full h-6 md:h-8 rounded-md bg-accent text-cream text-[11px] md:text-xs font-semibold shadow-glow">
                    Request a quote
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-accent-soft animate-pulseGlow rounded-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>

              {/* SMS bubble */}
              <div className="sms-bubble animate-float">
                <div className="text-xs uppercase tracking-wider text-accent-soft mb-1">
                  New lead
                </div>
                <div className="font-semibold">John — 612-555-1234</div>
                <div className="text-cream/70">Needs AC repair today.</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-cream/5 border border-line text-cream/60">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
                    </svg>
                    Tap to call
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-cream/5 border border-line text-cream/60">
                    Source: website form
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
