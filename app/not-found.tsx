import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-180px)] items-center overflow-hidden bg-gray-950">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-900/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-violet-900/10 blur-3xl" />

      <div className="relative mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            404
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Page not found.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400 sm:text-xl">
            That page doesn&apos;t exist or has been moved. Here are a few
            places to go instead.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-8 py-4 text-base font-medium text-gray-950 shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Work With Me
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Contact
            </Link>
          </div>

          <div className="mt-14 border-t border-white/10 pt-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Or browse
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "About", href: "/about", desc: "Who I am and what I bring" },
                { label: "Mentorship", href: "/mentorship", desc: "Grow your career in tech" },
                { label: "Ventures", href: "/ventures", desc: "What I'm building" },
                { label: "Case Studies", href: "/case-studies", desc: "Delivery in practice" },
              ].map(({ label, href, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-emerald-800 hover:bg-white/10"
                >
                  <div>
                    <p className="text-base font-semibold text-white">{label}</p>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-emerald-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
