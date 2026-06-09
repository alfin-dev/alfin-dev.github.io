<template>
  <div class="py-20 px-6 max-w-6xl mx-auto">
    <!-- Header -->
    <p class="section-eyebrow reveal">My work</p>
    <h2 class="section-title reveal">Portfolio</h2>
    <p class="section-subtitle mt-2 mb-4 reveal">
      Riwayat proyek pengembangan sistem dan manajemen infrastruktur yang telah saya kerjakan.
    </p>

    <!-- Filter tags -->
    <div class="flex flex-wrap gap-2 mb-12 reveal">
      <button v-for="tag in tags" :key="tag" @click="activeTag = tag" class="filter-btn"
        :class="activeTag === tag ? 'filter-btn-active' : 'filter-btn-idle'">
        {{ tag }}
      </button>
    </div>

    <!-- Grid -->
    <TransitionGroup name="grid" tag="div" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="(item, index) in filteredPortfolio" :key="`${item.title}|${item.client}`" class="glass-card p-6 flex flex-col"
        :style="{ transitionDelay: `${(index % 3) * 80}ms` }">
        <!-- Tag badge -->
        <div class="flex items-start justify-between gap-2 mb-4">
          <span class="tag-badge">{{ item.tag }}</span>
          <div class="w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
            <FolderOpen :size="14" class="text-[var(--color-accent)]" />
          </div>
        </div>

        <!-- Content -->
        <h3 class="font-display font-semibold text-[var(--color-text)] text-sm leading-snug mb-2 flex-1">
          {{ item.title }}
        </h3>
        <p class="text-[var(--color-muted)] text-xs leading-relaxed mb-4">
          {{ item.description }}
        </p>

        <!-- Client -->
        <div class="flex items-center gap-1.5 text-xs text-[var(--color-muted)] border-t border-white/5 pt-4 mt-auto">
          <Building2 :size="12" class="text-[var(--color-accent)] flex-shrink-0" />
          <span class="truncate">{{ item.client }}</span>
        </div>
      </div>
    </TransitionGroup>

    <!-- Empty state -->
    <div v-if="filteredPortfolio.length === 0" class="text-center py-16 text-[var(--color-muted)]">
      No projects found for this category.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { FolderOpen, Building2 } from '@lucide/vue'
import { portfolio } from '@/data/portfolio'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const allTags = [...new Set(portfolio.map(p => p.tag))]
const tags = ['All', ...allTags]
const activeTag = ref('All')

const filteredPortfolio = computed(() =>
  activeTag.value === 'All' ? portfolio : portfolio.filter(p => p.tag === activeTag.value)
)
</script>

<style scoped>
.filter-btn {
  padding: 0.4rem 1rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.filter-btn-active {
  background: rgba(108, 99, 255, 0.2);
  border-color: rgba(108, 99, 255, 0.4);
  color: var(--color-accent-light);
  box-shadow: 0 0 15px rgba(108, 99, 255, 0.15);
}

.filter-btn-idle {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
  color: var(--color-muted);
}

.filter-btn-idle:hover {
  color: white;
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.07);
}

.tag-badge {
  font-size: 0.68rem;
  font-weight: 600;
  padding: 0.2rem 0.65rem;
  border-radius: 99px;
  background: rgba(0, 212, 255, 0.1);
  color: var(--color-cyan-light);
  border: 1px solid rgba(0, 212, 255, 0.2);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.grid-enter-active,
.grid-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
