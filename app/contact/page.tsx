"use client";

import Link from "next/link";
import {
  Mail,
  ArrowRight,
  MessageCircle,
  Users,
  Briefcase,
  Phone,
  CalendarDays,
} from "lucide-react";

const contactOptions = [
  {
    title: "Product & Collaboration",
    description:
      "For product conversations, startup ideas, AI opportunities, and practical collaborations.",
    icon: Briefcase,
  },
  {
    title: "Mentorship & Career Support",
    description:
      "For mentorship, coaching, career clarity, and guidance across product, AI, and tech growth.",
    icon: Users,
  },
  {
    title: "General Enquiries",
    description:
      "For introductions, questions, or anything else you’d like to discuss.",
    icon: MessageCircle,
  },
];

type CalendlyWindow = Window & {
  Calendly?: {
    initPopupWidget?: (options: { url: string }) => void;
  };
};

export default function ContactPage() {
  const openCalendly = () => {
    const calendly = (window as CalendlyWindow).Calendly;

    if (calendly?.initPopupWidget) {
      calendly.initPopupWidget({
        url: "https://calendly.com/collins-product-ai/15min?hide_event_type_details=1&text_color=111827&primary_color=0d896c",
      });
    } else {
      window.open(
        "https://calendly.com/collins-product-ai/15min",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-50/40 to-teal-50/40 blur-3xl" />

        <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <p className="mb-4 text-sm sm:text-base font-semibold tracking-wide text-emerald-600">
            Contact
          </p>

          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Let&apos;s start a conversation.
          </h1>

          <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-8 text-gray-700">
            Whether you want to talk about a product idea, AI opportunity,
            mentorship, collaboration, or career direction, I&apos;m open to
            practical and meaningful conversations.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={openCalendly}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-emerald-200 transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Book a 15-min AI & Career Strategy Call
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="https://calendly.com/collins-product-ai/15min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50/40 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Open Calendly
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {contactOptions.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <item.icon className="h-6 w-6" />
              </div>

              <h2 className="mb-3 text-xl sm:text-2xl font-bold text-gray-900">
                {item.title}
              </h2>

              <p className="text-base sm:text-lg leading-8 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          {/* Left side */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <p className="mb-4 text-sm sm:text-base font-semibold text-emerald-600">
              Get in touch
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
              Reach me directly or book a call.
            </h2>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-gray-700">
              If you already know you want guidance, the fastest route is to book
              a strategy call. If you&apos;re not ready yet, you can send a
              message and I&apos;ll get back to you.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:collins.product.ai@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition hover:border-emerald-300 hover:bg-emerald-50/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <div className="inline-flex rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    Email
                  </p>
                  <p className="break-all text-sm sm:text-base text-gray-700">
                    collins.product.ai@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:07842352320"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition hover:border-emerald-300 hover:bg-emerald-50/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <div className="inline-flex rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    Phone
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    07842 352320
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/collins-o-57759bb4/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition hover:border-emerald-300 hover:bg-emerald-50/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <div className="inline-flex rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1.01 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-4V9Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    LinkedIn
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    linkedin.com/in/collins-o-57759bb4
                  </p>
                </div>
              </a>

              <button
                type="button"
                onClick={openCalendly}
                className="group flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-left transition hover:border-emerald-300 hover:bg-emerald-50/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <div className="inline-flex rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    Book an Appointment
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    Book a 15-min AI & Career Strategy Call via Calendly
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm sm:p-8 md:p-10">
            <p className="mb-4 text-sm sm:text-base font-semibold text-emerald-600">
              Prefer to send a message first?
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
              Share a little context and I&apos;ll respond within 24 hours.
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-8 text-gray-700">
              This form is for people who are not ready to book a call yet but
              still want to reach out with something specific.
            </p>
<form
  className="mt-8 space-y-5"
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      topic: formData.get("topic"),
      currentSituation: formData.get("currentSituation"),
      outcome: formData.get("outcome"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      e.currentTarget.reset();
    } else {
      alert("Something went wrong. Try again.");
    }
  }}
></form>
          </div>
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 px-8 py-12 text-white shadow-2xl sm:px-10 md:px-12 md:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative text-center">
            <p className="mb-4 text-sm sm:text-base font-semibold tracking-wide text-white/85">
              Prefer to book directly?
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Book a time that works for you.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-white/90">
              If it&apos;s easier, you can book a session directly and we can talk
              through your product, mentorship, or collaboration needs.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={openCalendly}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-medium text-emerald-700 transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
              >
                Book via Calendly
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
              >
                Explore my work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}