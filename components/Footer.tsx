export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-accent">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-cream"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h10M4 18h16" />
            </svg>
          </span>
          <span className="font-semibold text-cream">DockIntake</span>
          <span className="text-cream/40 text-sm ml-3">
            © {new Date().getFullYear()}. Built for the trades.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/60">
          <a href="#how" className="hover:text-cream">
            How it works
          </a>
          <a href="#pricing" className="hover:text-cream">
            Pricing
          </a>
          <a
            href="mailto:help@dockintake.com"
            className="hover:text-cream"
          >
            help@dockintake.com
          </a>
        </div>
      </div>
    </footer>
  );
}
