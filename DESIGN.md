# AWALI Design System

> _awali_ — the beginning; the origin; the very first step.

**Stack:** Nuxt 3 · Vue 3 · shadcn-vue · Tailwind CSS · Hugeicons

---

## 1. Philosophy

AWALI's visual language is **Kenyan Tech-Minimalism** expressed through an Uber-inspired black-and-white duet. The system uses restraint as a signal of trust — no gradient theatrics, no colour noise. Every surface is black/white/gray. Every CTA is black. Emerald green is reserved as a semantic accent for payment/success states only. The pill is the single geometric signature.

> **One rule to remember:** if it converts, it's black. If it informs, it's gray. If it confirms success, it's emerald.

---

## 2. Colour

### 2.0 The Uber Colour System — Reference

The Uber colour system is a **two-family system** — black and its darkened offsets for surfaces and text that convert or command; white and its lightened offsets for surfaces and text that inform or contain. There is no third colour family anywhere on the page.

#### Family 1 — Black and Its Offsets

| Token | Hex | Tailwind | Role |
|---|---|---|---|
| Pure Black | `#000000` | `bg-black` / `bg-zinc-950` | Nav bar, primary CTA pills, footer |
| Near Black | `#1a1a1a` | `text-zinc-950` | Headlines, card titles, form labels |
| Dark Charcoal | `#3d3d3d` | `text-zinc-600` | Body copy, nav links, secondary text |

#### Family 2 — White and Its Offsets

| Token | Hex | Tailwind | Role |
|---|---|---|---|
| Pure White | `#ffffff` | `bg-white` | Page canvas, form card, secondary CTA pills |
| Off White | `#f3f3f3` | `bg-zinc-100` | Input field backgrounds |
| Soft Gray | `#efefef` | `bg-zinc-100` | Feature card backgrounds, section bands |
| Pressed Gray | `#e2e2e2` | `border-zinc-200` | Borders, dividers, pressed states |

---

### 2.1 Core Palette (AWALI Mapping)

| Role                 | Token              | Tailwind Class      | Hex       |
| -------------------- | ------------------ | ------------------- | --------- |
| **Page background**  | `bg-base`          | `bg-white`          | `#ffffff` |
| **Card surface**     | `bg-card`          | `bg-zinc-100`       | `#efefef` |
| **Elevated card**    | `bg-card-elevated` | `bg-white` + shadow | `#ffffff` |
| **Input fill**       | `bg-input`         | `bg-zinc-100`       | `#f3f3f3` |
| **Divider / border** | `border-default`   | `border-zinc-200`   | `#e2e2e2` |
| **Dark band / nav**  | `bg-dark`          | `bg-black`          | `#000000` |
| **Footer**           | `bg-footer`        | `bg-black`          | `#000000` |

### 2.2 Text Hierarchy

| Role                   | Tailwind Class  | Hex       | Use                    |
| ---------------------- | --------------- | --------- | ---------------------- |
| **Primary text**       | `text-zinc-950` | `#1a1a1a` | Headlines, labels      |
| **Secondary text**     | `text-zinc-600` | `#3d3d3d` | Body copy, nav links   |
| **Tertiary / caption** | `text-zinc-400` | `#a1a1aa` | Timestamps, metadata   |
| **Placeholder**        | `text-zinc-300` | `#d4d4d8` | Input placeholders     |
| **On-dark text**       | `text-white`    | `#ffffff` | Text on dark bands     |

**On black surfaces:** there is no secondary text colour — everything is white. Hierarchy on dark surfaces is conveyed by font weight and size, not colour.

### 2.3 Emerald — Reserved Accent

Emerald green is the **only chromatic colour** in the system. Use it exclusively for:

- Payment confirmed / success state badges
- "Paid" status chips
- Check-in confirmed indicators

> **Do not use emerald anywhere else.** It must feel earned — a confirmation signal, never decoration.

| Token                  | Tailwind           | Hex       |
| ---------------------- | ------------------ | --------- |
| `accent-success`       | `bg-emerald-500`   | `#10b981` |
| `accent-success-light` | `bg-emerald-50`    | `#ecfdf5` |
| `accent-success-text`  | `text-emerald-700` | `#047857` |

### 2.4 Pill Colour Hierarchy

The pill is the brand's interactive signature. Its colour encodes conversion priority:

