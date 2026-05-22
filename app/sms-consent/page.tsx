import type { Metadata } from "next";
import SmsConsentUI from "./SmsConsentUI";

export const metadata: Metadata = {
  title: "SMS Lead Alert Consent — DockIntake",
  description:
    "Opt in to receive SMS lead notifications from DockIntake when new quote requests are submitted.",
  robots: { index: false, follow: false },
};

export default function SmsConsentPage() {
  return <SmsConsentUI />;
}
