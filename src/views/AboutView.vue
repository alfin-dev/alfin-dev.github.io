<template>
  <div class="py-20 px-6 max-w-6xl mx-auto">

    <!-- About section -->
    <section class="mb-24">
      <p class="section-eyebrow reveal">Who I am</p>
      <h2 class="section-title reveal">About Me</h2>

      <div class="mt-12 grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
        <!-- Profile image -->
        <div class="md:col-span-2 flex justify-center reveal">
          <div class="relative">
            <div class="profile-glow-ring"></div>
            <img :src="profileImg" @error="onImgError" alt="M. Alfin Khoiri"
              class="relative z-10 w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl border border-white/10" />
          </div>
        </div>

        <!-- Bio -->
        <div class="md:col-span-3">
          <h3 class="font-display font-semibold text-xl text-[var(--color-cyan)] mb-3 reveal">
            Fullstack WEB Developer with DevOps Responsibilities
          </h3>
          <p class="text-[var(--color-muted)] leading-relaxed mb-6 reveal">
            Profesional IT dengan pengalaman <strong>4+ tahun</strong> dalam pengembangan aplikasi web menggunakan PHP,
            Laravel, dan Vue.js, serta pengelolaan infrastruktur server Linux. Berpengalaman dalam membangun aplikasi
            bisnis end-to-end, merancang dan mengintegrasikan REST API, mengelola database PostgreSQL/MySQL, melakukan
            deployment ke VPS maupun cloud server, serta menerapkan praktik DevOps untuk memastikan sistem yang aman,
            stabil, dan skalabel.
          </p>

          <!-- Info cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 reveal">
            <div v-for="info in infos" :key="info.label" class="info-chip">
              <component :is="info.icon" :size="15" class="text-[var(--color-accent)] flex-shrink-0" />
              <span class="text-[var(--color-muted)] text-sm">
                <strong class="text-[var(--color-text)] font-medium">{{ info.label }}:</strong>
                <template v-if="info.href">
                  <a :href="info.href" target="_blank" class="text-[var(--color-cyan)] hover:underline ml-1">{{
                    info.value }}</a>
                </template>
                <template v-else>
                  <span class="ml-1">{{ info.value }}</span>
                </template>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills section -->
    <section>
      <p class="section-eyebrow reveal">What I work with</p>
      <h2 class="section-title reveal">Technical Skills</h2>
      <p class="section-subtitle mt-2 mb-12 reveal">Core technologies and tools used in professional projects.</p>

      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="group in skills" :key="group.category" class="glass-card p-6 reveal">
          <div class="flex items-center gap-3 mb-4">
            <div class="icon-box">
              <component :is="getIcon(group.icon)" :size="18" class="text-[var(--color-accent)]" />
            </div>
            <h4 class="font-display font-semibold text-[var(--color-text)]">{{ group.category }}</h4>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in group.items" :key="item" class="skill-badge">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MapPin, Mail, Phone, GraduationCap, Server, Monitor, Cloud, Wrench } from '@lucide/vue'
import { skills } from '@/data/skills'
import { useScrollReveal } from '@/composables/useScrollReveal'
import profileImgSrc from '@/assets/profile-img.jpg'

useScrollReveal()

const infos = [
  { label: 'City', value: 'Surabaya, Jawa Timur', icon: MapPin },
  { label: 'Email', value: 'alfinkh98@gmail.com', icon: Mail },
  {
    label: 'WhatsApp',
    value: 'Chat Only',
    href: 'https://wa.me/6287776025381?text=Halo%20Mas%20Alfin,%20saya%20tertarik%20dengan%20jasa%20Web/DevOps%20Anda.',
    icon: Phone,
  },
  { label: 'Degree', value: 'S1 Teknik Informatika', icon: GraduationCap },
]

const iconMap = { Server, Monitor, Cloud, Wrench }
const getIcon = (name) => iconMap[name] ?? Server

// Profile image with fallback
const AVATAR_URL = 'https://ui-avatars.com/api/?name=M+Alfin+Khoiri&background=6c63ff&color=fff&size=256&bold=true&format=png'
const profileImg = ref(profileImgSrc)
const onImgError = () => { profileImg.value = AVATAR_URL }
</script>

<style scoped>
.profile-glow-ring {
  position: absolute;
  inset: -4px;
  border-radius: 20px;
  background: linear-gradient(135deg, var(--color-accent), var(--color-cyan));
  z-index: 0;
  opacity: 0.6;
  filter: blur(8px);
}

.info-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.9rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.icon-box {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(108, 99, 255, 0.12);
  border: 1px solid rgba(108, 99, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</style>
