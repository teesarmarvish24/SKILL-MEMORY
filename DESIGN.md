# SkillMemory design system

Read this before changing any screen. It records the decisions behind the redesign (November 2026), so new screens stay part of the same product.

## The idea

**A job record is a receipt slip, and the customer's confirmation is the ink stamp on it.**

Every Nigerian shop hands over a carbon-copy receipt with:
- the business name at the top
- a number
- the work in ruled rows
- a stamp at the foot

SkillMemory draws every job record the same way (`src/components/receipt.tsx`). When the customer taps "Yes, confirm", the teal stamp lands on the slip.

- **Unconfirmed jobs:** show an empty dashed stamp space, never nothing. The absence is part of the honesty.
- **Photographs:** real technicians doing real work carry the identity: roadside workshops, engine bays, generators, welding sparks. Never stock people in suits.

## Colour (the team's brand, pinned)

| Token | Hex | Use |
|---|---|---|
| `teal` | `#087F73` | Primary buttons, links, focus ring, the stamp, confirmed counts |
| `teal-deep` | `#06665D` | Primary hover |
| `teal-ink` | `#075C54` | Teal text on mint |
| `mint` | `#E5F6F2` | Soft accent: selected options, success panels, the statement band |
| `ink` | `#0B2528` | Headings and body text; the dark organisation band (`night`) |
| `muted` | `#4B6264` | Secondary text (6:1 on white) |
| `canvas` | `#F7F8F7` | Page background |
| `surface` | `#FFFFFF` | Panels, forms, cards |
| `paper` | `#FFFDF8` | Receipt slips only |
| `line` / `line-strong` | `#DDE5E3` / `#BFCDCA` | Hairlines / input borders and receipt rules |
| `whatsapp` | `#1C9D50` | WhatsApp actions only |
| `amber` / `danger` | `#8A5300` / `#B42318` | Drafts and warnings / errors |

Violet and lavender are never used. Colour is not the only signal: confirmed jobs also carry the stamp shape, drafts carry a label, and private jobs carry a lock.

## Type

- **Typeface:** Manrope only (`next/font/google`, `--font-manrope`). One family, with weight and size doing the work.
- **Display (H1):** 800, letter-spacing −0.04em, 42 → 66 px.
- **Section headings:** 700, −0.03em, 30 → 36 px.
- **Body:** 400 at 16–17 px, line-height 1.6. Labels are 600 at 13–15 px, in sentence case. No eyebrows above headings and no tracked capitals. The one exception is the stamp text, because a rubber stamp is set in capitals.
- **Numbers:** job numbers, dates and counts use tabular figures (`.tnum`).

## Shape and depth

- **Radii:** controls 10 px (`rounded-control`), cards and panels 14 px (`rounded-card`), photographs 18 px (`rounded-media`). Receipts are rounded at the top only and torn at the bottom with a zigzag mask.
- **Shadows:** `shadow-soft` on the search bar, `shadow-lift` on hover. Receipts use a drop-shadow filter so the shadow follows the torn edge.
- **Nesting:** two boxes deep at most. Lists are divided rows, not stacks of cards.

## Components

- **`JobReceipt`:**
  - optional photos: 1, 2, or 3 or more get different layouts
  - the service name, job number and date
  - ruled rows: Worked on, Problem, Work done, Parts, Result
  - a customer-confirmation row holding the `Stamp` or the empty slot
  - owner-only marks: Draft, Private, Voice note kept private
- **`MiniReceipt`:** one line of evidence for search results and shortlists.
- **`Stamp`:** a teal double-ring stamp, rotated −6°, with ink grain. `animate` plays `stamp-land` once, used on the hero and the confirm page.
- **`EvidenceLedger` / `EvidenceLine`:** documented jobs, customer-confirmed jobs, ID checked and self-declared experience, always kept apart.
- **The profile page:** it borrows proven patterns from LinkedIn, Upwork and Fiverr, but every mark on it comes from a real record, with no stars and no scores:
  - LinkedIn's cover banner with the avatar overlapping it, a headline, Featured work, and an experience-style timeline
  - Upwork's proof strip and verifications ("Checks")
  - Fiverr's sticky contact card, and "Last job…" / "On SkillMemory since…"
  - a work history you can filter by skill, grouped by month
