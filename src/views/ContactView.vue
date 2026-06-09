<template>
  <div class="py-20 px-6 max-w-5xl mx-auto">
    <!-- Header -->
    <p class="section-eyebrow reveal">Get in touch</p>
    <h2 class="section-title reveal">Contact Me</h2>
    <p class="section-subtitle mt-2 mb-16 reveal">
      Tertarik untuk berkolaborasi atau ada proyek yang ingin dibahas? Jangan ragu untuk menghubungi saya.
    </p>

    <div class="grid md:grid-cols-2 gap-12 items-start">
      <!-- Left: Contact cards -->
      <div class="flex flex-col gap-4">
        <a v-for="contact in contacts" :key="contact.label" :href="contact.href"
          :target="contact.external ? '_blank' : undefined" :rel="contact.external ? 'noopener noreferrer' : undefined"
          class="contact-card reveal">
          <div class="icon-wrap" :style="{ background: contact.bg, color: contact.color }">
            <span v-if="contact.iconSvg" v-html="contact.iconSvg"></span>
            <component v-else :is="contact.icon" :size="20" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs text-[var(--color-muted)] mb-0.5">{{ contact.label }}</p>
            <p class="text-[var(--color-text)] font-medium text-sm truncate">{{ contact.display }}</p>
          </div>
          <ExternalLink :size="14" class="text-[var(--color-muted)] flex-shrink-0 opacity-50" />
        </a>
      </div>

      <!-- Right: Availability card + Social -->
      <div class="flex flex-col gap-6 reveal">
        <!-- Availability status -->
        <div class="glass-card p-8 text-center">
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gradient-to-br from-[var(--color-accent)] to-[#8b5cf6]">
            <Zap :size="28" class="text-white" />
          </div>
          <h3 class="font-display font-semibold text-[var(--color-text)] text-xl mb-2">Open to Work</h3>
          <p class="text-[var(--color-muted)] text-sm leading-relaxed mb-6">
            Saya saat ini tersedia untuk proyek freelance maupun kolaborasi.
            Response time biasanya dalam <strong class="text-[var(--color-text)]">24 jam</strong>.
          </p>
          <a href="https://wa.me/6287776025381?text=Halo%20Mas%20Alfin,%20saya%20tertarik%20dengan%20jasa%20Web/DevOps%20Anda."
            target="_blank" rel="noopener noreferrer" class="btn-accent w-full justify-center">
            <MessageCircle :size="16" class="relative z-10" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>

        <!-- Social links -->
        <div class="glass-card p-6">
          <h4 class="font-semibold text-[var(--color-text)] text-sm mb-4">Follow me on</h4>
          <div class="flex items-center gap-3">
            <a v-for="social in socials" :key="social.label" :href="social.url" target="_blank"
              rel="noopener noreferrer" :aria-label="social.label" class="social-icon-btn flex-1"
              :style="{ '--hover-color': social.color }">
              <span v-html="social.svg"></span>
              <span class="text-xs">{{ social.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, Phone, MapPin, ExternalLink, Zap, MessageCircle } from '@lucide/vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const contacts = [
  {
    label: 'Email',
    display: 'alfinkh98@gmail.com',
    href: 'mailto:alfinkh98@gmail.com',
    icon: Mail,
    bg: 'rgba(108, 99, 255, 0.12)',
    color: 'var(--color-accent-light)',
    external: false,
  },
  {
    label: 'WhatsApp',
    display: '+62 877-7602-5381 (Chat Only)',
    href: 'https://wa.me/6287776025381?text=Halo%20Mas%20Alfin,%20saya%20tertarik%20dengan%20jasa%20Web/DevOps%20Anda.',
    icon: Phone,
    bg: 'rgba(37, 211, 102, 0.1)',
    color: '#25d366',
    external: true,
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/alfinkhoiri',
    href: 'https://www.linkedin.com/in/alfinkhoiri/',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    bg: 'rgba(0, 119, 181, 0.1)',
    color: '#0077b5',
    external: true,
  },
  {
    label: 'Location',
    display: 'Surabaya, Jawa Timur, Indonesia',
    href: 'https://maps.google.com/?q=Surabaya,Indonesia',
    icon: MapPin,
    bg: 'rgba(0, 212, 255, 0.1)',
    color: 'var(--color-cyan)',
    external: true,
  },
]

const socials = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alfinkhoiri/',
    color: '#0077b5',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/alfin.khoiri/',
    color: '#e1306c',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/alfinkhoiri.id/',
    color: '#1877f2',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  },
]

</script>

<style scoped>
.social-icon-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: var(--color-muted);
  text-decoration: none;
  transition: all 0.25s ease;
  background: rgba(255, 255, 255, 0.02);
}

.social-icon-btn:hover {
  color: var(--hover-color, var(--color-accent));
  border-color: var(--hover-color, var(--color-accent));
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}
</style>
