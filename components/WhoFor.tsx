const trades = ["HVAC", "Roofing", "Plumbing", "Electrical"];

export default function WhoFor() {
  return (
    <section className="relative py-10 md:py-14 border-y border-line bg-cream/[0.015]">
      <div className="absolute inset-0 bg-dots opacity-30 mask-radial-soft pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-4 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-cream/45">
            Built for
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 md:gap-x-3">
            {trades.map((t, i) => (
              <li
                key={t}
                className="flex items-center md:gap-3 text-cream font-semibold text-sm md:text-lg"
              >
                <span className="px-3 py-1 rounded-full border border-line bg-cream/[0.03] hover:border-accent/50 transition">
                  {t}
                </span>
                {i < trades.length - 1 && (
                  <span className="hidden md:inline text-accent-soft">•</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
