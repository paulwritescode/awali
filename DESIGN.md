# AWALI Design System

> _awali_ — the beginning; the origin; the very first step.

**Stack:** Nuxt 3 · Vue 3 · shadcn-vue · Tailwind CSS · Hugeicons

---

## 1. Philosophy

AWALI's visual language is **Kenyan Tech-Minimalism** expressed through an Uber-inspired black-and-white duet. The system uses restraint as a signal of trust — no gradient theatrics, no colour noise. Every surface is zinc or white. Every CTA is black. Emerald green is reserved as a semantic accent (see §2.3 — guidance to follow). The pill is the single geometric signature.

> **One rule to remember:** if it converts, it's black. If it informs, it's zinc. If it confirms success, it's emerald.

---

## 2. Colour

### 2.1 Core Palette (Tailwind Zinc + Black/White)

| Role                 | Token              | Tailwind Class      | Hex       |
| -------------------- | ------------------ | ------------------- | --------- |
| **Page background**  | `bg-base`          | `bg-zinc-50`        | `#fafafa` |
| **Card surface**     | `bg-card`          | `bg-white`          | `#ffffff` |
| **Elevated card**    | `bg-card-elevated` | `bg-white` + shadow | `#ffffff` |
| **Subtle fill**      | `bg-muted`         | `bg-zinc-100`       | `#f4f4f5` |
| **Input fill**       | `bg-input`         | `bg-zinc-100`       | `#f4f4f5` |
| **Divider / border** | `border-default`   | `border-zinc-200`   | `#e4e4e7` |
| **Dark band**        | `bg-dark`          | `bg-zinc-950`       | `#09090b` |
| **Footer**           | `bg-footer`        | `bg-black`          | `#000000` |

### 2.2 Text Hierarchy (Zinc depths)

| Role                   | Tailwind Class  | Hex       | Use                    |
| ---------------------- | --------------- | --------- | ---------------------- |
| **Primary text**       | `text-zinc-950` | `#09090b` | Headlines, labels      |
| **Secondary text**     | `text-zinc-600` | `#52525b` | Subheadings, body      |
| **Tertiary / caption** | `text-zinc-400` | `#a1a1aa` | Timestamps, metadata   |
| **Placeholder**        | `text-zinc-300` | `#d4d4d8` | Input placeholders     |
| **On-dark text**       | `text-white`    | `#ffffff` | Text on dark bands     |
| **Muted on dark**      | `text-zinc-400` | `#a1a1aa` | Footer secondary links |

### 2.3 Emerald — Reserved Accent

Emerald green is the **only chromatic colour** in the system. Use it exclusively for:

- Payment confirmed / success state badges
- "Paid" status chips
- Check-in confirmed indicators
- Active navigation indicator (sidebar left-border)

> **Do not use emerald anywhere else until explicitly guided.** It must feel earned — a confirmation signal, never decoration.

| Token                  | Tailwind           | Hex       |
| ---------------------- | ------------------ | --------- |
| `accent-success`       | `bg-emerald-500`   | `#10b981` |
| `accent-success-light` | `bg-emerald-50`    | `#ecfdf5` |
| `accent-success-text`  | `text-emerald-700` | `#047857` |

### 2.4 Dark Mode

Dark mode inverts the zinc/white duet. The page becomes `bg-zinc-950`, cards become `bg-zinc-900`, text becomes `bg-zinc-50`. Emerald semantics remain identical. The theme toggle lives in the dashboard sidebar header.

| Light                 | Dark              |
| --------------------- | ----------------- |
| `bg-zinc-50`          | `bg-zinc-950`     |
| `bg-white` (card)     | `bg-zinc-900`     |
| `bg-zinc-100` (muted) | `bg-zinc-800`     |
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

**Default card** — White surface, xl radius, subtle border.

```html
<Card class="bg-white rounded-xl border border-zinc-200 p-6" />
```

**Elevated card** — White + shadow (for floating elements, modals).

```html
<Card class="bg-white rounded-xl border border-zinc-200 shadow-sm p-6" />
```

**Dark card** — Zinc-950 surface (for promo bands, highlighted stats).

```html
<Card class="bg-zinc-950 text-white rounded-xl p-6" />
```

**Stat card** — Used in dashboard overview row.

```html
<Card class="bg-white rounded-xl border border-zinc-200 p-6">
  <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
    Total RSVPs
  </p>
  <p class="text-3xl font-bold text-zinc-950 mt-1">247</p>
  <p class="text-sm text-zinc-500 mt-1">+12 today</p>
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
White hero band (headline + form card)
  ↓
White features band (3-col card grid)
  ↓
Zinc-950 promo band (dark — "How it works")
  ↓
White template library band
  ↓
Zinc-950 pricing band (dark cards on dark bg)
  ↓
Black footer
```

---

## 11. Do's and Don'ts

### Do

- Use `rounded-full` on every button, chip, and pill
- Use `bg-zinc-950` for all primary CTAs
- Keep cards `bg-white` on a `bg-zinc-50` page — the contrast is the depth cue
- Use dark bands mid-page (`bg-zinc-950`) to break white-on-white rhythm
- Reserve emerald exclusively for payment/success confirmation

### Don't

- Don't introduce any colour other than zinc, black, white, and emerald
- Don't use `rounded-lg` on buttons — only cards get `rounded-xl`, buttons get `rounded-full`
- Don't letter-space display headlines
- Don't use shadow on every card — flat is the default; shadow is for elevation
- Don't use Inter or any generic system font — DM Sans only
- Don't put emerald on anything that isn't a success/confirmation signal

---

_AWALI Design System · v1.0 · Built for Kenya. WhatsApp-native. AWS-powered._
