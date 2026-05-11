import type { Metadata } from "next";
import SetupGuide from "@/components/SetupGuide";
import { wordpress } from "@/lib/setup-guides";

export const metadata: Metadata = {
  title: "DockIntake Setup — WordPress",
  description: "WordPress onboarding guide for new DockIntake customers.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SetupGuide data={wordpress} />;
}
