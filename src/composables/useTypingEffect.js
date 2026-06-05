import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Typing effect composable
 * @param {string[]} words - Array of words to cycle through
 * @param {object} options
 */
export function useTypingEffect(words, options = {}) {
  const {
    typeSpeed = 60,
    deleteSpeed = 40,
    pauseDuration = 1800,
  } = options

  const displayText = ref('')
  const isTyping = ref(true)
  const showCursor = ref(true)

  let wordIndex = 0
  let charIndex = 0
  let timer = null
  let cursorTimer = null

  const tick = () => {
    const current = words[wordIndex]

    if (isTyping.value) {
      if (charIndex < current.length) {
        displayText.value += current[charIndex]
        charIndex++
        timer = setTimeout(tick, typeSpeed)
      } else {
        // Pause at end of word
        isTyping.value = false
        timer = setTimeout(tick, pauseDuration)
      }
    } else {
      if (charIndex > 0) {
        displayText.value = current.slice(0, charIndex - 1)
        charIndex--
        timer = setTimeout(tick, deleteSpeed)
      } else {
        // Move to next word
        wordIndex = (wordIndex + 1) % words.length
        isTyping.value = true
        timer = setTimeout(tick, typeSpeed)
      }
    }
  }

  onMounted(() => {
    timer = setTimeout(tick, 500)
    cursorTimer = setInterval(() => {
      showCursor.value = !showCursor.value
    }, 530)
  })

  onUnmounted(() => {
    clearTimeout(timer)
    clearInterval(cursorTimer)
  })

  return { displayText, showCursor }
}
