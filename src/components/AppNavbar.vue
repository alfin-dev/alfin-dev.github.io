<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'navbar-scrolled' : 'navbar-top'">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="logo-text font-display font-bold text-xl tracking-tight" @click="closeMenu">
        Alf<span class="text-[var(--color-cyan)]">i</span>n
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-1">
        <RouterLink v-for="link in navLinks" :key="link.path" :to="link.path"
          class="nav-link px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
          :class="isActive(link.path) ? 'nav-link-active' : 'nav-link-idle'">
          {{ link.label }}
        </RouterLink>
      </nav>

      <!-- CTA + Hamburger -->
      <div class="flex items-center gap-3">
        <RouterLink to="/contact" class="hidden md:inline-flex btn-accent text-sm py-2 px-5">
          <span>Hire Me</span>
        </RouterLink>

        <button
          class="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 hover:border-white/25 transition-all"
          @click="toggleMenu" aria-label="Toggle menu">
          <span class="block h-0.5 bg-white transition-all duration-300 origin-center"
            :class="menuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'"></span>
          <span class="block h-0.5 bg-white transition-all duration-300"
            :class="menuOpen ? 'w-0 opacity-0' : 'w-4'"></span>
          <span class="block h-0.5 bg-white transition-all duration-300 origin-center"
            :class="menuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="md:hidden mobile-menu-panel">
        <nav class="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-2">
          <RouterLink v-for="link in navLinks" :key="link.path" :to="link.path"
            class="px-4 py-3 rounded-xl text-sm font-medium transition-all"
            :class="isActive(link.path) ? 'bg-[var(--color-accent)]/15 text-[var(--color-accent-light)]' : 'text-[var(--color-muted)] hover:text-white hover:bg-white/5'"
            @click="closeMenu">
            {{ link.label }}
          </RouterLink>
          <RouterLink to="/contact" class="btn-accent mt-2 justify-center text-sm" @click="closeMenu">
            <span>Hire Me</span>
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/resume', label: 'Resume' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu = () => { menuOpen.value = false }

const handleScroll = () => { scrolled.value = window.scrollY > 40 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar-top {
  background: transparent;
}

.navbar-scrolled {
  background: rgba(7, 7, 15, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.logo-text {
  font-family: var(--font-display);
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-link-active {
  color: white;
  background: rgba(108, 99, 255, 0.15);
  box-shadow: inset 0 0 0 1px rgba(108, 99, 255, 0.3);
}

.nav-link-idle {
  color: var(--color-muted);
}

.nav-link-idle:hover {
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.06);
}

.mobile-menu-panel {
  background: rgba(7, 7, 15, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
