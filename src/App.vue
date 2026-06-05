<template>
  <div class="min-h-screen flex flex-col bg-[var(--color-bg-primary)]">
    <AppNavbar />
    <main class="flex-1 pt-16">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
</script>
