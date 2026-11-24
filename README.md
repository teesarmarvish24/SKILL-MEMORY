# SkillMemory

**Turning skills into opportunities.** SkillMemory helps informal technicians in Nigeria document their work, build credible professional portfolios and connect with customers and organisations that need their skills.

This is the **Stage 1 competition MVP** for ISF'26 × ATC Africa BuildAthon.

## What's in the MVP

| Feature | Where |
| --- | --- |
| Technician registration and profile (phone + 4-digit PIN) | `/tech/join`, `/tech/login`, `/tech/profile` |
| **WorkMemory**: photos/video plus a voice note or typed description | `/tech/work/new` |
| AI-generated structured work record, approved by the technician | `/tech/work/[id]` |
| Public professional portfolio with separated trust signals | `/t/[slug]` |
| Customer search in plain language (English/Pidgin) | `/search` |
| Customer service request, plus WhatsApp hand-off | `/t/[slug]/request` |
| Customer confirmation link (the customer confirms the job happened) | `/confirm/[token]` |
| Organisation workforce request and AI shortlist | `/org` |
| Admin: identity checks, requests, sample profiles | `/admin` |
| What each badge means | `/trust` |

### Where AI is used
1. **Work documentation:** the technician's voice note (English, Pidgin, Yoruba, Hausa or Igbo) and photos become a structured job record. It records *what* was fixed, never *how*, so their know-how stays private.
2. **Portfolio bio:** written only from what the technician said and their documented jobs.
3. **Matching:** a customer's plain-language problem becomes a trade, services, vehicle and area, and the technicians shown have documented work that matches. Every match is explained.
4. **Organisation sourcing:** a free-text request becomes roles, each with a shortlist.

Every AI feature has a **keyword fallback**, so the app still works with no API key, when the free tier is rate-limited, or when the network fails on stage.

### Trust signals (kept separate on purpose)
Identity checked · Documented jobs · Customer-confirmed · Self-declared · (Independently assessed: later, through partners). See `/trust`.

## Run it locally (no accounts needed)

```bash
cd skillmemory
npm install
npm run dev
```

Open http://localhost:3000. With no environment variables, the app uses:
- **PGlite**, an embedded Postgres stored in `.data/pglite`. It is created automatically and filled with labelled **sample profiles**.
- **Local file storage** in `.data/uploads`.
- **Keyword "AI"** in place of Gemini.

The sample technicians all use PIN `1234`. For example, log in as Emeka with phone `08000000001`.

Useful commands:
- `npm run typecheck`
- `npm run db:reset-local`: deletes the local database; it is recreated with sample data on the next start.
- `npm run db:generate`: run this after changing `src/db/schema.ts`.
- `node scripts/e2e.mjs`: full browser test of the demo story. It uses your installed Chrome or Edge, so the dev server must be running.
- `node scripts/clickthrough.mjs`: presses every button and follows every link. It covers search, filters, share, requests, login, the workspace, profile photo, private records, delete, "No" on confirm, organisations and every admin button. Start the server with `ADMIN_PASSWORD=admin`.
- Both tests create test data. Run `npm run db:reset-local` afterwards, before a demo.

## Turn on real AI (free)
1. Get a key at https://aistudio.google.com/apikey
2. Create `skillmemory/.env.local` with `GEMINI_API_KEY=...`
3. Restart `npm run dev`.

The app tries `GEMINI_MODEL` (if set), then `gemini-3.5-flash`, `gemini-2.5-flash` and `gemini-2.5-flash-lite`, and keeps whichever works.

## Deploy (Supabase + Vercel, free tiers)
1. **Supabase:** create a project.
   - **Database URL:** Project Settings → Database → Connection string → *Transaction pooler* (port 6543). This becomes `DATABASE_URL`.
   - **API keys:** Project Settings → API. Copy the URL, the `anon` key and the `service_role` key.
2. **Vercel:** import the repository and set the root directory to `skillmemory`. Add these environment variables:
   - `DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY`
   - `GEMINI_API_KEY`
   - `SESSION_SECRET` (any long random string) and `ADMIN_PASSWORD`
   - `NEXT_PUBLIC_SITE_URL` (your Vercel URL, used in WhatsApp links)
3. Deploy. On the first request the app creates its tables, its storage bucket (`skillmemory-media`, public) and the sample profiles.

Photos, videos and voice notes upload **straight from the phone to Supabase Storage** through signed URLs, so large videos never hit Vercel's 4.5 MB request limit.

> Microphone recording only works over **https** (or on localhost). The Vercel URL is https, so use it on phones.

## Before the final
- Replace the sample profiles with **real technicians** from field visits, then hide the samples (`/admin` → *Remove sample profiles*, or set `SHOW_SAMPLES=0`).
- Real customer-confirmed jobs are the strongest proof in the pitch. `/admin` counts real technicians, jobs and confirmations separately from the samples.
- Ask permission before photographing a customer's car, home or face.
- Replace the stand-in photographs with your own field-visit photos, with each technician's permission:
  1. Put the files in `public/images/work/` as `<name>-1200.jpg` and `<name>-600.jpg`.
  2. Update `src/lib/photos.ts` and the credits on `/credits`.

## Design
The visual system is written down in [DESIGN.md](DESIGN.md):
- **Brand colours:** deep teal, charcoal, mint and warm white.
- **Type:** Manrope only.
- **Job records:** each is drawn as a receipt slip, and the customer's confirmation lands on it as a teal ink stamp.
- **Photographs:** real technicians at work.

Product facts behind the design are in [PRODUCT.md](PRODUCT.md).

## Code map
```
src/app/            pages, API routes (uploads, WorkMemory draft) and server actions
src/components/     UI: forms, voice recorder, work capture, cards, trust badges
src/db/             schema (Drizzle), connection (PGlite or Postgres), sample data
src/lib/ai.ts       every Gemini call, each with a fallback
src/lib/match.ts    explainable matching of needs to documented work
src/lib/trades.ts   trades and services (edit here to add a trade)
drizzle/            SQL migrations (applied automatically)
```
