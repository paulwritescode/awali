<template>
  <div>
    <!-- Stat Cards Row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div v-for="stat in stats" :key="stat.label" class="bg-zinc-100 rounded-xl p-6">
        <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase">{{ stat.label }}</p>
        <p class="text-3xl font-bold text-zinc-950 mt-1">{{ stat.value }}</p>
        <p class="text-sm text-zinc-600 mt-1">{{ stat.sub }}</p>
      </div>
    </div>

    <!-- Recent Flows -->
    <div class="bg-zinc-100 rounded-xl">
      <div class="p-6 border-b border-zinc-200 flex items-center justify-between">
        <h2 class="text-lg font-semibold text-zinc-950">Recent Flows</h2>
        <NuxtLink to="/dashboard/flows" class="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">View all →</NuxtLink>
      </div>
      <div class="p-6">
        <div class="text-center py-12">
          <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4" /></svg>
          </div>
          <p class="text-sm text-zinc-500 mb-4">No flows yet. Create your first one.</p>
          <NuxtLink to="/dashboard/flows/create" class="inline-block bg-black text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors">
            Create Flow
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })

const stats = [
  { label: 'Total RSVPs', value: '0', sub: 'No events yet' },
  { label: 'Collected', value: 'KES 0', sub: 'No payments yet' },
  { label: 'Active Flows', value: '0', sub: 'Create your first flow' },
  { label: "Today's Check-ins", value: '0', sub: 'No events today' },
]
</script>
