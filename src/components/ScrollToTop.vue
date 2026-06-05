<template>
  <Transition name="scroll-top">
    <button v-if="visible" @click="scrollToTop" class="scroll-top-btn" aria-label="Scroll to top">
      <ChevronUp :size="20" />
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronUp } from '@lucide/vue'

const visible = ref(false)

const handleScroll = () => { visible.value = window.scrollY > 400 }
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent), #8b5cf6);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(108, 99, 255, 0.4);
  transition: all 0.3s ease;
}

.scroll-top-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(108, 99, 255, 0.55);
}

.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
