import VapiButton from "./VapiButton";

type Tier = {
  name: string;
  setupLabel: string;
  price: string;
  suffix: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref?: string;
  vapi?: boolean;
  exampleHref?: string;
  exampleLabel?: string;
};

const tiers: Tier[] = [
  {
    name: "Foundation",
    setupLabel: "$300 setup",
    price: "$150",
    suffix: "/mo",
    description: "Form → instant text alerts.",
    features: [
      "Quote request form integration",
      "Instant SMS lead alerts",
      "Lead info: name, number, need",
      "Email support",
    ],
    cta: "Get Foundation",
    ctaHref: "https://buy.stripe.com/aFadR21my0y13Lt1SDabK04",
  },
  {
    name: "Professional",
    setupLabel: "$500 setup",
    price: "$150",
    suffix: "/mo",
    description: "Custom high-converting page + alerts.",
    features: [
      "Everything in Foundation",
      "Custom high-converting landing page",
      "Built to generate more quote requests",
      "Priority support",
    ],
    cta: "Get Professional",
    ctaHref: "https://buy.stripe.com/6oUfZa7KWeoRfub0OzabK05",
    exampleHref: "https://northlandroofingcompany.com/",
    exampleLabel: "View a landing page we built for a local roofing company",
  },
  {
    name: "Enterprise",
    setupLabel: "Voice AI",
    price: "$300–$800",
    suffix: "/mo",
    description: "Voice AI answers your missed calls.",
    features: [
      "Everything in Professional",
      "Voice AI answers calls live",
      "Custom scripts for your business",
      "CRM integration & personalization",
    ],
    cta: "Talk to us",
    vapi: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section relative">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-4 md:mt-5 text-3xl md:text-5xl font-bold tracking-tight text-cream">
            One conversion pays for this.
          </h2>
          <p className="mt-3 md:mt-4 text-cream/70 text-base md:text-lg">
            Most HVAC or roofing service calls are{" "}
            <span className="text-cream font-semibold">$300–$800+</span>.
          </p>
          <p className="mt-2 text-cream/50 text-sm md:text-base">
            Convert one extra lead a month and you&apos;re ahead.
          </p>
          <div className="mt-4 md:mt-5 inline-flex items-center gap-2 text-xs text-cream/55">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-soft" />
            No long contracts · Cancel anytime
          </div>
        </div>

        <div className="mt-8 md:mt-12 grid md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="relative card p-5 md:p-7 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-cream">{t.name}</h3>
                <span className="text-xs text-cream/55 px-2 py-1 rounded-full border border-line bg-cream/[0.03]">
                  {t.setupLabel}
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight text-cream">
                  {t.price}
                </span>
                <span className="text-cream/50">{t.suffix}</span>
              </div>

              <p className="mt-3 text-cream/65">{t.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-cream/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-0.5 w-4 h-4 text-accent-soft shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {t.vapi ? (
                  <VapiButton />
                ) : (
                  <a
                    href={t.ctaHref ?? "#cta"}
                    target={t.ctaHref ? "_blank" : undefined}
                    rel={t.ctaHref ? "noopener noreferrer" : undefined}
                    className="mt-7 btn-secondary w-full"
                  >
                    {t.cta}
                  </a>
                )}

                {t.exampleHref && (
                  <a
                    href={t.exampleHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-center text-xs text-cream/45 hover:text-cream/70 underline decoration-line underline-offset-4 transition-colors"
                  >
                    See an example →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-cream/45">
          Every plan: setup help, real onboarding call, 30-day money-back
          guarantee.
        </p>
        <p className="mt-2 text-center text-xs text-cream/40">
          Locally owned in Minneapolis, Minnesota.
        </p>
      </div>
    </section>
  );
}
