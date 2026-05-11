import type { Metadata } from "next";
import SetupGuide from "@/components/SetupGuide";
import { custom } from "@/lib/setup-guides";

export const metadata: Metadata = {
  title: "DockIntake Setup — Custom Site",
  description: "Custom site onboarding guide for new DockIntake customers.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SetupGuide data={custom} />;
}
