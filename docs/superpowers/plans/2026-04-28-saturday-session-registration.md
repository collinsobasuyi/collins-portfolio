# Saturday Session Registration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/coaching/register` page where visitors can register for free weekly Saturday Google Meet sessions (3–5pm UK), triggering two automated Resend emails — a notification to Collins and a confirmation with the Meet link to the registrant.

**Architecture:** A new server page renders a client component (`RegisterClient`) that handles the form and success state. A new API route (`/api/coaching-register`) sends two Resend emails on POST. The coaching page gets a new announcement strip linking to the register page. The permanent Google Meet link is stored in `.env.local`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Resend, Lucide React, Montserrat font (via `--font-montserrat` CSS variable already set in layout)

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `app/coaching/register/page.tsx` | Server component — metadata + renders RegisterClient |
| Create | `components/register-client.tsx` | Client component — form, submit, success/error state |
| Create | `app/api/coaching-register/route.ts` | POST handler — validates body, sends 2 Resend emails |
| Modify | `app/coaching/page.tsx` | Add Saturday announcement strip between hero and facts strip |
| Modify | `app/sitemap.ts` | Add `/coaching/register` entry |
| Modify | `.env.local` | Add `GOOGLE_MEET_LINK` env variable |
| Modify | `.gitignore` | Add `.superpowers/` to prevent brainstorm files being committed |

---

## Task 1: Add the Google Meet env variable

**Files:**
- Modify: `.env.local`

- [ ] **Step 1: Create a permanent Google Meet room**

  In Google Calendar, create a new recurring event (Weekly, every Saturday, 3–5pm). Copy the Google Meet link from that event. It will look like: `https://meet.google.com/abc-defg-hij`

- [ ] **Step 2: Add the variable to `.env.local`**

  Open `.env.local` and append this line (replace the URL with your real Meet link):

  ```
  GOOGLE_MEET_LINK=https://meet.google.com/your-link-here
  ```

- [ ] **Step 3: Restart the dev server**

  ```bash
  # Stop the running dev server (Ctrl+C), then:
  npm run dev
  ```

  The new env variable is now available to API routes via `process.env.GOOGLE_MEET_LINK`.

---

## Task 2: Create the API route

**Files:**
- Create: `app/api/coaching-register/route.ts`

- [ ] **Step 1: Create the file**

  Create `app/api/coaching-register/route.ts` with the following content:

  ```typescript
  import { Resend } from "resend";

  const resend = new Resend(process.env.RESEND_API_KEY);

  export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { name = "", email = "", background = "" } = body as {
        name: string;
        email: string;
        background: string;
      };

      if (!name || !email || !background) {
        return Response.json(
          { success: false, error: "Missing required fields." },
          { status: 400 }
        );
      }

      const meetLink = process.env.GOOGLE_MEET_LINK ?? "";

      await resend.emails.send({
        from: "Collins Portfolio <onboarding@resend.dev>",
        to: ["collins2020job@gmail.com"],
        subject: `New Saturday Session Registration: ${name}`,
        replyTo: email,
        html: `
          <h2>New Saturday Session Registration</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Background:</strong> ${background}</p>
          <p><strong>Registered at:</strong> ${new Date().toUTCString()}</p>
        `,
      });

      await resend.emails.send({
        from: "Collins Portfolio <onboarding@resend.dev>",
        to: [email],
        subject: "You're registered — Saturday Sessions with Collins",
        html: `
          <h2>You're in, ${name}.</h2>
          <p>Thanks for registering for the free Saturday Tech Sessions.</p>

          <h3>Your Google Meet link</h3>
          <p><a href="${meetLink}">${meetLink}</a></p>

          <h3>Session details</h3>
          <ul>
            <li><strong>When:</strong> Every Saturday, 3:00pm – 5:00pm UK time</li>
            <li><strong>Format:</strong> Live, open Q&amp;A via Google Meet</li>
            <li><strong>Cost:</strong> Free</li>
          </ul>

          <p>The link above works every Saturday — save it and join any week you like.</p>
          <p>See you Saturday.</p>
          <p>— Collins</p>
        `,
      });

      return Response.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error("Registration error:", error);
      return Response.json(
        { success: false, error: "Failed to send registration." },
        { status: 500 }
      );
    }
  }
  ```

- [ ] **Step 2: Smoke-test the route manually**

  Start the dev server if not running (`npm run dev`), then in a new terminal:

  ```bash
  curl -X POST http://localhost:3000/api/coaching-register \
    -H "Content-Type: application/json" \
    -d '{"name":"Test User","email":"your-own-email@example.com","background":"Graduate"}'
  ```

  Expected response: `{"success":true}`

  Check your inbox at `collins2020job@gmail.com` — you should see the notification email. Check `your-own-email@example.com` — you should see the confirmation email with the Meet link.

- [ ] **Step 3: Commit**

  ```bash
  git add app/api/coaching-register/route.ts .env.local
  git commit -m "feat: add coaching-register API route with dual Resend emails"
  ```

---

## Task 3: Create the RegisterClient component

**Files:**
- Create: `components/register-client.tsx`

- [ ] **Step 1: Create the file**

  Create `components/register-client.tsx` with the following content:

  ```typescript
  "use client";

  import { useState } from "react";
  import Link from "next/link";
  import { CheckCircle2, ArrowLeft, Calendar, Video, Link2, Banknote } from "lucide-react";

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
              Free Saturday Tech Sessions
            </h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              A free, live 2-hour Google Meet every Saturday. Ask questions, get
              clarity, and understand how tech teams actually work. No sign-up
              fee. Just show up.
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
                  {
                    icon: Banknote,
                    title: "Completely free",
                    detail: "No cost, no catch.",
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
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add components/register-client.tsx
  git commit -m "feat: add RegisterClient component with form and success state"
  ```

