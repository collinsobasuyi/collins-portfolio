import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Shield,
  CheckCircle2,
  Briefcase,
  Brain,
  Layers3,
} from "lucide-react";
import ScrollToTop from "@/components/scroll-to-top";
import CalendlyButton from "@/components/calendly-button";

export const metadata: Metadata = {
  title: "Collins Obasuyi | AI Product Consultant & Delivery Lead",
  description:
    "Collins Obasuyi — AI product strategy, delivery leadership, and technical quality for companies and teams. 15+ years. Contracted for Amazon, Bloomberg, Bank of America, HMRC, and more.",
  openGraph: {
    title: "Collins Obasuyi | AI Product Consultant & Delivery Lead",
    description:
      "AI product strategy, delivery leadership, and technical quality for companies, founders, and teams.",
    url: "https://collinsobasuyi.com",
    type: "website",
  },
  alternates: { canonical: "https://collinsobasuyi.com" },
};

const clients = [
  "Bank of America",
  "Bloomberg",
  "Amazon",
  "HMRC",
  "Public Health England",
  "Bionic",
  "PPL",
];

const services = [
  {
    title: "AI Product Strategy",
    description:
      "Shaping practical AI products, MVPs, and workflows that solve real problems and move beyond ideas on paper.",
    icon: Sparkles,
  },
  {
    title: "Delivery Leadership",
    description:
      "From product direction to structured execution — clarity, momentum, and delivery discipline for complex work.",
    icon: Rocket,
  },
  {
    title: "Technical Quality",
    description:
      "Building confidence through stronger systems thinking, quality practices, and reliability from the ground up.",
    icon: Shield,
  },
];

const reasonsToWorkWithMe = [
  {
    title: "Strategic and practical",
    description:
      "I focus on outcomes, not buzzwords. That means balancing vision, usability, delivery, and long-term value.",
    icon: Brain,
  },
  {
    title: "Technically credible",
    description:
      "My background in technical quality and complex systems helps me bridge product direction with execution realities.",
    icon: Layers3,
  },
  {
    title: "Execution-focused",
    description:
      "I care about turning ideas into something real, useful, and well delivered — not just producing plans with no momentum.",
    icon: Briefcase,
  },
  {
    title: "Experienced in complexity",
    description:
      "I've worked in high-stakes and regulated environments where structure, reliability, and clear thinking truly matter.",
    icon: CheckCircle2,
  },
];

const experienceAreas = [
  "AI Products",
  "Product Strategy",
  "Delivery Leadership",
  "Technical Quality",
  "Finance & Banking",
  "Insurance",
  "Public Health",
  "Government & Regulated",
  "Media & Publishing",
];

const testimonials = [
  {
    quote:
      "Collins helped me reframe my career completely. Within three months I moved from a QA role I'd outgrown into a product position I'd been aiming for. The clarity and direction he brought was genuinely different from anything I'd had before.",
    name: "— Mentee, QA to Product transition",
    category: "mentorship",
  },
  {
    quote:
      "Brought in sharp product thinking and delivery structure at exactly the right moment. Collins understood the complexity of our environment quickly and helped us move with real momentum.",
    name: "— Delivery Lead, Financial Services",
    category: "consulting",
  },
];

