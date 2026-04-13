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


const experienceAreas = [
  "AI Products",
  "Product Strategy",
  "Delivery Leadership",
  "Technical Quality",
  "Finance & Banking",
  "Insurance",
  "Public Health",
  "Government & Regulated",
  "Media & Publishing",
];

const clients = [
  "Bank of America",
  "Bloomberg",
  "Amazon",
  "HMRC",
  "Public Health England",
  "Bionic",
  "PPL",
];

const mentorshipRoles = ["QA Engineers", "Business Analysts", "Product Managers"];

const testimonials = [
  {
    quote:
      "Collins helped me reframe my career completely. Within three months I moved from a QA role I'd outgrown into a product position I'd been aiming for. The clarity and direction he brought was genuinely different from anything I'd had before.",
    name: "— Mentee, QA to Product transition",
    category: "mentorship",
  },
  {
    quote:
      "Brought in sharp product thinking and delivery structure at exactly the right moment. Collins understood the complexity of our environment quickly and helped us move with real momentum.",
    name: "— Delivery Lead, Financial Services",
    category: "consulting",
  },
];

const focusServices = [
  {
    title: "AI Product Strategy",
    description:
      "Shaping practical AI products, MVPs, and workflows that solve real problems and move beyond ideas on paper.",
    icon: Sparkles,
  },
  {
    title: "Delivery Leadership",
    description:
      "From product direction to structured execution — clarity, momentum, and delivery discipline for complex work.",
    icon: Rocket,
  },
  {
    title: "Technical Quality",
    description:
      "Building confidence through stronger systems thinking, quality practices, and reliability from the ground up.",
    icon: Shield,
  },
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
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-emerald-900/30 to-teal-900/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-900/20 to-indigo-900/15 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 md:pb-28 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-emerald-700/60 bg-emerald-950/70 px-5 py-2.5 text-sm font-medium text-emerald-300 shadow-sm sm:text-base">
            15+ Years in Product, Delivery, Quality, and AI
          </div>

          <div className="mt-10 grid gap-10 md:gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-5 text-base font-medium tracking-wide text-gray-300 sm:text-lg">
                AI Product Leader • Founder • Mentor
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Build AI products. Lead execution. Mentor ambition.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
                I help founders, teams, and ambitious professionals turn complex
                ideas into practical outcomes through AI product strategy,
                delivery leadership, technical depth, and mentorship that is
                grounded in real experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/50 bg-emerald-950/60 px-5 py-2.5 text-sm font-medium text-emerald-300 sm:text-base">
                  <Sparkles className="h-4 w-4" />
                  AI Product Leadership
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-700/50 bg-violet-950/60 px-5 py-2.5 text-sm font-medium text-violet-300 sm:text-base">
                  <Users className="h-4 w-4" />
                  Mentorship for Tech Professionals
                </span>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/work"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-medium text-gray-950 shadow-lg shadow-emerald-900/40 transition hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  Explore My Work
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/mentorship"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-600 px-8 py-4 text-base font-medium text-white transition hover:border-emerald-500 hover:bg-emerald-950/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  Explore Mentorship
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400 sm:text-base">
                Professional Snapshot
              </p>

              <div className="mt-8 space-y-6">
                {stats.map((item, idx) => (
                  <div
                    key={item}
                    className="border-b border-gray-700 pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-xs font-bold text-gray-950 shadow-md">
                        {idx + 1}
                      </div>
                      <p className="text-base leading-8 text-gray-300 sm:text-lg">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-800 bg-emerald-950/50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
                  Best fit
                </p>
                <p className="mt-2 text-base leading-7 text-gray-300">
                  Founders, startups, teams, and professionals who want sharper
                  product direction, stronger execution, and grounded mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client strip — social proof immediately after the hero */}
      <section className="border-b border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
            Contracted &amp; delivered for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm font-semibold text-gray-500 transition hover:text-gray-800"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Lane 1: Teams & Founders */}
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50/40 p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-emerald-200/25 blur-3xl" />
            <div className="relative">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                For Teams &amp; Founders
              </span>
              <h3 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
                Building something?
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-600">
                I work with founders and teams who need sharper product
                direction, stronger execution, and AI thinking grounded in
                real delivery experience.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  { icon: Sparkles, text: "AI product strategy & MVP development" },
                  { icon: Rocket, text: "Delivery and execution leadership" },
                  { icon: Shield, text: "Technical quality & systems reliability" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-base font-medium text-gray-800">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-7 py-3.5 text-base font-medium text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Explore My Work
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Lane 2: Individuals */}
          <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-indigo-50/40 p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-violet-200/25 blur-3xl" />
            <div className="relative">
              <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
                For Individuals
              </span>
              <h3 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
                Growing your career?
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-600">
                I mentor ambitious professionals in product, QA, AI, and tech
                who want clearer direction, stronger positioning, and real
                momentum in their growth.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  { icon: Target, text: "Career strategy & role transitions" },
                  { icon: Brain, text: "Technical skills & product thinking" },
                  { icon: Compass, text: "Leadership confidence & influence" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500 text-white shadow-sm">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-base font-medium text-gray-800">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Link
                  href="/mentorship"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-7 py-3.5 text-base font-medium text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
                >
                  Explore Mentorship
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do — answers "but what exactly do you do?" */}
      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-gray-400">
          What this looks like in practice
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {focusServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-base leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Me — credibility before evidence */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">

            <div className="lg:sticky lg:top-10">
              <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600">
                Why Work With Me
              </p>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                The combination most people can&apos;t find in one person.
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                Strategy without execution is just a document. Execution
                without credibility is just noise. I bring both — plus the
                technical depth to know the difference.
              </p>
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Background spans
                </p>
                <div className="flex flex-wrap gap-2">
                  {experienceAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {reasonsToWorkWithMe.map((item) => (
                <div key={item.title} className="flex gap-6 py-8 first:pt-0 last:pb-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 text-emerald-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
            What people say
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                      t.category === "mentorship"
                        ? "bg-violet-100 text-violet-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {t.category === "mentorship" ? "Mentorship" : "Consulting"}
                  </span>
                </div>
                <p className="text-base leading-7 text-gray-700 sm:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-5 text-sm font-semibold text-gray-500">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm Building — feature-first layout */}
      <section className="mx-auto max-w-[90rem] px-4 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600">
              Ventures &amp; Products
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What I&apos;m Building
            </h2>
            <p className="mt-3 max-w-xl text-base text-gray-600">
              Real ventures at different stages — each built with intention,
              not just ambition.
            </p>
          </div>
          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700"
          >
            See all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured project */}
        <div className="mb-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.6fr_0.8fr] lg:items-center lg:gap-12">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {projects[0].title}
                </h3>
                <span className={`rounded-full bg-gradient-to-r ${projects[0].gradient} px-3 py-1 text-xs font-semibold text-white shadow-sm`}>
                  {projects[0].status}
                </span>
              </div>
              <p className="text-base leading-7 text-gray-600 sm:text-lg">
                {projects[0].description}
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100">
              <dl className="space-y-4">
                {[
                  { label: "Focus", value: projects[0].focus },
                  { label: "Stage", value: projects[0].stage },
                  { label: "Role", value: projects[0].role },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-gray-900">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Secondary projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(1).map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <div className="p-7">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className={`shrink-0 rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1 text-xs font-semibold text-white shadow-sm`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-base leading-7 text-gray-600">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-5">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                    {project.focus}
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                    {project.stage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About — story before the close */}
      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold tracking-wide text-emerald-600 sm:text-base">
                About Me
              </p>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Senior product and delivery thinking, backed by technical
                depth and real execution experience.
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
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

            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "AI", label: "Product Focus" },
                { value: "3", label: "Active Ventures" },
                { value: "UK", label: "Based" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
                >
                  <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship panel — violet thread consistent with routing lane */}
      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-indigo-50/30 p-8 sm:p-10">
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-violet-200/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
                Mentorship
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                Helping ambitious professionals grow with clarity,
                confidence, and direction.
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                Mentored professionals across{" "}
                {mentorshipRoles.join(", ")} roles.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {["Career Strategy", "Technical Mentorship", "Leadership Growth"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-violet-200 bg-white px-4 py-1.5 text-sm font-medium text-violet-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <Link
                href="/mentorship"
                className="group inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-7 py-4 text-base font-medium text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
              >
                Explore Mentorship
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — single action */}
      <section className="mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-8 py-14 text-white shadow-2xl sm:px-10 md:px-14 md:py-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-800/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-800/15 blur-3xl" />

          <div className="relative text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Open to the right conversations
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Ready to build or grow? Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              Whether you have a clear brief or just a starting point, a
              conversation is the right first step.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-10 py-4 text-base font-medium text-gray-950 shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Book a Strategy Call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="mt-5 text-sm text-gray-500">
              Response within 24 hours • Initial call available
            </p>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-white p-3 text-gray-700 shadow-lg ring-1 ring-gray-200 transition hover:bg-gray-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
    
  );
}