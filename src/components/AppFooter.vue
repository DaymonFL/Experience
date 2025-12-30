<template>
  <v-footer appheight="40" color="#05626C">
    <a
      v-for="item in items"
      :key="item.title"
      class="d-inline-block mx-2 social-link"
      :href="item.href"
      rel="noopener noreferrer"
      target="_blank"
      :title="item.title"
    >
    <v-hover v-slot="{ isHovering, props }">
      <v-icon
        v-bind="props"
        :icon="item.icon"
        :color="isHovering ? item.color : 'white'"
        :size="isHovering ? 42 : 24"
      />
    </v-hover>
        
    </a>

    <div class="text-caption text-white" style="position: absolute; right: 16px;">
      &copy; {{ (new Date()).getFullYear() }} Dai Sastre.
      Más Información
      <v-hover v-slot="{ isHovering, props }">
        <v-icon
          v-bind="props"
          icon="mdi-page-next-outline"
          @click="dialog = true"
          :color="isHovering ? 'teal' : 'white'"
          :size="isHovering ? 42 : 24"
        >
        </v-icon>
      </v-hover>
    </div>
  </v-footer>
  <v-dialog v-model="dialog"  max-width="400" persistent transition="dialog-bottom-transition" >
    <v-card
      prepend-icon="mdi-information"
      color="surface-variant"
      image="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg"
      text="Esta presentación fue diseñada y creada por mi usando Vue 3, Vuetify, Adobe Illustrator, Adobe After Effects, TypeScript, CSS & Node"
      title="Información de desarrollo"
      rounded="xl"
    >
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false" rounded="xl">
          Cerrar
        </v-btn>
      </template>
    </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const dialog = ref(false)

  const items = [
    {
      title: 'LinkedIn',
      icon: 'mdi-linkedin',
      href: 'https://www.linkedin.com/in/dai-fernando-sastre-hernandez-ing',
      color:'#0E76A8'
    },
    {
      title: 'GitHub',
      icon: `mdi-github`,
      href: 'https://github.com/DaymonFL',
      color:'#171515'
    },
    {
      title: 'Facebook',
      icon: 'mdi-facebook',
      href: 'https://www.facebook.com/heyDaiSastre/',
      color:'#3B5998'
    },
    {
      title: 'Instagram',
      icon: 'mdi-instagram',
      href: 'https://www.instagram.com/daymon_sastre/',
      color:'#fd1d1d'
    }
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
