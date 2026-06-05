import { onMounted, onUnmounted } from 'vue'

/**
 * Scroll reveal composable using Intersection Observer
 * Adds .visible class to elements with .reveal class when they enter viewport
 */
export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Add stagger delay for sibling elements
            const siblings = entry.target.parentElement?.querySelectorAll('.reveal')
            if (siblings) {
              let delay = 0
              siblings.forEach((el) => {
                if (!el.classList.contains('visible')) {
                  el.style.transitionDelay = `${delay}ms`
                }
                delay += 80
              })
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
