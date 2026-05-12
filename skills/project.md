# AWALI — Project Specification

> _awali_ — the beginning; the origin; the very first step.
> Built for Kenya. Powered by M-Pesa. Lives in WhatsApp.

**Stack:** Nuxt 3 · Vue 3 · shadcn-vue · Hugeicons · Tailwind CSS · AWS (CDK)

---

## 1. Product Overview

AWALI eliminates the manual coordination tax on Kenyan gatherings. Organisers stop chasing RSVPs in noisy WhatsApp groups, stop reconciling M-Pesa payments in Excel at midnight, and stop sharing Google Form links that people ignore.

The platform is WhatsApp-native. Guests never download an app. Payments flow via M-Pesa STK Push. Data lands in a real-time dashboard.

**The Core Insight**

- WhatsApp phone number = Identity layer
- M-Pesa = Payment layer
- Conversational bot = Experience layer
- QR code = Physical-to-digital bridge

---

## 2. Tech Stack

### Frontend

| Layer             | Choice                                   | Reason                                                 |
| ----------------- | ---------------------------------------- | ------------------------------------------------------ |
| Framework         | **Nuxt 3**                               | SSR, file-based routing, full-stack capability         |
| UI Framework      | **Vue 3** (Composition API)              | Reactive, component-based                              |
| Component Library | **shadcn-vue**                           | Unstyled, fully customisable for the zinc/black system |
| Icons             | **Hugeicons** (via nuxt module)          | Large, consistent icon set                             |
| Styling           | **Tailwind CSS**                         | Zinc palette, utility-first                            |
| Animations        | **CSS Transitions + Vue `<Transition>`** | Lightweight, no extra dependency                       |
| Charts            | **Vue-chartjs** or **Recharts-vue**      | Dashboard stat visualisation                           |
| QR Code           | **qrcode** (npm)                         | Client-side QR generation                              |
| Export            | **xlsx** + **jsPDF**                     | Guest list export, payment ledger                      |
| PDF Delivery      | **pdfmake**                              | Certificate generation, ticket PDFs                    |

### Backend (AWS via CDK)

| Service                        | Use                                                                    |
| ------------------------------ | ---------------------------------------------------------------------- |
| **API Gateway (HTTP API)**     | REST endpoints consumed by the Nuxt frontend and WhatsApp webhook      |
| **Lambda (Node.js 20)**        | Business logic — flow engine, bot state machine, M-Pesa reconciliation |
| **DynamoDB**                   | Primary data store — Events, RSVPs, UserProfiles, PaymentRecords       |
| **S3**                         | Asset storage — uploaded posters, PDFs, ticket images, QR codes        |
| **CloudFront**                 | CDN for S3 assets; also serves the Nuxt static build if deployed to S3 |
| **SES (Simple Email Service)** | Organiser email receipts, digest reports                               |
| **SNS**                        | Payment confirmation fanout (Lambda → dashboard update)                |
| **Secrets Manager**            | M-Pesa Daraja API keys, WhatsApp Business API tokens                   |
| **CloudWatch**                 | Logging, alerting, Lambda error monitoring                             |
| **Cognito**                    | Organiser authentication (email/password + Google OAuth)               |

### Infrastructure as Code

All AWS resources defined in **AWS CDK (TypeScript)**. Single `cdk deploy` provisions the full stack. Separate stacks per environment (`dev`, `staging`, `prod`).

---

## 3. Data Architecture (DynamoDB)

### Table: `Events`

| Attribute          | Type              | Notes                                |
| ------------------ | ----------------- | ------------------------------------ |
| `PK`               | `EVENT#<eventId>` | Partition key                        |
| `SK`               | `METADATA`        | Sort key                             |
| `organiserId`      | String            | Cognito user ID                      |
| `templateId`       | String            | e.g. `wedding-rsvp`, `chama-meeting` |
| `title`            | String            | Event display name                   |
| `date`             | ISO String        | Event date/time                      |
| `status`           | String            | `draft` / `live` / `closed`          |
| `paymentConfig`    | Map               | Amount, method, timing               |
| `reminderTimeline` | List              | Array of trigger configs             |
| `capacityLimit`    | Number            | Optional — enables waitlist          |
| `assets`           | Map               | S3 URLs for poster, PDF, map pin     |
| `createdAt`        | ISO String        |                                      |

