const problems = [
  {
    title: "Quote requests sit in an inbox",
    body: "A customer fills out your form. By the time you check email, they've booked someone else.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    title: "Slow callbacks lose jobs",
    body: "You call back three hours later. They already got two other quotes. The job is gone.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Missed calls cost you jobs",
    body: "Phone rings on a job site. By the time you call back, they’ve booked another shop.",
    icon: (
      <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
    ),
  },
];

export default function Problem() {
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">The problem</span>
          <h2 className="mt-4 md:mt-5 text-3xl md:text-5xl font-bold tracking-tight text-cream">
            You&apos;re losing jobs you{" "}
            <span className="text-cream/50">already paid for.</span>
          </h2>
          <p className="mt-4 md:mt-5 text-cream/70 text-base md:text-lg leading-relaxed">
            Ads bring the quote requests in. The wait before you call back is
            where the money goes.
          </p>
        </div>

        <div className="mt-8 md:mt-12 grid md:grid-cols-3 gap-4 md:gap-5">
          {problems.map((p) => (
            <div key={p.title} className="card p-4 md:p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent-soft">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {p.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-cream">
                {p.title}
              </h3>
              <p className="mt-2 text-cream/65 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