const ventures = [
  {
    title: "UBUNCARE",
    description: "AI-powered mental health platform focused on emotionally intelligent support and accessible care.",
    status: "In Development",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "RiskPilot AI",
    description: "AI governance and compliance platform helping organisations assess AI risk and readiness.",
    status: "Discovery",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "YSLR Labs",
    description: "AI product studio exploring practical tools, startup ideas, and real-world digital solutions.",
    status: "Active",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero — consulting-first ── */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-emerald-900/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-900/10 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 md:pb-28 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-emerald-700/60 bg-emerald-950/70 px-5 py-2.5 text-sm font-medium text-emerald-300 shadow-sm sm:text-base">
            Available for Contract · Advisory · UK Based
          </div>

          <div className="mt-10 grid gap-10 md:gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-5 text-base font-medium tracking-wide text-gray-400 sm:text-lg">
                AI Product Consultant · Delivery Lead · Mentor
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Build better AI products. Deliver with more structure.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
                I work with companies, founders, and teams who need sharper
                product direction, stronger execution, and AI thinking grounded
                in 15+ years of real delivery experience — across finance,
                public health, government, and regulated environments.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-medium text-gray-950 shadow-lg shadow-emerald-900/40 transition hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  Work With Me
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <CalendlyButton
                  label="Book a Strategy Call"
                  className="border-2 border-gray-600 bg-transparent text-white hover:border-emerald-500 hover:bg-emerald-950/40"
                />
              </div>
            </div>

            {/* Snapshot card */}
            <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400 sm:text-base">
                Professional Snapshot
              </p>

              <div className="mt-8 space-y-6">
                {[
                  "15+ years across product, delivery, quality, and technical leadership",
                  "Contracted for major organisations across finance, public health, and government",
                  "Building AI products, MVPs, and practical digital solutions with real-world value",
                ].map((item, idx) => (
                  <div key={item} className="border-b border-gray-700 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex gap-4">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-xs font-bold text-gray-950 shadow-md">
                        {idx + 1}
                      </div>
                      <p className="text-base leading-8 text-gray-300 sm:text-lg">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-800 bg-emerald-950/50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
                  Best fit
                </p>
                <p className="mt-2 text-base leading-7 text-gray-300">
                  Companies, startups, and teams who need senior product and
                  delivery expertise — without the full-time overhead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client strip ── */}
      <section className="border-b border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
            Contracted &amp; delivered for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {clients.map((client) => (
              <span key={client} className="text-sm font-semibold text-gray-500 transition hover:text-gray-800 sm:text-base">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I help teams with ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
              What I Help Teams With
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Three areas where I add the most value.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
          >
            See full services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h3>
              <p className="text-base leading-7 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Work With Me ── */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div className="lg:sticky lg:top-10">
              <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600">
                Why Work With Me
              </p>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                The combination most people can&apos;t find in one person.
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                Strategy without execution is just a document. Execution without
                credibility is just noise. I bring both — plus the technical
                depth to know the difference.
              </p>
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Background spans
                </p>
                <div className="flex flex-wrap gap-2">
                  {experienceAreas.map((item) => (
                    <span key={item} className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {reasonsToWorkWithMe.map((item) => (
                <div key={item.title} className="flex gap-6 py-8 first:pt-0 last:pb-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm ring-1 ring-gray-100">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
            What people say
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-5">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                    t.category === "mentorship"
                      ? "bg-violet-100 text-violet-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}>
                    {t.category === "mentorship" ? "Mentorship" : "Consulting"}
                  </span>
                </div>
                <p className="text-base leading-7 text-gray-700 sm:text-lg">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-5 text-sm font-semibold text-gray-500">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mentorship — secondary path for individuals ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-indigo-50/30 p-8 sm:p-10">
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-violet-200/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
                For Individuals
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                Growing your career in tech?
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-gray-600">
                Alongside my consulting work, I mentor ambitious professionals
                in QA, Business Analysis, and Product Management — helping them
                move forward with more clarity, confidence, and direction.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {["Career Strategy", "Technical Mentorship", "Leadership Growth"].map((item) => (
                  <span key={item} className="rounded-full border border-violet-200 bg-white px-4 py-1.5 text-sm font-medium text-violet-700 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <Link
                href="/mentorship"
                className="group inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-7 py-4 text-base font-medium text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
              >
                Explore Mentorship
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ventures — founder track ── */}
      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600">
              My Ventures
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What I&apos;m building on the side.
            </h2>
            <p className="mt-3 max-w-xl text-base text-gray-600">
              Alongside client work, I&apos;m building a set of AI products at
              different stages of exploration and development.
            </p>
          </div>
          <Link
            href="/ventures"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700"
          >
            See all ventures
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {ventures.map((v) => (
            <div key={v.title} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className={`h-1.5 w-full bg-gradient-to-r ${v.gradient}`} />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
                  <span className={`shrink-0 rounded-full bg-gradient-to-r ${v.gradient} px-2.5 py-1 text-xs font-semibold text-white shadow-sm`}>
                    {v.status}
                  </span>
                </div>
                <p className="text-base leading-7 text-gray-600">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-8 py-14 text-white shadow-2xl sm:px-10 md:px-14 md:py-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-800/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-800/15 blur-3xl" />

          <div className="relative max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Open to the right conversations
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Ready to work together?<br />Let&apos;s talk.
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
              Whether you need a product lead, delivery structure, or AI
              direction — a short conversation is the right first step.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-8 py-4 text-base font-medium text-gray-950 shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Work With Me
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <CalendlyButton
                label="Book a Strategy Call"
                className="border border-white/10 bg-white/5 text-white hover:bg-white/10"
              />
            </div>
            <p className="mt-5 text-sm text-gray-500">
              Response within 24 hours · UK-based · Remote and on-site available
            </p>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}
