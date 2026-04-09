import Link from "next/link";
import { ArrowRight, Brain, Briefcase, ShieldCheck, Users } from "lucide-react";

const strengths = [
  {
    title: "Product Thinking",
    description:
      "I focus on building products that are useful, clear, and grounded in real user and business needs.",
    icon: Brain,
  },
  {
    title: "Execution & Delivery",
    description:
      "I care about turning ideas into working outcomes through structure, momentum, and practical delivery.",
    icon: Briefcase,
  },
  {
    title: "Quality & Reliability",
    description:
      "My background in Quality Engineering helps me think deeply about systems, risks, and how things hold up in the real world.",
    icon: ShieldCheck,
  },
  {
    title: "Mentorship & Growth",
    description:
      "I also support people in tech who want more clarity, stronger positioning, and practical career guidance.",
    icon: Users,
  },
];

const experienceAreas = [
  "Product Management",
  "Delivery Leadership",
  "Quality Engineering",
  "AI Product Development",
  "Complex Systems",
  "Finance",
  "Insurance",
  "Public Health",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-50/40 to-teal-50/40 blur-3xl" />

        <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <p className="text-sm sm:text-base font-semibold tracking-wide text-emerald-600 mb-4">
            About Me
          </p>

          <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            I work at the intersection of product, delivery, AI, and quality.
          </h1>

          <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-8 text-gray-700">
            My background combines product thinking, delivery leadership, and
            strong technical depth in Quality Engineering. I’m focused on
            building practical digital products, exploring AI opportunities,
            and helping ambitious ideas move into real execution.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <p className="text-sm sm:text-base font-semibold text-emerald-600 mb-4">
              My Journey
            </p>

            <div className="space-y-6 text-base sm:text-lg leading-8 text-gray-700">
              <p>
                Over the years, I’ve worked across complex products and systems,
                especially in environments where clarity, reliability, and strong
                execution really matter. My experience spans product management,
                delivery, and quality engineering, which gives me a broader view
                of how to move ideas from concept into reality.
              </p>

              <p>
                I’m especially drawn to work that sits between strategy and
                execution. I enjoy turning ambiguity into structure, shaping
                product direction, and helping teams focus on what actually
                matters. That mindset is a big part of how I approach both
                products and people.
              </p>

              <p>
                Today, I’m building and exploring in the AI space, with a focus
                on practical use cases, responsible product thinking, and
                real-world value. I’m also developing products of my own while
                supporting others through mentorship, career guidance, and
                product-focused conversations.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base font-semibold text-emerald-600 mb-4">
              Selected Experience
            </p>

            <div className="flex flex-wrap gap-3">
              {experienceAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm sm:text-base font-medium text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600">8+</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600">AI</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  Product Focus
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600">3</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  Active Products
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600">UK</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  Based
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="mb-10">
          <p className="text-sm sm:text-base font-semibold tracking-wide text-emerald-600 mb-3">
            How I Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What I bring to the table
          </h2>
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

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-base leading-8 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Current focus */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm sm:p-10 md:p-12">
          <p className="text-sm sm:text-base font-semibold text-emerald-600 mb-4">
            Current Focus
          </p>

          <h2 className="max-w-3xl text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
            Building products, refining ideas, and creating more clarity around
            where AI, product, and execution meet.
          </h2>

          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-gray-700">
            Right now, I’m focused on building products like UBUNCARE and
            RiskPilot AI, shaping YSLR Labs as a practical product studio, and
            supporting people who want stronger direction in their careers and
            projects. I’m interested in work that combines ambition with
            substance.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-emerald-200 transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Explore my work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50/40 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}