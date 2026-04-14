import type { Metadata } from "next";
import Link from "next/link";
import CalendlyButton from "@/components/calendly-button";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Shield,
  CheckCircle2,
  Users,
  Briefcase,
  Layers3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Collins Obasuyi",
  description:
    "AI product strategy, delivery leadership, and technical quality services for teams and organisations. Advisory, embedded, and project-based engagements available.",
  openGraph: {
    title: "Services | Collins Obasuyi",
    description:
      "Practical AI product, delivery, and quality expertise for teams who need to move with clarity and confidence.",
    url: "https://collinsobasuyi.com/services",
  },
  alternates: { canonical: "https://collinsobasuyi.com/services" },
};

const services = [
  {
    title: "AI Product Strategy",
    description:
      "I help teams define, shape, and build AI products with clarity — from early concept through to MVP and beyond. This includes problem framing, product direction, user journey design, and practical AI integration.",
    icon: Sparkles,
    outcomes: [
      "AI product vision and roadmap",
      "MVP scope and prioritisation",
      "AI tool and workflow integration",
      "Product-market fit thinking",
    ],
    accent: "emerald",
  },
  {
    title: "Delivery Leadership",
    description:
      "I bring structure, momentum, and execution discipline to complex digital work. Whether you need embedded delivery leadership or strategic oversight, I help teams move from ideas to real outcomes.",
    icon: Rocket,
    outcomes: [
      "Delivery structure and planning",
      "Stakeholder alignment",
      "Execution momentum",
      "Risk and dependency management",
    ],
    accent: "emerald",
  },
  {
    title: "Technical Quality",
    description:
      "My background in Quality Engineering means I understand what it takes for products to hold up in the real world. I help teams build quality in from the start — not bolt it on at the end.",
    icon: Shield,
    outcomes: [
      "QA strategy and test coverage",
      "Quality process improvement",
      "DevSecOps and reliability",
      "Systems and risk thinking",
    ],
    accent: "emerald",
  },
];

const engagementTypes = [
  {
    title: "Advisory",
    description:
      "Strategic input on a regular basis — a part-time senior voice that helps your team make better product and delivery decisions without the full-time overhead.",
    icon: Briefcase,
    detail: "Typically 1–2 days per week or a structured retainer",
  },
  {
    title: "Embedded",
    description:
      "Working closely within your team for a defined period. I integrate with your people, your process, and your rhythm to create real momentum from the inside.",
    icon: Users,
    detail: "Defined engagement period, full involvement",
  },
  {
    title: "Project-Based",
    description:
      "Scoped work around a specific challenge or initiative — with clear outcomes, a defined timeline, and focused delivery. Right for teams that need targeted expertise fast.",
    icon: Layers3,
    detail: "Fixed scope, outcome-focused delivery",
  },
];

const industries = [
  "Finance & Banking",
  "Government & Regulated",
  "Public Health",
  "Insurance",
  "Media & Publishing",
  "AI & Technology",
  "Startups & Scale-ups",
];

const clients = [
  "Bank of America",
  "Bloomberg",
  "Amazon",
  "HMRC",
  "Public Health England",
  "Bionic",
  "PPL",
];

const process = [
  {
    step: "01",
    title: "Start with a conversation",
    description:
      "Book a 15-min call to share what you're working on, what's not moving, and what you need. No pitch — just a practical first conversation.",
  },
  {
    step: "02",
    title: "Agree scope and approach",
    description:
      "Based on your situation, I'll suggest the right engagement type and define a clear scope — what we'll do, how we'll work, and what good looks like.",
  },
  {
    step: "03",
    title: "Work together",
    description:
      "I integrate with your team, your rhythm, and your context. The focus is always on making things clearer, faster, and better — not adding process for its own sake.",
  },
  {
    step: "04",
    title: "Review and decide what's next",
    description:
      "At the end of every engagement we review outcomes against what we set out to achieve. Whether we continue, hand over, or close — it's always a clear decision.",
  },
];

const whoItsFor = [
  "Startups building AI products who need a hands-on product lead",
  "Scale-ups that have outgrown ad-hoc delivery and need structure",
  "Teams adopting AI who need strategy, not just tools",
  "Organisations with quality and reliability gaps in critical systems",
  "Founders who need a senior product and delivery partner without hiring full-time",
  "Companies in regulated industries who need someone who understands the environment",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-teal-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 md:py-16 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-emerald-400 sm:text-base">
            Work With Me
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Practical AI, product, and delivery expertise — for teams who need to move with clarity.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
                I work with companies, startups, and teams that need more than a
                generic consultant. My background spans product management,
                delivery leadership, and quality engineering — giving you a
                senior partner who understands strategy and execution equally.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <CalendlyButton label="Book a Strategy Call" />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  Send a message
                </Link>
              </div>
            </div>

            {/* Quick snapshot */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                What I offer
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "AI product strategy and MVP development",
                  "Delivery leadership and execution structure",
                  "Technical quality and systems reliability",
                  "Advisory, embedded, or project-based",
                  "Available across UK and remote",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-base text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client strip ── */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
            Contracted &amp; delivered for
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {clients.map((name) => (
              <span
                key={name}
                className="text-base font-semibold text-gray-500 transition hover:text-gray-700 sm:text-lg"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service areas ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
            What I Do
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Three core service areas
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Each one can stand alone or work together depending on what your
            team needs most right now.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="mb-5 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                {service.title}
              </h3>

              <p className="mb-6 flex-1 text-base leading-8 text-gray-600">
                {service.description}
              </p>

              <div className="border-t border-gray-100 pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Typical outcomes
                </p>
                <ul className="space-y-2">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Engagement types ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
              How We Work Together
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Three ways to engage
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Different teams need different things. Pick the model that fits
              your situation — or we can talk it through.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {engagementTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-8"
              >
                <div className="mb-5 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <type.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                  {type.title}
                </h3>

                <p className="mb-5 text-base leading-8 text-gray-600">
                  {type.description}
                </p>

                <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">
                  <p className="text-sm font-medium text-emerald-700">{type.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
              Who This Is For
            </p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              The right fit matters as much as the right skills.
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              I work best with teams who want a senior partner — not someone
              to hand off to. If you want real input, genuine execution, and
              someone who will tell you the truth about your product, we&apos;ll
              work well together.
            </p>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Industries I&apos;ve worked in
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white shadow-sm">
            {whoItsFor.map((item) => (
              <div key={item} className="flex items-start gap-4 px-6 py-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-base leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
              How It Works
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              From first call to real outcomes
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <p className="mb-4 text-3xl font-bold text-emerald-600">
                  {step.step}
                </p>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-400">
              Ready to work together?
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s talk about what your team needs.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              The best first step is a short conversation. Tell me where you
              are, what&apos;s not working, and what you want to achieve — and
              I&apos;ll be honest about whether and how I can help.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <CalendlyButton label="Book a 15-min Strategy Call" />

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Send a message
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Response within 24 hours · UK-based · Remote and on-site available
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
