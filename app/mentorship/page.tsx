import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentorship | Collins Obasuyi",
  description:
    "Mentorship for tech professionals in QA, Business Analysis, and Product Management. Career strategy, technical mentorship, and leadership growth with Collins Obasuyi.",
  openGraph: {
    title: "Mentorship for Tech Professionals | Collins Obasuyi",
    description:
      "Practical career mentorship for QA engineers, business analysts, and product managers looking for clarity, direction, and growth.",
    url: "https://collinsobasuyi.com/mentorship",
  },
  alternates: { canonical: "https://collinsobasuyi.com/mentorship" },
};
import CalendlyButton from "@/components/calendly-button";
import {
  ArrowRight,
  Target,
  Brain,
  Compass,
  Users,
  CheckCircle2,
  Rocket,
  FileText,
} from "lucide-react";

const offerings = [
  {
    title: "Career Strategy",
    description:
      "Practical support for professionals navigating transitions, promotions, role positioning, interviews, and the next stage of their journey in tech.",
    icon: Target,
    benefits: ["CV and profile reviews", "Interview preparation", "Career clarity"],
  },
  {
    title: "Technical Mentorship",
    description:
      "Hands-on guidance for people growing in product, quality engineering, AI, or technical delivery roles who want clearer direction and stronger confidence.",
    icon: Brain,
    benefits: ["Skill roadmap", "Project guidance", "Portfolio direction"],
  },
  {
    title: "Leadership Growth",
    description:
      "Support for professionals stepping into more ownership and influence who want to improve communication, execution, and stakeholder confidence.",
    icon: Compass,
    benefits: ["Decision-making", "Leadership growth", "Stakeholder management"],
  },
];

const audience = [
  "Professionals trying to break into product or grow more intentionally within tech",
  "QA, engineering, and technical professionals exploring broader or more strategic career paths",
  "People looking for more confidence, structure, and practical direction",
  "Aspiring leads who want grounded support beyond generic online advice",
];

const principles = [
  "Practical guidance over vague motivation",
  "Clear next steps over overwhelm",
  "Tailored support over one-size-fits-all advice",
  "Honest feedback that helps you move forward",
];

const helpedPeople = [
  "Manual QA professionals moving into automation testing",
  "Aspiring QA leads preparing for more ownership and leadership",
  "Product managers and business analysts building stronger product thinking",
  "Junior front-end developers growing in confidence and direction",
  "Cloud engineers exploring broader technical growth",
  "AI learners trying to make sense of tools, concepts, and practical application",
  "People learning prompt engineering and modern AI workflows",
  "Professionals building stronger Agile, delivery, and collaboration skills",
];

const sessionFormats = [
  {
    title: "1-Off Strategy Session",
    description:
      "A focused session to talk through your current situation, challenges, next steps, and what would move you forward fastest.",
    icon: Rocket,
    details: ["Career direction", "Role transition", "Technical growth", "Clarity on next move"],
  },
  {
    title: "Ongoing Mentorship",
    description:
      "More consistent support for people who want accountability, structured guidance, and continued feedback over time.",
    icon: Users,
    details: ["Regular check-ins", "Goal setting", "Progress support", "Longer-term growth"],
  },
  {
    title: "CV, Interview & Positioning Support",
    description:
      "Targeted help with how you present yourself, how you prepare, and how you communicate your value more clearly.",
    icon: FileText,
    details: ["CV reviews", "Interview prep", "LinkedIn / profile positioning", "Confidence building"],
  },
];

export default function MentorshipPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-indigo-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 md:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-violet-400 sm:text-base">
                <Users className="h-4 w-4" />
                Mentorship for Tech Professionals
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Helping ambitious professionals grow with more clarity,
                confidence, and direction.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
                I support professionals across product, QA, AI, Agile, and broader
                tech roles who want practical guidance, stronger positioning, and a
                clearer sense of what their next step should be.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <CalendlyButton label="Book a Discovery Call" />

                <Link
                  href="/ventures"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  View My Work
                </Link>
              </div>

              <p className="mt-5 text-sm text-gray-500 sm:text-base">
                A practical first conversation to understand where you are and how I can help.
              </p>
            </div>

            {/* Who this is for */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400 sm:text-base">
                Who this is for
              </p>

              <div className="mt-6 space-y-4">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <p className="text-base leading-7 text-gray-300 sm:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mentorship Areas ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600 sm:text-base">
            How I Can Help
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Mentorship Areas
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
            Here to help you think more clearly, position yourself better,
            and make more confident moves in your career.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg sm:p-7"
            >
              <div className="mb-4 inline-flex rounded-xl bg-violet-50 p-3 text-violet-600">
                <offering.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900 sm:text-2xl">
                {offering.title}
              </h3>

              <p className="mb-4 text-base leading-8 text-gray-700 sm:text-lg">
                {offering.description}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                {offering.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="rounded-full bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who I've Helped ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600 sm:text-base">
              Who I&apos;ve Helped
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The kinds of professionals I&apos;ve supported
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              My mentoring work has supported people across different stages of
              growth, from hands-on technical roles to more strategic and leadership-focused paths.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helpedPeople.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-sm"
              >
                <p className="text-base leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Session Formats ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600 sm:text-base">
            Session Formats
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Different ways we can work together
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sessionFormats.map((format) => (
            <div
              key={format.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg sm:p-7"
            >
              <div className="mb-4 inline-flex rounded-xl bg-violet-50 p-3 text-violet-600">
                <format.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900 sm:text-2xl">
                {format.title}
              </h3>

              <p className="mb-4 text-base leading-8 text-gray-700 sm:text-lg">
                {format.description}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                {format.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50/70 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">
            Availability
          </p>
          <p className="mt-2 text-base leading-7 text-gray-700">
            I work with a limited number of mentoring clients at a time so I can keep the support practical and thoughtful. Session format and pricing are shared after the initial conversation based on what kind of support you need.
          </p>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
              <p className="mb-3 text-sm font-semibold text-violet-600 sm:text-base">
                My Approach
              </p>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Honest, practical, and tailored to where you are right now.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
                I focus on practical conversations, not vague motivation. The goal
                is to help you get clearer about your next move, strengthen your
                positioning, and move forward with more confidence and structure.
              </p>

              <div className="mt-8">
                <CalendlyButton label="Book Your Discovery Call" />
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
              <p className="mb-4 text-sm font-semibold text-violet-600 sm:text-base">
                What you can expect
              </p>

              <div className="space-y-3">
                {principles.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                    <p className="text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-violet-400">
              Limited mentoring availability
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Book a session and let&apos;s bring more clarity to your next move.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Whether you need career direction, technical mentorship, interview support,
              or help thinking through your next leadership step, we can start with one practical conversation.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              I keep mentoring slots limited so I can give each person thoughtful, useful support. Pricing and format are shared after the first discovery conversation.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <CalendlyButton label="Book a 15-min Strategy Call" />

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Contact Me Instead
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
