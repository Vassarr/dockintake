import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DockIntake — Text alerts the second a lead comes in",
  description:
    "DockIntake captures missed calls and form submissions and texts you instantly — name, number, and what they need. Call back before anyone else does.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "DockIntake — Never miss another job",
    description:
      "Instant SMS alerts for every lead. Built for HVAC, roofing, plumbing, and local service businesses.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
