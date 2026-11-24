# SkillMemory: live demo runbook

This follows the 7-step demo story from our product foundation. Target length: about 2.5 minutes.

## Before you go on stage
- [ ] Open the **deployed https URL** on the demo phone. The microphone only works over https.
- [ ] `/admin` shows **AI: Gemini connected**.
- [ ] The demo technician is logged in on the phone: a **real mechanic** we onboarded, or a teammate's account.
- [ ] That technician already has 3 or more **real** approved jobs, at least 1 of them **customer-confirmed**.
- [ ] A second phone or browser is ready as the "customer". Its WhatsApp number is in the job's customer details.
- [ ] You have a 20–30 second **Pidgin voice note line** ready (below). Practise it.
- [ ] Your own **mobile hotspot** is on. Don't rely on venue Wi-Fi.
- [ ] Sample profiles are removed if we have enough real ones (`/admin` → Remove sample profiles).

## The 7 steps
| # | Say | Do |
|---|---|---|
| 1 | "Meet Emeka. 15 years fixing cars in Yaba, but only his street knows him." | Show his profile `/t/...`: trust badges and work portfolio. |
| 2 | "He just finished a job. He doesn't type. He talks." | Workspace → **Add a completed job** → take a photo → tap the mic and speak the line. |
| 3 | "AI turns his own words into a professional record. What he fixed, not how. His skill stays his." | Wait on "AI is organising your job…", then show the structured record and transcript. |
| 4 | "He checks it and approves. His portfolio just got stronger." | **Approve & publish** → **Send confirmation** opens WhatsApp. |
| 5 | "The customer confirms from her own phone. That's proof no profile page can fake." | On the customer phone: open the link → **Yes, confirm**. The badge updates. |
| 6 | "A car owner who's never met Emeka types the problem in Pidgin…" | `/search`: "My Corolla dey overheat for Yaba". Point at **Why this match**. → **Request service**. |
| 7 | "And a facility manager needs a team." | `/org`: "We need 2 AC technicians and 1 electrician in Lekki" → shortlist. |

**Voice note line (Pidgin):** "Toyota Corolla 2010. The customer say the engine dey overheat for traffic. I check am, change the radiator hose and thermostat, refill coolant. I test drive am, temperature don normal."

## If something breaks
| Problem | Backup |
|---|---|
| Microphone blocked or no https | Tap **Type instead** and paste the same line. |
| AI slow or rate-limited | The app fills the record automatically with the keyword fallback; edit two fields and approve. Say: "It works even when the network is bad." |
| No internet at all | Run the laptop copy: `npm run dev` with no `.env.local`. It runs completely offline with the local database and fallback AI; the phone connects over the laptop's hotspot. |
| Confirmation link won't open | Show a job that's already customer-confirmed on the profile. |

## Numbers to quote (real ones only)
Collect these from `/admin`, which counts **real** profiles separately from the samples:
- real technicians onboarded
- real documented jobs
- real customer confirmations
- requests received

Never quote sample data as traction.
