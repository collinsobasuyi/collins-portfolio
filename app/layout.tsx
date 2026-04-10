import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";
import CalendlyWidget from "@/components/calendly-widget";

export const metadata: Metadata = {
  title: "Collins Obasuyi | AI Product, Delivery, and Quality Engineering",
  description:
    "Personal website of Collins Obasuyi. Building AI-powered products and scalable systems across product, delivery, quality engineering, and mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" data-scroll-behavior="smooth">
      <body className="bg-white text-black antialiased">
          <CalendlyWidget />
        <SiteHeader />
        <main id="main-content" className="pt-[84px] sm:pt-[92px]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}