"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Users,
  Target,
  Compass,
  Code,
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
  "8+ years across product, delivery, and quality engineering",
  "Experience in finance, insurance, and public health",
  "Building AI products, MVPs, and startup ideas",
];

const focusAreas = [
  {
    title: "AI Product Development",
    description:
      "Building practical AI-powered products, LLM workflows, and MVPs that solve real problems.",
    icon: Sparkles,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    title: "Product Strategy & Delivery",
    description:
      "Turning ideas into structured product plans, clear execution, and scalable delivery.",
    icon: Rocket,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Quality Engineering",
    description:
      "Driving reliability through testing, automation, and quality practices across complex systems.",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-500",
  },
];

const projects = [
  {
    title: "UBUNCARE",
    description:
      "An AI-powered mental health platform focused on emotionally intelligent support and accessible care.",
    status: "In Development",
    role: "Founder / Product Lead",
    stage: "MVP in progress",
    focus: "Mental health AI",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "RiskPilot AI",
    description:
      "A governance and compliance-focused AI platform helping teams assess AI risk and readiness.",
    status: "Coming Soon",
    role: "Founder / Product Lead",
    stage: "Discovery",
    focus: "AI governance and compliance",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "YSLR Labs",
    description:
      "A growing AI product studio exploring practical tools, startup ideas, and real-world digital solutions.",
    status: "Active",
    role: "Founder",
    stage: "Active exploration",
    focus: "Product studio and AI experimentation",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const mentorshipOfferings = [
  {
    title: "1-on-1 Career Coaching",
    description:
      "Personalized guidance for career transitions, promotions, and navigating tech industry challenges.",
    icon: Target,
    benefits: ["Resume reviews", "Interview prep", "Career positioning"],
  },
  {
    title: "Technical Mentorship",
    description:
      "Hands-on support for product management, quality engineering, and AI and ML career paths.",
    icon: Code,
    benefits: ["Skill roadmaps", "Project guidance", "Portfolio building"],
  },
  {
    title: "Leadership Development",
    description:
      "For aspiring and growing tech leads who want to improve product delivery, communication, and team effectiveness.",
    icon: Compass,
    benefits: ["Decision frameworks", "Stakeholder mgmt", "Leadership growth"],
  },
];

const experienceAreas = [
  "Finance",
  "Insurance",
  "Public Health",
  "AI Products",
  "Delivery Leadership",
  "Quality Engineering",
];

const reasonsToWorkWithMe = [
  {
    title: "Product-minded",
    description:
      "I think beyond features and focus on value, usability, delivery, and long-term direction.",
    icon: Brain,
  },
  {
    title: "Technically grounded",
    description:
      "My background in Quality Engineering and complex systems helps me bridge strategy and execution.",
    icon: Layers3,
  },
  {
    title: "Strong in execution",
    description:
      "I care about turning ideas into something real, practical, and usable, not just talking about them.",
    icon: Briefcase,
  },
  {
    title: "Comfortable in complexity",
    description:
      "I’ve worked across regulated and high-stakes environments where clarity, structure, and reliability matter.",
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
      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        <div className="absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-emerald-50/40 to-teal-50/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-50/25 to-indigo-50/25 blur-3xl" />

        <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-20 sm:pb-24 md:pb-28">
          <div className="inline-flex items-center rounded-full border border-emerald-200/60 bg-white/90 px-5 py-2.5 text-sm sm:text-base font-medium text-emerald-700 shadow-sm">
            AI Product Builder • Delivery Lead • Quality Engineering
          </div>

          <div className="mt-10 grid gap-10 md:gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-5 text-base sm:text-lg font-medium tracking-wide text-gray-600">
                Founder, YSLR Labs
              </p>

              <h1 className="max-w-5xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                I build AI-powered products and scalable systems that move from
                idea to real execution.
              </h1>

              <p className="mt-8 max-w-3xl text-lg sm:text-xl leading-8 text-gray-700">
                I work across product strategy, delivery, and quality engineering
                to help founders, teams, and organisations build practical,
                reliable digital products with clarity and momentum.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-5 py-2.5 text-sm sm:text-base font-medium text-emerald-700">
                  <Users className="h-4 w-4" />
                  Mentor
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-5 py-2.5 text-sm sm:text-base font-medium text-violet-700">
                  <Target className="h-4 w-4" />
                  Career Coach
                </span>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/work"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-emerald-200 transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  View My Work
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

            {/* 2. Professional Snapshot */}
            <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
              <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-emerald-600">
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
                      <p className="text-base sm:text-lg leading-8 text-gray-700">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What I Do */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="text-center mb-12">
          <p className="mb-3 text-sm sm:text-base font-semibold tracking-wide text-emerald-600">
            Core Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What I Do
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-gray-700">
            End-to-end capabilities to bring ideas to life with structure,
            speed, and reliability.
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
              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-gray-900">
                {area.title}
              </h3>
              <p className="text-base sm:text-lg leading-8 text-gray-700">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. What I'm Building */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm sm:text-base font-semibold tracking-wide text-emerald-600">
              In Progress
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              What I&apos;m Building
            </h2>
            <p className="mt-3 max-w-2xl text-base text-gray-700">
              Current products and startup ideas focused on practical impact.
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <span
                  className={`shrink-0 rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1.5 text-xs sm:text-sm font-medium text-white shadow-sm`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-base sm:text-lg leading-8 text-gray-700">
                {project.description}
              </p>

              <div className="mt-6 border-t border-gray-100 pt-5 space-y-2">
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="font-semibold text-gray-900">Role:</span>{" "}
                  {project.role}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="font-semibold text-gray-900">Stage:</span>{" "}
                  {project.stage}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="font-semibold text-gray-900">Focus:</span>{" "}
                  {project.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. About Me */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50/30 to-indigo-50/30" />
          <div className="relative rounded-3xl border border-gray-100 bg-white/90 p-8 shadow-xl backdrop-blur-sm sm:p-10 md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="mb-4 text-sm sm:text-base font-semibold tracking-wide text-emerald-600">
                  About Me
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
                  Product-minded, technically grounded, and focused on building
                  things that actually work.
                </h2>
                <p className="mt-6 text-base sm:text-lg leading-8 text-gray-700">
                  My background spans product management, delivery, and Quality
                  Engineering across complex environments. Today, I&apos;m focused on
                  AI, startups, and practical digital products that create real
                  value, not just ideas that look good on paper.
                </p>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Read more about me
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl sm:text-4xl font-bold text-emerald-600">8+</p>
                  <p className="mt-1 text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl sm:text-4xl font-bold text-emerald-600">AI</p>
                  <p className="mt-1 text-sm text-gray-600">Product Focus</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl sm:text-4xl font-bold text-emerald-600">3</p>
                  <p className="mt-1 text-sm text-gray-600">Active Products</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl sm:text-4xl font-bold text-emerald-600">UK</p>
                  <p className="mt-1 text-sm text-gray-600">Based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Mentorship */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-600/5 to-emerald-600/10" />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-3xl" />

          <div className="relative rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl sm:p-10 md:p-12">
            <div className="mb-12 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm sm:text-base font-medium text-white shadow-lg">
                <Users className="h-4 w-4" />
                Mentorship & Career Coaching
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Helping people grow in tech with more clarity and direction.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-8 text-gray-700">
                I support professionals who want practical guidance across career
                growth, technical direction, product thinking, and navigating the
                realities of working in tech.
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

                  <h3 className="mb-3 text-xl sm:text-2xl font-bold text-gray-900">
                    {offering.title}
                  </h3>

                  <p className="mb-5 text-base sm:text-lg leading-8 text-gray-700">
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
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-10 py-4 text-base font-medium text-white shadow-lg shadow-emerald-200 transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Book a Free Discovery Call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="mt-4 text-sm sm:text-base text-gray-600">
                First session is on me. Let&apos;s see how I can help you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Work With Me */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm sm:text-base font-semibold tracking-wide text-emerald-600">
              Why Work With Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              A mix of product thinking, technical depth, and practical execution.
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-700">
              I bring together strategy, delivery, and systems thinking. That
              helps me work effectively with founders, teams, and organisations
              that need more than just ideas.
            </p>

            <div className="mt-8">
              <p className="text-base font-semibold text-gray-900 mb-4">
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
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

      {/* 8. Final CTA */}
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 px-8 py-12 text-white shadow-2xl sm:px-10 md:px-12 md:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative text-center">
            <p className="mb-4 text-sm sm:text-base font-semibold tracking-wide text-white/85">
              Open to collaboration
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Let&apos;s build something meaningful, practical, and well executed.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-white/90">
              Whether you need product direction, AI thinking, technical depth,
              or mentorship support, I&apos;m open to the right conversations.
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
                href="/mentorship"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
              >
                Explore Mentorship
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/70">
              Response within 24 hours • Free initial consultation
            </p>
          </div>
        </div>
      </section>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-emerald-600 p-3 text-white shadow-lg transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}