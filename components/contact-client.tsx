"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  ArrowRight,
  Phone,
  CalendarDays,
} from "lucide-react";

type CalendlyWindow = Window & {
  Calendly?: {
    initPopupWidget?: (options: { url: string }) => void;
  };
};

export function openCalendlyPopup() {
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
}

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    setStatusMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      topic: formData.get("topic"),
      currentSituation: formData.get("currentSituation"),
      outcome: formData.get("outcome"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus("success");
        setStatusMessage("Your message has been sent successfully.");
        form.reset();
      } else {
        setFormStatus("error");
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-teal-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 md:py-16 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-emerald-400 sm:text-base">
            Contact
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s start a conversation.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
            Whether you want to talk about a product idea, AI opportunity,
            mentorship, collaboration, or career direction, I&apos;m open to
            practical and meaningful conversations.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={openCalendlyPopup}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D896C] px-8 py-4 text-base font-medium text-white shadow-lg transition hover:bg-[#0B6F56] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Book a 15-min Strategy Call
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="https://calendly.com/collins-product-ai/15min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Open Calendly
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact types ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Product & Collaboration",
              description:
                "For product conversations, startup ideas, AI opportunities, and practical collaborations.",
              icon: "briefcase",
            },
            {
              title: "Mentorship & Career Support",
              description:
                "For mentorship, coaching, career clarity, and guidance across product, AI, and tech growth.",
              icon: "users",
            },
            {
              title: "General Enquiries",
              description:
                "For introductions, questions, or anything else you'd like to discuss.",
              icon: "message",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  {item.icon === "briefcase" && <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />}
                  {item.icon === "users" && <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />}
                  {item.icon === "message" && <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />}
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">{item.title}</h2>
              <p className="text-base leading-8 text-gray-700 sm:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Direct contact + form ── */}
      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">

          {/* Left — direct contact */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <p className="mb-4 text-sm font-semibold text-emerald-600 sm:text-base">Get in touch</p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Reach me directly or book a call.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
              If you already know you want guidance, the fastest route is to book
              a strategy call. If you&apos;re not ready yet, send a message and
              I&apos;ll get back to you.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:collins.product.ai@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition hover:border-emerald-300 hover:bg-emerald-50/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <div className="inline-flex rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 sm:text-base">Email</p>
                  <p className="break-all text-sm text-gray-700 sm:text-base">collins.product.ai@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:07842352320"
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition hover:border-emerald-300 hover:bg-emerald-50/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <div className="inline-flex rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 sm:text-base">Phone</p>
                  <p className="text-sm text-gray-700 sm:text-base">07842 352320</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/collins-o-57759bb4/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition hover:border-emerald-300 hover:bg-emerald-50/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <div className="inline-flex rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1.01 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-4V9Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 sm:text-base">LinkedIn</p>
                  <p className="text-sm text-gray-700 sm:text-base">linkedin.com/in/collins-o-57759bb4</p>
                </div>
              </a>

              <button
                type="button"
                onClick={openCalendlyPopup}
                className="flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-left transition hover:border-emerald-300 hover:bg-emerald-50/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <div className="inline-flex rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 sm:text-base">Book an Appointment</p>
                  <p className="text-sm text-gray-700 sm:text-base">Book a 15-min Strategy Call via Calendly</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right — form or success state */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            {formStatus === "success" ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                  <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Message received!</h2>
                <p className="mt-4 max-w-sm text-base leading-8 text-gray-600 sm:text-lg">
                  Thanks for reaching out. I&apos;ll review your message and get back to you within 24 hours.
                </p>
                <div className="mt-8 w-full rounded-2xl border border-emerald-100 bg-emerald-50 p-5 text-left">
                  <p className="text-sm font-semibold text-emerald-700 sm:text-base">Want a faster response?</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700 sm:text-base">
                    Book a 15-min strategy call directly. It&apos;s the quickest way to get a conversation started.
                  </p>
                  <button
                    type="button"
                    onClick={openCalendlyPopup}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0D896C] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0B6F56] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 sm:text-base"
                  >
                    Book a Strategy Call
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setFormStatus(null)}
                  className="mt-6 text-sm text-gray-500 underline underline-offset-4 hover:text-gray-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <p className="mb-4 text-sm font-semibold text-emerald-600 sm:text-base">Prefer to send a message first?</p>
                <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                  Share a little context and I&apos;ll respond within 24 hours.
                </h2>
                <p className="mt-4 text-base leading-8 text-gray-700 sm:text-lg">
                  For people who aren&apos;t ready to book a call yet but still want to reach out with something specific.
                </p>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 sm:text-base">Full name</label>
                    <input id="name" name="name" type="text" placeholder="Your full name" className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" required />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 sm:text-base">Email address</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" required />
                  </div>

                  <div>
                    <label htmlFor="topic" className="mb-2 block text-sm font-medium text-gray-900 sm:text-base">What are you looking for help with?</label>
                    <select id="topic" name="topic" className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-base text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" defaultValue="" required>
                      <option value="" disabled>Select a topic</option>
                      <option value="Product strategy or collaboration">Product strategy or collaboration</option>
                      <option value="Mentorship or career guidance">Mentorship or career guidance</option>
                      <option value="AI product or AI opportunity">AI product or AI opportunity</option>
                      <option value="Startup or founder support">Startup or founder support</option>
                      <option value="General enquiry">General enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="currentSituation" className="mb-2 block text-sm font-medium text-gray-900 sm:text-base">Your current situation</label>
                    <textarea id="currentSituation" name="currentSituation" rows={4} placeholder="Give me a little context on where you are right now." className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" required />
                  </div>

                  <div>
                    <label htmlFor="outcome" className="mb-2 block text-sm font-medium text-gray-900 sm:text-base">What outcome are you hoping for?</label>
                    <textarea id="outcome" name="outcome" rows={4} placeholder="Tell me what you want help achieving." className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900 sm:text-base">Anything else I should know?</label>
                    <textarea id="message" name="message" rows={4} placeholder="Optional, but helpful." className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-4">
                    <p className="text-sm leading-7 text-gray-700 sm:text-base">
                      If your request is time-sensitive or you want faster feedback, booking a strategy call is usually the best option.
                    </p>
                  </div>

                  {formStatus === "error" && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-800 sm:text-base">
                      {statusMessage}
                    </div>
                  )}

                  <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <button type="submit" disabled={isSubmitting} className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D896C] px-8 py-4 text-base font-medium text-white shadow-lg shadow-emerald-100 transition hover:bg-[#0B6F56] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70">
                      {isSubmitting ? "Sending..." : "Send enquiry"}
                      {!isSubmitting && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                    </button>
                    <button type="button" onClick={openCalendlyPopup} className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
                      Book a 15-min Strategy Call
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-400">
              Prefer to book directly?
            </div>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Book a time that works for you.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              If it&apos;s easier, you can book a session directly and we can talk through your product, mentorship, or collaboration needs.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={openCalendlyPopup}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D896C] px-8 py-4 text-base font-medium text-white shadow-lg transition hover:bg-[#0B6F56] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Book via Calendly
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/ventures"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
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
