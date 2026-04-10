import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Briefcase,
  ShieldCheck,
  Users,
  Sparkles,
  CheckCircle2,
  Code2,
  Cloud,
  Bot,
  TestTube2,
  Lock,
  Palette,
  Workflow,
} from "lucide-react";

const strengths = [
  {
    title: "Product Leadership",
    description:
      "I think beyond features and focus on building products that are useful, viable, and grounded in real user and business needs.",
    icon: Brain,
  },
  {
    title: "Execution & Delivery",
    description:
      "I bring structure, momentum, and follow-through. I care about turning ideas into real outcomes, not leaving them as good intentions.",
    icon: Briefcase,
  },
  {
    title: "Technical Quality",
    description:
      "My background in Quality Engineering gives me a strong lens for reliability, risk, clarity, and how products hold up in the real world.",
    icon: ShieldCheck,
  },
  {
    title: "Mentorship & Growth",
    description:
      "I also support ambitious professionals in tech who want stronger positioning, clearer direction, and practical guidance for growth.",
    icon: Users,
  },
];

const experienceAreas = [
  "AI Product Strategy",
  "Product Management",
  "Delivery Leadership",
  "Quality Engineering",
  "Technical Quality",
  "Complex Systems",
  "Finance",
  "Insurance",
  "Public Health",
  "Regulated Environments",
];

const principles = [
  "Clarity over noise",
  "Execution over endless planning",
  "Practical AI over hype",
  "Quality as a built-in discipline",
];

const capabilities = [
  {
    title: "Product & Engineering",
    icon: Code2,
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Flutter",
      "Python",
    ],
  },
  {
    title: "Cloud & Platforms",
    icon: Cloud,
    items: ["AWS", "Azure", "GitHub", "CI/CD"],
  },
  {
    title: "AI & Modern Tooling",
    icon: Bot,
    items: [
      "ChatGPT",
      "Claude",
      "Copilot",
      "LLMs",
      "ML",
      "DL",
      "AI product workflows",
    ],
  },
  {
    title: "QA & Testing",
    icon: TestTube2,
    items: [
      "Playwright",
      "Cypress",
      "Postman",
      "Swagger",
      "BrowserStack",
      "Mobile testing",
      "APK / IPA testing",
      "Jira",
    ],
  },
  {
    title: "Security & Delivery",
    icon: Lock,
    items: ["DevSecOps", "SAST", "DAST"],
  },
  {
    title: "Design & Product Tools",
    icon: Palette,
    items: ["Figma"],
  },
  {
    title: "Ways of Working",
    icon: Workflow,
    items: [
      "Agile",
      "Waterfall",
      "SDLC / STLC",
      "Stakeholder collaboration",
      "Product discovery",
      "Delivery planning",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-emerald-50/40 to-teal-50/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-violet-50/20 to-indigo-50/20 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-emerald-200/60 bg-white/90 px-5 py-2.5 text-sm font-medium text-emerald-700 shadow-sm sm:text-base">
            About Me
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div>
              <p className="mb-4 text-base font-medium tracking-wide text-gray-600 sm:text-lg">
                AI Product Leader • Founder • Mentor
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                I work at the intersection of product, execution, technical
                quality, and AI.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700 sm:text-xl">
                With 15+ years of experience across product, delivery, and
                quality engineering, I bring a practical, systems-minded
                approach to building digital products that are clear, reliable,
                and worth using.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
                Today, my work sits across AI product strategy, venture building,
                technical leadership, and mentorship for professionals who want
                to grow with more clarity and confidence.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 sm:text-base">
                Snapshot
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                    15+
                  </p>
                  <p className="mt-1 text-sm text-gray-600">Years Experience</p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                    AI
                  </p>
                  <p className="mt-1 text-sm text-gray-600">Product Focus</p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                    3
                  </p>
                  <p className="mt-1 text-sm text-gray-600">Active Ventures</p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                    UK
                  </p>
                  <p className="mt-1 text-sm text-gray-600">Based</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Best fit
                </p>
                <p className="mt-2 text-base leading-7 text-gray-700">
                  Founders, teams, and ambitious professionals who want better
                  product direction, stronger execution, and grounded support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <p className="mb-4 text-sm font-semibold text-emerald-600 sm:text-base">
              My Journey
            </p>

            <div className="space-y-6 text-base leading-8 text-gray-700 sm:text-lg">
              <p>
                Over the years, I’ve worked across complex products and systems
                where quality, clarity, and execution genuinely matter. My
                background spans product management, delivery leadership, and
                quality engineering, which gives me a broader and more grounded
                view of how products move from concept to reality.
              </p>

              <p>
                I’m especially drawn to the space between strategy and
                execution. I enjoy taking ideas that feel messy or ambitious and
                shaping them into something more structured, practical, and
                useful. That has become one of the defining themes of how I
                work.
              </p>

              <p>
                My technical background also means I naturally think about
                systems, reliability, dependencies, user impact, and what it
                takes to build something that actually holds up beyond a good
                presentation or a promising prototype.
              </p>

              <p>
                Today, I’m focused on AI products, venture building, and
                practical digital tools that solve meaningful problems. Alongside
                that, I mentor professionals in tech who want stronger
                positioning, clearer direction, and more confidence in how they
                grow.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 sm:p-8 md:p-10">
              <p className="mb-4 text-sm font-semibold text-emerald-600 sm:text-base">
                Selected Experience
              </p>

              <div className="flex flex-wrap gap-3">
                {experienceAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 sm:text-base"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-4 text-sm font-semibold text-emerald-600 sm:text-base">
                How I Tend To Work
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
        </div>
      </section>

    

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
            Technical Depth
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Tools, technologies, and ways of working
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            My work spans product, engineering, AI, quality, delivery, and
            collaboration. These are some of the tools, platforms, and working
            practices I operate across.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <group.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

        <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
            How I Work
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What I bring to the table
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
            A mix of leadership, technical depth, execution discipline, and a
            practical mindset for building things that genuinely work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-base leading-8 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-100/40 blur-3xl" />

          <div className="relative rounded-3xl border border-gray-100 p-8 shadow-sm sm:p-10 md:p-12">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                <Sparkles className="h-4 w-4" />
                Current Focus
              </div>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Building products, refining ideas, and creating more clarity
                where AI, product, and execution meet.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
                Right now, I’m focused on building ventures like UBUNCARE and
                RiskPilot AI, shaping YSLR Labs as a practical product studio,
                and supporting people who want stronger direction in their
                careers, projects, and next steps. I’m drawn to work that
                combines ambition with substance.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/work"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-emerald-200 transition hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Explore My Work
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}