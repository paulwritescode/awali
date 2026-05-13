<template>
  <div>
    <h2 class="text-2xl font-bold text-zinc-950 mb-6">Settings</h2>

    <div class="space-y-6">
      <!-- Profile Section -->
      <div class="bg-zinc-50 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-zinc-950 mb-4">Profile</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <UiLabel for="name" class="text-sm font-medium text-zinc-700">Full name</UiLabel>
            <UiInput id="name" placeholder="Your name" class="mt-1" />
          </div>
          <div>
            <UiLabel for="email" class="text-sm font-medium text-zinc-700">Email</UiLabel>
            <UiInput id="email" type="email" placeholder="you@example.com" class="mt-1" disabled />
          </div>
          <div>
            <UiLabel for="phone" class="text-sm font-medium text-zinc-700">Phone number</UiLabel>
            <UiInput id="phone" type="tel" placeholder="+254 7XX XXX XXX" class="mt-1" />
          </div>
        </div>
        <div class="mt-4">
          <button class="bg-black text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors">
            Save changes
          </button>
        </div>
      </div>

      <!-- Payment Accounts Section -->
      <div class="bg-zinc-50 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-zinc-950 mb-2">Payment Accounts</h3>
        <p class="text-sm text-zinc-600 mb-4">Configure your M-Pesa details for receiving payments.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <UiLabel for="paybill" class="text-sm font-medium text-zinc-700">Paybill / Till Number</UiLabel>
            <UiInput id="paybill" placeholder="e.g. 174379" class="mt-1" />
          </div>
          <div>
            <UiLabel for="account" class="text-sm font-medium text-zinc-700">Account Name</UiLabel>
            <UiInput id="account" placeholder="e.g. WED-GRACE" class="mt-1" />
          </div>
        </div>
        <div class="mt-4">
          <button class="bg-black text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors">
            Save payment details
          </button>
        </div>
      </div>

      <!-- Danger Zone -->
      <div class="bg-zinc-50 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-zinc-950 mb-2">Danger Zone</h3>
        <p class="text-sm text-zinc-600 mb-4">Permanently delete your account and all associated data.</p>
        <button class="rounded-full bg-white border border-zinc-200 text-zinc-950 px-5 py-2.5 text-sm font-medium hover:bg-zinc-200 transition-colors">
          Delete account
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })
</script>
