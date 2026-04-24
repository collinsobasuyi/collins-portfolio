import type { Metadata } from "next";
import Link from "next/link";
import CalendlyButton from "@/components/calendly-button";
import {
  CheckCircle2,
  Zap,
  BookOpen,
  Wrench,
  ClipboardCheck,
  BrainCircuit,
  ArrowRight,
  Star,
  Clock,
  Users,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Coaching & Programmes | Collins Obasuyi",
  description:
    "A 6-week guided programme to help career switchers, graduates, and non-technical professionals break into Product, QA, or BA roles with confidence. Limited to 5 people per cohort.",
  openGraph: {
    title: "Coaching & Programmes | Collins Obasuyi",
    description:
      "Break into tech with confidence. A practical 6-week programme for career switchers and non-technical professionals moving into Product, QA, or BA roles.",
    url: "https://collinsobasuyi.com/coaching",
  },
  alternates: { canonical: "https://collinsobasuyi.com/coaching" },
};

const weeks = [
  {
    week: "Week 1",
    title: "How Tech Works",
    icon: Zap,
    topics: ["Frontend vs Backend", "APIs, Databases, Cloud basics", "How apps are built", "Roles: Dev, QA, PM, BA"],
    outcome: "You are no longer confused in tech conversations",
  },
  {
    week: "Week 2",
    title: "Agile and Delivery",
    icon: ClipboardCheck,
    topics: ["Agile and Scrum", "Sprints, stand-ups, retrospectives", "Real team workflows", "Jira, Slack, Microsoft Teams"],
    outcome: "You understand how real teams operate",
  },
  {
    week: "Week 3",
    title: "Product and Business Thinking",
    icon: BookOpen,
    topics: ["What Product Managers and BAs actually do", "User stories and acceptance criteria", "Prioritisation", "Stakeholders"],
    outcome: "You can think like a Product Manager or BA",
  },
  {
    week: "Week 4",
    title: "Tools and Execution",
    icon: Wrench,
    topics: ["Jira: create tickets, epics, tasks", "Figma: basic wireframes", "Writing simple product documentation"],
    outcome: "You can actually do the work",
  },
  {
    week: "Week 5",
    title: "QA and Testing",
    icon: ClipboardCheck,
    topics: ["Manual testing", "Test cases", "Bug reporting", "UAT", "QA in Agile teams"],
    outcome: "You understand how to ship quality products",
  },
  {
    week: "Week 6",
    title: "AI in Modern Tech Teams",
    icon: BrainCircuit,
    topics: ["What AI is, explained simply", "Using AI for research, requirements, and testing", "Responsible AI basics"],
    outcome: "You are future-ready, not outdated",
  },
];

const included = [
  { label: "6 live sessions", detail: "2 hours each, every week" },
  { label: "Session recordings", detail: "So you never fall behind" },
  { label: "Weekly feedback", detail: "On your actual work, every week" },
  { label: "Private support channel", detail: "WhatsApp or Slack throughout" },
  { label: "Programme materials", detail: "Everything you need, kept forever" },
  { label: "Bonus session", detail: "CV review or career direction call" },
];

const outcomes = [
  "Understand tech conversations without nodding along and hoping",
  "Know how real teams build and ship products",
  "Write user stories, use the tools, and do the actual work",
  "Have a clear path into Product, QA, or BA",
  "Feel ready to apply for junior roles with real confidence",
];

const notForYou = [
  "You want a job guarantee or a quick fix",
  "You cannot commit to around 5 hours a week",
  "You already work in a tech role and want to advance within it",
];

const pathways = [
  {
    title: "Product Management",
    items: ["Product discovery", "Roadmaps", "Metrics", "Go-to-market"],
  },
  {
    title: "Business Analysis",
    items: ["Requirements", "Process mapping", "Workshops"],
  },
  {
    title: "QA Engineering",
    items: ["Test cases", "Bug tracking", "API testing basics"],
  },
];

const faqs = [
  {
    q: "Is this live or pre-recorded?",
    a: "Fully live. Six 2-hour sessions over six weeks. You get direct access to me, not videos to watch on your own.",
  },
  {
    q: "What if I miss a session?",
    a: "Sessions are recorded so you will not fall behind. You also have access to the support channel throughout, so questions never pile up between sessions.",
  },
  {
    q: "Do I need any technical background?",
    a: "No. The programme starts from zero. You do not need to know how to code or have worked in tech before.",
  },
  {
    q: "Is this right for me if I already work in tech?",
    a: "Only if you are in a non-technical role and want to move into Product, QA, or BA. If you already hold a tech role, this probably is not the right fit.",
  },
  {
    q: "What happens after the 6 weeks?",
    a: "You will have a clear direction, the tools to keep moving, and a bonus CV review or career direction session included. I also stay in touch with people who want to keep going.",
  },
];

