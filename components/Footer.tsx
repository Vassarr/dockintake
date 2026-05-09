export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
        <div className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="DockIntake"
            width={44}
            height={44}
            className="w-10 h-10 md:w-11 md:h-11 rounded-xl"
          />
          <span className="text-lg md:text-xl font-semibold text-cream">
            DockIntake
          </span>
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