| Pill type | Background | Text | Border | Used for |
|---|---|---|---|---|
| **Primary** | `bg-black` | `text-white` | none | "See prices", "Sign up" — the only CTA on a surface |
| **Secondary** | `bg-white` | `text-zinc-950` | none | "Log in", "Schedule ahead" — paired alongside a primary on dark surfaces |
| **Tertiary / chip** | `bg-zinc-100` | `text-zinc-600` | `border-zinc-200` | "Details", "Pickup now" — action within a card, low urgency |
| **Pressed** | `bg-zinc-200` | `text-zinc-600` | none | Active/pressed state of tertiary pills |

### 2.5 The Nesting Rule — Depth Without Shadows

Depth is created by stepping surfaces darker as you go deeper into a component:

```
Page canvas #ffffff ← outermost, lightest
  Feature card #efefef ← one step darker — visible by contrast alone
    "Details" pill #ffffff ← bounces back to white — needs a border now

Page canvas #ffffff ← outermost
  Form card #ffffff ← same value — separated by shadow instead
    Input rows #f3f3f3 ← one step darker — signals "editable"

Nav bar #000000 ← polarity flip — darkest surface
  Nav text #ffffff ← inverted — light on dark
  "Log in" pill #ffffff ← white pill on black bar = secondary CTA
```

**The single principle:** when a child element has the same surface colour as its parent, it needs either a border or a shadow to be visible. When it has a different surface colour, contrast does the work alone.

### 2.6 Dark Mode

Dark mode inverts the system. The page becomes `bg-zinc-950`, cards become `bg-zinc-900`, text becomes `text-zinc-50`. Emerald semantics remain identical.

| Light                 | Dark              |
| --------------------- | ----------------- |
| `bg-white`            | `bg-zinc-950`     |
| `bg-zinc-100` (card)  | `bg-zinc-900`     |
| `border-zinc-200`     | `border-zinc-800` |
| `text-zinc-950`       | `text-zinc-50`    |
| `text-zinc-600`       | `text-zinc-400`   |

---

## 3. Typography

**No Inter. No Roboto.** The type system uses two faces:

| Role               | Family           | Weight    | Notes                                                   |
| ------------------ | ---------------- | --------- | ------------------------------------------------------- |
| **Display / Hero** | `DM Sans`        | 700       | Headlines, section titles. Geometric, confident.        |
| **Body / UI**      | `DM Sans`        | 400 / 500 | All labels, body, buttons. Same family — clean pairing. |
| **Mono / Codes**   | `JetBrains Mono` | 400       | Reference numbers, M-Pesa codes, IDs only.              |

> Import via `@nuxtjs/google-fonts` or Nuxt fonts module. DM Sans is clean and geometric enough to echo the Uber feel without being Inter.

### Type Scale

| Token         | Size | Weight | Line Height | Use                      |
| ------------- | ---- | ------ | ----------- | ------------------------ |
| `display-xxl` | 52px | 700    | 1.15        | Landing hero headline    |
| `display-xl`  | 36px | 700    | 1.2         | Dashboard section titles |
| `display-lg`  | 28px | 700    | 1.25        | Card headlines           |
| `display-md`  | 22px | 700    | 1.3         | Sub-card headings        |
| `display-sm`  | 18px | 600    | 1.35        | Table column headers     |
| `body-lg`     | 18px | 400    | 1.6         | Lead paragraph copy      |
| `body-md`     | 16px | 400    | 1.5         | Default body             |
| `body-sm`     | 14px | 400    | 1.4         | Captions, metadata       |
| `caption`     | 12px | 400    | 1.4         | Fine print, timestamps   |
| `button`      | 15px | 500    | 1           | All button labels        |
| `label`       | 13px | 500    | 1           | Form labels, chip labels |

**Rules:**

- Sentence-case everywhere. No all-caps headlines.
- Eyebrow labels (`CATEGORY A · EVENTS`) use `text-xs font-semibold tracking-widest text-zinc-400`.
- Never letter-space display faces.

---

## 4. Spacing

Base unit: **4px**. All spacing is multiples of 4.

| Token      | Value | Tailwind          |
| ---------- | ----- | ----------------- |
| `space-1`  | 4px   | `p-1` / `gap-1`   |
| `space-2`  | 8px   | `p-2` / `gap-2`   |
| `space-3`  | 12px  | `p-3` / `gap-3`   |
| `space-4`  | 16px  | `p-4` / `gap-4`   |
| `space-5`  | 20px  | `p-5` / `gap-5`   |
| `space-6`  | 24px  | `p-6` / `gap-6`   |
| `space-8`  | 32px  | `p-8` / `gap-8`   |
| `space-12` | 48px  | `p-12` / `gap-12` |
| `space-16` | 64px  | `p-16` / `gap-16` |

