<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated background -->
    <div class="hero-bg"></div>

    <!-- Subtle grid overlay -->
    <div class="grid-overlay absolute inset-0 z-0 opacity-[0.025]"></div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <!-- Eyebrow badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8 mb-8">
        <span class="w-2 h-2 rounded-full bg-[var(--color-cyan)] animate-pulse"></span>
        <span class="text-xs font-semibold tracking-widest uppercase text-[var(--color-cyan)]">Available for work</span>
      </div>

      <!-- Name -->
      <h1 class="font-display font-bold leading-tight mb-4" style="font-size: clamp(2.8rem, 7vw, 5rem);">
        <span class="gradient-text">M. Alfin Khoiri</span>
        <span class="text-[var(--color-muted)] text-2xl md:text-3xl block mt-1 font-medium">, S. Kom</span>
      </h1>

      <!-- Typing line -->
      <p class="text-[var(--color-muted)] text-lg md:text-xl mb-10 min-h-[2rem]">
        I'm a
        <span class="text-white font-semibold">{{ displayText }}</span>
        <span class="typing-cursor" :class="{ 'opacity-0': !showCursor }">|</span>
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap items-center justify-center gap-4">
        <RouterLink to="/about" class="btn-accent">
          <span>About Me</span>
          <ArrowRight :size="16" class="relative z-10" />
        </RouterLink>
        <RouterLink to="/portfolio" class="btn-ghost">
          View Portfolio
        </RouterLink>
      </div>

      <!-- Stats row -->
      <div class="mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="font-display font-bold text-2xl md:text-3xl gradient-text">{{ stat.value }}</div>
          <div class="text-[var(--color-muted)] text-xs mt-1 tracking-wide">{{ stat.label }}</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ArrowRight, ChevronDown } from '@lucide/vue'
import { useTypingEffect } from '@/composables/useTypingEffect'

const words = [
  'Web Developer',
  'DevOps Engineer',
  'Laravel Enthusiast',
  'Automation Expert',
  'PHP Enthusiast',
  'Networking Expert',
]

const { displayText, showCursor } = useTypingEffect(words, {
  typeSpeed: 70,
  deleteSpeed: 45,
  pauseDuration: 2000,
})

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '100%', label: 'Server Uptime Focus' },
]
</script>

<style scoped>
.grid-overlay {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
}

.typing-cursor {
  display: inline-block;
  color: var(--color-cyan);
  font-weight: 300;
  transition: opacity 0.1s;
  margin-left: 2px;
}
</style>
