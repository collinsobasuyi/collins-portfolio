import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";
import CalendlyWidget from "@/components/calendly-widget";

export const metadata: Metadata = {
  metadataBase: new URL("https://collinsobasuyi.com"),
  title: {
    default: "Collins Obasuyi | AI Product Leader, Delivery & Mentorship",
    template: "%s | Collins Obasuyi",
  },
  description:
    "Collins Obasuyi — AI product strategy, delivery leadership, and mentorship for founders, teams, and ambitious tech professionals. 15+ years across product, quality, and AI.",
  keywords: [
    "AI product strategy",
    "delivery leadership",
    "product management",
    "mentorship",
    "quality engineering",
    "Collins Obasuyi",
    "UK product consultant",
  ],
  authors: [{ name: "Collins Obasuyi", url: "https://collinsobasuyi.com" }],
  creator: "Collins Obasuyi",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://collinsobasuyi.com",
    siteName: "Collins Obasuyi",
    title: "Collins Obasuyi | AI Product Leader, Delivery & Mentorship",
    description:
      "AI product strategy, delivery leadership, and mentorship for founders, teams, and ambitious professionals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Collins Obasuyi — AI Product Leader, Delivery & Mentorship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Collins Obasuyi | AI Product Leader, Delivery & Mentorship",
    description:
      "AI product strategy, delivery leadership, and mentorship for founders, teams, and ambitious professionals.",
    images: ["/og-image.png"],
    creator: "@collinsobasuyi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://collinsobasuyi.com" },
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
