import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Layers3 } from "lucide-react";

const projects = [
  {
    title: "UBUNCARE",
    subtitle:
      "AI-powered mental health platform focused on emotionally intelligent support and accessible care.",
    role: "Founder / Product Lead",
    stage: "MVP in progress",
    focus: "Mental health AI",
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
    problem:
      "Many people struggle to access consistent, emotionally supportive mental health guidance. A lot of digital tools feel generic, impersonal, or disconnected from the user’s lived experience.",
    solution:
      "UBUNCARE is being designed as an AI-powered mental health support platform that combines structured journeys, emotionally aware interaction, and a more accessible digital experience.",
    approach:
      "I’m shaping the product strategy, user journey, and MVP direction, with a focus on trust, clarity, ethical support, and practical usability across web and app experiences.",
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
    focus: "AI governance and compliance",
    icon: Shield,
    gradient: "from-blue-500 to-indigo-500",
    problem:
      "Many organisations are adopting AI without clear governance, practical risk visibility, or strong internal structure around compliance and responsible deployment.",
    solution:
      "RiskPilot AI is being explored as a platform that helps teams understand AI risk, improve governance readiness, and make more informed decisions around AI adoption.",
    approach:
      "The product direction combines AI governance thinking, product strategy, and practical business usability, especially for teams that need structure without unnecessary complexity.",
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
    focus: "Product studio and AI experimentation",
    icon: Layers3,
    gradient: "from-emerald-500 to-teal-500",
    problem:
      "A lot of promising ideas never move beyond concept stage because they lack product structure, execution discipline, and practical technical grounding.",
    solution:
      "YSLR Labs is the umbrella for exploring, shaping, and building ideas into practical products, experiments, and early-stage digital solutions.",
    approach:
      "It serves as a space for focused experimentation across AI, product strategy, delivery thinking, and early-stage solution design, with an emphasis on real execution over hype.",
    currentFocus: [
      "Developing and refining startup ideas",
      "Creating practical MVP concepts and workflows",
      "Building a stronger portfolio of products and experiments",
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-50/40 to-teal-50/40 blur-3xl" />

        <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <p className="text-sm sm:text-base font-semibold tracking-wide text-emerald-600 mb-4">
            My Work
          </p>

          <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Real products, active ideas, and practical work across AI, product,
            and delivery.
          </h1>

          <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-8 text-gray-700">
            This page highlights the products and initiatives I’m currently
            building and exploring. My focus is on turning ideas into structured,
            useful, and real-world digital solutions.
          </p>
        </div>
      </section>

      {/* Project sections */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
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
                    <div
                      className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${project.gradient} p-3 text-white shadow-lg`}
                    >
                      <project.icon className="h-6 w-6" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {project.title}
                    </h2>

                    <p className="mt-4 text-base sm:text-lg leading-8 text-gray-700">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6">
                    <div className="space-y-3">
                      <p className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-gray-900">Role:</span>{" "}
                        {project.role}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-gray-900">Stage:</span>{" "}
                        {project.stage}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-gray-900">Focus:</span>{" "}
                        {project.focus}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-3">
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                    <p className="text-sm sm:text-base font-semibold text-emerald-600 mb-3">
                      Problem
                    </p>
                    <p className="text-base sm:text-lg leading-8 text-gray-700">
                      {project.problem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                    <p className="text-sm sm:text-base font-semibold text-emerald-600 mb-3">
                      Solution
                    </p>
                    <p className="text-base sm:text-lg leading-8 text-gray-700">
                      {project.solution}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                    <p className="text-sm sm:text-base font-semibold text-emerald-600 mb-3">
                      Approach
                    </p>
                    <p className="text-base sm:text-lg leading-8 text-gray-700">
                      {project.approach}
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6">
                  <p className="text-sm sm:text-base font-semibold text-emerald-600 mb-4">
                    Current Focus
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {project.currentFocus.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-4"
                      >
                        <p className="text-sm sm:text-base leading-7 text-gray-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 px-8 py-12 text-white shadow-2xl sm:px-10 md:px-12 md:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative text-center">
            <p className="mb-4 text-sm sm:text-base font-semibold tracking-wide text-white/85">
              Interested in building something similar?
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Let’s talk about product, AI, and execution.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-white/90">
              I’m open to collaboration, product conversations, early-stage ideas,
              and opportunities where practical thinking and real delivery matter.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-medium text-emerald-700 transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
              >
                Learn more about me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}