- **`MatchCard`:** a search result. The work photo leads; then who, the evidence, "Why this match", the relevant work, and the actions.
- **`HeroSearch` / `SearchBox`:** plain GET forms, so they work before any script loads.
- **`Photo` / `RecordImage`:** `srcset` photographs from `/public/images/work`. Credits are on `/credits`.

## Motion

All motion is CSS (no animation library), so it stays light on cheap Android phones. Each animation tells part of the product's story.

- **The hero sequence:**
  1. The headline words rise into place one after another (`.words`).
  2. The mechanic photo unveils and settles (`.unveil`).
  3. The receipt prints out (`.receipt-print`).
  4. The customer's stamp lands (`.stamp-land`).
  5. A "New request" notification arrives (`.notify-in`): the skill turns into an opportunity.
- **The search hint:** it cycles through real Pidgin requests (`RotatingQuery`).
- **The Pidgin ticker:** a band of real requests under the hero, each a link to search; it pauses on hover (`.ticker`).
- **Scroll reveals** (`animation-timeline: view()`, static where unsupported):
  - section headings rise (`.reveal`)
  - photographs unveil (`.reveal-img`)
  - showcase stamps thump onto their receipts (`.reveal-stamp`)
  - shortlist rows slide in (`.reveal-row`)
- **Live demos in "How it works":**
  - the voice note's waveform plays (`.eq`)
  - a light passes over the AI draft (`.sheen`)
  - the customer is typing (`.typing`)
- **The statement:** "Your know-how stays yours…" inks itself word by word as you scroll.
- **Numbers:** profile evidence counts roll up from zero (`.count`, using CSS `@property`). The real number is always in the page for screen readers.
- **Page transitions:** React `<ViewTransition>` crossfades and lifts pages, and the technician's avatar glides from search or the homepage into their profile (`Avatar morph`). Searches and filters use `next/form`, so results arrive without a full reload.
- **The technician profile (`/t/[slug]`):**
  - The cover is the technician's own job photos: they wipe in, then drift slowly (`.cover-tile`). With no photos, ruled receipt lines slide behind the trade's icon (`.cover-plain`).
  - The face lands on the cover with one soft ring (`.avatar-land`). The name rises word by word, and the lines under it follow (`.rise-in`).
  - The "Confirmed by customers" ring fills to the real share of confirmed jobs (`.gauge`, CSS `@property --p`).
  - Skill bars fill as they scroll in: teal for confirmed jobs, mint for documented ones (`.bar`).
  - The work-history line draws down the page as you read (`.timeline-line`, a named view timeline), and each month's dot pops in.
  - Jumping from "Featured work" to a job flashes that receipt (`.job-anchor:target`).
- **Hover:**
  - linked cards lift 2 px
  - photos zoom 3 % inside their frame
  - buttons step up and press down, and primary buttons catch a sweep of light (`.shine`)
  - text links draw their underline
  - the phone menu drops in
- **Reduced motion:** `prefers-reduced-motion` turns every animation and transition off.

## Words

- **Voice:**
  - Plain English, with Pidgin examples where customers would really use them ("My Corolla dey overheat for traffic").
  - Buttons say what happens: "Find a technician", "Add a completed job", "Approve & publish", "Yes, confirm".
  - No exclamation marks, no invented numbers, testimonials or ratings.
- **Honest labelling:** sample profiles always say so.
- **Customer feedback:** shown only where a real customer typed it while confirming.

## Photographs

- **Current set:** licensed stand-ins of Nigerian technicians from Wikimedia Commons, plus one Pexels image (see `src/lib/photos.ts` and `/credits`).
- **Replace before the final:** use the team's own field-visit photos, with the technician's permission.
- **Rules:**
  - Daylight and the real workplace.
  - No readable shop signs.
  - Never pass a stranger's face off as a named technician. Sample profiles show work, not faces.

## Screens and their mode

- **Persuade:** the home page (`/`). Real photography, the receipt moment, the working search above the fold.
- **Operate:**
  - search
  - the technician profile
  - job capture and review
  - confirm
  - workspace
  - the organisation request
  - admin

  Precision and restraint, 44–48 px tap targets, one main action per screen.
