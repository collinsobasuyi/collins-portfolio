# Saturday Session Registration — Design Spec

**Date:** 2026-04-28  
**Status:** Approved

---

## Overview

Add a registration flow so people can reserve a place in the free weekly Saturday Google Meet sessions (3–5pm UK time, every Saturday). Registrants receive an automated confirmation email with the permanent Google Meet link. Collins receives a notification email with the registrant's details.

---

## User Journey

1. Visitor arrives at `/coaching/register` (via direct link shared on LinkedIn/WhatsApp, or via a new announcement strip on the coaching page)
2. They fill in three fields: first name, email address, background (dropdown)
3. They submit the form
4. Two emails fire via Resend:
   - **To Collins:** registrant name, email, background — so he knows who's coming
   - **To registrant:** personalised confirmation with the Google Meet link, session time, and a note that it's every Saturday 3–5pm
5. The page shows an inline success message: "You're in, [name]. Check your inbox — the Meet link is on its way."

---

## Pages & Components

### New: `/app/coaching/register/page.tsx`
- Client component (uses `useState` for form state and success screen)
- Two-column layout on desktop, single column on mobile:
  - **Left column:** session info (time, format, what to expect, who it's for)
  - **Right column:** registration form + success state
- Dark hero band at top matching site style (dark background, violet accent)
- "Back to coaching page" link at bottom
- Metadata: title, description, canonical URL

### Form fields
| Field | Type | Required |
|-------|------|----------|
| First name | Text input | Yes |
| Email address | Email input | Yes |
| Where are you coming from? | Select dropdown | Yes |

**Dropdown options:** Non-tech career · Graduate · Career change · Just curious

### Success state
Replaces the form after successful submission (no page navigation):
> "You're in, [name]. Check your inbox — the Google Meet link is on its way. See you Saturday at 3pm."

### Coaching page changes (`/app/coaching/page.tsx`)
- Add a purple announcement strip between the hero section and the programme facts strip
- Strip content: "Free Saturday Sessions — Every week, 3–5pm via Google Meet · Join live. Ask anything. No cost." + "Register Free →" button linking to `/coaching/register`
- Existing "Apply for Next Cohort" CTAs remain unchanged — they are for the paid 6-week programme

---

## API Route

### New: `/app/api/coaching-register/route.ts`
- Method: `POST`
- Body: `{ name: string, email: string, background: string }`
- Sends two emails via Resend (reuses existing `RESEND_API_KEY` env var)
- Returns `{ success: true }` on success, `{ success: false, error: string }` on failure

**Email 1 — notification to Collins**
- From: same sender as existing contact route (`Collins Portfolio <onboarding@resend.dev>`)
- To: `collins2020job@gmail.com`
- Subject: `New Saturday Session Registration: [name]`
- Body: name, email, background, timestamp

**Email 2 — confirmation to registrant**
- From: same sender as existing contact route
- To: registrant's email
- Subject: `You're registered — Saturday Sessions with Collins`
- Body: personalised greeting, Google Meet link, session time (every Saturday 3–5pm UK), brief note on what to expect

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Already exists — no change needed |
| `GOOGLE_MEET_LINK` | Collins pastes his permanent Google Meet URL here once |

Collins creates a permanent Google Meet room (via Google Calendar → create recurring event → copy Meet link). That link goes into `.env.local` as `GOOGLE_MEET_LINK`.

---

## Error Handling

- Client-side: required field validation before submit (name, email format, background selected)
- API: returns 500 with `{ success: false, error }` if Resend fails; form shows an inline error message ("Something went wrong — please try again or email collins2020job@gmail.com directly")
- No duplicate-registration prevention needed at this stage

---

## Out of Scope

- Spot limit / capacity tracking
- Database / registrant log (inbox is the list for now)
- Weekly reminder emails
- Unsubscribe flow
- Admin dashboard
