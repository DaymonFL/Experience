<template>
  <!-- <v-card class="mx-auto"> -->
    <v-layout>
      <v-app-bar
        scroll-behavior="fade-image"
        
        color="#05626C"
      >
        <ThemeChange></ThemeChange>

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
  //
</script>
