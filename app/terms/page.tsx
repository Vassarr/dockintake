import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — DockIntake",
  description: "DockIntake terms of service, acceptable use, and SMS messaging terms.",
  robots: { index: false, follow: false },
};

export default function Terms() {
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
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-cream/45">
            Effective date: January 1, 2025 &nbsp;·&nbsp; Last updated: May 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose-legal">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using DockIntake ("Service," "Platform"), you
              ("Client," "Subscriber," "you") agree to be bound by these Terms of
              Service ("Terms") and our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>. If you do not
              agree, do not use the Service.
            </p>
            <p>
              DockIntake is operated by DockIntake, a company based in
              Minneapolis, Minnesota ("Company," "we," "us").
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              DockIntake integrates with contact forms on your website and
              delivers real-time SMS notifications to the mobile number(s) you
              designate whenever a visitor submits a quote request. The Service
              is designed for licensed home-service businesses (HVAC, roofing,
              plumbing, electrical, and similar trades).
            </p>
          </Section>

          <Section title="3. Account Registration and Eligibility">
            <ul>
              <li>You must be at least 18 years of age and legally authorized to enter into contracts.</li>
              <li>You must provide accurate, current, and complete information during registration and keep it up to date.</li>
              <li>You are responsible for maintaining the confidentiality of any credentials associated with your account.</li>
              <li>You may not use the Service for any unlawful purpose or in violation of these Terms.</li>
            </ul>
          </Section>

          <Section title="4. SMS Messaging Terms">
            <p>
              <strong>Message program:</strong> DockIntake sends automated,
              transactional SMS messages to the phone number(s) you register.
              Messages contain lead information submitted through your connected
              website form(s).
            </p>
            <p>
              <strong>Consent:</strong> By registering a mobile number and
              enabling SMS alerts, you expressly consent to receive automated
              text messages from DockIntake. This consent is not a condition of
              purchase and may be withdrawn at any time.
            </p>
            <p>
              <strong>Message frequency:</strong> Varies based on lead volume
              through your integrated form(s).
            </p>
            <p>
              <strong>Message &amp; data rates:</strong> Standard carrier message
              and data rates may apply. DockIntake is not responsible for charges
              imposed by your wireless carrier.
            </p>
            <p>
              <strong>To opt out:</strong> Reply <strong>STOP</strong> to any
              DockIntake text message. You will receive one confirmation message
              and no further alerts. To re-enable alerts, contact{" "}
              <a href="mailto:help@dockintake.com">help@dockintake.com</a>.
            </p>
            <p>
              <strong>For help:</strong> Reply <strong>HELP</strong> to any
              DockIntake text message, or email{" "}
              <a href="mailto:help@dockintake.com">help@dockintake.com</a>.
            </p>
            <p>
              Wireless carriers are not liable for delayed or undelivered
              messages. Supported carriers include, but are not limited to, all
              major US carriers.
            </p>
            <p>
              <strong>No third-party marketing:</strong> Mobile opt-in
              information, phone numbers, and SMS consent are not shared with
              third parties for marketing purposes.
            </p>
          </Section>

          <Section title="5. Fees and Payment">
            <ul>
              <li>
                The Service is offered on a monthly subscription basis plus a
                one-time setup fee per plan. Current pricing is displayed on the
                DockIntake website and may be updated with 30 days&apos; notice.
              </li>
              <li>
                Payments are processed by Stripe, Inc. By providing payment
                information, you authorize DockIntake to charge the applicable
                fees on a recurring monthly basis.
              </li>
              <li>
                <strong>30-day money-back guarantee:</strong> If you are not
                satisfied, contact us within 30 days of your initial payment for
                a full refund of the subscription fee. Setup fees are
                non-refundable after work has commenced.
              </li>
              <li>
                Subscriptions may be cancelled at any time. Cancellation takes
                effect at the end of the current billing period; no prorated
                refunds are issued for partial months after the 30-day guarantee
                period.
              </li>
            </ul>
          </Section>

          <Section title="6. Acceptable Use">
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Send spam, unsolicited messages, or engage in deceptive or misleading communications.</li>
              <li>Violate any applicable federal, state, or local law, including the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, or state consumer protection statutes.</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation.</li>
              <li>Interfere with or disrupt the integrity or performance of the Service or its underlying infrastructure.</li>
              <li>Attempt to gain unauthorized access to any portion of the Service or related systems.</li>
              <li>Collect or harvest any personally identifiable information from the Service except as expressly permitted.</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              this section without notice or refund.
            </p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              All content, software, and materials comprising the DockIntake
              platform are the exclusive property of DockIntake or its licensors
              and are protected by applicable intellectual property laws. Nothing
              in these Terms grants you ownership of or a license to our
              intellectual property beyond what is necessary to use the Service.
            </p>
            <p>
              You retain all rights to your own business data and content submitted
              through the platform.
            </p>
          </Section>

          <Section title="8. Third-Party Services">
            <p>
              The Service relies on third-party providers including Twilio (SMS
              infrastructure) and Stripe (payments). Your use of the Service is
              also subject to those providers&apos; terms of service and policies.
              DockIntake is not responsible for the availability or conduct of
              third-party services.
            </p>
          </Section>

          <Section title="9. Disclaimers">
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
              TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL
              COMPONENTS.
            </p>
            <p>
              SMS delivery is subject to carrier conditions and network
              availability. DockIntake does not guarantee delivery of any
              individual message.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, DOCKINTAKE AND ITS
              OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
              (INCLUDING LOST PROFITS, LOST LEADS, OR LOST REVENUE) ARISING OUT
              OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN
              IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE
              SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO
              DOCKINTAKE IN THE 30 DAYS PRECEDING THE CLAIM, OR (B) $100.
            </p>
          </Section>

          <Section title="11. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless DockIntake and
              its officers, directors, employees, and agents from and against any
              claims, liabilities, damages, losses, and expenses (including
              reasonable legal fees) arising from: (a) your use of the Service;
              (b) your violation of these Terms; (c) your violation of any
              applicable law; or (d) content or data you submit through the
              Service.
            </p>
          </Section>

          <Section title="12. Termination">
            <p>
              Either party may terminate the subscription at any time. Upon
              termination, your access to the Service will cease at the end of
              the paid period. We may suspend or terminate your account
              immediately for violations of these Terms, with or without notice.
            </p>
            <p>
              Sections 7, 9, 10, 11, and 13 survive termination.
            </p>
          </Section>

          <Section title="13. Governing Law and Disputes">
            <p>
              These Terms are governed by the laws of the State of Minnesota,
              without regard to its conflict-of-law provisions. Any dispute
              arising from these Terms or the Service shall be resolved
              exclusively in the state or federal courts located in Hennepin
              County, Minnesota, and you consent to personal jurisdiction in
              those courts.
            </p>
          </Section>

          <Section title="14. Changes to Terms">
            <p>
              We may modify these Terms at any time. We will post the updated
              Terms at this URL with a new effective date. Continued use of the
              Service after the effective date constitutes your acceptance of the
              revised Terms. If you do not agree to the changes, you should
              cancel your subscription before the effective date.
            </p>
          </Section>

          <Section title="15. Contact">
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
          <Link href="/privacy-policy" className="hover:text-cream/60 transition-colors">
            Privacy Policy
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
      <div className="space-y-3 text-sm md:text-base text-cream/70 leading-relaxed [&_a]:text-[#c8c2ff] [&_a]:underline [&_a]:decoration-[rgba(108,92,231,0.4)] [&_a]:underline-offset-4 [&_a:hover]:decoration-[rgba(108,92,231,0.8)] [&_strong]:text-cream/90 [&_strong]:font-medium [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:marker:text-[rgba(108,92,231,0.6)]">
        {children}
      </div>
    </section>
  );
}