### Table: `RSVPs`

| Attribute       | Type              | Notes                                       |
| --------------- | ----------------- | ------------------------------------------- |
| `PK`            | `EVENT#<eventId>` |                                             |
| `SK`            | `RSVP#<phone>`    | Phone number as guest ID                    |
| `guestName`     | String            |                                             |
| `phone`         | String            | WhatsApp number — universal ID              |
| `status`        | String            | `confirmed` / `declined` / `waitlisted`     |
| `paymentStatus` | String            | `pending` / `paid` / `partial` / `refunded` |
| `amountPaid`    | Number            | KES                                         |
| `seats`         | Number            |                                             |
| `checkedIn`     | Boolean           |                                             |
| `checkedInAt`   | ISO String        |                                             |
| `responses`     | Map               | Event-specific question answers             |
| `createdAt`     | ISO String        |                                             |

### Table: `UserProfiles`

| Attribute       | Type              | Notes                              |
| --------------- | ----------------- | ---------------------------------- |
| `PK`            | `PROFILE#<phone>` |                                    |
| `SK`            | `METADATA`        |                                    |
| `name`          | String            | Stored on first interaction        |
| `phone`         | String            |                                    |
| `awaliId`       | String            | Human-readable ID e.g. `AW-123456` |
| `returningUser` | Boolean           | Skip name re-entry                 |
| `lastSeen`      | ISO String        |                                    |
| `consentGiven`  | Boolean           | KDPA 2019 compliance               |
| `consentAt`     | ISO String        |                                    |

### Table: `PaymentRecords`

| Attribute   | Type                            | Notes                                             |
| ----------- | ------------------------------- | ------------------------------------------------- |
| `PK`        | `PAYMENT#<mpesaRef>`            |                                                   |
| `SK`        | `EVENT#<eventId>#PHONE#<phone>` |                                                   |
| `amount`    | Number                          | KES                                               |
| `method`    | String                          | `stk` / `paybill` / `till` / `pochi` / `platform` |
| `status`    | String                          | `pending` / `confirmed` / `failed`                |
| `mpesaCode` | String                          | Transaction reference                             |
| `timestamp` | ISO String                      |                                                   |

### GSIs (Global Secondary Indexes)

- `organiserIndex` — query all events by `organiserId`
- `phoneIndex` — look up all RSVPs by guest phone across events
- `paymentStatusIndex` — filter unpaid RSVPs for reminder engine

---

## 4. Application Structure (Nuxt)

