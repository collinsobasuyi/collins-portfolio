import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Collins Obasuyi",
  description:
    "Learn about Collins Obasuyi. 15+ years across product, delivery, and quality engineering. Contracted for Bank of America, Bloomberg, Amazon, HMRC, and more.",
  openGraph: {
    title: "About Collins Obasuyi",
    description:
      "AI product leader, founder, and mentor with 15+ years across finance, public health, and regulated environments.",
    url: "https://collinsobasuyi.com/about",
  },
  alternates: { canonical: "https://collinsobasuyi.com/about" },
};
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

const clients = [
  "Bank of America",
  "Bloomberg",
  "Amazon",
  "HMRC",
  "Public Health England",
  "Bionic",
  "PPL",
];

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
      "I mentor professionals in QA, Business Analysis, and Product Management. I help them reposition, grow with confidence, and find clearer direction.",
    icon: Users,
    accent: "violet",
  },
];

const experienceAreas = [
  "AI Product Strategy",
  "Product Management",
  "Delivery Leadership",
  "Quality Engineering",
  "Finance & Banking",
  "Insurance",
  "Public Health",
  "Government & Regulated",
  "Media & Publishing",
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
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 md:py-16 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-emerald-400 sm:text-base">
            About Me
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div>
              <p className="mb-4 text-base font-medium tracking-wide text-gray-400 sm:text-lg">
                AI Product Leader · Founder · Mentor
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                I work at the intersection of product, execution, technical
                quality, and AI.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
                With 15+ years of experience across product, delivery, and
                quality engineering, I bring a practical, systems-minded
                approach to building digital products that are clear, reliable,
                and worth using.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
                Today, my work spans AI product strategy, venture building,
                technical leadership, and mentorship for professionals who want
                to grow with more clarity and confidence.
              </p>
            </div>

            {/* Snapshot card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400 sm:text-base">
                Snapshot
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-400 sm:text-4xl">
                    15+
                  </p>
                  <p className="mt-1 text-sm text-gray-400">Years Experience</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-400 sm:text-4xl">
                    AI
                  </p>
                  <p className="mt-1 text-sm text-gray-400">Product Focus</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-400 sm:text-4xl">
                    3
                  </p>
                  <p className="mt-1 text-sm text-gray-400">Active Ventures</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-400 sm:text-4xl">
                    UK
                  </p>
                  <p className="mt-1 text-sm text-gray-400">Based</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
                  Best fit
                </p>
                <p className="mt-2 text-base leading-7 text-gray-300">
                  Founders, teams, and ambitious professionals who want better
                  product direction, stronger execution, and grounded support.
                </p>
              </div>
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

      {/* ── Journey + Experience ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <p className="mb-4 text-sm font-semibold text-emerald-600 sm:text-base">
              My Journey
            </p>

            <div className="space-y-6 text-base leading-8 text-gray-700 sm:text-lg">
              <p>
                Over the years, I&apos;ve worked across complex products and systems
                where quality, clarity, and execution genuinely matter. My
                background spans product management, delivery leadership, and
                quality engineering, which gives me a clearer picture of how
                products move from idea to reality.
              </p>

              <p>
                The part I find most interesting is where strategy meets
                execution. Taking ideas that feel messy or ambitious and turning
                them into something structured, practical, and useful. That is
                the work I keep coming back to.
              </p>

              <p>
                My technical background also means I naturally think about
                systems, reliability, dependencies, user impact, and what it
                takes to build something that actually holds up beyond a good
                presentation or a promising prototype.
              </p>

              <p>
                Today, I&apos;m focused on AI products, venture building, and
                practical digital tools that solve meaningful problems. Alongside
                that, I mentor professionals in tech: QA, business analysis,
                and product. They want stronger positioning, clearer direction,
                and more confidence in how they grow.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 sm:p-8 md:p-10">
              <p className="mb-4 text-sm font-semibold text-emerald-600 sm:text-base">
                Industry Experience
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
                Working Principles
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

      {/* ── What I Bring ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
              What I Bring
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Leadership, depth, and execution in one place
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
              A mix of product thinking, technical grounding, delivery discipline,
              and practical support for people and teams trying to grow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item) => {
              const isViolet = item.accent === "violet";
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`mb-4 inline-flex rounded-xl p-3 ${
                      isViolet
                        ? "bg-violet-50 text-violet-600"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-base leading-8 text-gray-700">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technical Depth ── */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
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

      {/* ── Current Focus CTA ── */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-400">
              <Sparkles className="h-4 w-4" />
              Current Focus
            </div>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              AI products, venture building, and career mentorship. That is the current work.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
              Right now, I&apos;m focused on building ventures like UBUNCARE and
              RiskPilot AI, shaping YSLR Labs as a practical product studio,
              and supporting people who want stronger direction in their
              careers, projects, and next steps.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/ventures"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D896C] px-8 py-4 text-base font-medium text-white shadow-lg transition hover:bg-[#0B6F56] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Explore My Work
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
