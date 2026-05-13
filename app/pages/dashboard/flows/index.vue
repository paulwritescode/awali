<template>
  <div>
    <!-- Page Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-2xl font-bold text-zinc-950">My Flows</h2>
        <p class="text-sm text-zinc-500 mt-1">Manage your event flows and templates.</p>
      </div>
      <NuxtLink to="/dashboard/flows/create" class="bg-black text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors">
        + New Flow
      </NuxtLink>
    </div>

    <!-- Empty State -->
    <div class="bg-zinc-100 rounded-xl p-12 text-center">
      <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" /></svg>
      </div>
      <h3 class="text-lg font-semibold text-zinc-950 mb-2">No flows yet</h3>
      <p class="text-sm text-zinc-500 mb-6 max-w-md mx-auto">
        Create your first flow to start collecting RSVPs, payments, and check-ins via WhatsApp.
      </p>
      <NuxtLink to="/dashboard/flows/create" class="inline-block bg-black text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors">
        Create your first flow
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })
</script>
