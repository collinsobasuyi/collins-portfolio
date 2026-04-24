import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Collins Obasuyi",
  description: "Privacy policy for collinsobasuyi.com. How your information is collected, used, and protected.",
  alternates: { canonical: "https://collinsobasuyi.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
        <p className="text-sm sm:text-base font-medium text-[#0D896C] mb-3">
          Privacy
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Privacy Policy
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-700 leading-8 max-w-3xl">
          This website respects your privacy. This page explains what information
          may be collected, how it may be used, and the choices you have when
          visiting or contacting me through this site.
        </p>

        <div className="mt-10 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Information I may collect
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-8">
              If you contact me through email, a form, or another linked channel,
              I may receive information such as your name, email address, and the
              content of your message.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              How your information may be used
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-8">
              Any information you share may be used only to respond to your
              enquiry, discuss opportunities, or continue a conversation you have
              initiated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Analytics and website usage
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-8">
              This site may use basic analytics or hosting tools to understand
              traffic and improve performance. These tools may collect
              non-personal usage information such as browser type, device type,
              or pages visited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Third-party links
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-8">
              This website may include links to third-party websites such as
              LinkedIn or other platforms. Once you leave this site, their own
              privacy policies and terms apply.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Data protection
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-8">
              Reasonable steps are taken to keep any shared information secure.
              However, no website or online transmission can ever be guaranteed
              to be completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-8">
              If you have any questions about this privacy page or how your
              information is handled, please get in touch via the{" "}
              <Link href="/contact" className="text-[#0D896C] underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}