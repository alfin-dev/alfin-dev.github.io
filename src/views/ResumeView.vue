<template>
  <div class="py-20 px-6 max-w-5xl mx-auto">
    <!-- Header -->
    <p class="section-eyebrow reveal">Background</p>
    <h2 class="section-title reveal">Resume</h2>
    <p class="section-subtitle mt-2 mb-8 reveal">Pengalaman profesional dan riwayat pendidikan saya.</p>

    <!-- Download CV -->
    <div class="mb-12 reveal">
      <button @click="viewPdf" class="btn-accent inline-flex cursor-pointer">
        <Eye :size="16" class="relative z-10" />
        <span>View CV (PDF · ATS Friendly)</span>
      </button>
    </div>

    <div class="grid md:grid-cols-2 gap-10">
      <!-- Left: Summary + Education -->
      <div>
        <!-- Summary card -->
        <div class="glass-card p-6 mb-8 reveal">
          <div class="flex items-center gap-3 mb-4">
            <div class="section-icon-box">
              <User :size="18" class="text-[var(--color-accent)]" />
            </div>
            <h3 class="font-display font-semibold text-lg text-[var(--color-text)]">Summary</h3>
          </div>
          <h4 class="font-semibold text-[var(--color-text)] mb-2">M. Alfin Khoiri</h4>
          <p class="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
            Web Developer dan DevOps Engineer berpengalaman 3+ tahun. Ahli dalam membangun
            aplikasi web scalable dengan Laravel & PHP serta mengelola infrastruktur server yang aman.
          </p>
          <div class="flex flex-col gap-2 text-sm">
            <div class="flex items-center gap-2 text-[var(--color-muted)]">
              <MapPin :size="14" class="text-[var(--color-accent)]" />
              Surabaya, Jawa Timur
            </div>
            <div class="flex items-center gap-2 text-[var(--color-muted)]">
              <Mail :size="14" class="text-[var(--color-accent)]" />
              alfinkh98@gmail.com
            </div>
            <a href="https://wa.me/6287776025381?text=Halo%20Mas%20Alfin,%20saya%20tertarik%20dengan%20jasa%20Web/DevOps%20Anda."
              target="_blank" class="flex items-center gap-2 text-[var(--color-cyan)] hover:underline">
              <Phone :size="14" class="text-[var(--color-accent)]" />
              WhatsApp (Chat Only)
            </a>
          </div>
        </div>

        <!-- Education -->
        <div class="reveal">
          <div class="flex items-center gap-3 mb-5">
            <div class="section-icon-box">
              <GraduationCap :size="18" class="text-[var(--color-cyan)]" />
            </div>
            <h3 class="font-display font-semibold text-lg text-[var(--color-text)]">Education</h3>
          </div>
          <div class="timeline-container">
            <div class="timeline-item">
              <div class="timeline-dot-wrapper">
                <div class="timeline-dot"></div>
                <div class="timeline-connector"></div>
              </div>
              <div class="glass-card p-5 flex-1 mb-0">
                <div class="flex items-start justify-between gap-2 flex-wrap mb-2">
                  <h4 class="font-semibold text-[var(--color-text)] text-sm">S1 Teknik Informatika</h4>
                  <span class="period-badge">2017 – 2021</span>
                </div>
                <p class="text-[var(--color-cyan)] text-xs font-medium mb-2">Universitas 17 Agustus 1945 Surabaya</p>
                <p class="text-[var(--color-muted)] text-xs leading-relaxed">
                  Lulus dengan predikat <strong class="text-[var(--color-text)]">Cum Laude (IPK 3.80)</strong>.
                  Lulusan terbaik Prodi Teknik Informatika 2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Experience -->
      <div>
        <div class="flex items-center gap-3 mb-5 reveal">
          <div class="section-icon-box">
            <Briefcase :size="18" class="text-[var(--color-accent)]" />
          </div>
          <h3 class="font-display font-semibold text-lg text-[var(--color-text)]">Professional Experience</h3>
        </div>

        <div class="timeline-container">
          <div v-for="(job, index) in experience" :key="index" class="timeline-item reveal">
            <div class="timeline-dot-wrapper">
              <div class="timeline-dot"></div>
              <div v-if="index < experience.length - 1" class="timeline-connector"></div>
            </div>
            <div class="glass-card p-5 flex-1 mb-0">
              <div class="flex items-start justify-between gap-2 flex-wrap mb-1">
                <h4 class="font-semibold text-[var(--color-text)] text-sm">{{ job.title }}</h4>
                <span class="period-badge">{{ job.period }}</span>
              </div>
              <p class="text-[var(--color-cyan)] text-xs font-medium mb-3">{{ job.company }}</p>
              <ul class="space-y-1.5">
                <li v-for="task in job.tasks" :key="task"
                  class="flex items-start gap-2 text-[var(--color-muted)] text-xs leading-relaxed">
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0"></span>
                  {{ task }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, MapPin, Mail, Phone, GraduationCap, Briefcase, Eye } from '@lucide/vue'
import { experience } from '@/data/experience'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const viewPdf = async () => {
  try {
    const response = await fetch('/CV_Alfin_ATS_Modern.pdf')
    const blob = await response.blob()
    const pdfBlob = new Blob([blob], { type: 'application/pdf' })
    const blobUrl = URL.createObjectURL(pdfBlob)
    window.open(blobUrl, '_blank')
  } catch (error) {
    console.error('Error viewing PDF:', error)
    window.open('/CV_Alfin_ATS_Modern.pdf', '_blank')
  }
}
</script>

<style scoped>
.section-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(108, 99, 255, 0.12);
  border: 1px solid rgba(108, 99, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.period-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
  background: rgba(108, 99, 255, 0.15);
  color: var(--color-accent-light);
  border: 1px solid rgba(108, 99, 255, 0.25);
  white-space: nowrap;
}

.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: flex;
  gap: 1rem;
  padding-bottom: 1.25rem;
}

.timeline-dot-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 4px;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-accent);
  border: 2px solid var(--color-bg-primary);
  box-shadow: 0 0 10px var(--color-accent);
  flex-shrink: 0;
}

.timeline-connector {
  flex: 1;
  width: 2px;
  background: linear-gradient(to bottom, var(--color-accent), rgba(108, 99, 255, 0.1));
  margin-top: 4px;
  min-height: 24px;
}
</style>
