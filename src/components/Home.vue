<template>
    <div class="scroll-container my-2">
      <div class="scroll-content top-animation">
        <div v-for="n in 3" :key="n" class="d-flex">
            <v-icon v-for="(icon, i) in topIcons" :key="i" size="50" class="mx-8 color" color="#05626C">
            {{ icon }}
            </v-icon>
        </div>
      </div>
    </div>
    <v-container class="pa-0" fluid>
            <!-- <v-container fluid> -->
        <v-card class="rounded-0 w-100 elevation-0" color="#05626C" width="100%" >
            <v-img
            src="@/assets/fondo1.png"
            class="align-center "
            height="520px"
            cover
            >
                <v-container fill-height class="d-flex flex-column align-center justify-center">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-avatar
                            size="220"
                            v-bind="props"
                            :color="isHovering ? '#05636c' :'grey'"
                        >
                            <v-img src="@/assets/Me.png" cover v-if="!isHovering"></v-img>
                            <v-expand-transition>
                                <div v-if="isHovering">  
                                    <v-btn
                                        variant="tonal"
                                        rounded="xl"
                                        color="white"
                                        prepend-icon="mdi-information-variant"
                                        @click="MedialogVisible = true"
                                    >Sobre mí
                                    </v-btn>
                                </div> 
                            <!-- <div
                                
                                class="d-flex bg-orange-darken-2 v-card--reveal text-h2"
                                style="height: 100%;"
                                >
                                $14.99
                            </div> -->
                            </v-expand-transition>
                        </v-avatar>
                        
                    </v-hover>
                    <!-- gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" -->
                        <v-card-title 
                        class="text-white text-center text-wrap px-4 py-2 ">
                        Dai Fernando Sastre Hernández | Arquitecto de Soluciones Full Stack
                        </v-card-title>
                </v-container>
            </v-img>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                variant="outlined"
                rounded="xl"
                prepend-icon="mdi-information-variant"
                color="white"
                @click="MedialogVisible = true"
            >Sobre mí
            </v-btn>

            <v-btn
                variant="outlined"
                rounded="xl"
                color="white"
                @click="ExpdialogVisible = true"
            >
              <Vue3Lottie
                        :animationData="EstrellasAnimadas"
                        :height="28" 
                        :width="28"
                        :loop="true"
                        :autoplay="true"
                        />  
              Explora mi experiencia
            </v-btn>

            </v-card-actions>
        </v-card>
                <!-- </v-container> -->
    </v-container>
    <div class="scroll-container mt-3 mb-0">
      <div class="scroll-content bottom-animation">
        <div v-for="n in 3" :key="n" class="d-flex">
            <v-icon v-for="(icon, i) in bottomIcons" :key="i" size="50" class="mx-8" color="#05626C">
            {{ icon }}
            </v-icon>
        </div>
      </div>
    </div>
    <Me 
        :show="MedialogVisible" 
        @close="MedialogVisible = false" 
    />
    <Experience
        :show="ExpdialogVisible" 
        @close="ExpdialogVisible = false" 
    />
</template>
<script setup lang="ts">
    import {ref} from 'vue';
    import Me from '@/components/Me.vue';
    import { Vue3Lottie } from 'vue3-lottie'
    import Experience from '@/components/Experience.vue';
    import EstrellasAnimadas from '@/assets/stars.json'

    
    const MedialogVisible = ref(false);
    const ExpdialogVisible = ref(false);
    const topIcons = ['mdi-vuejs', 'mdi-google-cloud', 'mdi-angular', 'mdi-nodejs', 'mdi-language-javascript', 'mdi-bootstrap', 'mdi-dot-net', 'mdi-language-html5', 'mdi-microsoft-visual-studio-code', 'mdi-language-typescript', 'mdi-codepen', 'mdi-language-css3'];
    const bottomIcons = ['mdi-language-python', 'mdi-database', 'mdi-language-php', 'mdi-microsoft', 'mdi-aws', 'mdi-docker', 'mdi-linux', 'mdi-language-java', 'mdi-api', 'mdi-github', 'mdi-language-csharp', 'mdi-bash', 'mdi-terraform'];
  //
</script>
<style scoped>

.color-tech {
  color: #05626C; /* Usamos tu color institucional para los iconos */
  opacity: 0.6;
}

/* 1. Contenedor que oculta lo que sobresale */
.scroll-container {
  overflow: hidden;
  width: 100%;
  background: transparent;
  display: flex;
  position: relative;
}

/* 2. El "riel" que contiene los logos */
.scroll-content {
  display: flex;
  width: max-content; /* Importante para que no se colapse */
}

/* 3. Animación hacia la IZQUIERDA */
.top-animation {
  animation: scrollLeft 40s linear infinite;
}

/* 4. Animación hacia la DERECHA */
.bottom-animation {
  animation: scrollRight 40s linear infinite;
}

/* KEYFRAMES MÁGICOS */
@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Se desplaza exactamente la mitad (el primer grupo de logos) */
    transform: translateX(-50%);
  }
}

@keyframes scrollRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Pausar al pasar el mouse (opcional, muy profesional) */
.scroll-container:hover .scroll-content {
  animation-play-state: paused;
}
</style>