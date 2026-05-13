<template>
  <div class="min-h-screen bg-white flex">
    <!-- Sidebar (Desktop) -->
    <aside class="hidden lg:flex flex-col w-64 bg-white border-r border-zinc-200 fixed inset-y-0 left-0 z-40">
      <!-- Logo -->
      <div class="h-16 flex items-center px-6 border-b border-zinc-200">
        <NuxtLink to="/dashboard" class="text-xl font-bold text-zinc-950 font-logo">awali</NuxtLink>
      </div>

      <!-- Nav Items -->
      <nav class="flex-1 px-3 py-4 space-y-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="isActive(item.to) ? 'bg-black text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span>{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <!-- Bottom Section -->
      <div class="px-3 py-4 border-t border-zinc-200">
        <NuxtLink
          to="/dashboard/settings"
          class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="isActive('/dashboard/settings') ? 'bg-black text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'"
        >
          <SettingsIcon class="w-5 h-5" />
          <span>Settings</span>
        </NuxtLink>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 lg:ml-64">
      <!-- Top Bar -->
      <header class="sticky top-0 z-30 bg-white border-b border-zinc-200 h-16 flex items-center px-6 justify-between">
        <!-- Mobile Menu -->
        <button class="lg:hidden rounded-full bg-zinc-100 h-10 w-10 flex items-center justify-center hover:bg-zinc-200 transition-colors" @click="sidebarOpen = true">
          <svg class="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>

        <div class="lg:hidden text-lg font-bold text-zinc-950 font-logo">awali</div>

        <!-- Page Title (desktop) -->
        <h1 class="hidden lg:block text-lg font-semibold text-zinc-950">{{ pageTitle }}</h1>

        <!-- Right side -->
        <div class="flex items-center gap-3">
          <UiAvatar class="h-8 w-8">
            <UiAvatarFallback class="bg-zinc-200 text-zinc-700 text-xs font-medium">AW</UiAvatarFallback>
          </UiAvatar>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6">
        <slot />
      </main>
    </div>

    <!-- Mobile Sidebar Overlay -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="sidebarOpen" class="fixed inset-0 bg-black/50 z-50 lg:hidden" @click="sidebarOpen = false" />
      </Transition>
      <Transition name="slide">
        <aside v-if="sidebarOpen" class="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden flex flex-col">
          <div class="h-16 flex items-center justify-between px-6 border-b border-zinc-200">
            <span class="text-xl font-bold text-zinc-950 font-logo">awali</span>
            <button class="rounded-full bg-zinc-100 h-8 w-8 flex items-center justify-center" @click="sidebarOpen = false">
              <svg class="w-4 h-4 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav class="flex-1 px-3 py-4 space-y-1">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              :class="isActive(item.to) ? 'bg-black text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'"
              @click="sidebarOpen = false"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.label }}</span>
            </NuxtLink>
          </nav>
          <div class="px-3 py-4 border-t border-zinc-200">
            <NuxtLink
              to="/dashboard/settings"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              :class="isActive('/dashboard/settings') ? 'bg-black text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'"
              @click="sidebarOpen = false"
            >
              <SettingsIcon class="w-5 h-5" />
              <span>Settings</span>
            </NuxtLink>
          </div>
        </aside>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

const route = useRoute()
const sidebarOpen = ref(false)

// Simple SVG icon components
const HomeIcon = { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-5 h-5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })]) }
const FlowsIcon = { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-5 h-5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z' })]) }
const MembersIcon = { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-5 h-5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' })]) }
const PaymentsIcon = { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-5 h-5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })]) }
const SettingsIcon = { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-5 h-5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }), h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' })]) }

const navItems = [
  { to: '/dashboard', label: 'Overview', icon: HomeIcon },
  { to: '/dashboard/flows', label: 'Flows', icon: FlowsIcon },
  { to: '/dashboard/members', label: 'Members', icon: MembersIcon },
  { to: '/dashboard/payments', label: 'Payments', icon: PaymentsIcon },
]

const pageTitle = computed(() => {
  const path = route.path
  if (path === '/dashboard') return 'Overview'
  if (path.startsWith('/dashboard/flows')) return 'Flows'
  if (path.startsWith('/dashboard/members')) return 'Members'
  if (path.startsWith('/dashboard/payments')) return 'Payments'
  if (path.startsWith('/dashboard/settings')) return 'Settings'
  return 'Dashboard'
})

function isActive(to: string) {
  if (to === '/dashboard') return route.path === '/dashboard'
  return route.path.startsWith(to)
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.2s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
</style>
