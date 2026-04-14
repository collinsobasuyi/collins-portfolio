import type { Metadata } from "next";
import ContactClient from "@/components/contact-client";

export const metadata: Metadata = {
  title: "Contact | Collins Obasuyi",
  description:
    "Get in touch with Collins Obasuyi. Book a 15-min strategy call or send a message about product strategy, AI, delivery leadership, or mentorship.",
  openGraph: {
    title: "Contact Collins Obasuyi",
    description:
      "Book a strategy call or send a message. Open to product, AI, and mentorship conversations.",
    url: "https://collinsobasuyi.com/contact",
  },
  alternates: { canonical: "https://collinsobasuyi.com/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
