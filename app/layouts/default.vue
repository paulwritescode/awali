<template>
  <div class="min-h-screen bg-white">
    <!-- Top Nav -->
    <header class="sticky top-0 z-50 bg-black">
      <nav class="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold text-white font-logo">awali</NuxtLink>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-sm font-medium text-white hover:text-white/80 transition-colors">Features</a>
          <a href="#how-it-works" class="text-sm font-medium text-white hover:text-white/80 transition-colors">How it Works</a>
          <a href="#pricing" class="text-sm font-medium text-white hover:text-white/80 transition-colors">Pricing</a>
        </div>

        <div class="hidden md:flex items-center gap-3">
          <NuxtLink to="/auth/login" class="text-sm font-medium text-white hover:text-white/80 transition-colors px-4 py-2">
            Log in
          </NuxtLink>
          <NuxtLink to="/auth/register" class="bg-white text-zinc-950 rounded-full px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">
            Get Started
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden rounded-full bg-white/10 h-10 w-10 flex items-center justify-center hover:bg-white/20 transition-colors" @click="mobileOpen = true">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </nav>
    </header>

    <!-- Mobile Nav Overlay -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="mobileOpen" class="fixed inset-0 bg-white z-50 flex flex-col p-8">
          <div class="flex items-center justify-between mb-12">
            <span class="text-xl font-bold text-zinc-950 font-logo">awali</span>
            <button class="rounded-full bg-zinc-100 h-10 w-10 flex items-center justify-center" @click="mobileOpen = false">
              <svg class="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div class="flex flex-col gap-6">
            <a href="#features" class="text-lg font-medium text-zinc-900" @click="mobileOpen = false">Features</a>
            <a href="#how-it-works" class="text-lg font-medium text-zinc-900" @click="mobileOpen = false">How it Works</a>
            <a href="#pricing" class="text-lg font-medium text-zinc-900" @click="mobileOpen = false">Pricing</a>
            <UiSeparator class="my-2" />
            <NuxtLink to="/auth/login" class="text-lg font-medium text-zinc-600" @click="mobileOpen = false">Log in</NuxtLink>
            <NuxtLink to="/auth/register" class="bg-zinc-950 text-white rounded-full px-6 py-3 text-center text-sm font-medium" @click="mobileOpen = false">Get Started</NuxtLink>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Page Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-black text-white py-16 px-8">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p class="text-xl font-bold mb-4 font-logo">awali</p>
          <p class="text-sm text-zinc-400">Kila tukio linaanza hapa.<br>Every gathering starts here.</p>
        </div>
        <div>
          <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">Product</p>
          <div class="flex flex-col gap-2">
            <a href="#features" class="text-sm text-zinc-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" class="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
            <NuxtLink to="/auth/register" class="text-sm text-zinc-400 hover:text-white transition-colors">Get Started</NuxtLink>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">Use Cases</p>
          <div class="flex flex-col gap-2">
            <span class="text-sm text-zinc-400">Weddings</span>
            <span class="text-sm text-zinc-400">Chama Contributions</span>
            <span class="text-sm text-zinc-400">Church Events</span>
            <span class="text-sm text-zinc-400">Corporate Events</span>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">Legal</p>
          <div class="flex flex-col gap-2">
            <span class="text-sm text-zinc-400">Privacy Policy</span>
            <span class="text-sm text-zinc-400">Terms of Service</span>
            <span class="text-sm text-zinc-400">KDPA Compliance</span>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-800">
        <p class="text-sm text-zinc-500">&copy; {{ new Date().getFullYear() }} AWALI. Built for Kenya.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
