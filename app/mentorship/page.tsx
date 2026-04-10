import Link from "next/link";
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
    details: ["CV reviews", "Interview prep", "LinkedIn/profile positioning", "Confidence building"],
  },
];

export default function MentorshipPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-50/40 to-teal-50/40 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 sm:text-base">
                <Users className="h-4 w-4" />
                Mentorship for Tech Professionals
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Helping ambitious professionals grow with more clarity,
                confidence, and direction.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700 sm:text-xl">
                I support professionals across product, QA, AI, Agile, and broader
                tech roles who want practical guidance, stronger positioning, and a
                clearer sense of what their next step should be.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <CalendlyButton label="Book a Discovery Call" />

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-4 text-base font-medium text-gray-900 transition hover:border-[#0D896C] hover:bg-[#0D896C]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2"
                >
                  View My Work
                </Link>
              </div>

              <p className="mt-5 text-sm text-gray-600 sm:text-base">
                A practical first conversation to understand where you are and how I can help.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 sm:text-base">
                Who this is for
              </p>

              <div className="mt-6 space-y-4">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-gray-100 bg-white px-4 py-4"
                  >
                    <p className="text-base leading-8 text-gray-700 sm:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:px-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-[#0D896C] sm:text-base">
            How I Can Help
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Mentorship Areas
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
            Support designed to help you think more clearly, position yourself
            better, and make more confident moves in your career.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#0D896C]/30 hover:shadow-lg sm:p-7"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 text-white">
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
                    className="rounded-full bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:px-8">
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
          <div className="mb-8">
            <p className="mb-2 text-sm font-medium text-[#0D896C] sm:text-base">
              Who I’ve Helped
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The kinds of professionals I’ve supported
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
                className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4"
              >
                <p className="text-base leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:px-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-[#0D896C] sm:text-base">
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
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#0D896C]/30 hover:shadow-lg sm:p-7"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 text-white">
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
                    className="rounded-full bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Availability
          </p>
          <p className="mt-2 text-base leading-7 text-gray-700">
            I work with a limited number of mentoring clients at a time so I can keep the support practical and thoughtful. Session format and pricing are shared after the initial conversation based on what kind of support you need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 md:p-10">
            <p className="mb-3 text-sm font-medium text-[#0D896C] sm:text-base">
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
            <p className="mb-4 text-sm font-semibold text-emerald-600 sm:text-base">
              What you can expect
            </p>

            <div className="space-y-3">
              {principles.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <p className="text-base text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 px-8 py-12 text-white shadow-2xl sm:px-10 md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-wide text-white/85 sm:text-base">
              Limited mentoring availability
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Book a session and let’s bring more clarity to your next move.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Whether you need career direction, technical mentorship, interview support,
              or help thinking through your next leadership step, we can start with one practical conversation.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              I keep mentoring slots limited so I can give each person thoughtful, useful support. Pricing and format are shared after the first discovery conversation.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <CalendlyButton
                label="Book a 15-min Strategy Call"
                className="bg-white text-emerald-700 hover:bg-gray-100"
              />

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700"
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