**Section rhythm:** marketing/landing sections use `py-16 px-8`; dashboard content areas use `p-6`; card interiors use `p-6`; chip/badge padding uses `px-3 py-1`.

---

## 5. Shape System

The **pill** is the brand signature. Every interactive element is a pill (`rounded-full`) or a card (`rounded-xl`).

| Token          | Radius | Tailwind       | Use                                   |
| -------------- | ------ | -------------- | ------------------------------------- |
| `rounded-none` | 0      | `rounded-none` | Full-bleed bands, footer              |
| `rounded-md`   | 8px    | `rounded-md`   | Form inputs                           |
| `rounded-lg`   | 12px   | `rounded-lg`   | Small chips (secondary use)           |
| `rounded-xl`   | 16px   | `rounded-xl`   | Cards, content containers             |
| `rounded-2xl`  | 20px   | `rounded-2xl`  | Large modal surfaces                  |
| `rounded-full` | 999px  | `rounded-full` | **All buttons, all chips, all pills** |

---

## 6. Components

### 6.1 Buttons

**Primary** — Black pill. The only conversion target.

```html
<button
  class="bg-zinc-950 text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors"
>
  Create Flow
</button>
```

**Secondary** — White pill with zinc border.

```html
<button
  variant="outline"
  class="rounded-full border-zinc-200 text-zinc-900 px-5 py-2.5"
>
  Learn More
</button>
```

**Ghost / Subtle** — Zinc-100 pill, no border.

```html
<button
  variant="ghost"
  class="rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 px-4 py-2"
>
  Filter
</button>
```

**Destructive** — Stays black. No red. Destructive actions use a zinc-950 pill with a modal confirmation step.

**Icon button** — Circular, 40×40.

```html
<button
  size="icon"
  class="rounded-full bg-zinc-100 h-10 w-10 hover:bg-zinc-200"
>
  <Icon name="hugeicons:plus-sign" />
</button>
```

### 6.2 Cards

**Default card** — Soft gray surface, xl radius, no border needed (contrast with white canvas does the work).

```html
<Card class="bg-zinc-100 rounded-xl p-6" />
```

**Elevated card** — White + shadow (for floating elements, modals, form cards).

```html
<Card class="bg-white rounded-xl shadow-sm p-6" />
```

**Dark card** — Black surface (for promo bands, highlighted stats).

```html
<Card class="bg-black text-white rounded-xl p-6" />
```

**Stat card** — Used in dashboard overview row.

```html
<Card class="bg-zinc-100 rounded-xl p-6">
  <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
    Total RSVPs
  </p>
  <p class="text-3xl font-bold text-zinc-950 mt-1">247</p>
  <p class="text-sm text-zinc-600 mt-1">+12 today</p>
</Card>
```

### 6.3 Badges / Status Chips

```html
<!-- Default -->
<Badge
  class="rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium px-2.5 py-0.5"
  >Pending</Badge
>

<!-- Paid / Success — ONLY place emerald appears -->
<Badge
  class="rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-0.5"
  >Paid ✓</Badge
>

<!-- Active / Live -->
<Badge
  class="rounded-full bg-zinc-950 text-white text-xs font-medium px-2.5 py-0.5"
  >Live</Badge
>
```

### 6.4 Form Inputs

```html
<input
  class="bg-zinc-100 border-transparent rounded-md px-4 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:ring-1 focus:ring-zinc-950 focus:bg-white transition-colors"
/>
```

### 6.5 Data Tables (Dashboard)

- Header row: `bg-zinc-50 border-b border-zinc-200`, text `text-xs font-semibold tracking-widest text-zinc-500 uppercase`
- Body rows: `bg-white border-b border-zinc-100`, text `text-sm text-zinc-700`
- Hover row: `hover:bg-zinc-50`
- Paid cell: emerald badge (the exception)
- Action column: ghost icon buttons

### 6.6 Navigation

#### Sidebar (Desktop, Dashboard)

```
Width: 256px (w-64)
Background: bg-white border-r border-zinc-200 (light) / bg-zinc-950 border-r border-zinc-800 (dark)
Logo area: h-16 flex items-center px-6 border-b border-zinc-200
Nav items: rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950
Active item: bg-zinc-950 text-white (light) / bg-white text-zinc-950 (dark)
Icons: Hugeicons, 18px, mr-3
```

