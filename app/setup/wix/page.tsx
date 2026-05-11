import type { Metadata } from "next";
import SetupGuide from "@/components/SetupGuide";
import { wix } from "@/lib/setup-guides";

export const metadata: Metadata = {
  title: "DockIntake Setup — Wix",
  description: "Wix onboarding guide for new DockIntake customers.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SetupGuide data={wix} />;
}
