import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Layers3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Ventures | Collins Obasuyi",
  description:
    "The ventures Collins Obasuyi is building: UBUNCARE (AI mental health), RiskPilot AI (AI governance), and YSLR Labs (AI product studio).",
  openGraph: {
    title: "Ventures | Collins Obasuyi",
    description:
      "AI products and ventures at different stages, each built with intention, not just ambition.",
    url: "https://collinsobasuyi.com/ventures",
  },
  alternates: { canonical: "https://collinsobasuyi.com/ventures" },
};

const projects = [
  {
    title: "UBUNCARE",
    subtitle:
      "AI-powered mental health platform focused on emotionally intelligent support and accessible care.",
    role: "Founder / Product Lead",
    stage: "MVP in progress",
    status: "In Progress",
    focus: "Mental health AI",
    audience:
      "People who want mental health support that actually feels human and accessible.",
    whyItMatters:
      "The goal is to make mental health support feel more human, structured, and accessible.",
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
    problem:
      "Many people struggle to access consistent, emotionally supportive mental health guidance. A lot of digital tools feel generic, impersonal, or disconnected from the user's lived experience.",
    solution:
      "UBUNCARE is an AI-powered mental health platform built around structured journeys, emotional awareness, and an experience that feels accessible and human.",
    approach:
      "I'm shaping the product strategy, user journey, and MVP direction, with a focus on trust, clarity, ethical support, and practical usability across web and app experiences.",
    currentFocus: [
      "Defining MVP scope and user flows",
      "Structuring onboarding and support journeys",
      "Shaping AI interaction patterns and product direction",
    ],
  },
  {
    title: "RiskPilot AI",
    subtitle:
      "Governance and compliance-focused AI platform helping organisations assess AI risk and readiness.",
    role: "Founder / Product Lead",
    stage: "Discovery",
    status: "Discovery",
    focus: "AI governance and compliance",
    audience:
      "Organisations adopting AI that need clearer governance, risk visibility, and responsible deployment structure.",
    whyItMatters:
      "Built to reduce uncertainty around AI adoption and support more responsible decision-making.",
    icon: Shield,
    gradient: "from-blue-500 to-indigo-500",
    problem:
      "Many organisations are adopting AI without clear governance, practical risk visibility, or strong internal structure around compliance and responsible deployment.",
    solution:
      "RiskPilot AI is a platform to help teams understand AI risk, build governance readiness, and make better decisions around AI adoption.",
    approach:
      "The product combines AI governance, strategy, and usability, built for teams that need structure without overcomplication.",
    currentFocus: [
      "Problem validation and product framing",
      "Defining target users and core use cases",
      "Exploring MVP structure for governance and risk workflows",
    ],
  },
  {
    title: "YSLR Labs",
    subtitle:
      "AI product studio exploring practical tools, startup ideas, and real-world digital solutions.",
    role: "Founder",
    stage: "Active exploration",
    status: "Active",
    focus: "Product studio and AI experimentation",
    audience:
      "Early-stage product ideas, experiments, and digital opportunities that need structure, momentum, and practical execution.",
    whyItMatters:
      "The goal is to move ideas out of concept stage and into real exploration and execution.",
    icon: Layers3,
    gradient: "from-emerald-500 to-teal-500",
    problem:
      "A lot of promising ideas never move beyond concept stage because they lack product structure, execution discipline, and practical technical grounding.",
    solution:
      "YSLR Labs is the umbrella for exploring, shaping, and building ideas into practical products, experiments, and early-stage digital solutions.",
    approach:
      "It's where I explore and build ideas across AI, product strategy, and delivery. The focus is execution, not hype.",
    currentFocus: [
      "Developing and refining startup ideas",
      "Creating practical MVP concepts and workflows",
      "Building a stronger portfolio of products and experiments",
    ],
  },
];

export default function VenturesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-teal-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 md:py-16 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-emerald-400 sm:text-base">
            My Ventures
          </div>

          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Products and ventures built with intention, not just ambition.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
            Alongside my consulting and advisory work, I&apos;m building a set of
            ventures at the intersection of AI, mental health, governance, and
            product exploration. Each one is real, in progress, and designed to
            solve something that matters.
          </p>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl sm:p-8 md:p-10"
            >
              <div
                className={`absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl`}
              />

              <div className="relative">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${project.gradient} p-3 text-white shadow-lg`}>
                      <project.icon className="h-6 w-6" />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{project.title}</h2>
                      <span className={`inline-flex w-fit rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1.5 text-sm font-medium text-white shadow-sm`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-4 text-base leading-8 text-gray-700 sm:text-lg">{project.subtitle}</p>
                    <p className="mt-4 text-sm font-medium text-emerald-700 sm:text-base">{project.whyItMatters}</p>
                  </div>

                  <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-700 sm:text-base"><span className="font-semibold text-gray-900">Role:</span> {project.role}</p>
                      <p className="text-sm text-gray-700 sm:text-base"><span className="font-semibold text-gray-900">Stage:</span> {project.stage}</p>
                      <p className="text-sm text-gray-700 sm:text-base"><span className="font-semibold text-gray-900">Focus:</span> {project.focus}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6">
                  <p className="mb-3 text-sm font-semibold text-emerald-600 sm:text-base">Who It&apos;s For</p>
                  <p className="text-base leading-8 text-gray-700 sm:text-lg">{project.audience}</p>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-3">
                  {[
                    { label: "Problem", content: project.problem },
                    { label: "Solution", content: project.solution },
                    { label: "Approach", content: project.approach },
                  ].map(({ label, content }) => (
                    <div key={label} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                      <p className="mb-3 text-sm font-semibold text-emerald-600 sm:text-base">{label}</p>
                      <p className="text-base leading-8 text-gray-700 sm:text-lg">{content}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6">
                  <p className="mb-4 text-sm font-semibold text-emerald-600 sm:text-base">Current Focus</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {project.currentFocus.map((item) => (
                      <div key={item} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-4">
                        <p className="text-sm leading-7 text-gray-700 sm:text-base">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-400">
              Interested in what I&apos;m building?
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Want to collaborate or follow the journey?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              If any of these ventures resonate, or if you&apos;re building
              something similar and want to compare notes, I&apos;m always open
              to a conversation.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D896C] px-8 py-4 text-base font-medium text-white shadow-lg transition hover:bg-[#0B6F56] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
