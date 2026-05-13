<template>
  <div>
    <!-- Hero -->
    <section class="py-16 px-8">
      <div class="max-w-4xl mx-auto">
        <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">{{ useCase.category }}</p>
        <h1 class="text-4xl md:text-5xl font-bold text-zinc-950 leading-tight mb-6">{{ useCase.headline }}</h1>
        <p class="text-lg text-zinc-600 mb-8 max-w-2xl">{{ useCase.description }}</p>
        <NuxtLink to="/auth/register" class="bg-black text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors">
          Create your {{ useCase.flowName }} flow — free
        </NuxtLink>
      </div>
    </section>

    <!-- How it works for this use case -->
    <section class="bg-zinc-100 py-16 px-8">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-zinc-950 mb-8">How it works</h2>
        <div class="space-y-6">
          <div v-for="(step, i) in useCase.steps" :key="i" class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0">{{ i + 1 }}</div>
            <div>
              <h3 class="font-semibold text-zinc-950">{{ step.title }}</h3>
              <p class="text-sm text-zinc-600 mt-1">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section (SEO-rich) -->
    <section class="py-16 px-8">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-zinc-950 mb-8">Frequently asked questions</h2>
        <div class="space-y-4">
          <div v-for="faq in useCase.faqs" :key="faq.q" class="bg-zinc-100 rounded-xl p-6">
            <h3 class="font-semibold text-zinc-950 mb-2">{{ faq.q }}</h3>
            <p class="text-sm text-zinc-600">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-black py-16 px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-white mb-4">{{ useCase.cta }}</h2>
        <p class="text-white/70 mb-8">No app downloads. No spreadsheets. Just WhatsApp.</p>
        <NuxtLink to="/auth/register" class="bg-white text-zinc-950 rounded-full px-6 py-3 text-sm font-medium hover:bg-zinc-100 transition-colors">
          Get started for free
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const useCases: Record<string, any> = {
  'wedding-rsvp': {
    category: 'Weddings',
    headline: 'Collect wedding RSVPs and contributions via WhatsApp',
    description: 'Send beautiful digital wedding invitations, collect RSVPs, and receive M-Pesa contributions — all through WhatsApp. No more chasing guests in group chats.',
    flowName: 'wedding RSVP',
    cta: 'Ready to simplify your wedding RSVPs?',
    steps: [
      { title: 'Create your wedding flow', description: 'Pick the wedding template, add your event details, set up M-Pesa contribution collection.' },
      { title: 'Share via QR code or WhatsApp link', description: 'Print the QR on your invitation card or share the link in WhatsApp groups.' },
      { title: 'Guests RSVP and contribute via WhatsApp', description: 'They confirm attendance, select number of seats, and pay via M-Pesa STK Push — all in one conversation.' },
      { title: 'Track everything from your dashboard', description: 'See who confirmed, who paid, and who needs a reminder. Export your guest list anytime.' },
    ],
    faqs: [
      { q: 'How do guests RSVP for my wedding?', a: 'Guests scan a QR code or tap a WhatsApp link. They chat with the AWALI bot, confirm attendance, select seats, and optionally contribute via M-Pesa. No app download needed.' },
      { q: 'Can I collect wedding contributions via M-Pesa?', a: 'Yes. AWALI triggers an M-Pesa STK Push during the RSVP flow. Guests enter their PIN and the payment is automatically reconciled with their RSVP.' },
      { q: 'How much does it cost to use AWALI for my wedding?', a: 'You can start free with up to 20 RSVPs. For unlimited guests and M-Pesa payments, the per-event plan is KES 500.' },
      { q: 'Can I send reminders to guests who haven\'t responded?', a: 'Yes. AWALI sends automated WhatsApp reminders to guests who haven\'t RSVPed or paid, at intervals you configure.' },
    ],
  },
  'funeral-contributions': {
    category: 'Funerals & Burials',
    headline: 'Collect funeral contributions via M-Pesa automatically',
    description: 'During difficult times, the last thing you need is to manually track who sent money. AWALI automates funeral contribution collection and sends receipts via WhatsApp.',
    flowName: 'funeral contribution',
    cta: 'Let AWALI handle the contributions so you can focus on what matters',
    steps: [
      { title: 'Set up a contribution flow', description: 'Enter the details — name of the bereaved, target amount, M-Pesa account.' },
      { title: 'Share the link or QR code', description: 'Post in family WhatsApp groups, church groups, or print on funeral programmes.' },
      { title: 'Contributors pay via M-Pesa', description: 'They tap the link, enter their name, and pay via STK Push. Automatic receipt sent.' },
      { title: 'Track all contributions in real-time', description: 'See total collected, individual amounts, and export a full ledger for the family.' },
    ],
    faqs: [
      { q: 'How do people contribute to a funeral fund via AWALI?', a: 'They tap a WhatsApp link or scan a QR code, enter their name, and pay via M-Pesa STK Push. They receive an instant WhatsApp receipt.' },
      { q: 'Can I see who has contributed and how much?', a: 'Yes. Your dashboard shows every contributor, amount, M-Pesa reference, and timestamp. You can export this as an Excel file.' },
      { q: 'Is there a limit on how many people can contribute?', a: 'No limit on the per-event plan. The free tier supports up to 20 contributors.' },
      { q: 'Can I set a target amount?', a: 'Yes. You can set a goal and AWALI will show progress to contributors and notify you when it\'s reached.' },
    ],
  },
  'harambee': {
    category: 'Harambees & Fundraising',
    headline: 'Run your harambee online with M-Pesa and WhatsApp',
    description: 'Organize a harambee, collect pledges and payments via M-Pesa, and track everything from one dashboard. Share a single link — contributors do the rest.',
    flowName: 'harambee',
    cta: 'Start your harambee collection today',
    steps: [
      { title: 'Create your harambee flow', description: 'Set the cause, target amount, and payment details. Choose whether to accept pledges or direct payments.' },
      { title: 'Share widely', description: 'One link works everywhere — WhatsApp groups, SMS, social media, printed posters.' },
      { title: 'Collect M-Pesa payments automatically', description: 'Contributors pay via STK Push. No manual reconciliation needed.' },
      { title: 'Send updates and thank-yous', description: 'Broadcast progress updates to all contributors via WhatsApp.' },
    ],
    faqs: [
      { q: 'What is a harambee?', a: 'Harambee is a Kenyan tradition of community fundraising where people come together to contribute money for a common cause — medical bills, school fees, weddings, or community projects.' },
      { q: 'How does AWALI help with harambee collections?', a: 'AWALI provides a WhatsApp link that contributors tap to pay via M-Pesa. All payments are tracked automatically with names, amounts, and timestamps.' },
      { q: 'Can people pledge now and pay later?', a: 'Yes. You can configure your flow to accept pledges. AWALI will send payment reminders to those who pledged but haven\'t paid.' },
      { q: 'How do I share the harambee link?', a: 'You get a QR code and a short link. Share it in WhatsApp groups, post on social media, or print on posters.' },
    ],
  },
  'chama-contributions': {
    category: 'Chamas & SACCOs',
    headline: 'Automate monthly chama contributions with M-Pesa',
    description: 'Stop chasing members for monthly contributions. AWALI sends automated reminders and collects payments via M-Pesa on schedule.',
    flowName: 'chama',
    cta: 'Automate your chama contributions today',
    steps: [
      { title: 'Register your chama', description: 'Add member names and phone numbers. Set the contribution amount and schedule.' },
      { title: 'AWALI sends monthly reminders', description: 'Members receive a WhatsApp message with a pay button on contribution day.' },
      { title: 'Members pay via M-Pesa', description: 'One tap, enter PIN, done. Payment recorded automatically.' },
      { title: 'Track who paid and who didn\'t', description: 'Dashboard shows payment status for every member. Export reports for your treasurer.' },
    ],
    faqs: [
      { q: 'Can AWALI send automatic monthly reminders?', a: 'Yes. Set your contribution day and AWALI sends WhatsApp reminders to all members automatically.' },
      { q: 'How do I track who has paid their chama contribution?', a: 'Your dashboard shows real-time payment status for every member — paid, pending, or overdue.' },
      { q: 'Can members pay different amounts?', a: 'Yes. You can configure fixed or variable contribution amounts per member.' },
      { q: 'Does it work for SACCOs too?', a: 'Yes. The same system works for SACCOs, investment groups, and any recurring contribution group.' },
    ],
  },
  'birthday-party': {
    category: 'Birthday Parties',
    headline: 'Manage birthday party invitations and RSVPs via WhatsApp',
    description: 'Send digital birthday invitations, collect RSVPs, and know exactly who\'s coming — all through WhatsApp. Perfect for kids\' parties, milestone birthdays, and surprise parties.',
    flowName: 'birthday party',
    cta: 'Plan your birthday party the easy way',
    steps: [
      { title: 'Create your birthday flow', description: 'Add party details — date, venue, theme. Set up custom questions like dietary requirements.' },
      { title: 'Share the invitation', description: 'Send a WhatsApp link or QR code to your guest list.' },
      { title: 'Guests RSVP instantly', description: 'They confirm attendance, number of guests, and answer your custom questions — all via WhatsApp chat.' },
      { title: 'Get your final headcount', description: 'Dashboard shows confirmed guests, dietary needs, and total headcount. Send reminders to non-responders.' },
    ],
    faqs: [
      { q: 'How do I send birthday party invitations via WhatsApp?', a: 'Create a flow on AWALI, then share the generated WhatsApp link or QR code with your guests. They RSVP by chatting with the bot.' },
      { q: 'Can I ask custom questions like dietary requirements?', a: 'Yes. Add any questions you need — dietary needs, plus-ones, gift preferences, or anything else.' },
      { q: 'Is it free for small parties?', a: 'Yes. The free tier supports up to 20 RSVPs — perfect for intimate gatherings.' },
      { q: 'Can I collect money for a group gift?', a: 'Yes. Add M-Pesa payment to your flow and collect contributions for a group gift or party expenses.' },
    ],
  },
  'corporate-events': {
    category: 'Corporate Events',
    headline: 'Streamline corporate event registration and check-in',
    description: 'Manage conferences, team events, and corporate dinners with automated registration, QR code check-in, and real-time attendance tracking.',
    flowName: 'corporate event',
    cta: 'Upgrade your corporate event management',
    steps: [
      { title: 'Set up your event flow', description: 'Configure registration questions, ticket types, and payment if needed.' },
      { title: 'Share registration link', description: 'Email the link or embed the QR code in your event communications.' },
      { title: 'Attendees register via WhatsApp', description: 'They answer questions and receive a QR code ticket on WhatsApp.' },
      { title: 'Scan QR codes at the door', description: 'Use the AWALI check-in tool on any phone. See real-time attendance numbers.' },
    ],
    faqs: [
      { q: 'Can I use AWALI for conference registration?', a: 'Yes. Set up custom registration questions, collect payments for tickets, and issue QR code tickets via WhatsApp.' },
      { q: 'How does QR code check-in work?', a: 'Each registered attendee gets a unique QR code via WhatsApp. At the venue, staff scan codes using the AWALI mobile check-in tool.' },
      { q: 'Can I export the attendee list?', a: 'Yes. Export to Excel with all registration data, payment status, and check-in timestamps.' },
      { q: 'Does it handle paid events?', a: 'Yes. Collect ticket payments via M-Pesa during registration. Automatic reconciliation.' },
    ],
  },
  'church-events': {
    category: 'Church & Religious Events',
    headline: 'Manage church event RSVPs and offerings digitally',
    description: 'From crusades to conferences, manage church event attendance and collect offerings or registration fees via M-Pesa and WhatsApp.',
    flowName: 'church event',
    cta: 'Simplify your church event management',
    steps: [
      { title: 'Create your church event flow', description: 'Set up the event — crusade, conference, retreat. Add registration questions.' },
      { title: 'Share in church WhatsApp groups', description: 'Post the link or QR code in your church communication channels.' },
      { title: 'Members register and pay', description: 'They sign up via WhatsApp and pay registration fees via M-Pesa if required.' },
      { title: 'Track attendance and payments', description: 'See who registered, who paid, and use QR check-in at the event.' },
    ],
    faqs: [
      { q: 'Can I use AWALI for church crusade registration?', a: 'Yes. Create a flow with your crusade details, share in church groups, and collect registrations via WhatsApp.' },
      { q: 'Can members pay registration fees via M-Pesa?', a: 'Yes. Add M-Pesa payment to your flow. Members pay during registration with STK Push.' },
      { q: 'How do I manage new church member registration?', a: 'Use the membership template. New members fill in their details via WhatsApp and you get a complete member registry.' },
      { q: 'Is it free for small church events?', a: 'Yes. Up to 20 registrations are free. For larger events, use the per-event plan at KES 500.' },
    ],
  },
  'event-check-in': {
    category: 'Event Check-in',
    headline: 'QR code event check-in that works on any phone',
    description: 'Generate QR code tickets via WhatsApp and scan them at the door with any smartphone. Real-time attendance tracking, duplicate detection, and no special hardware needed.',
    flowName: 'check-in',
    cta: 'Set up QR check-in for your next event',
    steps: [
      { title: 'Guests register and get a QR ticket', description: 'When guests RSVP or register, they automatically receive a unique QR code via WhatsApp.' },
      { title: 'Open the check-in tool', description: 'Door staff open the AWALI check-in page on their phone — no app download needed.' },
      { title: 'Scan QR codes at entry', description: 'Point the camera at the guest\'s QR code. Instant verification with name and ticket details.' },
      { title: 'Track attendance live', description: 'See real-time check-in numbers, detect duplicates, and look up guests by name if needed.' },
    ],
    faqs: [
      { q: 'Do I need special hardware for QR check-in?', a: 'No. Any smartphone with a camera works. The check-in tool runs in the browser — no app download needed.' },
      { q: 'What happens if someone tries to use the same QR code twice?', a: 'AWALI detects duplicates and shows an "ALREADY CHECKED IN" warning with the original check-in time.' },
      { q: 'Can I check in guests without a QR code?', a: 'Yes. You can search by name or phone number and manually check them in.' },
      { q: 'Does it work offline?', a: 'The check-in tool requires an internet connection to verify tickets and update attendance in real-time.' },
    ],
  },
}

const useCase = useCases[slug]

if (!useCase) {
  throw createError({ statusCode: 404, message: 'Use case not found' })
}

useHead({
  title: `${useCase.headline} | AWALI`,
  meta: [
    { name: 'description', content: useCase.description },
    { property: 'og:title', content: `${useCase.headline} | AWALI` },
    { property: 'og:description', content: useCase.description },
    { property: 'og:url', content: `https://awali.co.ke/use-cases/${slug}` },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: useCase.faqs.map((faq: any) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }),
    },
  ],
})
</script>
