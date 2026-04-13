"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, UserRound, Briefcase, Users } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", href: "/about", icon: UserRound },
  { name: "Work", href: "/work", icon: Briefcase },
  { name: "Mentorship", href: "/mentorship", icon: Users },
] as const;

const SCROLL_THRESHOLD = 12;

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    if (mobileMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstElement.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [mobileMenuOpen]);

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
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[60] focus-visible:rounded-md focus-visible:bg-white focus-visible:px-4 focus-visible:py-2 focus-visible:text-black focus-visible:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C]"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[72px] items-center justify-between">

          {/* Logo — left */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group rounded-md text-lg font-bold tracking-tight text-gray-900 transition hover:text-[#0D896C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 sm:text-xl"
            aria-label="Collins Obasuyi, go to homepage"
          >
            Collins Obasuyi
            <span className="sr-only">, home</span>
          </Link>

          {/* Nav — centered absolutely */}
          <nav
            className="pointer-events-none absolute inset-x-0 hidden justify-center gap-6 md:flex lg:gap-10"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`pointer-events-auto rounded-md text-base font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 lg:text-lg ${
                    active
                      ? "text-[#0D896C]"
                      : "text-gray-700 hover:text-[#0D896C]"
                  }`}
                >
                  <span className="relative inline-flex items-center">
                    {item.name}
                    {active && (
                      <span
                        className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-[#0D896C]"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right — CTA (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center rounded-xl bg-[#0D896C] px-5 py-3 text-base font-medium text-white transition-all hover:scale-105 hover:bg-[#0B6F56] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 active:scale-95 md:inline-flex lg:text-lg"
              aria-current={pathname === "/contact" ? "page" : undefined}
            >
              Let&apos;s Connect
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-900 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        aria-hidden={!mobileMenuOpen}
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto max-h-screen opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          className="border-t border-gray-200 bg-white px-4 py-6"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-4 py-4 text-base font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2 ${
                    active
                      ? "bg-[#0D896C]/10 text-[#0D896C]"
                      : "text-gray-800 hover:bg-gray-50 hover:text-[#0D896C]"
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <span>{item.name}</span>
                  {active && (
                    <span className="ml-auto text-sm font-normal text-[#0D896C]">
                      Current
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="mt-4 border-t border-gray-100 pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-xl bg-[#0D896C] px-5 py-4 text-base font-medium text-white transition hover:bg-[#0B6F56] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D896C] focus-visible:ring-offset-2"
                aria-current={pathname === "/contact" ? "page" : undefined}
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}