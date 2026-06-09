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

      <!-- CTA + Theme Toggle + Hamburger -->
      <div class="flex items-center gap-2">
        <RouterLink to="/contact" class="hidden md:inline-flex btn-accent text-sm py-2 px-5">
          <span>Hire Me</span>
        </RouterLink>

        <!-- Theme toggle -->
        <button
          @click="toggleTheme"
          class="theme-toggle-btn"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Light mode' : 'Dark mode'"
        >
          <Transition name="icon-swap" mode="out-in">
            <span v-if="isDark" key="moon">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </span>
            <span v-else key="sun">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </span>
          </Transition>
        </button>

        <button
          class="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 hover:border-white/25 transition-all"
          @click="toggleMenu" aria-label="Toggle menu">
          <span class="block h-0.5 bg-current transition-all duration-300 origin-center"
            :class="menuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'"></span>
          <span class="block h-0.5 bg-current transition-all duration-300"
            :class="menuOpen ? 'w-0 opacity-0' : 'w-4'"></span>
          <span class="block h-0.5 bg-current transition-all duration-300 origin-center"
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
import { useTheme } from '@/composables/useTheme'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)
const { isDark, toggleTheme } = useTheme()

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
  color: var(--color-text);
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

:global(html.light) .nav-link-idle:hover {
  background: rgba(0, 0, 0, 0.05);
}

.mobile-menu-panel {
  background: rgba(7, 7, 15, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

:global(html.light) .mobile-menu-panel {
  background: rgba(244, 244, 251, 0.97);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

/* Theme toggle button */
.theme-toggle-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  flex-shrink: 0;
}

.theme-toggle-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent-light);
  background: rgba(108, 99, 255, 0.1);
  box-shadow: 0 0 16px rgba(108, 99, 255, 0.2);
  transform: rotate(15deg);
}

:global(html.light) .theme-toggle-btn {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.04);
  color: var(--color-muted);
}

/* Icon swap transition */
.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.icon-swap-enter-from {
  opacity: 0;
  transform: rotate(-30deg) scale(0.7);
}

.icon-swap-leave-to {
  opacity: 0;
  transform: rotate(30deg) scale(0.7);
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
