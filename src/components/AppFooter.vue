<template>
  <footer class="footer-bg border-t border-white/5 mt-auto">
    <div class="max-w-6xl mx-auto px-6 py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo + tagline -->
        <div class="text-center md:text-left">
          <RouterLink to="/" class="font-display font-bold text-lg text-white tracking-tight">
            Alf<span class="text-[var(--color-cyan)]">i</span>n
          </RouterLink>
          <p class="text-[var(--color-muted)] text-sm mt-1">Web Developer & DevOps Engineer</p>
        </div>

        <!-- Social links -->
        <div class="flex items-center gap-3">
          <a v-for="social in socials" :key="social.label" :href="social.url" target="_blank" rel="noopener noreferrer"
            :aria-label="social.label" class="social-btn">
            <span v-html="social.svg"></span>
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-[var(--color-muted)] text-sm text-center md:text-right">
          © {{ currentYear }} <span class="text-white font-medium">Alfin</span>. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

const socials = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alfinkhoiri/',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/alfin.khoiri/',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/alfinkhoiri.id/',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  },
]
</script>

<style scoped>
.footer-bg {
  background: rgba(7, 7, 15, 0.8);
  backdrop-filter: blur(10px);
}

.social-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent-light);
  background: rgba(108, 99, 255, 0.1);
  box-shadow: 0 0 16px rgba(108, 99, 255, 0.2);
  transform: translateY(-2px);
}
</style>
