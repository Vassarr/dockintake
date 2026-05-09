const rows = [
  {
    label: "Under 5 minutes",
    tag: "You",
    pct: 95,
    rate: "High",
    tone: "high" as const,
    sub: "You call first. Job is yours.",
  },
  {
    label: "30+ minutes",
    tag: "Them",
    pct: 18,
    rate: "Low",
    tone: "low" as const,
    sub: "Customer already went with another company.",
  },
];

export default function SpeedWins() {
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Speed wins</span>
          <h2 className="mt-4 md:mt-5 text-3xl md:text-5xl font-bold tracking-tight text-cream">
            First to respond wins.
          </h2>
        </div>

        <div className="mt-8 md:mt-12 card p-4 md:p-10">
          <div className="text-xs uppercase tracking-wider text-cream/45">
            Response time vs. close rate
          </div>

          <div className="mt-6 space-y-7">
            {rows.map((r) => (
              <div key={r.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        r.tone === "high"
                          ? "text-accent-soft border-accent/40 bg-accent/10"
                          : "text-cream/50 border-line bg-cream/[0.03]"
                      }`}
                    >
                      {r.tag}
                    </span>
                    <span className="text-cream font-semibold text-lg md:text-xl">
                      {r.label}
                    </span>
                  </div>
                  <span
                    className={`text-sm md:text-base font-semibold ${
                      r.tone === "high" ? "text-accent-soft" : "text-cream/45"
                    }`}
                  >
                    {r.rate} conversion
                  </span>
                </div>

                <div className="mt-3 relative h-3 rounded-full bg-cream/[0.04] overflow-hidden border border-line">
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ${
                      r.tone === "high"
                        ? "bg-gradient-to-r from-accent to-accent-soft shadow-glow"
                        : "bg-cream/20"
                    }`}
                    style={{ width: `${r.pct}%` }}
                  />
                </div>

                <div className="mt-2 text-sm text-cream/55">{r.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-line text-sm text-cream/55 text-center">
            DockIntake puts you in the{" "}
            <span className="text-cream">under-5-minute group</span> — every
            time.
          </div>
        </div>
      </div>
    </section>
  );
}