export default function CoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 pb-20 sm:pb-24">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-[90rem] px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-violet-400">
                <Star className="h-3.5 w-3.5" />
                6-Week Programme · 5 Spots per Cohort · UK-Based
              </div>

              <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Six weeks to go from confused by tech to working in it.
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
                A small, live programme for career switchers and non-technical
                professionals who want to break into Product, QA, or BA roles.
                No fluff. No pre-recorded videos. Just clear, practical guidance
                from someone who has been doing this work for 15 years.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  Apply for Next Cohort
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <CalendlyButton label="Book a Free Intro Call" />
              </div>

              {/* Testimonial pull quote */}
              <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
                <div className="flex">
                  <div className="w-1 shrink-0 bg-violet-500" />
                  <div className="bg-white/5 p-6 sm:p-8">
                    <p className="text-base leading-8 text-gray-300 sm:text-lg">
                      &ldquo;Collins helped me reframe my career completely.
                      Within three months I moved from a QA role I had
                      outgrown into a product position I had been aiming for.
                      The clarity and direction he brought was genuinely
                      different from anything I had before.&rdquo;
                    </p>
                    <p className="mt-4 text-sm font-semibold text-violet-400">
                      · Mentee, QA to Product transition
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — programme snapshot */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                Programme at a Glance
              </p>

              <div className="mt-6 divide-y divide-white/10">
                {[
                  { label: "Duration", value: "6 weeks" },
                  { label: "Format", value: "Live, 2 hrs per week" },
                  { label: "Cohort size", value: "Max 5 people" },
                  { label: "Support", value: "WhatsApp or Slack" },
                  { label: "Recordings", value: "Every session" },
                  { label: "Bonus", value: "CV review or career call" },
                  { label: "Founding rate", value: "From £300" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-3.5"
                  >
                    <p className="text-sm text-gray-400">{label}</p>
                    <p className="text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Apply for Next Cohort
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="mt-4 text-center text-xs text-gray-500">
                Free 20-min intro call before you commit
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Programme facts strip */}
      <section className="border-b border-gray-100 bg-white py-6">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-gray-500 sm:text-base">
            {[
              { icon: Clock, label: "6 live sessions" },
              { icon: Users, label: "Max 5 people" },
              { icon: CheckCircle2, label: "2 hours each" },
              { icon: Star, label: "Direct weekly feedback" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-violet-500" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is this for you */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600">
              Who This Is For
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              You want to work in tech. You just do not know where to start.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-gray-700 sm:text-lg">
              <p>
                Most people trying to break into tech are not short on
                ambition. They are short on context. They do not understand
                how tech teams work, what the roles actually involve, or
                how to show up in a way that gets noticed.
              </p>
              <p>
                This programme closes that gap. It is for career switchers,
                graduates, and professionals in non-technical roles who are
                serious about making the move into Product, QA, or BA.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                This works for you if
              </p>
              <div className="space-y-3">
                {[
                  "You are switching from a non-tech career",
                  "You are a graduate who wants to work in tech",
                  "You have been trying to break in but keep hitting walls",
                  "You find tech job descriptions confusing or overwhelming",
                  "You want real guidance, not another course to watch alone",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                    <p className="text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">
                This is not for you if
              </p>
              <div className="space-y-3">
                {notForYou.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <p className="text-base text-gray-500">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I run this */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-violet-400">
              Why I Run This
            </p>
            <blockquote className="text-xl leading-9 text-gray-300 sm:text-2xl">
              &ldquo;I have spent 15 years working across product, QA, and
              delivery. I have been in rooms where brilliant people were
              dismissed because they could not speak the language of tech.
              Not because they were not capable. Because nobody ever
              explained how any of it actually worked.
              <br /><br />
              This programme exists because that bothered me. It is six
              weeks of the things I wish someone had sat down and told me
              clearly when I was starting out. No fluff. No theory for its
              own sake. Just the real stuff, explained straight.&rdquo;
            </blockquote>
            <p className="mt-8 text-base font-semibold text-violet-400">
              Collins Obasuyi · AI Product Consultant, 15+ years in tech
            </p>
          </div>
        </div>
      </section>

      {/* 6-week timeline */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600">
              Programme Structure
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Six weeks. One clear direction.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Each week builds on the last. By the end you will not just
              understand tech. You will be able to work in it.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-violet-200 sm:left-6" />

            <div className="space-y-6">
              {weeks.map((w, idx) => (
                <div key={w.week} className="relative flex gap-5 sm:gap-7">
                  {/* Number badge */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white shadow-md shadow-violet-200 sm:h-12 sm:w-12">
                    {idx + 1}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <div className="inline-flex rounded-lg bg-violet-50 p-2 text-violet-600">
                        <w.icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-violet-500">
                        {w.week}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                      {w.title}
                    </h3>

                    <ul className="mb-4 space-y-1.5">
                      {w.topics.map((t) => (
                        <li
                          key={t}
                          className="flex items-start gap-2 text-sm text-gray-600 sm:text-base"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-xl border border-violet-100 bg-violet-50 px-4 py-2.5">
                      <p className="text-sm font-medium text-violet-700">
                        You leave: {w.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600">
              What You Get
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything in the programme.
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
              Limited to 5 people per cohort so every participant gets real
              attention, real feedback, and real progress.
            </p>
            <div className="mt-8">
              <CalendlyButton label="Book a Free Intro Call" />
            </div>
          </div>

          <div className="divide-y divide-gray-100 rounded-2xl border border-gray-200 bg-white shadow-sm">
            {included.map((item) => (
              <div key={item.label} className="flex items-start gap-4 px-6 py-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                <div>
                  <p className="text-base font-semibold text-gray-900">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes + pathways */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600">
                After This Programme
              </p>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Real capability. Not just theory.
              </h2>
              <div className="mt-8 space-y-3">
                {outcomes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                    <p className="text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600">
                Where You Can Go Next
              </p>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Three clear paths forward.
              </h2>
              <div className="mt-8 space-y-4">
                {pathways.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="mb-3 text-base font-bold text-gray-900 sm:text-lg">
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {p.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600">
            Pricing
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Founding cohort rates.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Introductory pricing for the first cohort only. Once the founding
            spots are gone, the rate goes up and stays up.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Founding rate */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-violet-500 bg-white p-6 shadow-lg sm:p-8 md:p-10">
            <div className="absolute right-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
              Best value
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              First 2 to 3 spots
            </p>
            <p className="mt-2 text-5xl font-bold text-gray-900 sm:text-6xl">
              £300
            </p>
            <p className="mt-1 text-sm text-gray-500">Founding cohort rate</p>

            <div className="my-7 border-t border-gray-100" />

            <div className="space-y-3">
              {included.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-600" />
                  <span className="text-sm text-gray-700">
                    {item.label} — {item.detail}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-violet-700"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Standard rate */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Remaining spots
              </p>
              <p className="mt-2 text-5xl font-bold text-gray-900 sm:text-6xl">
                £400
              </p>
              <p className="mt-1 text-sm text-gray-500">Standard cohort rate</p>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                Same programme. Same access. Same direct feedback and support.
                The same 6 weeks with the same results.
              </p>
              <Link
                href="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-8 py-4 text-base font-medium text-gray-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
              >
                Apply Now
              </Link>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6">
              <p className="text-sm font-semibold text-violet-800">
                Time commitment
              </p>
              <p className="mt-2 text-sm leading-7 text-violet-700">
                2-hour live session per week plus 2 to 3 hours of self-practice.
                Built for busy professionals, so around 5 hours a week total.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <p className="text-sm font-semibold text-amber-800">
                Only 5 spots per cohort
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-700">
                Limited intentionally. Small cohort means every person gets
                real attention. Once these spots are filled, the next cohort
                opens at the standard rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold tracking-wide text-violet-600">
              Common Questions
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Things people usually ask.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="mb-3 text-base font-bold text-gray-900 sm:text-lg">
                  {faq.q}
                </p>
                <p className="text-base leading-7 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-violet-400">
              Only 5 places per cohort
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Ready to stop being confused by tech and start working in it?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Start with a free 20-minute intro call. We will talk through
              where you are, what you are trying to do, and whether this
              programme is the right fit.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              No commitment. No hard sell. Just an honest conversation.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <CalendlyButton label="Book a Free Intro Call" />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Apply Directly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-3 border-t border-white/10 bg-gray-950/95 px-4 py-4 backdrop-blur-sm sm:hidden">
        <div>
          <p className="text-sm font-semibold text-white">6-Week Programme</p>
          <p className="text-xs text-gray-400">5 spots · From £300</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
        >
          Apply Now
        </Link>
      </div>
    </>
  );
}
