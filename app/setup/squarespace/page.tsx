import type { Metadata } from "next";
import SetupGuide from "@/components/SetupGuide";
import { squarespace } from "@/lib/setup-guides";

export const metadata: Metadata = {
  title: "DockIntake Setup — Squarespace",
  description: "Squarespace onboarding guide for new DockIntake customers.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SetupGuide data={squarespace} />;
}
