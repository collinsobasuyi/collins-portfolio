import type { Metadata } from "next";
import RegisterClient from "@/components/register-client";

export const metadata: Metadata = {
  title: "Register for Saturday Sessions | Collins Obasuyi",
  description:
    "Register for weekly Saturday Tech Sessions with Collins Obasuyi. Live, 2-hour Google Meet every Saturday from 3–5pm UK time.",
  openGraph: {
    title: "Saturday Tech Sessions — Register",
    description:
      "Live Q&A every Saturday 3–5pm via Google Meet. Register once, join any week.",
    url: "https://collinsobasuyi.com/coaching/register",
  },
  alternates: { canonical: "https://collinsobasuyi.com/coaching/register" },
};

export default function RegisterPage() {
  return <RegisterClient />;
}
