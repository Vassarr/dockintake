const points = [
  {
    title: "First to call wins",
    body: "Whoever calls back first books the job. That's you now.",
    stat: "5 min",
  },
  {
    title: "Built for people on the jobsite — not behind a desk.",
    body: "HVAC, roofing, plumbing, electrical — same playbook, same results.",
    stat: "All trades",
  },
];

export default function SocialProof() {
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          {points.map((p) => (
            <div key={p.title} className="card p-7">
              <div className="text-3xl font-bold text-accent-soft">
                {p.stat}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-cream leading-snug">
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
