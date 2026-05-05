const steps = [
  {
    n: "01",
    title: "Customer requests a quote",
    body: "They fill out the form on your existing website. Nothing changes for them.",
  },
  {
    n: "02",
    title: "You get a text in seconds",
    body: "Name, phone, and what they need — right on your phone. No app, no login.",
  },
  {
    n: "03",
    title: "You make the call.",
    body: "While the lead is fresh.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 md:mt-5 text-3xl md:text-5xl font-bold tracking-tight text-cream">
            Simple. Fast. Done.
          </h2>
          <p className="mt-3 md:mt-4 text-cream/70 text-base md:text-lg">
            Built for people on the jobsite — not sitting at a desk.
          </p>
        </div>

        <div className="mt-8 md:mt-12 grid md:grid-cols-3 gap-4 md:gap-5 relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          {steps.map((s, i) => (
            <div
              key={s.n}
              className="card p-5 md:p-7 relative animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <span className="relative flex w-10 h-10 items-center justify-center rounded-full bg-ink border border-accent/40 text-accent-soft font-semibold">
                  {s.n}
                  <span className="absolute inset-0 rounded-full bg-accent/10 blur-md" />
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-cream leading-snug">
                {s.title}
              </h3>
              <p className="mt-3 text-cream/65 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
