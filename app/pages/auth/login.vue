<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-6 py-12">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="text-2xl font-bold text-zinc-950 font-logo">awali</NuxtLink>
        <p class="text-sm text-zinc-600 mt-2">Welcome back. Log in to your account.</p>
      </div>

      <div class="bg-zinc-50 rounded-xl p-8">
        <form class="space-y-4" @submit.prevent="handleLogin">
          <div>
            <UiLabel for="email" class="text-sm font-medium text-zinc-950">Email</UiLabel>
            <UiInput id="email" v-model="email" type="email" placeholder="you@example.com" class="mt-1" />
          </div>
          <div>
            <UiLabel for="password" class="text-sm font-medium text-zinc-950">Password</UiLabel>
            <UiInput id="password" v-model="password" type="password" placeholder="••••••••" class="mt-1" />
          </div>
          <button type="submit" class="w-full bg-black text-white rounded-full px-5 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors">
            Log in
          </button>
        </form>

        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center"><UiSeparator /></div>
          <div class="relative flex justify-center"><span class="bg-zinc-50 px-3 text-xs text-zinc-400">or</span></div>
        </div>

        <div class="space-y-3">
          <button class="w-full rounded-full bg-white border border-zinc-200 text-zinc-950 px-5 py-3 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3">
            <svg class="w-5 h-5" viewBox="-0.5 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M9.827 24c0-1.524.254-3.986.706-4.356L2.623 13.604A23.7 23.7 0 00.214 24c0 3.737.867 7.261 2.406 10.388l7.905-6.051A14.2 14.2 0 019.827 24" fill="#FBBC05"/><path d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.91 6.04c1.822-5.532 7.016-9.51 13.18-9.51" fill="#EB4335"/><path d="M23.714 37.867c-6.165 0-11.36-3.979-13.181-9.51l-7.91 6.038c3.822 7.761 11.804 13.072 21.09 13.072 5.733 0 11.205-2.035 15.312-5.849l-7.507-5.803c-2.118 1.334-4.786 2.052-7.804 2.052" fill="#34A853"/><path d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-3.005 7.12-9.97 7.12-17.618" fill="#4285F4"/></g></svg>
            Continue with Google
          </button>
          <button class="w-full rounded-full bg-white border border-zinc-200 text-zinc-950 px-5 py-3 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3">
            <svg class="w-5 h-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"/><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"/></svg>
            Continue with Facebook
          </button>
        </div>
      </div>

      <p class="text-center text-sm text-zinc-500 mt-6">
        Don't have an account?
        <NuxtLink to="/auth/register" class="text-zinc-950 font-medium hover:underline">Sign up</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const email = ref('')
const password = ref('')

function handleLogin() {
  // TODO: Cognito auth
  navigateTo('/dashboard')
}
</script>
