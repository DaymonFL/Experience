<template>
  <!-- <v-card class="mx-auto"> -->
    <v-layout>
      <v-app-bar
        scroll-behavior="fade-image"
        
        color="#05626C"
      >
        <ButtonToggle></ButtonToggle>
      </v-app-bar>
        <!-- image="@/assets/fondo1.png" -->
      <v-main >
        <router-view />
      </v-main>
    </v-layout>
  <!-- </v-card> -->
  <AppFooter />
</template>

<script lang="ts" setup>
  import ButtonToggle from '../components/themeChange.vue';
  //
</script>
