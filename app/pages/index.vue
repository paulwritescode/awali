<template>
  <div>
    <!-- Hero Band (white) -->
    <section class="py-16 px-8">
      <div class="max-w-6xl mx-auto text-center">
        <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">WhatsApp-native event management</p>
        <h1 class="text-4xl md:text-[52px] font-bold text-zinc-950 leading-tight mb-6">
          Stop chasing RSVPs.<br class="hidden md:block"> Start collecting them.
        </h1>
        <p class="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
          AWALI automates RSVPs, M-Pesa payments, and reminders through WhatsApp. Your guests never download an app.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <NuxtLink to="/auth/register" class="bg-black text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors">
            Create your first flow — free
          </NuxtLink>
          <a href="#how-it-works" class="rounded-full bg-zinc-100 text-zinc-600 px-6 py-3 text-sm font-medium hover:bg-zinc-200 transition-colors">
            See how it works
          </a>
        </div>
      </div>
    </section>

    <!-- Features Band (white canvas, zinc-100 cards) -->
    <section id="features" class="py-16 px-8">
      <div class="max-w-6xl mx-auto">
        <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3 text-center">Features</p>
        <h2 class="text-3xl font-bold text-zinc-950 text-center mb-12">Everything you need to run a gathering</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="feature in features" :key="feature.title" class="bg-zinc-100 rounded-xl p-6">
            <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4">
              <HugeiconsIcon :icon="feature.icon" class="w-5 h-5 text-zinc-950" />
            </div>
            <h3 class="text-lg font-bold text-zinc-950 mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-zinc-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works Band (black) -->
    <section id="how-it-works" class="bg-black py-16 px-8">
      <div class="max-w-6xl mx-auto">
        <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3 text-center">How it works</p>
        <h2 class="text-3xl font-bold text-white text-center mb-12">Three steps. Zero apps to download.</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(step, i) in steps" :key="step.title" class="text-center">
            <div class="w-12 h-12 rounded-full bg-white text-zinc-950 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
              {{ i + 1 }}
            </div>
            <h3 class="text-lg font-bold text-white mb-2">{{ step.title }}</h3>
            <p class="text-sm text-white/70">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Templates Band (zinc-100 section break) -->
    <section class="bg-zinc-100 py-16 px-8">
      <div class="max-w-6xl mx-auto">
        <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3 text-center">Templates</p>
        <h2 class="text-3xl font-bold text-zinc-950 text-center mb-12">Built for Kenyan gatherings</h2>

        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="template in templates" :key="template" class="rounded-full bg-white border border-zinc-200 text-zinc-950 text-sm font-medium px-4 py-2">
            {{ template }}
          </span>
        </div>
      </div>
    </section>

    <!-- Pricing Band (white) -->
    <section id="pricing" class="py-16 px-8">
      <div class="max-w-6xl mx-auto">
        <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3 text-center">Pricing</p>
        <h2 class="text-3xl font-bold text-zinc-950 text-center mb-4">Simple, transparent pricing</h2>
        <p class="text-sm text-zinc-600 text-center mb-12">Start free. Pay as you grow.</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div v-for="plan in plans" :key="plan.name" class="rounded-xl p-6" :class="plan.featured ? 'bg-black text-white' : 'bg-zinc-100'">
            <p class="text-xs font-semibold tracking-widest uppercase mb-2" :class="plan.featured ? 'text-white/60' : 'text-zinc-400'">{{ plan.name }}</p>
            <p class="text-3xl font-bold mb-1">{{ plan.price }}</p>
            <p class="text-sm mb-6" :class="plan.featured ? 'text-white/60' : 'text-zinc-600'">{{ plan.period }}</p>
            <ul class="space-y-2 mb-6">
              <li v-for="feat in plan.features" :key="feat" class="text-sm flex items-start gap-2" :class="plan.featured ? 'text-white/80' : 'text-zinc-600'">
                <HugeiconsIcon :icon="Tick02Icon" class="w-4 h-4 mt-0.5 shrink-0" />
                <span>{{ feat }}</span>
              </li>
            </ul>
            <NuxtLink
              to="/auth/register"
              class="block text-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
              :class="plan.featured ? 'bg-white text-zinc-950 hover:bg-zinc-100' : 'bg-black text-white hover:bg-zinc-800'"
            >
              Get started
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  WhatsappIcon,
  MoneyReceive02Icon,
  Notification03Icon,
  ChartBarLineIcon,
  QrCodeIcon,
  GridViewIcon,
  Tick02Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue'

const features = [
  { icon: WhatsappIcon, title: 'WhatsApp RSVPs', description: 'Guests respond via WhatsApp. No app downloads, no Google Forms. Just a conversation.' },
  { icon: MoneyReceive02Icon, title: 'M-Pesa Payments', description: 'Collect contributions via STK Push. Auto-reconcile. See who paid in real-time.' },
  { icon: Notification03Icon, title: 'Smart Reminders', description: 'Automated WhatsApp reminders at the right time. No more chasing people in groups.' },
  { icon: ChartBarLineIcon, title: 'Live Dashboard', description: 'Track RSVPs, payments, and check-ins from one clean dashboard.' },
  { icon: QrCodeIcon, title: 'QR Check-in', description: 'Generate QR codes for tickets. Scan at the door with your phone.' },
  { icon: GridViewIcon, title: 'Template Library', description: 'Pre-built flows for weddings, funerals, chamas, church events, and more.' },
]

const steps = [
  { title: 'Create a flow', description: 'Pick a template, configure your questions, set up payment, and launch.' },
  { title: 'Share the QR code', description: 'Print it on invitations, share in WhatsApp groups, or post on social media.' },
  { title: 'Watch it work', description: 'Guests RSVP and pay via WhatsApp. You track everything from your dashboard.' },
]

const templates = [
  'Wedding RSVP', 'Funeral/Burial', 'Chama Contribution', 'Church Crusade',
  'Corporate Dinner', 'Rent Collection', 'Harambee', 'Sports Tournament',
  'SACCO Member', 'Post-Event Feedback', 'Event Check-in',
]

const plans = [
  {
    name: 'Free',
    price: 'KES 0',
    period: 'forever',
    featured: false,
    features: ['1 active flow', 'Up to 20 responses', 'RSVP only (no payments)', 'AWALI branding'],
  },
  {
    name: 'Per Event',
    price: 'KES 500',
    period: 'per event',
    featured: true,
    features: ['Unlimited responses', 'M-Pesa payments', 'Reminders & check-in', 'Export guest list', 'No branding'],
  },
  {
    name: 'Pro',
    price: 'KES 2,500',
    period: 'per month',
    featured: false,
    features: ['Unlimited flows', '1,000 contacts/month', 'Priority support', 'Custom branding', 'API access'],
  },
]
</script>
