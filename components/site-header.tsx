"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  UserRound,
  Briefcase,
  MessageCircle,
  Users,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: UserRound },
  { name: "Work", href: "/work", icon: Briefcase },
  { name: "Mentorship", href: "/mentorship", icon: Users },
  { name: "Contact", href: "/contact", icon: MessageCircle },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/85 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow"
      >
        Skip to main content
      </a>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72px] items-center justify-between">
          <Link
            href="/"
            onClick={closeMenu}
            className="rounded-md text-lg font-bold tracking-tight text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 sm:text-xl"
            aria-label="Go to homepage"
          >
            Collins Obasuyi
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 ${
                    active
                      ? "text-[#0D896C]"
                      : "text-gray-700 hover:text-[#0D896C]"
                  }`}
                >
                  <span className="relative inline-flex items-center">
                    {item.name}
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 bg-[#0D896C] transition-all duration-200 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-[#0D896C] px-5 py-3 text-base font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2"
            >
              Let&apos;s Connect
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[420px] border-t border-gray-200" : "max-h-0"
        }`}
      >
        <nav className="bg-white px-4 py-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-4 py-4 text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2 ${
                    active
                      ? "bg-[#0D896C]/8 text-[#0D896C]"
                      : "text-gray-800 hover:bg-gray-50 hover:text-[#0D896C]"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#0D896C] px-5 py-4 text-base font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0D896C] focus:ring-offset-2"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}