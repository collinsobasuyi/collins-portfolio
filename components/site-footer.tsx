import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="text-lg font-semibold text-gray-900">
              Collins Obasuyi
            </p>
            <p className="mt-2 text-base text-gray-600 leading-8">
              Product • AI • Quality Engineering • Mentorship
            </p>
            <p className="mt-3 text-base text-gray-600 leading-8">
              Building practical digital products, supporting ambitious ideas,
              and helping people move from clarity to execution.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Navigate
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-base text-gray-600 transition hover:text-[#0D896C] focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 rounded-md"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-base text-gray-600 transition hover:text-[#0D896C] focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 rounded-md"
                >
                  About
                </Link>
                <Link
                  href="/work"
                  className="text-base text-gray-600 transition hover:text-[#0D896C] focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 rounded-md"
                >
                  Work
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Explore
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/mentorship"
                  className="text-base text-gray-600 transition hover:text-[#0D896C] focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 rounded-md"
                >
                  Mentorship
                </Link>
                <Link
                  href="/contact"
                  className="text-base text-gray-600 transition hover:text-[#0D896C] focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 rounded-md"
                >
                  Contact
                </Link>
                <Link
                  href="/privacy"
                  className="text-base text-gray-600 transition hover:text-[#0D896C] focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 rounded-md"
                >
                  Privacy
                </Link>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Connect
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="mailto:contact@ubuncare.com"
                  className="text-base text-gray-600 transition hover:text-[#0D896C] focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 rounded-md"
                >
                  contact@ubuncare.com
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-gray-600 transition hover:text-[#0D896C] focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 rounded-md"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm sm:text-base text-gray-500">
            © 2026 Collins Obasuyi. Built with purpose.
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            Open to collaboration, product opportunities, and meaningful builds.
          </p>
        </div>
      </div>
    </footer>
  );
}