---

## Task 4: Create the register page (server component)

**Files:**
- Create: `app/coaching/register/page.tsx`

- [ ] **Step 1: Create the file**

  Create `app/coaching/register/page.tsx` with the following content:

  ```typescript
  import type { Metadata } from "next";
  import RegisterClient from "@/components/register-client";

  export const metadata: Metadata = {
    title: "Register for Saturday Sessions | Collins Obasuyi",
    description:
      "Register for free weekly Saturday Tech Sessions with Collins Obasuyi. Live, 2-hour Google Meet every Saturday from 3–5pm UK time. No cost, just show up.",
    openGraph: {
      title: "Free Saturday Tech Sessions — Register",
      description:
        "Live Q&A every Saturday 3–5pm via Google Meet. Register once, join any week.",
      url: "https://collinsobasuyi.com/coaching/register",
    },
    alternates: { canonical: "https://collinsobasuyi.com/coaching/register" },
  };

  export default function RegisterPage() {
    return <RegisterClient />;
  }
  ```

- [ ] **Step 2: Check the page loads in the browser**

  Open `http://localhost:3000/coaching/register`

  Expected: the dark hero band shows "Free Saturday Tech Sessions", the two-column layout renders with session info on the left and the form on the right.

- [ ] **Step 3: Test the form end-to-end**

  Fill in the form with your own name, your own email address, and select a background option. Click "Reserve My Spot →".

  Expected:
  - Button shows "Reserving…" while submitting
  - Success state appears: "You're in, [name]. Check your inbox…"
  - You receive the notification email at `collins2020job@gmail.com`
  - You receive the confirmation email with the Meet link at the address you entered

- [ ] **Step 4: Commit**

  ```bash
  git add app/coaching/register/page.tsx
  git commit -m "feat: add /coaching/register page"
  ```

---

## Task 5: Add the Saturday announcement strip to the coaching page

**Files:**
- Modify: `app/coaching/page.tsx`

- [ ] **Step 1: Add the import**

  At the top of `app/coaching/page.tsx`, the imports already include `Link` from `"next/link"`. No new imports are needed.

- [ ] **Step 2: Insert the strip**

  In `app/coaching/page.tsx`, find the closing `</section>` tag of the hero section (line ~236) — it ends the `<section className="relative overflow-hidden bg-gray-950 ...">` block.

  Insert the following strip immediately after that closing `</section>` tag, before the programme facts strip:

  ```tsx
  {/* Saturday Sessions announcement strip */}
  <section className="bg-violet-700">
    <div className="mx-auto max-w-[90rem] px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-violet-300" />
          <div>
            <span className="text-sm font-bold text-white">
              Free Saturday Sessions &mdash; Every week, 3&ndash;5pm via Google Meet
            </span>
            <span className="ml-2 text-sm text-violet-200">
              Join live. Ask anything. No cost.
            </span>
          </div>
        </div>
        <Link
          href="/coaching/register"
          className="shrink-0 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-violet-700 transition hover:bg-violet-50"
        >
          Register Free &rarr;
        </Link>
      </div>
    </div>
  </section>
  ```

- [ ] **Step 3: Check the coaching page in the browser**

  Open `http://localhost:3000/coaching`

  Expected: a purple strip appears between the dark hero section and the white facts strip. It reads "Free Saturday Sessions — Every week, 3–5pm via Google Meet · Join live. Ask anything. No cost." with a "Register Free →" button on the right.

- [ ] **Step 4: Click the "Register Free" button**

  Expected: navigates to `/coaching/register`.

- [ ] **Step 5: Commit**

  ```bash
  git add app/coaching/page.tsx
  git commit -m "feat: add Saturday sessions strip to coaching page"
  ```

---

## Task 6: Final checks

- [ ] **Step 1: Check mobile layout**

  Open `http://localhost:3000/coaching/register` and resize the browser to a narrow viewport (< 640px).

  Expected: the two-column layout collapses to a single column. The form is fully usable. No horizontal overflow.

- [ ] **Step 2: Check the coaching page strip on mobile**

  Open `http://localhost:3000/coaching` on a narrow viewport.

  Expected: the strip wraps gracefully — the button sits below the text if there isn't enough horizontal space. No overflow.

- [ ] **Step 3: Test the error state**

  Temporarily stop the dev server and re-run the curl command from Task 2 Step 2 without the server running — or, for a more realistic test, temporarily set `RESEND_API_KEY` to an invalid value in `.env.local` and submit the form.

  Expected: the form shows the inline error message: "Something went wrong — please try again or email collins2020job@gmail.com directly."

  Restore `RESEND_API_KEY` afterwards.

- [ ] **Step 4: Add /coaching/register to the sitemap**

  Open `app/sitemap.ts`. The sitemap is manually managed. Add this entry to the returned array, after the `/coaching` entry:

  ```typescript
  { url: `${base}/coaching/register`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ```

  Then commit:

  ```bash
  git add app/sitemap.ts
  git commit -m "feat: add /coaching/register to sitemap"
  ```

- [ ] **Step 5: Add .superpowers/ to .gitignore**

  Open `.gitignore` and add this line:

  ```
  .superpowers/
  ```

  Then commit:

  ```bash
  git add .gitignore
  git commit -m "chore: ignore .superpowers brainstorm files"
  ```

- [ ] **Step 6: Final commit if any fixes were made**

  ```bash
  git add -p
  git commit -m "fix: address review findings from final checks"
  ```
