"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const FOOTER_NAVIGATION = {
  navigate: [
    { name: "Work With Me", href: "/services" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Ventures", href: "/ventures" },
    { name: "About", href: "/about" },
  ],
  explore: [
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
  ],
} as const;

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.983 3.5C4.983 4.88 3.87 6 2.491 6A2.49 2.49 0 0 1 0 3.5C0 2.12 1.112 1 2.49 1c1.38 0 2.493 1.12 2.493 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.055c.533-1.01 1.835-2.077 3.778-2.077 4.04 0 4.787 2.66 4.787 6.118V23h-4v-7.01c0-1.673-.03-3.823-2.33-3.823-2.333 0-2.69 1.823-2.69 3.703V23h-4V8Z" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.41-2.68 5.38-5.24 5.67.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.26l-4.9-7.4L5.56 22H2.45l7.24-8.27L1.8 2h6.42l4.43 6.76L18.9 2Zm-1.1 18h1.73L7.27 3.9H5.42L17.8 20Z" />
    </svg>
  );
}

type SocialLink = {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  ariaLabel: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Email",
    href: "mailto:contact@collinsobasuyi.com",
    icon: Mail,
    ariaLabel: "Send me an email",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/collins-obasuyi",
    icon: LinkedInIcon,
    ariaLabel: "Connect with me on LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/collinsobasuyi",
    icon: GitHubIcon,
    ariaLabel: "View my GitHub profile",
  },
  {
    name: "X",
    href: "https://x.com/collinsobasuyi",
    icon: XIcon,
    ariaLabel: "Follow me on X",
  },
];

export default function SiteFooter() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <footer className="border-t border-gray-200 bg-white" role="contentinfo">
      <div className="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <Link
              href="/"
              className="inline-block rounded-md text-xl font-bold tracking-tight text-gray-900 transition hover:text-[#0D896C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2"
              aria-label="Collins Obasuyi, go to homepage"
            >
              Collins Obasuyi
            </Link>

            <p className="mt-3 text-base leading-relaxed text-gray-600">
              AI product strategy, delivery leadership, and mentorship for
              founders, teams, and ambitious professionals.
            </p>

            <div className="mt-6 flex gap-4 lg:hidden">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={social.ariaLabel}
                  className="rounded-md p-2 text-gray-600 transition hover:bg-gray-50 hover:text-[#0D896C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Navigate
              </h2>
              <ul className="mt-4 space-y-3" role="list">
                {FOOTER_NAVIGATION.navigate.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`inline-block rounded-md text-base transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 ${
                          active
                            ? "font-medium text-[#0D896C]"
                            : "text-gray-600 hover:text-[#0D896C]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Explore
              </h2>
              <ul className="mt-4 space-y-3" role="list">
                {FOOTER_NAVIGATION.explore.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`inline-block rounded-md text-base transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 ${
                          active
                            ? "font-medium text-[#0D896C]"
                            : "text-gray-600 hover:text-[#0D896C]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="hidden min-w-[180px] lg:block">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Connect
            </h2>
            <ul className="mt-4 space-y-3" role="list">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target={social.name === "Email" ? undefined : "_blank"}
                    rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                    aria-label={social.ariaLabel}
                    className="inline-flex items-center gap-2 rounded-md text-base text-gray-600 transition hover:text-[#0D896C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2"
                  >
                    <social.icon className="h-4 w-4" />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Collins Obasuyi. Built with purpose.
          </p>
          <p className="text-sm text-gray-500">
            Open to collaboration, product opportunities, and meaningful work.
          </p>
        </div>
      </div>
    </footer>
  );
}