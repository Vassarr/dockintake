export default function FinalCTA() {
  return (
    <section id="cta" className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="glow-blob"
          style={{
            width: 700,
            height: 700,
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 bg-grid mask-radial-soft opacity-30" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-cream">
          Stop missing jobs.
        </h2>
        <p className="mt-4 md:mt-5 text-cream/70 text-base md:text-xl">
          Every missed call is a competitor&apos;s next sale. Live in 48 hours.
        </p>
        <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#pricing" className="btn-primary">
            Get Started
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
            Try the demo first
          </a>
        </div>
        <p className="mt-6 text-sm text-cream/45">
          No long contracts · 30-day money-back guarantee
        </p>
        <p className="mt-3 text-sm text-cream/55">
          Questions? Email{" "}
          <a
            href="mailto:help@dockintake.com"
            className="text-cream underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
          >
            help@dockintake.com
          </a>
        </p>
      </div>
    </section>
  );
}