```
awali/
├── app/
│   ├── pages/
│   │   ├── index.vue              ← Marketing landing page
│   │   ├── auth/
│   │   │   ├── login.vue
│   │   │   └── register.vue
│   │   ├── dashboard/
│   │   │   ├── index.vue          ← Overview (stat cards, recent events)
│   │   │   ├── flows/
│   │   │   │   ├── index.vue      ← My Flows list
│   │   │   │   ├── create.vue     ← Template picker → Flow builder
│   │   │   │   └── [id]/
│   │   │   │       ├── index.vue  ← Flow overview & sharing
│   │   │   │       ├── guests.vue ← Guest list + payment tracker
│   │   │   │       └── checkin.vue← Live check-in (QR scanner)
│   │   │   ├── members/
│   │   │   │   └── index.vue      ← Membership registry
│   │   │   ├── payments/
│   │   │   │   └── index.vue      ← Payment ledger
│   │   │   └── settings/
│   │   │       └── index.vue      ← Profile, payment accounts, billing
│   │   └── simulate/
│   │       └── [flowId].vue       ← WhatsApp bot simulation (public)
│   ├── layouts/
│   │   ├── default.vue            ← Marketing layout (top nav)
│   │   └── dashboard.vue          ← Sidebar + top bar layout
│   ├── components/
│   │   ├── ui/                    ← shadcn-vue components (auto-imported)
│   │   ├── dashboard/
│   │   │   ├── Sidebar.vue
│   │   │   ├── TopBar.vue
│   │   │   ├── StatCard.vue
│   │   │   ├── GuestTable.vue
│   │   │   ├── PaymentTracker.vue
│   │   │   └── CheckinScanner.vue
│   │   ├── flows/
│   │   │   ├── TemplateCard.vue
│   │   │   ├── FlowBuilder.vue
│   │   │   ├── ReminderTimeline.vue
│   │   │   └── QRCodePanel.vue
│   │   ├── bot/
│   │   │   ├── WhatsAppSim.vue    ← Full simulation UI
│   │   │   ├── ChatBubble.vue
│   │   │   ├── QuickReplies.vue
│   │   │   └── STKPushModal.vue
│   │   └── marketing/
│   │       ├── HeroBand.vue
│   │       ├── FeatureCard.vue
│   │       └── PricingCard.vue
│   ├── composables/
│   │   ├── useAuth.ts
│   │   ├── useFlow.ts
│   │   ├── useGuests.ts
│   │   ├── usePayments.ts
│   │   └── useBot.ts             ← Bot state machine logic
│   ├── stores/
│   │   ├── auth.ts               ← Pinia store
│   │   ├── dashboard.ts
│   │   └── bot.ts
│   └── utils/
│       ├── mpesa.ts              ← Payment formatting helpers
│       ├── templates.ts          ← Template definitions
│       └── export.ts             ← XLSX / PDF export
├── server/
│   └── api/                      ← Nuxt server routes (thin proxy to AWS API GW)
│       ├── flows/[...].ts
│       ├── rsvps/[...].ts
│       └── webhooks/
│           ├── whatsapp.ts       ← Incoming WhatsApp messages
│           └── mpesa.ts          ← Daraja M-Pesa callbacks
├── infrastructure/               ← AWS CDK
│   ├── bin/
│   │   └── app.ts
│   └── lib/
│       ├── stacks/
│       │   ├── api-stack.ts      ← API Gateway + Lambda
│       │   ├── data-stack.ts     ← DynamoDB tables + GSIs
│       │   ├── storage-stack.ts  ← S3 + CloudFront
│       │   └── auth-stack.ts     ← Cognito user pool
│       └── constructs/
│           ├── flow-lambda.ts
│           ├── reminder-lambda.ts
│           └── mpesa-lambda.ts
├── nuxt.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 5. Feature Modules

### 5.1 Flow Builder

The organiser creates a "Flow" — a configured event or membership template.

**Steps:**

1. **Choose template** — card grid of 7 categories × N templates
2. **Name & date** — event title, date/time, location
3. **Configure questions** — add/remove/reorder question cards (name always locked)
4. **Payment setup** — amount, method (STK / Paybill / Till / Pochi / Platform), timing
5. **Upload assets** — poster image, programme PDF, map pin URL
6. **Reminder timeline** — drag-and-drop timeline of automated messages
7. **Review & launch** — live preview + QR code generation

**State machine** for the flow builder lives in `useFlow.ts`. Persisted to DynamoDB via API Gateway on each step save (auto-save on step exit).

### 5.2 WhatsApp Bot Engine

The bot is a **data-driven state machine**. The event document defines the conversation steps; the Lambda executes them.

**State structure (per session):**

```typescript
interface BotSession {
  sessionId: string;
  phone: string;
  eventId: string;
  currentStep: number;
  responses: Record<string, string>;
  paymentStatus: "none" | "pending" | "paid";
  completedAt?: string;
}
```

**Step types:**

- `text_prompt` — free-text response
- `quick_reply` — button options (WhatsApp interactive buttons)
- `payment` — triggers STK Push
- `asset_delivery` — sends PDF/image/map
- `confirmation` — summary + ticket delivery

**Returning user detection:** On every incoming message, Lambda checks `UserProfiles` by phone. If `returningUser: true`, skip name/ID steps and inject stored values.

**WhatsApp API integration:** Meta Cloud API (via `@chatapi/whatsapp-cloud-api` or direct HTTP). Webhook verified and registered at Lambda URL.

### 5.3 M-Pesa Integration (Daraja API)

All M-Pesa credentials stored in Secrets Manager. Lambda retrieves at cold start.

**STK Push flow:**

1. Bot reaches payment step → Lambda calls Daraja `stkpush` endpoint
2. Guest receives PIN prompt on phone
3. Daraja sends callback to `POST /webhooks/mpesa`
4. Lambda matches callback: `phone + amount + timestamp window`
5. DynamoDB `PaymentRecords` updated, RSVP `paymentStatus` → `paid`
6. SNS notification triggers bot to send confirmation message

**Reconciliation for Paybill/Till/Pochi:**

- Guest pays with auto-generated account reference (e.g. `WED-GRACE`)
- Daraja C2B confirmation webhook fires
- Matched on phone number + account reference

**Platform Paybill model:**

- All funds collected to AWALI central Paybill
- Lambda calculates: `gross - platform_fee% = net`
- Disbursement Lambda runs post-event (or at configured milestone)
- Sends net amount to organiser's registered M-Pesa via B2C API

### 5.4 Reminder Engine

An **EventBridge Scheduler** rule is created per event per reminder touchpoint. Each rule targets a `ReminderLambda` with the payload:

```json
{
  "eventId": "ev_123",
  "trigger": "T-2days",
  "templateId": "wedding-rsvp",
  "audience": "confirmed_paid"
}
```

Lambda fetches all matching RSVPs from DynamoDB → sends WhatsApp template message to each → logs delivery status.

**WhatsApp template messages** (for outbound proactive reminders) are pre-approved by Meta before launch. All reminder text is locked at the structural level; names, dates, amounts are dynamic variables injected at send time.

### 5.5 Dashboard

**Overview page stats:**

- Total RSVPs (confirmed / pending / declined)
- Total collected (KES) / outstanding
- Active flows
- Today's check-ins

**Guest list view:**

- Searchable, filterable table (by payment status, check-in status)
- Inline status badges (emerald for paid, zinc for pending)
- Bulk actions: send reminder, export selected

**Check-in tool:**

- Opens full-screen on mobile (optimised for door staff)
- Camera access → QR scan via `@zxing/library`
- Lookup by name/phone if no ticket
- Shows: `Name · Seats · Payment status · [Check In]`
- Duplicate detection: second scan shows `ALREADY CHECKED IN` warning

**Export:**

- Guest list → `.xlsx` with columns: Name, Phone, Seats, Payment Status, Amount, Check-in Time
- Payment ledger → `.xlsx` with: M-Pesa Code, Amount, Timestamp, Method

### 5.6 Authentication (Cognito)

- Email + password sign-up / sign-in
- Google OAuth (social login)
- JWT stored in httpOnly cookie (Nuxt server handles token refresh)
- Organiser profile created in DynamoDB on first sign-in
- KDPA consent captured at registration

### 5.7 QR Code Generation

Generated client-side using the `qrcode` npm package. QR encodes:

```
https://awali.co.ke/s/<flowId>
```

The `/s/<flowId>` short URL redirects to the WhatsApp deep link:

```
https://wa.me/<botNumber>?text=START+<flowId>
```

QR downloadable as PNG. Suitable for printing on physical invitations, banners, posters.

---

## 6. Template Library

Templates are configuration objects (TypeScript), not hardcoded flows. Stored in `utils/templates.ts` and seeded to DynamoDB. The bot engine reads from DynamoDB — no code change needed to add a template.

**Categories (v1.0 launch targets):**

| Category          | Templates                                                                    | Priority |
| ----------------- | ---------------------------------------------------------------------------- | -------- |
| A · RSVP & Events | Wedding, Funeral/Burial, Corporate Dinner, Church Crusade, Sports Tournament | Launch   |
| C · Membership    | New Church Member, Chama Member, SACCO Member                                | Launch   |
| D · Payments      | Chama Monthly Contribution, Rent Collection, Harambee                        | Launch   |
| E · Feedback      | Post-Event Feedback                                                          | Launch   |
| G · Check-in      | Event Entrance, Hotel Check-in                                               | Launch   |
| B · Live Event    | Conference Info Bot, WiFi Delivery                                           | Phase 2  |
| F · Registration  | Job Application, Volunteer Sign-up                                           | Phase 2  |

---

## 7. Pricing Implementation

Pricing tiers stored in DynamoDB `Plans` table. Enforced in Lambda middleware:

- Per-event plan validated against `event.planType`
- Subscription plan enforced: active flow count vs. plan limit, monthly RSVP volume vs. contact limit
- Transaction fee % applied in payment Lambda before disbursement calculation

**Freemium tier (recommended addition):**

- 1 active flow, max 20 responses, RSVP only (no payment, no asset delivery)
- Bot footer: "Powered by AWALI"
- No subscription required — creates organic acquisition funnel

---

## 8. Compliance

### Kenya Data Protection Act 2019

**Before launch, mandatory:**

1. **Consent capture** — First bot message in every flow includes:
   > _"By continuing, you consent to AWALI storing your name and phone number to manage your RSVP. Your data is kept for 12 months. Reply STOP to opt out."_
2. **Opt-out / deletion** — Guest can reply `DELETE MY DATA` → Lambda soft-deletes profile, anonymises RSVP records
3. **Data retention** — EventBridge scheduled Lambda purges records older than 12 months (configurable per organiser)
4. **ODPC registration** — File with Office of the Data Protection Commissioner before accepting first payment

### WhatsApp Business Policy

- Bot persona name: "AWALI" (not a human name)
- All outbound proactive messages use Meta-approved templates
- Opt-in confirmation sent before any marketing/reminder message
- Unsubscribe path present in every outbound message

---

## 9. Pre-Launch Checklist

### Critical (before any real money)

- [ ] Cancellation + refund flow (organiser dashboard button + guest bot path)
- [ ] Waitlist management (auto-enrol when capacity hit, auto-notify on slot open)
- [ ] Event reschedule broadcast (organiser action → mass WhatsApp notification)
- [ ] KDPA consent language in all bot flows
- [ ] ODPC registration filed
- [ ] All reminder templates pre-approved by Meta
- [ ] Daraja API sandbox → production credential swap
- [ ] STK Push failure handling (retry, fallback to manual Paybill instructions)

### Important (before scaling)

- [ ] Ticket transfer flow
- [ ] Group / family RSVP path ("RSVPing for 3 people")
- [ ] Co-organiser dashboard access (view-only role minimum)
- [ ] Duplicate payment detection
- [ ] WhatsApp API per-message cost modelling in pricing

---

## 10. Development Phases

### Phase 0 — Foundation (Week 1–2)

- Nuxt project scaffold with shadcn-vue + Tailwind zinc theme
- CDK stacks: data (DynamoDB), auth (Cognito), storage (S3)
- Cognito sign-up / sign-in flow
- Dashboard shell (sidebar + layout)

### Phase 1 — Core Flow (Week 3–4)

- Flow builder (template picker → 7-step builder)
- WhatsApp simulation (bot state machine, all step types)
- QR code generation
- Basic dashboard (stat cards, guest list table)

### Phase 2 — Payments (Week 5–6)

- Daraja STK Push integration (sandbox)
- M-Pesa callback webhook + reconciliation
- Payment status in dashboard
- Platform Paybill disbursement logic

### Phase 3 — Reminder Engine (Week 7)

- EventBridge Scheduler integration
- WhatsApp template message sending
- Delivery status logging
- No-show nudge automation

### Phase 4 — Check-in + Export (Week 8)

- QR scanner check-in tool (mobile-optimised)
- Guest list XLSX export
- Payment ledger export
- Certificate PDF generation

### Phase 5 — Launch Prep (Week 9–10)

- KDPA compliance (consent flows, deletion endpoint)
- Meta template pre-approvals
- Daraja sandbox → production
- Performance testing (500 concurrent RSVPs)
- ODPC registration

---

## 11. Environment Variables

```env
# AWS
AWS_REGION=eu-west-2
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
DYNAMODB_TABLE_PREFIX=awali-prod

# Cognito
COGNITO_USER_POOL_ID=
COGNITO_CLIENT_ID=

# WhatsApp
WHATSAPP_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_VERIFY_TOKEN=

# M-Pesa (Daraja)
MPESA_CONSUMER_KEY=
MPESA_CONSUMER_SECRET=
MPESA_SHORTCODE=
MPESA_PASSKEY=
MPESA_CALLBACK_URL=

# App
NUXT_PUBLIC_APP_URL=https://awali.co.ke
NUXT_SESSION_SECRET=
```

All production secrets stored in **AWS Secrets Manager**. Lambda reads at cold start. Local development uses `.env` file (gitignored).

---

_AWALI — kila tukio linaanza hapa. Every gathering starts here._
_Project Specification · v2.0 · Nuxt 3 + AWS CDK_
