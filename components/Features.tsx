const blocks = [
  {
    title: "Get the lead instantly",
    body: "A text hits your phone the second someone requests a quote.",
    icon: (
      <>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </>
    ),
  },
  {
    title: "More incoming quotes",
    body: "A landing page built to turn traffic into real requests.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 14h6" />
      </>
    ),
  },
  {
    title: "AI answers missed calls",
    body: "If you don’t pick up, it answers and handles the call.",
    icon: (
      <>
        <path d="M12 2a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">What you get</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-cream">
            More jobs.
          </h2>
        </div>

        <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-4 md:gap-5">
          {blocks.map((b) => (
            <div key={b.title} className="card p-4 md:p-6 group">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent-soft transition-colors group-hover:bg-accent/20">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {b.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-cream">
                {b.title}
              </h3>
              <p className="mt-2 text-cream/65 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
