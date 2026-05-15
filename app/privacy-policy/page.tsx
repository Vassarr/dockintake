import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — DockIntake",
  description: "DockIntake privacy policy and SMS data practices.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      {/* Minimal top nav */}
      <header className="border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="DockIntake"
              width={40}
              height={40}
              className="w-9 h-9 rounded-xl"
            />
            <span className="text-base font-semibold tracking-tight text-cream">
              DockIntake
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-cream/55 hover:text-cream transition-colors flex items-center gap-1.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Back to site
          </Link>
        </div>
      </header>

      {/* Page body */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#c8c2ff] bg-[rgba(108,92,231,0.1)] border border-[rgba(108,92,231,0.25)]">
            Legal
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-cream">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-cream/45">
            Effective date: January 1, 2025 &nbsp;·&nbsp; Last updated: May 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose-legal">
          <Section title="1. Who We Are">
            <p>
              DockIntake ("Company," "we," "us," or "our") is a lead-notification
              service for local home-service businesses, headquartered in
              Minneapolis, Minnesota. Our platform connects website contact-form
              submissions to business owners via SMS alerts so they can respond to
              potential customers quickly.
            </p>
            <p>
              Questions? Contact us at{" "}
              <a href="mailto:help@dockintake.com">help@dockintake.com</a>.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <h4>2a. From business clients (you, the subscriber)</h4>
            <ul>
              <li>Name, business name, email address, and phone number provided during signup.</li>
              <li>Billing information processed by Stripe (we do not store full card numbers).</li>
              <li>The mobile phone number(s) you designate to receive SMS lead alerts.</li>
            </ul>

            <h4>2b. From end-user leads (your website visitors)</h4>
            <p>
              When a visitor submits a quote-request form on your website through
              our integration, we process:
            </p>
            <ul>
              <li>Name, phone number, and the service description they enter.</li>
              <li>Submission timestamp and form source identifier.</li>
            </ul>
            <p>
              We act as a data processor on behalf of you (the business client) for
              this information. We do not sell, rent, or independently market to
              your website visitors.
            </p>

            <h4>2c. Automatically collected data</h4>
            <ul>
              <li>Server logs (IP address, browser type, pages visited) retained for up to 90 days for security and debugging purposes.</li>
              <li>Aggregate usage analytics (no personally identifiable information).</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul>
              <li>Delivering SMS lead-alert notifications to the phone number(s) you register.</li>
              <li>Processing payments and managing your subscription.</li>
              <li>Providing customer support and onboarding assistance.</li>
              <li>Improving our service, diagnosing technical issues, and preventing fraud.</li>
              <li>Communicating service updates, maintenance windows, or changes to this policy (transactional messages only — no marketing SMS is sent to business clients without explicit consent).</li>
            </ul>
          </Section>

          <Section title="4. SMS / Text Messaging Disclosures">
            <p>
              <strong>Message program:</strong> DockIntake sends automated SMS
              notifications to the mobile number(s) you provide when a new lead
              submits a form through your integration. These are transactional
              alerts, not promotional messages.
            </p>
            <p>
              <strong>Consent:</strong> By providing your mobile number and
              activating SMS alerts, you consent to receive these notifications.
              Consent is not a condition of purchase.
            </p>
            <p>
              <strong>Message frequency:</strong> Varies based on the volume of
              lead submissions on your connected website(s). You control which
              forms are integrated.
            </p>
            <p>
              <strong>Message &amp; data rates:</strong> Standard message and data
              rates from your wireless carrier may apply.
            </p>
            <p>
              <strong>Opt-out:</strong> Reply <strong>STOP</strong> to any DockIntake
              SMS to unsubscribe from all future messages. You will receive one
              final confirmation message. After opting out you will no longer
              receive lead alerts; contact{" "}
              <a href="mailto:help@dockintake.com">help@dockintake.com</a> to
              re-enable notifications.
            </p>
            <p>
              <strong>Help:</strong> Reply <strong>HELP</strong> to any DockIntake
              SMS to receive support contact information, or email us directly at{" "}
              <a href="mailto:help@dockintake.com">help@dockintake.com</a>.
            </p>
            <p>
              <strong>Carriers are not liable</strong> for delayed or undelivered
              messages.
            </p>
            <p>
              We do not share mobile opt-in data or consent with third parties for
              their own marketing purposes.
            </p>
          </Section>

          <Section title="5. How We Share Information">
            <p>
              We do not sell personal information. We share data only as necessary
              to operate the service:
            </p>
            <ul>
              <li>
                <strong>Twilio, Inc.</strong> — Our SMS delivery provider. Twilio
                processes phone numbers and message content to route alerts to
                your device. Twilio&apos;s privacy policy is available at{" "}
                <a
                  href="https://www.twilio.com/en-us/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twilio.com/en-us/legal/privacy
                </a>.
              </li>
              <li>
                <strong>Stripe, Inc.</strong> — Payment processing. We do not
                store payment card details on our servers.
              </li>
              <li>
                <strong>Legal obligations.</strong> We may disclose information if
                required by law, court order, or to protect the rights and safety
                of DockIntake or others.
              </li>
            </ul>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your account data for the duration of your active
              subscription plus 30 days after cancellation, after which it is
              deleted or anonymized. Lead submission records are retained for up
              to 90 days for troubleshooting purposes. You may request earlier
              deletion by contacting{" "}
              <a href="mailto:help@dockintake.com">help@dockintake.com</a>.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We use industry-standard safeguards including TLS encryption in
              transit, access controls, and secure infrastructure. No system is
              100% secure; we will notify affected users of any data breach as
              required by applicable law.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              Depending on your jurisdiction, you may have the right to access,
              correct, or delete personal information we hold about you, or to
              restrict or object to certain processing. To exercise these rights,
              email{" "}
              <a href="mailto:help@dockintake.com">help@dockintake.com</a>. We
              will respond within 30 days.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              DockIntake is not directed to individuals under the age of 18. We do
              not knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this policy from time to time. We will post the revised
              policy at this URL with an updated effective date. Continued use of
              the service after changes constitutes acceptance of the revised policy.
            </p>
          </Section>

          <Section title="SMS Communications">
            <p>
              If you enable SMS notifications through DockIntake, we may send
              operational text messages related to lead notifications, account
              activity, or service updates. Message frequency varies based on
              usage. Message and data rates may apply.
            </p>
            <p>
              We do not sell or share mobile opt-in information with third
              parties for marketing purposes.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              DockIntake<br />
              Minneapolis, Minnesota<br />
              <a href="mailto:help@dockintake.com">help@dockintake.com</a>
            </p>
          </Section>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-white/[0.07] py-8">
        <p className="text-center text-xs text-cream/30">
          © {new Date().getFullYear()} DockIntake. All rights reserved. &nbsp;·&nbsp;{" "}
          <Link href="/terms" className="hover:text-cream/60 transition-colors">
            Terms of Service
          </Link>
        </p>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 md:mb-12">
      <h2 className="text-lg md:text-xl font-semibold text-cream mb-3 pb-2 border-b border-white/[0.07]">
        {title}
      </h2>
      <div className="space-y-3 text-sm md:text-base text-cream/70 leading-relaxed [&_a]:text-[#c8c2ff] [&_a]:underline [&_a]:decoration-[rgba(108,92,231,0.4)] [&_a]:underline-offset-4 [&_a:hover]:decoration-[rgba(108,92,231,0.8)] [&_strong]:text-cream/90 [&_strong]:font-medium [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:marker:text-[rgba(108,92,231,0.6)] [&_h4]:text-cream/80 [&_h4]:font-medium [&_h4]:mt-5 [&_h4]:mb-1.5">
        {children}
      </div>
    </section>
  );
}
