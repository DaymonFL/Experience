<template>
  <v-tooltip 
    location="start" 
    :text="theme.global.name.value === 'light' ? 'Modo claro' : 'Modo oscuro'"
  >
    <template v-slot:activator="{ props }">
      <v-btn 
        v-bind="props" 
        variant="tonal" 
        class="mx-2" 
        @click="toggleTheme" 
        :icon="theme.global.name.value === 'light' ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
      ></v-btn>
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const STORAGE_KEY = 'lightBlack'

// 1. Inicialización del tema
onMounted(() => {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  if (savedTheme) {
    theme.global.name.value = savedTheme
  } else {
    // Opcional: Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.global.name.value = prefersDark ? 'dark' : 'light'
  }
})

// 2. Función principal para cambiar el tema
function toggleTheme(event: MouseEvent) {
  const newTheme = theme.global.name.value === 'light' ? 'dark' : 'light'
  
  // Guardar en localStorage
  localStorage.setItem(STORAGE_KEY, newTheme)
  
  // Ejecutar transición visual
  prepareTransition(event)
  
  // Cambiar el valor real del tema
  theme.global.name.value = newTheme
}

// 3. Lógica de la transición visual (Ripple effect)
function prepareTransition(ev: MouseEvent) {
  const el = document.querySelector('[data-v-app]') as HTMLElement
  if (!el) return

  // Clonar el estado actual del DOM para la superposición
  const copy = el.cloneNode(true) as HTMLElement
  copy.classList.add('app-copy')
  
  // Posicionar la copia exactamente sobre el original
  const rect = el.getBoundingClientRect()
  Object.assign(copy.style, {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`
  })

  // Calcular el punto de origen (donde el usuario hizo clic)
  const x = ev.clientX
  const y = ev.clientY
  
  el.style.setProperty('--clip-pos', `${x}px ${y}px`)
  el.style.removeProperty('--clip-size')

  document.body.append(copy)

  // Sincronizar scrolls de la copia
  const scrolledEls = copy.querySelectorAll('[data-scroll-x], [data-scroll-y]')
  scrolledEls.forEach(elCopy => {
    const htmlEl = elCopy as HTMLElement
    htmlEl.scrollLeft = Number(htmlEl.dataset.scrollX)
    htmlEl.scrollTop = Number(htmlEl.dataset.scrollY)
  })

  nextTick(() => {
    el.classList.add('app-transition')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Expandir el círculo hasta cubrir toda la pantalla
        el.style.setProperty('--clip-size', `${Math.hypot(window.innerWidth, window.innerHeight)}px`)
      })
    })
  })

  const onTransitionEnd = (e: TransitionEvent) => {
    if (e.target === el) {
      copy.remove()
      el.classList.remove('app-transition')
      el.style.removeProperty('--clip-size')
      el.style.removeProperty('--clip-pos')
      el.removeEventListener('transitionend', onTransitionEnd)
    }
  }
  el.addEventListener('transitionend', onTransitionEnd)
}
</script>

<style lang="sass">
// Estilos para la transición de "recorte"
.app-copy
  position: fixed !important
  z-index: 0 !important
  pointer-events: none !important
  contain: size style !important
  overflow: clip !important

.app-transition
  --clip-size: 0px
  --clip-pos: 0 0
  z-index: 1
  clip-path: circle(var(--clip-size) at var(--clip-pos))
  transition: clip-path 0.8s ease-in-out
</style>