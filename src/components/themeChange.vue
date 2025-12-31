<template>
  <v-tooltip location="start" :text="theme.global.name.value == 'light' ? 'Modo claro' : 'Modo oscuro'">
      <template v-slot:activator="{ props }">
          <transition name="fade-transition">
              <v-btn v-bind="props" variant="tonal" class="mx-2" @click="toggleTheme" :icon="theme.global.name.value == 'light' ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"></v-btn>
          </transition>
      </template>
  </v-tooltip>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { ref, reactive, computed, nextTick, onBeforeMount, watch, watchEffect } from 'vue'
  export default defineComponent({
      name: 'ButtonToggle',
  })
</script>
<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useTheme } from 'vuetify' 
  
  const theme = useTheme();
  onMounted(async () => {
      try {
          if (localStorage.getItem("lightBlack") != null) {
              const modeColor = localStorage.lightBlack;
              theme.global.name.value = modeColor;
          }
      } catch (error) {
          console.error('Error al cargar los datos:', error);
      }
  });
   const user = localStorage.lightBlack;
  const systemTheme = ref('light');

  // console.log(theme);
  function toggleTheme () {
      localStorage.setItem('lightBlack', theme.global.name.value == 'dark'? 'light': 'dark' );
      theme.global.name.value = localStorage.lightBlack == 'light' ? 'light' : 'dark'
  }
 
  watchEffect(() => {
    theme.global.name.value = (
      user === 'system' ? systemTheme.value : user
    )
  })

  watch(theme.global.current, themeTransition)

  function themeTransition () {
    const x = performance.now()
    for (let i = 0; i++ < 1e7; i << 9 & 9 % 9 * 9 + 9);
  //   if (performance.now() - x > 10) return

    const el: HTMLElement = document.querySelector('[data-v-app]')!
    const children = el.querySelectorAll('*') as NodeListOf<HTMLElement>

    children.forEach(el => {
      if (hasScrollbar(el)) {
        el.dataset.scrollX = String(el.scrollLeft)
        el.dataset.scrollY = String(el.scrollTop)
      }
    })

    const copy = el.cloneNode(true) as HTMLElement
    copy.classList.add('app-copy')
    const rect = el.getBoundingClientRect()
    copy.style.top = rect.top + 'px'
    copy.style.left = rect.left + 'px'
    copy.style.width = rect.width + 'px'
    copy.style.height = rect.height + 'px'

    const targetEl = document.activeElement as HTMLElement
    const targetRect = targetEl.getBoundingClientRect()
    const left = targetRect.left + targetRect.width / 2 + window.scrollX
    const top = targetRect.top + targetRect.height / 2 + window.scrollY
    el.style.setProperty('--clip-pos', `${left}px ${top}px`)
    el.style.removeProperty('--clip-size')

    nextTick(() => {
      el.classList.add('app-transition')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.setProperty('--clip-size', Math.hypot(window.innerWidth, window.innerHeight) + 'px')
        })
      })
    })

    document.body.append(copy)

    ;(copy.querySelectorAll('[data-scroll-x], [data-scroll-y]') as NodeListOf<HTMLElement>).forEach(el => {
      el.scrollLeft = +el.dataset.scrollX!
      el.scrollTop = +el.dataset.scrollY!
    })

    function onTransitionend (e: TransitionEvent) {
      if (e.target === e.currentTarget) {
        copy.remove()
        el.removeEventListener('transitionend', onTransitionend)
        el.removeEventListener('transitioncancel', onTransitionend)
        el.classList.remove('app-transition')
        el.style.removeProperty('--clip-size')
        el.style.removeProperty('--clip-pos')
      }
    }
    el.addEventListener('transitionend', onTransitionend)
    el.addEventListener('transitioncancel', onTransitionend)
  }

  function hasScrollbar (el?: Element | null) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return false

    const style = window.getComputedStyle(el)
    return style.overflowY === 'scroll' || (style.overflowY === 'auto' && el.scrollHeight > el.clientHeight)
  }
</script>

<style  lang="sass">

// Theme transition
.app-copy
  position: fixed !important
  z-index: -1 !important
  pointer-events: none !important
  contain: size style !important
  overflow: clip !important

.app-transition
  --clip-size: 0
  --clip-pos: 0 0
  clip-path: circle(var(--clip-size) at var(--clip-pos))
  transition: clip-path .80s ease-out
</style>

    