#### Top Nav (Landing / Marketing pages)

```
bg-white/80 backdrop-blur border-b border-zinc-200 sticky top-0 z-50
Max-width: max-w-6xl mx-auto px-8 h-16 flex items-center justify-between
Logo: text-xl font-bold text-zinc-950
Links: text-sm font-medium text-zinc-600 hover:text-zinc-950
CTA: bg-zinc-950 text-white rounded-full px-4 py-2 text-sm
```

#### Mobile Nav

Hamburger icon → full-screen overlay (`fixed inset-0 bg-white z-50`) with stacked nav items. Theme toggle accessible here too.

### 6.7 WhatsApp Bot Simulation UI

The sim mimics a mobile WhatsApp chat window embedded in a card.

```
Container: max-w-sm mx-auto bg-[#e5ddd5] dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-xl
Header: bg-zinc-950 text-white h-14 flex items-center px-4 gap-3
  - Avatar: w-8 h-8 rounded-full bg-zinc-700
  - Bot name: text-sm font-semibold
  - Status: text-xs text-zinc-400

Messages: p-4 space-y-2 min-h-64 max-h-96 overflow-y-auto

Bot bubble: bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%] text-sm text-zinc-900 shadow-sm
User bubble: bg-zinc-950 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] text-sm ml-auto

Quick reply pills: flex flex-wrap gap-2 mt-3
  - bg-white border border-zinc-200 rounded-full px-3 py-1.5 text-sm text-zinc-900 hover:bg-zinc-950 hover:text-white cursor-pointer

STK Push modal: absolute overlay on the sim, card inside with M-Pesa green header and PIN entry keypad
```

### 6.8 QR Code Display

```html
<div
  class="bg-white rounded-xl border border-zinc-200 p-6 flex flex-col items-center gap-4"
>
  <div class="w-40 h-40 bg-zinc-100 rounded-lg" />
  <!-- QR rendered here -->
  <p class="text-sm font-medium text-zinc-700">Scan to RSVP</p>
  <button class="rounded-full bg-zinc-950 text-white text-sm px-4 py-2">
    Download QR
  </button>
</div>
```

---

## 7. Icons

All icons use **Hugeicons** via the Nuxt Hugeicons integration.

```html
<Icon name="hugeicons:calendar-03" class="w-5 h-5 text-zinc-500" />
<Icon name="hugeicons:chart-bar-01" class="w-5 h-5" />
<Icon name="hugeicons:qr-code" class="w-5 h-5" />
<Icon name="hugeicons:whatsapp" class="w-5 h-5" />
<Icon name="hugeicons:money-receive-02" class="w-5 h-5" />
```

Icon sizing:

- Sidebar nav: `w-5 h-5` (20px)
- Button icons: `w-4 h-4` (16px)
- Stat card icons: `w-6 h-6` (24px)
- Empty state illustrations: `w-16 h-16` (64px), `text-zinc-300`

---

## 8. Elevation

| Level  | CSS         | Use                              |
| ------ | ----------- | -------------------------------- |
| Flat   | no shadow   | Default cards, table rows        |
| Subtle | `shadow-sm` | Dashboard cards, inputs on focus |
| Card   | `shadow-md` | Modals, dropdowns                |
| Float  | `shadow-xl` | WhatsApp sim, floating panels    |

---

## 9. Motion (Vue + CSS)

Use `<Transition>` and `<TransitionGroup>` for all view changes. No animation library required — CSS transitions are sufficient for the minimal aesthetic.

```css
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* List items (RSVP rows, guest list) */
.list-enter-active {
  transition: all 0.25s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-8px);
}
```

Micro-interactions:

- All buttons: `transition-colors duration-150`
- Cards on hover (where clickable): `transition-shadow duration-150 hover:shadow-md`
- Sidebar nav items: `transition-colors duration-100`

---

## 10. Layout Patterns

### Dashboard Shell

```
┌──────────────────────────────────────────┐
│ Sidebar (256px) │ Main content area       │
│                 │  ┌─────────────────┐    │
│  Logo           │  │ Page header     │    │
│  ─────────────  │  │ (title + CTAs)  │    │
│  Nav items      │  ├─────────────────┤    │
│                 │  │ Stat row (4up)  │    │
│                 │  ├─────────────────┤    │
│  ─────────────  │  │ Content area    │    │
│  Theme toggle   │  │ (table / cards) │    │
│  User profile   │  └─────────────────┘    │
└──────────────────────────────────────────┘
```

