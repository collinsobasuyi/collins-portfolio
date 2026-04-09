import Link from "next/link";
import { ArrowRight, Target, Code, Compass, Users } from "lucide-react";

const offerings = [
  {
    title: "1-on-1 Career Coaching",
    description:
      "Support for career transitions, confidence building, role positioning, interview preparation, and navigating the next stage of your journey in tech.",
    icon: Target,
    benefits: ["CV reviews", "Interview prep", "Career clarity"],
  },
  {
    title: "Technical Mentorship",
    description:
      "Hands-on guidance for people growing in product management, quality engineering, AI learning, or technical delivery roles.",
    icon: Code,
    benefits: ["Skill roadmap", "Project guidance", "Portfolio advice"],
  },
  {
    title: "Leadership Development",
    description:
      "Practical mentoring for aspiring leads and growing professionals who want to improve communication, execution, and stakeholder management.",
    icon: Compass,
    benefits: ["Decision-making", "Leadership growth", "Stakeholder management"],
  },
];

export default function MentorshipPage() {
  return (
    <>
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm sm:text-base font-medium text-emerald-700">
              <Users className="h-4 w-4" />
              Mentorship & Career Coaching
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 max-w-4xl">
              Helping people grow in tech with more clarity, confidence, and direction.
            </h1>

            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-gray-700 leading-8">
              I support professionals who want practical guidance across career
              growth, technical direction, product thinking, and navigating the
              realities of working in tech.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D896C] px-6 py-4 text-base font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2"
              >
                Book a Discovery Call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-4 text-base font-medium text-gray-900 transition hover:border-[#0D896C] hover:bg-[#0D896C]/5 focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2"
              >
                View My Work
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wide text-gray-600">
              Who this is for
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Professionals trying to break into product or grow within tech",
                "Engineers and QA professionals exploring broader career paths",
                "People looking for more confidence, structure, and direction",
                "Aspiring leads who want support beyond generic online advice",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-4 border border-gray-100">
                  <p className="text-base sm:text-lg text-gray-700 leading-8">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="mb-8">
          <p className="text-sm sm:text-base font-medium text-[#0D896C] mb-2">
            How I Can Help
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Mentorship Areas
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 transition-all hover:border-[#0D896C]/30 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 text-white">
                <offering.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-gray-900">
                {offering.title}
              </h3>

              <p className="mb-4 text-base sm:text-lg text-gray-700 leading-8">
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

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 md:p-10">
          <p className="text-sm sm:text-base font-medium text-[#0D896C] mb-3">
            My Approach
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-3xl leading-tight">
            Honest, practical, and tailored to where you are now.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-700 leading-8 max-w-3xl">
            I focus on practical conversations, not vague motivation. The goal
            is to help you get clearer about your next move, strengthen your
            positioning, and move forward with more confidence and structure.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-4 text-base font-medium text-gray-900 transition hover:border-[#0D896C] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2"
            >
              Start the conversation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}