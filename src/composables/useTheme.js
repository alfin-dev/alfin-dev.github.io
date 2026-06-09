import { ref, watchEffect } from 'vue'

const isDark = ref(true)

// Init from localStorage or system preference
const saved = localStorage.getItem('theme')
if (saved) {
  isDark.value = saved === 'dark'
} else {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
}

// Apply class to <html>
watchEffect(() => {
  const html = document.documentElement
  if (isDark.value) {
    html.classList.remove('light')
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
    html.classList.add('light')
  }
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
})

export function useTheme() {
  const toggleTheme = () => { isDark.value = !isDark.value }
  return { isDark, toggleTheme }
}
