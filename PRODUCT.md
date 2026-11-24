# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Technicians:** informal skilled technicians in Nigeria, starting with auto mechanics, AC technicians, electricians and generator repairers in Lagos and Ibadan.
  - They work in workshops, at the roadside and in customers' homes.
  - They use low-end Android phones and WhatsApp, and many read little English.
  - They speak English, Pidgin, Yoruba, Hausa or Igbo.
- **Customers:** car owners and home owners who need a technician and cannot tell who to trust.
- **Organisations:** estates, facility managers, hotels and companies that need several technicians at once.
- **Design priority** (confirmed 23 Nov 2026): technician screens and customer screens carry equal weight. Organisations come third.

## Product Purpose

SkillMemory turns a technician's real jobs into an evidence-based professional profile, so customers and organisations outside the technician's own street can find and trust them. Tagline: "Turning skills into opportunities."

Success means two things:
- Technicians get work from people who have never met them.
- Customers choose a technician by evidence instead of by "my brother knows someone".

## Positioning

Profiles are built from documented jobs and customer confirmations, not from self-description or star ratings.

- **Documented job:** photos or video, plus a voice note, become an AI-structured record that the technician approves.
- **Customer confirmation:** the customer confirms the job from their own phone over WhatsApp.
- **Separate trust signals:** each kind of trust is shown on its own: identity checked, documented, customer-confirmed, self-declared, and independently assessed (later).
- **Private know-how:** a record shows what was fixed, never how it was fixed, so a master's methods stay private.

## Operating Context

- **Technician:**
  1. After a job, takes photos and records a voice note (or types).
  2. The AI drafts the job record.
  3. The technician checks and approves it.
  4. The technician sends the customer a WhatsApp link to confirm.
  5. The technician answers customer requests on WhatsApp.
- **Customer:**
  - Searches in plain English or Pidgin ("My Corolla dey overheat for Yaba") and sees matches with the reasons for each.
  - Requests service, or messages the technician on WhatsApp.
  - Confirms a job from a link on their own phone.
- **Organisation:** describes the roles it needs in plain words and gets a shortlist. The SkillMemory team then coordinates.
- **Admin (SkillMemory team):** checks IDs, assigns open requests, and removes the sample profiles.
- **Evaluation:** ISF'26 × ATC Africa BuildAthon.
  - Virtual prelims are the week of 23 Nov 2026.
  - The final is on 28 Nov 2026 in Ibadan, with a live demo on phones and on a projector.

## Capabilities and Constraints

- **Built** (Stage 1 of the Product Foundation):
  - registration with a phone number and a 4-digit PIN
  - WorkMemory capture (photos or video, plus voice or text)
  - AI job records with technician approval
  - a public portfolio
  - search by trade, location and service
  - service requests
  - organisation shortlists
  - customer confirmation, pulled forward from Stage 2 and confirmed as a headline feature on 23 Nov 2026
- **Not built** (later stages): payments and escrow, analytics, the AI business assistant, paid learning, independent skill assessment.
- **AI:** Gemini, with a keyword fallback. Every flow must still work when the AI or the network fails.
- **Stack:** Next.js 16, Postgres (Supabase, or PGlite locally) and WhatsApp deep links. Deployment to Vercel is pending.
- **Terms:**
  - WorkMemory
  - job record (or work record)
  - documented job
  - customer-confirmed
  - identity checked
  - self-declared
  - independently assessed (later)

## Brand Commitments

- **Name:** SkillMemory.
- **Tagline:** "Turning skills into opportunities." Both are locked by the team's Product Foundation document.
- **Voice:**
  - Plain words and short sentences.
  - Pidgin examples are welcome.
  - Never claim certification or guarantee quality. A confirmation means the job happened, not that it was done well.

## Evidence on Hand

- **No real activity yet.** There are no real technicians, jobs, confirmations or customers. Field onboarding of real mechanics is planned for the week of the final.
- **Sample profiles** exist for demonstration and are always labelled "Sample profile". Never quote them as traction.
- **No team photographs yet** (confirmed 23 Nov 2026). The landing page uses openly licensed Wikimedia Commons stand-ins of Nigerian technicians at work. Replace them with field-visit photos before the final.
- **Nothing to show yet:** no testimonials, ratings, press, partners, logos or pricing. Do not invent any.

## Product Principles

1. **Evidence over claims.** Every trust signal says exactly what was checked, and nothing more.
2. **The technician's knowledge stays theirs.** Records show what was fixed, never the method.
3. **Talk, don't type.** For technicians, voice and photos come before forms.
4. **Meet people where they are:** WhatsApp, Pidgin, cheap phones, weak and expensive data.
5. **Honest by default.** Label samples, invent no numbers, and say plainly when the AI was not used.

## Accessibility & Inclusion

- **Limited reading ability:**
  - short words, with icons that always carry a text label
  - voice input wherever typing would be needed
  - one main action per screen
- **Outdoor use on small screens:**
  - high contrast
  - 16px minimum body text
  - tap targets of 44–48px
- **Low-end Android and slow networks:**
  - light pages, with no heavy media by default
  - forms that keep what was typed when a send fails
- **Language:** the interface is in English with Pidgin examples. Voice notes are accepted in English, Pidgin, Yoruba, Hausa and Igbo.
