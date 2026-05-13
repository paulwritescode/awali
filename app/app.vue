<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'AWALI',
            url: 'https://awali.co.ke',
            description: 'WhatsApp-native event management platform for Kenya. Collect RSVPs, M-Pesa payments, and manage check-ins.',
            areaServed: { '@type': 'Country', name: 'Kenya' },
          },
          {
            '@type': 'WebApplication',
            name: 'AWALI',
            url: 'https://awali.co.ke',
            applicationCategory: 'EventManagement',
            operatingSystem: 'Web',
            description: 'Collect RSVPs, M-Pesa payments, and manage event check-ins via WhatsApp. No app downloads needed.',
            offers: [
              { '@type': 'Offer', price: '0', priceCurrency: 'KES', name: 'Free' },
              { '@type': 'Offer', price: '500', priceCurrency: 'KES', name: 'Per Event' },
              { '@type': 'Offer', price: '2500', priceCurrency: 'KES', name: 'Pro Monthly' },
            ],
            featureList: 'WhatsApp RSVPs, M-Pesa Payments, QR Code Check-in, Smart Reminders, Real-time Dashboard, Template Library',
          },
          {
            '@type': 'WebSite',
            name: 'AWALI',
            url: 'https://awali.co.ke',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://awali.co.ke/use-cases/{search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          },
        ],
      }),
    },
  ],
})
</script>
