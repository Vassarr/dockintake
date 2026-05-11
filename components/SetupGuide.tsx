import Link from "next/link";
import type { SetupGuideData } from "@/lib/setup-guides";

/**
 * Hidden onboarding page renderer.
 *
 * Visual language reuses the site's existing dark theme tokens:
 *   bg: ink (#0b0b0f) · text: cream (#f5f5f0) · accent: #6C5CE7
 *   Inter font, .bg-grid + .bg-dots backgrounds, .glow-blob, .card
 *
 * No new UI primitives are introduced.
 */
export default function SetupGuide({ data }: { data: SetupGuideData }) {
  return (
    <div className="relative min-h-screen bg-ink text-cream overflow-x-hidden">
      {/* Ambient background — matches main site */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-dots opacity-50 mask-radial-soft" />
        <div className="absolute inset-0 bg-grid opacity-40 mask-radial-soft" />
        <div
          className="glow-blob"
          style={{
            width: 720,
            height: 720,
            top: -260,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.45,
          }}
        />
      </div>

      {/* Minimal nav — same convention as legal pages */}
      <header className="relative z-10 border-b border-white/[0.07] bg-ink/70 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="DockIntake"
              width={36}
              height={36}
              className="w-9 h-9 rounded-xl"
            />
            <span className="text-base font-semibold tracking-tight text-cream">
              DockIntake
            </span>
          </Link>
          <span className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-cream/55">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
            {data.platformLabel}
          </span>
        </div>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 pt-10 md:pt-14 pb-20 md:pb-24">
        {/* HERO */}
        <section className="mb-10 md:mb-14">
          <span className="eyebrow">Welcome aboard</span>
          <h1
            className="mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] md:leading-[1.05] text-cream [&_em]:not-italic [&_em]:bg-clip-text [&_em]:text-transparent [&_em]:bg-gradient-to-r [&_em]:from-accent-soft [&_em]:via-accent [&_em]:to-accent-soft"
            dangerouslySetInnerHTML={{ __html: data.heroTitle }}
          />
          <p className="mt-5 text-base md:text-lg text-cream/70 leading-relaxed max-w-2xl">
            {data.heroLede}
          </p>
        </section>

        {/* INFO STRIP */}
        <section className="mb-10 md:mb-14">
          <div className="card grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06] overflow-hidden">
            <InfoCell label="Time required" value={data.timeRequired} />
            <InfoCell
              label={data.passwordLabel ?? "Password needed"}
              value={data.password ?? "None — OAuth"}
            />
            <InfoCell label="Live within" value={data.liveWithin ?? "48 hours"} />
          </div>
        </section>

        {/* OPTIONAL CALLOUT */}
        {data.callout && (
          <section className="mb-10 md:mb-14">
            <div className="card p-5 md:p-7 border-accent/35">
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent-soft mb-2">
                {data.callout.label}
              </div>
              <div className="text-cream font-semibold text-lg md:text-xl tracking-tight">
                {data.callout.title}
              </div>
              <div
                className="mt-3 text-sm md:text-base text-cream/70 leading-relaxed [&_strong]:text-cream"
                dangerouslySetInnerHTML={{ __html: data.callout.body }}
              />
            </div>
          </section>
        )}

        {/* OPTIONAL PATH OPTIONS */}
        {data.pathOptions && (
          <section className="mb-10 md:mb-14">
            <SectionLabel>Paths forward</SectionLabel>
            <h2 className="mt-3 text-xl md:text-2xl font-semibold text-cream tracking-tight">
              {data.pathSectionTitle ?? "We'll pick the right one with you."}
            </h2>
            {data.pathSectionIntro && (
              <p className="mt-3 text-cream/65 leading-relaxed">
                {data.pathSectionIntro}
              </p>
            )}
            <div className="mt-6 grid sm:grid-cols-2 gap-3 md:gap-4">
              {data.pathOptions.map((p) => (
                <div key={p.label} className="card p-5">
                  <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-soft">
                    {p.label}
                  </div>
                  <div className="mt-2 text-cream font-semibold">{p.title}</div>
                  <div className="mt-2 text-sm text-cream/65 leading-relaxed">
                    {p.body}
                  </div>
                </div>
              ))}
            </div>
            {data.pathNote && <NoteInline html={data.pathNote} />}
          </section>
        )}

        {/* BEFORE YOU START */}
        <section className="mb-10 md:mb-14">
          <SectionLabel>Before you start</SectionLabel>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold text-cream tracking-tight">
            What you'll need on hand.
          </h2>
          <ul className="mt-5 grid gap-2.5">
            {data.checklist.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-3 px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.02]"
              >
                <span
                  className="mt-0.5 inline-flex w-[18px] h-[18px] shrink-0 items-center justify-center rounded-full bg-accent/15 border border-accent/40"
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="w-2.5 h-2.5 text-accent-soft"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8.5l3 3 7-7" />
                  </svg>
                </span>
                <span
                  className="text-sm md:text-base text-cream/85 leading-relaxed [&_strong]:text-cream"
                  dangerouslySetInnerHTML={{ __html: c }}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* OPTIONAL CODE BLOCK */}
        {data.codeBlock && (
          <section className="mb-10 md:mb-14">
            <SectionLabel>If you're going with Path A</SectionLabel>
            <h2 className="mt-3 text-xl md:text-2xl font-semibold text-cream tracking-tight">
              What the code addition looks like.
            </h2>
            {data.codeIntro && (
              <p className="mt-3 text-cream/65 leading-relaxed">
                {data.codeIntro}
              </p>
            )}
            <pre
              className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-black/40 p-4 md:p-5 text-[12.5px] md:text-[13px] font-mono leading-[1.65] text-cream/80 [&_.comment]:text-cream/40 [&_.tag]:text-accent-soft [&_.string]:text-[#c8c2ff] [&_.attr]:text-cream/85"
              dangerouslySetInnerHTML={{
                __html: data.codeBlock.lines.join("\n"),
              }}
            />
            {data.codeNote && <NoteInline html={data.codeNote} />}
          </section>
        )}

        {/* STEPS */}
        <section className="mb-10 md:mb-14">
          <SectionLabel>Step by step</SectionLabel>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold text-cream tracking-tight">
            {data.stepsTitle}
          </h2>
          <div className="mt-6 grid gap-3 md:gap-4">
            {data.steps.map((s, i) => (
              <div key={i} className="card p-5 md:p-6 relative">
                <span className="absolute top-5 right-5 font-mono text-[11px] tracking-[0.12em] text-cream/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="text-cream font-semibold text-base md:text-lg pr-12 tracking-tight">
                  {s.title}
                </div>
                <div className="mt-3 space-y-2.5 text-sm md:text-[15px] text-cream/70 leading-relaxed [&_strong]:text-cream [&_em]:text-cream/60 [&_em]:italic">
                  {s.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="[&_code]:font-mono [&_code]:text-[0.9em] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-white/[0.04] [&_code]:border [&_code]:border-white/[0.06] [&_code]:text-accent-soft [&_.path]:inline-flex [&_.path]:items-center [&_.path]:font-mono [&_.path]:text-[0.88em] [&_.path]:text-accent-soft [&_.path]:bg-accent/10 [&_.path]:border [&_.path]:border-accent/25 [&_.path]:px-1.5 [&_.path]:py-0.5 [&_.path]:rounded"
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                </div>
                {s.note && <NoteInline html={s.note} />}
              </div>
            ))}
          </div>
        </section>

        {/* REPLY BLOCK */}
        <section className="mb-10 md:mb-14">
          <SectionLabel>Reply with these details</SectionLabel>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold text-cream tracking-tight">
            {data.replyTitle}
          </h2>
          <div className="mt-6 relative card p-6 md:p-8 border-accent/35 overflow-hidden">
            <div
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(108,92,231,0.35) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              {data.replySubtitle && (
                <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent-soft">
                  {data.replySubtitle}
                </div>
              )}
              <ul className="mt-4 grid gap-3">
                {data.replyItems.map((r) => (
                  <li key={r.num} className="flex gap-3 md:gap-4">
                    <span className="font-mono text-xs md:text-sm text-accent-soft pt-0.5 shrink-0 w-6">
                      {r.num}
                    </span>
                    <div className="text-sm md:text-base">
                      <div
                        className="text-cream font-medium [&_strong]:font-semibold"
                        dangerouslySetInnerHTML={{ __html: r.title }}
                      />
                      <div className="mt-0.5 text-cream/55 text-[13px] md:text-sm leading-relaxed">
                        {r.hint}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-white/[0.07] bg-black/30 p-4 md:p-5 font-mono text-[12.5px] md:text-[13px] leading-[1.7] text-cream/70">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-cream/40 mb-2">
                  Example reply
                </div>
                {data.example.map((e, i) => (
                  <div key={i}>
                    <span className="text-accent-soft">{e.field}</span>{" "}
                    {e.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="mb-10 md:mb-14">
          <SectionLabel>What happens next</SectionLabel>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold text-cream tracking-tight">
            Your timeline.
          </h2>
          <ol className="mt-6 relative pl-7">
            <span
              className="absolute left-2 top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(180deg, rgba(108,92,231,0.6), transparent)",
              }}
              aria-hidden
            />
            {data.timeline.map((t, i) => (
              <li key={i} className="relative pb-5 last:pb-0">
                <span
                  className="absolute -left-[18px] top-1 w-[11px] h-[11px] rounded-full bg-accent"
                  style={{
                    boxShadow:
                      "0 0 0 3px #0b0b0f, 0 0 12px rgba(108,92,231,0.45)",
                  }}
                  aria-hidden
                />
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-soft">
                  {t.when}
                </div>
                <div className="mt-1 text-sm md:text-base text-cream/85 leading-relaxed">
                  {t.what}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-10 md:mb-14">
          <SectionLabel>Common questions</SectionLabel>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold text-cream tracking-tight">
            Just in case.
          </h2>
          <div className="mt-6 grid gap-3">
            {data.faq.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
              >
                <div className="text-cream font-medium text-[15px] md:text-base tracking-tight">
                  {f.q}
                </div>
                <div
                  className="mt-2 text-[13.5px] md:text-[15px] text-cream/65 leading-relaxed [&_strong]:text-cream/90 [&_strong]:font-medium"
                  dangerouslySetInnerHTML={{ __html: f.a }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* STUCK */}
        <section className="mb-2">
          <SectionLabel>Stuck on anything?</SectionLabel>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold text-cream tracking-tight">
            {data.stuckTitle ?? "We'll walk you through it."}
          </h2>
          <p className="mt-3 text-cream/70 leading-relaxed">
            {data.stuckBody ??
              "If any step is unclear, just hit reply. We can get on a five-minute call, send a screen recording, or walk you through it however is easiest. No question is too small."}
          </p>
        </section>
      </main>

      {/* Footer — same minimal style as legal pages */}
      <footer className="relative z-10 border-t border-white/[0.07] py-8">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <p className="text-sm text-cream/55">
            Questions? Email{" "}
            <a
              href="mailto:help@dockintake.com"
              className="text-cream underline decoration-accent/50 underline-offset-4 hover:decoration-accent transition"
            >
              help@dockintake.com
            </a>
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-cream/35">
            DockIntake · Built for the trades
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── helpers ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-soft">
      <span className="block w-6 h-px bg-accent-soft" />
      {children}
    </div>
  );
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-4 md:px-6 md:py-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-cream/45">
        {label}
      </div>
      <div className="mt-1.5 text-cream font-semibold text-sm md:text-base">
        {value}
      </div>
    </div>
  );
}

function NoteInline({ html }: { html: string }) {
  return (
    <div
      className="mt-4 rounded-r-lg border-l-2 border-accent bg-white/[0.025] px-4 py-3 text-sm text-cream/65 leading-relaxed [&_strong]:text-accent-soft [&_strong]:font-medium"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
