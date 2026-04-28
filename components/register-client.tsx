"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Calendar, Video, Link2 } from "lucide-react";

const backgroundOptions = [
  "Non-tech career",
  "Graduate",
  "Career change",
  "Just curious",
];

type FormStatus = null | "submitting" | "success" | "error";

export default function RegisterClient() {
  const [formStatus, setFormStatus] = useState<FormStatus>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [registeredName, setRegisteredName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const background = formData.get("background") as string;

    try {
      const res = await fetch("/api/coaching-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, background }),
      });
      const data = await res.json();
      if (data.success) {
        setRegisteredName(name);
        setFormStatus("success");
      } else {
        setFormStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Dark hero band */}
      <section className="bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
              Live · Every Saturday · 3–5pm
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Saturday Tech Sessions
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            A live 2-hour Google Meet every Saturday. Ask questions, get
            clarity, and understand how tech teams actually work.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">

          {/* Left: session info */}
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-violet-600">
              What to expect
            </p>
            <div className="space-y-5">
              {[
                {
                  icon: Calendar,
                  title: "Every Saturday",
                  detail: "3:00pm – 5:00pm UK time, via Google Meet",
                },
                {
                  icon: Video,
                  title: "Open Q&A format",
                  detail: "Bring your questions. No prepared slides. Real answers.",
                },
                {
                  icon: Link2,
                  title: "Meet link sent instantly",
                  detail: "Register once, join any Saturday you like.",
                },
              ].map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                    <Icon className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{title}</p>
                    <p className="text-sm text-gray-500">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="mb-4 text-sm font-semibold text-gray-700">
                Good for you if you are:
              </p>
              <div className="space-y-2">
                {[
                  "Trying to break into tech",
                  "Confused about roles (QA, BA, PM)",
                  "Switching careers into the industry",
                  "Looking for real, plain-English answers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form or success */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            {formStatus === "success" ? (
              <div className="py-4 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2 className="h-7 w-7 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  You&apos;re in, {registeredName}.
                </h2>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  Check your inbox — the Google Meet link is on its way. See
                  you Saturday at 3pm.
                </p>
                <Link
                  href="/coaching"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to coaching page
                </Link>
              </div>
            ) : (
              <>
                <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-violet-600">
                  Reserve your place
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="background"
                      className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                      Where are you coming from?
                    </label>
                    <select
                      id="background"
                      name="background"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                    >
                      <option value="" disabled>
                        Select your background
                      </option>
                      {backgroundOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formStatus === "error" && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                      {errorMessage || "Something went wrong — please try again or email collins2020job@gmail.com directly."}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="mt-2 flex w-full items-center justify-center rounded-2xl bg-violet-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
                  >
                    {formStatus === "submitting" ? "Reserving…" : "Reserve My Spot →"}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    The Google Meet link lands in your inbox instantly.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/coaching"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to coaching page
          </Link>
        </div>
      </section>
    </>
  );
}
