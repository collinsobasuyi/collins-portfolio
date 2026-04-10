"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Users,
  Target,
  Compass,
  Sparkles,
  Rocket,
  Shield,
  ChevronUp,
  CheckCircle2,
  Briefcase,
  Brain,
  Layers3,
} from "lucide-react";

const stats = [
  "15+ years across product, delivery, quality, and technical leadership",
  "Experience across finance, insurance, public health, and regulated environments",
  "Building AI products, MVPs, and practical digital solutions with real-world value",
];

const focusAreas = [
  {
    title: "AI Product Strategy",
    description:
      "I help shape practical AI products, MVPs, and workflows that solve real problems and move beyond ideas on paper.",
    icon: Sparkles,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    title: "Delivery & Execution Leadership",
    description:
      "From product direction to structured execution, I bring clarity, momentum, and delivery discipline to complex work.",
    icon: Rocket,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Technical Quality & Reliability",
    description:
      "My technical background helps teams build with confidence through stronger systems thinking, quality practices, and reliability.",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-500",
  },
];

const projects = [
  {
    title: "UBUNCARE",
    description:
      "An AI-powered mental health platform focused on emotionally intelligent support, accessible care, and practical user experience.",
    status: "In Development",
    role: "Founder / Product Lead",
    stage: "MVP in progress",
    focus: "Mental health AI",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "RiskPilot AI",
    description:
      "A governance and compliance-focused AI platform designed to help teams assess AI risk, readiness, and responsible adoption.",
    status: "Coming Soon",
    role: "Founder / Product Lead",
    stage: "Discovery",
    focus: "AI governance and compliance",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "YSLR Labs",
    description:
      "An AI product studio where ideas, prototypes, and practical digital tools are explored with a strong focus on execution and value.",
    status: "Active",
    role: "Founder",
    stage: "Active exploration",
    focus: "AI product studio",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const mentorshipOfferings = [
  {
    title: "Career Strategy",
    description:
      "For professionals navigating transitions, promotions, or the next step in product, QA, AI, and broader tech careers.",
    icon: Target,
    benefits: ["Career positioning", "CV and profile reviews", "Interview support"],
  },
  {
    title: "Technical Mentorship",
    description:
      "Practical support for professionals building confidence in product thinking, delivery, systems, AI, and technical decision-making.",
    icon: Brain,
    benefits: ["Skill roadmaps", "Project guidance", "Portfolio direction"],
  },
  {
    title: "Leadership Growth",
    description:
      "For people stepping into greater ownership and influence who want to lead with more clarity, confidence, and credibility.",
    icon: Compass,
    benefits: ["Decision frameworks", "Stakeholder communication", "Leadership growth"],
  },
];

const experienceAreas = [
  "AI Products",
  "Product Strategy",
  "Delivery Leadership",
  "Technical Quality",
  "Finance",
  "Insurance",
  "Public Health",
  "Regulated Environments",
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
      "I care about turning ideas into something real, useful, and well delivered, not just producing plans with no momentum.",
    icon: Briefcase,
  },
  {
    title: "Experienced in complexity",
    description:
      "I’ve worked in high-stakes and regulated environments where structure, reliability, and clear thinking truly matter.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-emerald-50/40 to-teal-50/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-50/25 to-indigo-50/25 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 md:pb-28 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-emerald-200/60 bg-white/90 px-5 py-2.5 text-sm font-medium text-emerald-700 shadow-sm sm:text-base">
            15+ Years in Product, Delivery, Quality, and AI
          </div>

          <div className="mt-10 grid gap-10 md:gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-5 text-base font-medium tracking-wide text-gray-600 sm:text-lg">
                AI Product Leader • Founder • Mentor
              </p>

              <h1 className="max-w-5xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-4xl font-bold leading-[1.1] tracking-tight text-transparent sm:text-5xl lg:text-6xl xl:text-7xl">
                I build AI products, lead execution, and mentor ambitious
                professionals in tech.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-700 sm:text-xl">
                I help founders, teams, and ambitious professionals turn complex
                ideas into practical outcomes through AI product strategy,
                delivery leadership, technical depth, and mentorship that is
                grounded in real experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-5 py-2.5 text-sm font-medium text-emerald-700 sm:text-base">
                  <Sparkles className="h-4 w-4" />
                  AI Product Leadership
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-5 py-2.5 text-sm font-medium text-violet-700 sm:text-base">
                  <Users className="h-4 w-4" />
                  Mentorship for Tech Professionals
                </span>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/work"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-emerald-200 transition hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Explore My Work
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/mentorship"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Explore Mentorship
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 sm:text-base">
                Professional Snapshot
              </p>

              <div className="mt-8 space-y-6">
                {stats.map((item, idx) => (
                  <div
                    key={item}
                    className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-xs font-bold text-white shadow-md">
                        {idx + 1}
                      </div>
                      <p className="text-base leading-8 text-gray-700 sm:text-lg">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Best fit
                </p>
                <p className="mt-2 text-base leading-7 text-gray-700">
                  Founders, startups, teams, and professionals who want sharper
                  product direction, stronger execution, and grounded mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
            How I Help
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Strategy, execution, and mentorship in one place
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-700 sm:text-lg">
            A combination of product leadership, technical depth, and practical
            guidance for building and growing with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              />
              <div
                className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${area.gradient} p-3 text-white shadow-lg`}
              >
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                {area.title}
              </h3>
              <p className="text-base leading-8 text-gray-700 sm:text-lg">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
              Ventures & Products
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              What I&apos;m Building
            </h2>
            <p className="mt-3 max-w-2xl text-base text-gray-700">
              AI ventures and product ideas focused on practical impact,
              responsible execution, and long-term value.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-base font-medium text-emerald-600 transition hover:text-emerald-700"
          >
            See all projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10`}
              />
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {project.title}
                </h3>
                <span
                  className={`shrink-0 rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1.5 text-xs font-medium text-white shadow-sm sm:text-sm`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-base leading-8 text-gray-700 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-gray-100 pt-5">
                <p className="text-sm text-gray-600 sm:text-base">
                  <span className="font-semibold text-gray-900">Role:</span>{" "}
                  {project.role}
                </p>
                <p className="text-sm text-gray-600 sm:text-base">
                  <span className="font-semibold text-gray-900">Stage:</span>{" "}
                  {project.stage}
                </p>
                <p className="text-sm text-gray-600 sm:text-base">
                  <span className="font-semibold text-gray-900">Focus:</span>{" "}
                  {project.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50/30 to-indigo-50/30" />
          <div className="relative rounded-3xl border border-gray-100 bg-white/90 p-8 shadow-xl backdrop-blur-sm sm:p-10 md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="mb-4 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
                  About Me
                </p>
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  Senior product and delivery thinking, backed by technical
                  depth and real execution experience.
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-700 sm:text-lg">
                  My background spans product, delivery, and technical quality
                  across complex environments. Today, I focus on AI products,
                  startup ideas, and practical digital solutions while also
                  mentoring professionals who want to grow with more direction,
                  confidence, and clarity.
                </p>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50/30 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  >
                    Read more about me
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                    15+
                  </p>
                  <p className="mt-1 text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                    AI
                  </p>
                  <p className="mt-1 text-sm text-gray-600">Product Focus</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                    3
                  </p>
                  <p className="mt-1 text-sm text-gray-600">Active Ventures</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                    UK
                  </p>
                  <p className="mt-1 text-sm text-gray-600">Based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-600/5 to-emerald-600/10" />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-3xl" />

          <div className="relative rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl sm:p-10 md:p-12">
            <div className="mb-12 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg sm:text-base">
                <Users className="h-4 w-4" />
                Mentorship for Tech Professionals
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                Helping ambitious professionals grow with more clarity,
                confidence, and direction.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
                I support professionals in product, QA, AI, and broader tech
                roles who want practical guidance, sharper positioning, and more
                confidence in how they grow.
              </p>
            </div>

            <div className="mb-12 grid gap-8 md:grid-cols-3">
              {mentorshipOfferings.map((offering) => (
                <div
                  key={offering.title}
                  className="rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 text-white shadow-lg">
                    <offering.icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                    {offering.title}
                  </h3>

                  <p className="mb-5 text-base leading-8 text-gray-700 sm:text-lg">
                    {offering.description}
                  </p>

                  <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-5">
                    {offering.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/mentorship"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-10 py-4 text-base font-medium text-white shadow-lg shadow-emerald-200 transition hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Book a Discovery Call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="mt-4 text-sm text-gray-600 sm:text-base">
                A practical first conversation to understand where you are and
                how I can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
              Why Work With Me
            </p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              A mix of product leadership, technical credibility, and practical
              execution.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-700 sm:text-lg">
              I bring together strategy, systems thinking, delivery discipline,
              and mentorship. That helps me support founders, teams, and
              professionals who need more than ideas alone.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-base font-semibold text-gray-900">
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
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasonsToWorkWithMe.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 px-8 py-12 text-white shadow-2xl sm:px-10 md:px-12 md:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative text-center">
            <p className="mb-4 text-sm font-semibold tracking-wide text-white/85 sm:text-base">
              Open to the right conversations
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Whether you need product direction, AI thinking, execution
              support, or mentorship, let&apos;s talk.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              I work with founders, teams, and ambitious professionals who want
              practical support, stronger thinking, and momentum that leads to
              something real.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-medium text-emerald-700 transition hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700"
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/mentorship"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700"
              >
                Explore Mentorship
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/70">
              Response within 24 hours • Initial call available
            </p>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-emerald-600 p-3 text-white shadow-lg transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}