import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  compatibilityDate: '2025-01-01',
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['shadcn-nuxt', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  shadcn: {
    prefix: 'Ui',
    componentDir: '@/components/ui',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'AWALI — WhatsApp RSVP & M-Pesa Payments for Events in Kenya',
      meta: [
        { name: 'description', content: 'Collect RSVPs, M-Pesa payments, and manage event check-ins via WhatsApp. No app downloads. Built for weddings, funerals, harambees, chamas, and corporate events in Kenya.' },
        { name: 'keywords', content: 'RSVP Kenya, WhatsApp RSVP, M-Pesa event payments, wedding invitation Kenya, harambee contributions online, chama contribution collection, event check-in QR code, digital invitation Kenya, collect money M-Pesa event, funeral contributions online, birthday party invitations Kenya' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'AWALI' },
        { property: 'og:title', content: 'AWALI — WhatsApp RSVP & M-Pesa Payments for Events in Kenya' },
        { property: 'og:description', content: 'Automate RSVPs, collect M-Pesa payments, and manage guest check-ins through WhatsApp. Built for Kenyan gatherings.' },
        { property: 'og:url', content: 'https://awali.co.ke' },
        { property: 'og:locale', content: 'en_KE' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'AWALI — WhatsApp RSVP & M-Pesa Payments for Events in Kenya' },
        { name: 'twitter:description', content: 'Automate RSVPs, collect M-Pesa payments, and manage guest check-ins through WhatsApp. Built for Kenyan gatherings.' },
        { name: 'geo.region', content: 'KE' },
        { name: 'geo.placename', content: 'Nairobi' },
      ],
      link: [
        { rel: 'canonical', href: 'https://awali.co.ke' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap' },
      ],
    },
  },
  site: {
    url: 'https://awali.co.ke',
    name: 'AWALI',
  },
  sitemap: {
    urls: [
      { loc: '/use-cases/wedding-rsvp', priority: 0.9, changefreq: 'weekly' },
      { loc: '/use-cases/funeral-contributions', priority: 0.9, changefreq: 'weekly' },
      { loc: '/use-cases/harambee', priority: 0.9, changefreq: 'weekly' },
      { loc: '/use-cases/chama-contributions', priority: 0.9, changefreq: 'weekly' },
      { loc: '/use-cases/birthday-party', priority: 0.8, changefreq: 'weekly' },
      { loc: '/use-cases/corporate-events', priority: 0.8, changefreq: 'weekly' },
      { loc: '/use-cases/church-events', priority: 0.8, changefreq: 'weekly' },
      { loc: '/use-cases/event-check-in', priority: 0.8, changefreq: 'weekly' },
    ],
  },
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/auth'],
      },
    ],
    sitemap: 'https://awali.co.ke/sitemap.xml',
  },
})
