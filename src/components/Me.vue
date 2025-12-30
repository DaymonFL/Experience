<template>
    <v-dialog
      :model-value="show" @update:model-value="$emit('close')"
      width="auto" scrollable
    >
        <template v-slot:default="{ isActive }">
            <v-card
            max-width="600"
            rounded="xl"
            >
                <!-- <v-img
                    color="surface-variant"
                    height="250"
                    src="@/assets/cu.jpg"
                    cover
                >
                    <v-toolbar color="transparent">
                        <template v-slot:prepend>
                            <v-btn icon="$menu"></v-btn>
                        </template>

                        <v-toolbar-title class="text-h6" text="Sobre mi"></v-toolbar-title>

                        <template v-slot:append>
                            <v-btn icon="mdi-dots-vertical"></v-btn>
                        </template>
                    </v-toolbar>
                </v-img> -->
                <v-defaults-provider :defaults="{ VBtn: { variant: 'flat' } }" class="mb-0">
                    <v-sheet class="overflow-hidden mb-0" height="950">
                        <v-carousel
                            v-model="currentIndex"
                            direction="horizontal"
                            height="400"
                            progress="#05636c"
                            hide-delimiter-background
                        >
                            <v-carousel-item
                                v-for="(item, i) in items"
                                :key="i"
                                :src="item.src"
                                height="250"
                                width="100%"
                                cover
                            >
                                <Vue3Lottie class="mt-13 sombra-lottie"
                                :animationData="NombreAnimacion" 
                                :height="270" 
                                :width="300"
                                :loop="false"
                                :autoplay="true"
                                />
                            
                        </v-carousel-item>

                            <v-overlay
                            :scrim="false"
                            content-class="w-100 h-100 d-flex flex-column align-center justify-space-between pointer-pass-through pt-3"
                            contained
                            model-value
                            no-click-animation
                            persistent
                                >
                                <v-scroll-x-transition mode="out-in" appear>
                                    <v-sheet :key="currentIndex" rounded="xl">
                                        <v-list-item
                                            :prepend-avatar="currentItem?.avatarId"
                                            :subtitle="currentItem?.subtitle"
                                            :title="currentItem?.authorName"
                                            class="pa-1 pr-6"
                                        ></v-list-item>
                                    </v-sheet>
                                </v-scroll-x-transition>
                                <v-chip
                                    :text="`${ currentIndex + 1 } / ${items.length }`"
                                    color="#eee"
                                    size="small"
                                    variant="flat"
                                ></v-chip>
                            </v-overlay>
                        </v-carousel>
                    </v-sheet>
                </v-defaults-provider>
                <v-card-text class="mt-0">
                    
                    <v-text>Egresado de la</v-text>
                    <v-text class="font-weight-bold"> Facultad de Ingeniería en la Universidad Nacional Autónoma de México</v-text>
                    <v-text> en el año 2019 con la carrera de</v-text><v-text class="font-weight-bold"> Ingeniería en Computación. </v-text>
                    <v-text>Soy una persona dedicada, autodidacta y con ganas de aprender e innovar que es capaz de trabajar en equipo.</v-text>
                    <div class="font-weight-bold ms-1 my-2">Hoy</div>
                    <v-text class="text-justify">
                        Con más de 5 años de experiencia en desarrollo Full Stack, con especialización para creación y uso de API's, ecosistemas
                        JavaScript/TypeScript, diseño e implementación de base de datos y sistemas web, de escritorio, aplicativos con uso de API's y microservicios
                        de plataformas de la industria digital.
                    </v-text>

                    <div class="font-weight-bold ms-1 mt-2">Hábilidades</div>

                    <v-list density="compact" color="#05626C">
                        <v-list-subheader class="font-weight-bold">Lenguajes</v-list-subheader>
                        <v-list-item
                            v-for="(item, i) in itemSkillsLenguage"
                            :key="i"
                            :value="item"
                        >
                            <template v-slot:prepend>
                            <v-icon :icon="item.icon" color="#05626C"></v-icon>
                            </template>

                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item>
                        <v-list-subheader class="font-weight-bold">Frameworks</v-list-subheader>
                        <v-list-item
                            v-for="(item, i) in itemSkillsFrameWorks"
                            :key="i"
                            :value="item"
                        >
                            <template v-slot:prepend>
                            <v-icon :icon="item.icon" color="#05626C"></v-icon>
                            </template>

                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item>
                        <v-list-subheader class="font-weight-bold">Cloud/DevOps</v-list-subheader>
                        <v-list-item
                            v-for="(item, i) in itemSkillsCloud"
                            :key="i"
                            :value="item"
                        >
                            <template v-slot:prepend>
                            <v-icon :icon="item.icon" color="#05626C"></v-icon>
                            </template>

                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item>
                        <v-list-subheader class="font-weight-bold">Base de datos (Relaciones y no relacionales)</v-list-subheader>
                        <v-list-item
                            v-for="(item, i) in itemSkillsDataBase"
                            :key="i"
                            :value="item"
                        >
                            <template v-slot:prepend>
                                <v-icon :icon="item.icon" color="#05626C"></v-icon>
                            </template>

                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <!-- <v-timeline align="start" density="compact">
                        <v-timeline-item
                        v-for="message in messages"
                        :key="message.time"
                        :dot-color="message.color"
                        size="x-small"
                        >
                        <div class="mb-4">
                            <div class="font-weight-normal">
                            <strong>{{ message.from }}</strong> @{{ message.time }}
                            </div>

                            <div>{{ message.message }}</div>
                        </div>
                        </v-timeline-item>
                    </v-timeline> -->
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        class="ms-auto"
                        variant="text"
                        text="Cerrar"
                        @click="$emit('close')"
                        rounded="xl"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script lang="ts" setup>
    defineProps(['show']);
    defineEmits(['close']);
    import { shallowRef, toRef, computed } from 'vue'
    import { Vue3Lottie } from 'vue3-lottie'
    import NombreAnimacion from '@/assets/name.json'

    const currentIndex = ref(0)
    const items = [
        {
        authorName: 'Dai Sastre',
        avatarId:  new URL('@/assets/Me.png', import.meta.url).href,
        subtitle: 'Abril 12, 2019',
        src: new URL('@/assets/cu.jpg', import.meta.url).href,
        },
        {
        authorName: 'Dai Sastre',
        avatarId: new URL('@/assets/Me.png', import.meta.url).href,
        subtitle: 'Agosto 29, 2023',
        src: new URL('@/assets/Me4.jpg', import.meta.url).href,
        },
        {
        authorName: 'Dai Sastre',
        avatarId: new URL('@/assets/Me.png', import.meta.url).href,
        subtitle: 'Junio 28, 2025',
        src: new URL('@/assets/Me3.jpg', import.meta.url).href,
        },
        {
        authorName: 'Dai Sastre',
        avatarId: new URL('@/assets/Me.png', import.meta.url).href,
        subtitle: 'Nov 9, 2025',
        src: new URL('@/assets/Me2.jpg', import.meta.url).href,
        },
    ]
    const currentItem = computed(() => items[currentIndex.value])
    const itemSkillsLenguage = [
        { text: 'Python', icon: 'mdi-star-circle-outline' },
        { text: 'PL / SQL', icon: 'mdi-star-circle-outline' },
        { text: 'PHP', icon: 'mdi-star-circle-outline' },
        { text: 'Visual Basic', icon: 'mdi-star-circle-outline' },
        { text: 'Java', icon: 'mdi-star-circle-outline' },
        { text: 'Java Script y TypeScript', icon: 'mdi-star-circle-outline' },
        { text: 'C#', icon: 'mdi-star-circle-outline' },
    ]
    const itemSkillsFrameWorks = [
        { text: 'Vue3', icon: 'mdi-star-circle-outline' },
        { text: 'NestJs', icon: 'mdi-star-circle-outline' },
        { text: 'Node JS Express', icon: 'mdi-star-circle-outline' },
        { text: 'Ajax', icon: 'mdi-star-circle-outline' },
        { text: 'Bootstrap', icon: 'mdi-star-circle-outline' },
        { text: 'Semantic UI', icon: 'mdi-star-circle-outline' },
        { text: 'Angular JS', icon: 'mdi-star-circle-outline' },
    ]
    const itemSkillsCloud = [
        { text: 'AWS', icon: 'mdi-star-circle-outline' },
        { text: 'GCP', icon: 'mdi-star-circle-outline' },
        { text: 'Meta', icon: 'mdi-star-circle-outline' },
        { text: 'Tik Tok', icon: 'mdi-star-circle-outline' },
        { text: 'X (Twitter)', icon: 'mdi-star-circle-outline' },
        { text: 'Servicios de consulta por APIs', icon: 'mdi-star-circle-outline' },
    ]
    const itemSkillsDataBase = [
        { text: 'Microsoft SQL Server', icon: 'mdi-star-circle-outline' },
        { text: 'Oracle', icon: 'mdi-star-circle-outline' },
        { text: 'SQL Lite', icon: 'mdi-star-circle-outline' },
        { text: 'PostgreSQL', icon: 'mdi-star-circle-outline' },
        { text: 'MySQL', icon: 'mdi-star-circle-outline' },
        { text: 'MongoDB', icon: 'mdi-star-circle-outline' },
        { text: 'Sybase', icon: 'mdi-star-circle-outline' },
    ]
</script>
<style scoped>
    .sombra-lottie {
    /* Filtro CSS que aplica sombra a la silueta del SVG */
    filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.5));
    }
</style>