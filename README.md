# AWALI

> **awali** _(Swahili)_ — the beginning; the origin; the very first step.

**WhatsApp-native RSVP & M-Pesa payments platform for Kenya.**

Guests never leave WhatsApp. Organisers never chase anyone manually. Payments flow through M-Pesa. Data lands in a clean dashboard in real time.

🌐 [awali.co.ke](https://awali.co.ke)

---

## The Problem

Every day in Kenya, millions of people coordinate events, collect RSVPs, manage memberships, and collect payments — all on WhatsApp, all manually. Organisers share Google Form links that people ignore. They chase replies in noisy group chats. They reconcile M-Pesa payments in Excel sheets at midnight.

**AWALI eliminates all of that.**

---

## How It Works

### For the Organiser

1. **Create a Flow** — choose a template (wedding, church, chama, rental, etc.)
2. **Customise** — set questions, upload poster/PDF/map pin, configure payment amount
3. **Share** — get a QR code + WhatsApp link
4. **Watch the dashboard** — real-time RSVPs, payments, and check-ins

### For the Guest

1. Scan QR code or tap WhatsApp link
2. Bot guides them through questions conversationally
3. Pay via M-Pesa STK Push — PIN prompt appears on their phone
4. Receive confirmation, ticket, schedule PDF, map pin — all in WhatsApp
5. Get automated reminders on the same thread

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Nuxt 4](https://nuxt.com) (Vue 3) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) + [shadcn-vue](https://www.shadcn-vue.com) |
| UI Components | [Reka UI](https://reka-ui.com) primitives via shadcn-vue |
| Backend | Firebase (Firestore + Auth) |
| AI | Google Gemini (`gemini-3-flash-preview`) |
| Payments | M-Pesa (Daraja API) — STK Push, Paybill, Till, Pochi la Biashara |
| Hosting | [awali.co.ke](https://awali.co.ke) |
| Package Manager | Bun |

---

## Project Structure

```
awali/
├── app/
│   ├── assets/css/       # Tailwind CSS entry
│   ├── components/ui/    # shadcn-vue components
│   ├── layouts/          # Dashboard + default layouts
│   ├── lib/              # Utilities (cn helper)
│   ├── pages/            # Routes (use-cases/, etc.)
│   └── app.vue           # Root component
├── server/               # Nitro server routes
├── public/               # Static assets (llms.txt)
├── skills/               # Project context docs
├── nuxt.config.ts        # App configuration
├── components.json       # shadcn-vue config
└── package.json
```

---

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

---

## Architecture

### Core Insight

> The WhatsApp phone number is the **identity layer**. M-Pesa is the **payment layer**. The bot is the **experience layer**. The QR code is the **bridge** between the physical world and the digital flow.

### Data Model

- **Events** — flow configuration, templates, payment settings
- **RSVPs** — guest responses linked by phone number
- **UserProfiles** — Universal ID pattern (`AW-123456`) mapped to Firestore UUIDs

### Security

- **Firestore Rules** — "Master Gate" pattern with strict schema validation
- **ABAC** — Attribute-Based Access Control (organisers manage only their own flows)
- **Entity Validation** — key/type/size checks to prevent denial-of-wallet attacks

### AI Integration

Gemini powers:
- Kenyan-style event description generation
- Custom RSVP/registration question suggestions based on event template
- In-chat guest support during WhatsApp simulation

---

## Template Library

123 flows across 7 categories:

| Category | Flows | Examples |
|----------|-------|---------|
| **RSVP & Events** | 17 | Wedding, funeral, harambee, graduation, corporate dinner |
| **Live Event Info** | 17 | Conference info bot, venue navigator, live Q&A, auction bidding |
| **Membership & Registration** | 18 | Church member, chama, SACCO, gym, tenant onboarding |
| **Payments & Collections** | 18 | Rent, school fees, tithe, chama contributions, loan repayment |
| **Feedback & Surveys** | 16 | Post-event, sermon rating, NPS, tenant satisfaction |
| **Registration & Forms** | 22 | Job application, volunteer signup, property viewing, maintenance request |
| **Check-in & Access** | 15 | Event entrance, hotel check-in, hospital queue, gym daily |

---

## M-Pesa Payment Routing

```
Does the organiser have a Paybill?
 ├── Yes → Direct to their Paybill (0% platform cut)
 └── No → Till number?
      ├── Yes → Direct to Till (0% platform cut)
      └── No → Pochi la Biashara?
           ├── Yes → Direct to Pochi (0% platform cut)
           └── No → AWALI Platform Paybill
                    Platform deducts agreed % → disburses net to organiser
```

Reconciliation uses the phone number as the universal join key between WhatsApp conversations and M-Pesa callbacks.

---

## Pricing

### Per-Event (One-Off)

| Tier | Price | Includes |
|------|-------|----------|
| Basic | KES 499 | RSVP, reminders, guest list |
| Standard | KES 999 | + payments, assets, check-in |
| Premium | KES 1,999 | + feedback, certificates, priority support |
| Enterprise | KES 4,999 | Up to 1,000 guests, white-label |

### Monthly Subscription (Recurring)

| Plan | Price | Flows | Contacts/mo |
|------|-------|-------|-------------|
| Community | KES 2,999 | 3 | 300 |
| Organisation | KES 6,999 | 10 | 1,000 |
| Business | KES 14,999 | Unlimited | 5,000 |
| Enterprise | KES 35,000 | Unlimited | Unlimited |

Transaction fees: 8% (per-event) → 3% (Community/Org) → 1.5% (Business/Enterprise) → 0% (bring your own Paybill/Till).

---

## Work Completed

### Foundation
- Named the app "Awali" (The Origin)
- Firebase project provisioned in `europe-west2` with Firestore and Auth
- Core relational data model defined (Events, RSVPs, UserProfiles)

### Security Infrastructure
- Hardened Firestore rules using "Master Gate" pattern
- Strict schema validation (keys, types, sizes) within rules
- ABAC so organisers can only manage their own flows

### AI Integration
- Gemini assistant for event descriptions, question suggestions, and in-chat support

### Components & UX
- First-time onboarding (WhatsApp number or system-generated ID)
- Multi-category template system (Events, Membership, Check-in, Rentals)
- WhatsApp simulation UI (typing indicators, bubble logic, STK-push mockups)
- Reporting with `jspdf` and `xlsx` for data extraction

---

## Design System

**"Kenyan Tech-Minimalism"**

- **Typography**: Inter (Sans) + Georgia (Serif Italic)
- **Color**: Charcoal `#141414` + Paper White `#F5F5F5`
- **Motion**: `motion/react` for fluid mobile-app-like transitions

---

## Roadmap

### Now — Pre-Launch
- [ ] Cancellation + refund flow
- [ ] Event reschedule/cancellation broadcast
- [ ] Waitlist + capacity management
- [ ] Kenya Data Protection Act 2019 compliance (consent + ODPC registration)
- [ ] WhatsApp API template pre-approval for reminder sequences

### Next — Before Scale
- [ ] Group/family RSVP path
- [ ] Ticket transfer
- [ ] Multi-user dashboard access (co-organiser roles)
- [ ] Partner/reseller programme
- [ ] Free tier for acquisition

### Horizon — Growth
- [ ] Live WhatsApp Business API integration (replace simulation)
- [ ] Daraja API for verified M-Pesa payments
- [ ] QR code generation for physical check-in
- [ ] Table banking template
- [ ] School fee collection template
- [ ] CPD & certification vertical
- [ ] AI no-show prediction + smart reminder timing

---

## Notes for Contributors

### Universal ID Pattern
The user's phone is their ID. Dashboard shows `AW-123456`. Internally, Firestore UUIDs. This separation enables anonymous registration while maintaining M-Pesa reconciliation.

### Conversational State Machines
`WhatsAppBot.tsx` uses step-based state machines. For complex flows, consider moving logic to configuration objects in the Event document for data-driven bots.

### WhatsApp API Constraints
- **24-hour window**: Outbound proactive messages require pre-approved Meta templates
- **Per-message cost**: ~$0.005–0.008/message for Kenya
- All reminder sequences must be designed as approved templates from day one

---

## License

Private. All rights reserved.

---

_AWALI — kila tukio linaanza hapa. Every gathering starts here._
