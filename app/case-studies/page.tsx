import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CalendlyButton from "@/components/calendly-button";

export const metadata: Metadata = {
  title: "Case Studies | Collins Obasuyi",
  description:
    "Real delivery work: AI product strategy, delivery restructuring, and quality engineering across financial services, government, and technology. How Collins Obasuyi works in practice.",
  openGraph: {
    title: "Case Studies | Collins Obasuyi",
    description:
      "Real delivery work across financial services, government, and technology. Strategy, structure, and outcomes.",
    url: "https://collinsobasuyi.com/case-studies",
  },
  alternates: { canonical: "https://collinsobasuyi.com/case-studies" },
};

const caseStudies = [
  {
    id: "financial-services-delivery",
    label: "Delivery Leadership",
    industry: "Financial Services",
    tag: "Embedded · 6 months",
    tagColour: "bg-emerald-100 text-emerald-700",
    headline:
      "Restructuring delivery and QA in a high-stakes financial services data team",
    challenge:
      "A financial services data team had strong technical talent but slow, inconsistent delivery cycles. High regression risk, unclear quality ownership, and mounting pressure from senior stakeholders were creating real business risk. Releases were taking longer, incidents were increasing, and the team had lost confidence in their own process.",
    approach: [
      "Embedded as delivery lead to observe and understand the real blockers, not just the symptoms",
      "Mapped the full delivery pipeline and identified where quality risk was accumulating silently",
      "Introduced structured sprint ceremonies with clear ownership and accountability at each stage",
      "Built a QA strategy that separated regression risk from exploratory testing, reducing duplication",
      "Worked directly with senior stakeholders to reframe how delivery priorities and risk were communicated",
      "Created a shared definition of done that aligned engineering, QA, and product expectations",
    ],
    outcomes: [
      "Release cycle shortened, with fewer last-minute blockers before production",
      "Regression incidents dropped significantly over the first three months",
      "Team regained confidence in the delivery process and their ability to ship",
      "Stakeholder trust rebuilt through clearer, more consistent reporting",
    ],
    reflection:
      "The biggest shift wasn't process. It was helping the team see where real risk was sitting. Once that was visible, the solutions were obvious and the team drove most of the improvements themselves.",
  },
  {
    id: "public-sector-ai",
    label: "AI Product Strategy",
    industry: "Government & Public Sector",
    tag: "Advisory + Project-based",
    tagColour: "bg-blue-100 text-blue-700",
    headline:
      "Defining a responsible AI product strategy for a public sector data initiative",
    challenge:
      "A public sector organisation wanted to explore how AI could improve their data processing and public-facing information delivery. The challenge went beyond the technical. They needed a responsible, governance-aware approach that senior stakeholders could trust, that passed internal review, and that wouldn't create new risk in a sensitive environment.",
    approach: [
      "Led the product strategy and discovery phase from the outset. No pre-existing assumptions.",
      "Ran structured stakeholder workshops to define scope, constraints, and ethical guardrails",
      "Translated complex AI capability into terms procurement, policy, and operational teams could assess",
      "Shaped an AI-assisted workflow that balanced genuine capability with realistic compliance requirements",
      "Created a governance-ready MVP brief with clear decision points and review gates built in",
      "Documented the rationale for each product decision so future teams could build on it confidently",
    ],
    outcomes: [
      "Clear AI product brief with defined governance approach, ready for internal sign-off",
      "Stakeholder alignment achieved across technical, policy, and operational teams. No holdouts.",
      "MVP handed off with full documentation, delivery structure, and responsible AI framing",
      "Organisation had a reusable template for future AI initiatives in regulated contexts",
    ],
    reflection:
      "In regulated environments, the product work is often the easy part. The harder work is making the right thing feel safe and legible to the people who have to approve it. Getting that right early saved months of back-and-forth later.",
  },
  {
    id: "quality-modernisation",
    label: "Technical Quality",
    industry: "Technology & Insurance",
    tag: "Project-based · 3 months",
    tagColour: "bg-violet-100 text-violet-700",
    headline:
      "Removing a testing bottleneck and building quality ownership across a scale-up",
    challenge:
      "A fast-growing technology scale-up had accumulated significant technical debt in their quality processes. Manual testing was bottlenecking every release. There was no automation strategy, unclear ownership of quality between engineering and product, and a growing fear of shipping because no one was confident what they might break.",
    approach: [
      "Conducted a quality audit across the entire delivery pipeline before recommending anything",
      "Identified the highest-risk user journeys and mapped them to the team's existing test coverage gaps",
      "Defined a pragmatic automation strategy, prioritising value over completeness from day one",
      "Worked with engineers and product to establish clear quality ownership at each stage",
      "Introduced automated regression coverage for the most critical user flows within the first six weeks",
      "Built a lightweight quality process that the team could maintain and extend without external support",
    ],
    outcomes: [
      "Testing bottleneck removed from the release path. Engineers could ship without manual sign-off delays.",
      "Automated coverage introduced for core user journeys, reducing regression risk significantly",
      "Clear quality strategy documented and embedded in the team's sprint workflow",
      "Engineers more confident shipping independently. The fear of Friday deploys was largely gone.",
    ],
    reflection:
      "Most quality problems aren't really quality problems. They're ownership problems. Once we made it clear who was responsible for what, the team solved most of the technical challenges themselves. The process work was secondary.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-teal-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 md:py-16 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-emerald-400 sm:text-base">
            Case Studies
          </div>

          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Delivery in practice. Real problems, real outcomes.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
            These are examples of the kind of work I do. The challenges teams
            bring, how I approach them, and what changes as a result. Client
            details are kept general to respect confidentiality.
          </p>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="space-y-10">
          {caseStudies.map((cs, idx) => (
            <article
              key={cs.id}
              className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:shadow-xl"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />

              <div className="p-6 sm:p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide ${cs.tagColour}`}>
                    {cs.label}
                  </span>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
                    {cs.industry}
                  </span>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
                    {cs.tag}
                  </span>
                  <span className="ml-auto text-sm font-medium text-gray-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                  {cs.headline}
                </h2>

                {/* Three-column layout */}
                <div className="mt-8 grid gap-8 lg:grid-cols-3">
                  {/* Challenge */}
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      The Challenge
                    </p>
                    <p className="text-base leading-8 text-gray-700">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      My Approach
                    </p>
                    <ul className="space-y-3">
                      {cs.approach.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <p className="text-sm leading-7 text-gray-700">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
                      Outcomes
                    </p>
                    <ul className="space-y-3">
                      {cs.outcomes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                          <p className="text-sm leading-7 text-gray-700">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Reflection */}
                <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6">
                  <p className="mb-2 text-sm font-semibold text-emerald-600">
                    Reflection
                  </p>
                  <p className="text-base leading-8 text-gray-600 italic">
                    &ldquo;{cs.reflection}&rdquo;
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-400">
              Want this kind of outcome for your team?
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s talk about what you&apos;re working on.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Every engagement starts with a short conversation. Tell me where
              your team is, what&apos;s not moving, and what you want to
              achieve. I&apos;ll be direct about whether and how I can help.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <CalendlyButton label="Book a Strategy Call" />

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                See full services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