### Mobile Dashboard

Sidebar collapses to bottom tab bar (5 items max) or hamburger drawer. Content: single column, `px-4 py-6`.

### Landing Page Band Rhythm

```
Black band — nav bar
White band — hero (form card + editorial image)
White band — "Explore what you can do" section
Soft gray band — section break (bg-zinc-100)
Black band — footer
```

The soft gray band is the only mid-page colour break. Everything else is black or white.

---

## 11. Do's and Don'ts

### Do

- Use `rounded-full` on every button, chip, and pill
- Use `bg-black` for all primary CTAs
- Use `bg-white` as the page canvas — cards are `bg-zinc-100` and contrast alone creates depth
- Use `bg-black` bands for nav and footer
- Use `bg-zinc-100` for section breaks and card surfaces
- Reserve emerald exclusively for payment/success confirmation
- Use borders (`border-zinc-200`) only when a child has the same colour as its parent

### Don't

- Don't introduce any colour other than black, white, zinc offsets, and emerald
- Don't use `rounded-lg` on buttons — only cards get `rounded-xl`, buttons get `rounded-full`
- Don't letter-space display headlines
- Don't use shadows on flat cards — shadow is only for elevated/floating elements (form cards, modals)
- Don't use Inter or any generic system font — DM Sans only
- Don't put emerald on anything that isn't a success/confirmation signal
- Don't use gradients or decorative colour anywhere

---

_AWALI Design System · v2.0 · Built for Kenya. WhatsApp-native. AWS-powered._

---

## Appendix A — Uber Colour System Extraction

> uber.com/ke/en · May 2026 · Black, White and their offsets

### Card-by-Card Colour Anatomy

#### Card 1 — Ride Request Form Card (hero, left column)

The only **elevated** surface on the page. White on white, separated by a drop shadow.

| Layer | Colour | Hex | Role |
|---|---|---|---|
| Outer card background | White | `#ffffff` | The card itself |
| Card separation | Drop shadow | `rgba(0,0,0,0.13)` | What makes it "float" |
| Input row fill | Off-white | `#f3f3f3` | Input fields |
| Input text | Charcoal | `#3d3d3d` | Placeholder label text |
| Input border/divider | Pressed gray | `#e2e2e2` | Divider between input rows |
| Primary CTA pill | Black | `#000000` | "See prices" |
| CTA pill text | White | `#ffffff` | "See prices" label |

#### Cards 3, 4, 5 — Feature Cards: Ride / Reserve / Electric Boda

| Layer | Colour | Hex | Role |
|---|---|---|---|
| Card background | Soft gray | `#efefef` | The card surface |
| Card sits on | White canvas | `#ffffff` | Contrast alone — no border needed |
| Card title | Near-black | `#1a1a1a` | "Ride" / "Reserve" / "Electric Boda" |
| Card body | Charcoal | `#3d3d3d` | One-line description |
| "Details" pill background | White | `#ffffff` | Steps back to white inside gray card |
| "Details" pill border | Pressed gray | `#e2e2e2` | Required — white pill on gray needs border |
| "Details" pill text | Near-black | `#1a1a1a` | |

### Surface Stacking (Page Layers)

```
Layer 0 — Page background #ffffff Pure white canvas
Layer 1 — Feature cards #efefef Soft gray, sits on canvas
Layer 2 — Input rows #f3f3f3 Off-white, inside a white card
Layer 3 — Pill borders #e2e2e2 Pressed gray, defines edges
Layer 4 — Nav bar #000000 Pure black, commands the top
Layer 5 — Primary CTA pill #000000 Pure black, commands conversion
```

### Text Pairing Rules

| Surface background | Primary text | Secondary text |
|---|---|---|
| `#ffffff` white | `#1a1a1a` near-black | `#3d3d3d` charcoal |
| `#efefef` soft gray | `#1a1a1a` near-black | `#3d3d3d` charcoal |
| `#f3f3f3` off-white | `#1a1a1a` near-black | `#3d3d3d` charcoal |
| `#000000` black | `#ffffff` white | `#ffffff` white (hierarchy via weight/size) |

---

*Extracted from uber.com/ke/en screenshot · May 2026*
