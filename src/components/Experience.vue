<template>
    <v-dialog
      :model-value="show" @update:model-value="$emit('close')"
      width="auto"
      transition="dialog-bottom-transition"
      fullscreen
      scrollable
    >
        <template v-slot:default="{ isActive }">
            <v-card>
                <v-toolbar color="#05626C">
                    <v-btn
                    icon="mdi-close"
                    @click="$emit('close')"
                    ></v-btn>
                        <v-toolbar-title></v-toolbar-title>
                    <!-- <v-toolbar-title>Mi experiencia</v-toolbar-title> -->
                    <ThemeChange></ThemeChange>

                    <v-toolbar-items>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-title class="ma-0 pa-0">
                    <v-img
                    src="@/assets/fondo1.png"
                    class="align-center"
                    height="200px"
                    width="100%"
                    cover
                    >
                        <Vue3Lottie class="sombra-lottie"
                        :animationData="Experiencia" 
                        :height="250" 
                        :width="400"
                        :loop="false"
                        :autoplay="true"
                        />
                    </v-img>
                </v-card-title>
                <v-card-text >
                    <v-container >
                        <v-timeline class="px-0" side="end" :align="$vuetify.display.xs ? 'start' : 'center'">
                            <v-timeline-item
                                v-for="(item, i) in experiencias"
                                :key="i"
                                dot-color="#05626C"
                                size="large"
                                :fill-dot="false"
                            >
                                <template v-if="!$vuetify.display.xs" v-slot:opposite>
                                    <v-text class="text-subtitle-1 font-weight-bold">{{item.fechaInicial + ' - ' + item.fechaFinal}}</v-text>
                                </template>
                                <template v-slot:icon>
                                    <v-icon>
                                        mdi-office-building-marker-outline
                                    </v-icon>
                                </template>
                                <v-card color="#05626C" rounded="lg" class="pa-1 pa-sm-2">
                                    <v-card class="elevation-0" variant="flat" rounded="lg">
                                        <v-card-title class="text-h6 text-wrap">
                                        {{ item.puesto }}
                                        </v-card-title>
                                        
                                        <v-card-subtitle class="d-flex flex-column">
                                        <span class="font-weight-black text-teal-darken-3 d-block d-sm-none">
                                            {{item.fechaInicial + ' - ' + item.fechaFinal}}
                                        </span>
                                        <span>{{ item.empresa }}</span>
                                        </v-card-subtitle>

                                        <v-card-text class="text-justify px-2 px-sm-4">
                                        {{ item.descripcion }}
                                        <div class="mt-4 d-flex flex-wrap">
                                            <v-chip
                                            v-for="tech in item.technologies"
                                            :key="tech.id"
                                            size="small"
                                            class="ma-1"
                                            color="#05626C"
                                            :prepend-icon="tech.icon"
                                            >
                                            {{ tech.text }}
                                            </v-chip>
                                        </div>
                                        </v-card-text>
                                    </v-card>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-container>

                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>

<script lang="ts" setup>
    defineProps(['show']);
    defineEmits(['close']);
    import { Vue3Lottie } from 'vue3-lottie'
    import { ref } from 'vue'
    import Experiencia from '@/assets/exp.json'
    const expand = ref(true)
    const experiencias = [
        {
            fechaInicial:"jun 15, 2024",
            fechaFinal:"dic 15, 2025",
            empresa: "Publicis Groupe",
            puesto: "Desarrollador Full Stack",
            descripcion: "Diseñé e implementé procesos automatizados con Python y usé librerías para análisis de datos, conexión con API’s; GCP, Meta, Tik Tok, Twitter, Amazon ADS DSP, desarrollo de Front-End con Vue 3, JavaScript y uso de base de datos relacionales y no relacionales (Microsoft SQL Server y MongoDB), uso de servicios de AWS como Bucket, Terraform, control de versiones git que ayudaron a descargar información diaria actualizada con gigas de información centralizándola y limpiándola para su uso siempre disponible.",
            technologies: [ 
                {
                    id: 1,
                    text: "aws", 
                    icon: "mdi-aws" 
                },
                {
                    id: 2,
                    text: "python", 
                    icon: "mdi-language-python" 
                },
                {
                    id: 3,
                    text: "Microsoft SQL Server", 
                    icon: "mdi-microsoft" 
                },
                {
                    id: 4,
                    text: "Node", 
                    icon: "mdi-nodejs" 
                },
                {
                    id: 5,
                    text: "MongoDB", 
                    icon: "mdi-database" 
                },
                {
                    id: 6,
                    text: "Vue3", 
                    icon: "mdi-vuejs" 
                },
                {
                    id: 7,
                    text: "JavaScript", 
                    icon: "mdi-language-javascript" 
                },
                {
                    id: 8,
                    text: "TypeScript", 
                    icon: "mdi-language-typescript" 
                },
                {
                    id: 9,
                    text: "git", 
                    icon: "mdi-git" 
                },
                {
                    id: 10,
                    text: "terraform", 
                    icon: "mdi-terraform" 
                },
                {
                    id: 11,
                    text: "docker", 
                    icon: "mdi-docker" 
                },
                {
                    id: 12,
                    text: "linux", 
                    icon: "mdi-linux" 
                },
                {
                    id: 13,
                    text: "API's", 
                    icon: "mdi-api" 
                }
            ],
        },
        {
            fechaInicial:"mar 15, 2021",
            fechaFinal:"jul 15, 2024",
            empresa: "Instituto Electoral de la Ciudad de México",
            puesto: "Técnico Especializado en Ingeniería de Software",
            descripcion: "Diseñé e implementé sistemas C/S Back-End; PHP y Node JS Express Front-End; Vue 3, Angular, JavaScript, TypeScript, Bootstrap con análisis y creación de base de datos relacionales en Microsoft SQL Server con control de versiones git para procesos electorales para; conteos rápidos, registro de personas candidatas y candidatos electorales, administración y control de documentos electorales, PREP (Aseguré la integridad de datos en tiempo real para cierta cantidad de actas procesadas con votos durante todo el proceso electoral local) y creación de sistemas registro, alta y aplicación de cursos de capacitación electoral en línea que facilitaron todos los procesos, requerimientos, control y monitoreo real. Participación en procesos electorales extras.",
            technologies: [ 
                {
                    id: 1,
                    text: "PHP", 
                    icon: "mdi-language-php" 
                },
                {
                    id: 2,
                    text: "python", 
                    icon: "mdi-language-python" 
                },
                {
                    id: 3,
                    text: "Microsoft SQL Server", 
                    icon: "mdi-microsoft" 
                },
                {
                    id: 4,
                    text: "Node", 
                    icon: "mdi-nodejs" 
                },
                {
                    id: 5,
                    text: "Angular JS", 
                    icon: "mdi-angular" 
                },
                {
                    id: 6,
                    text: "Vue3", 
                    icon: "mdi-vuejs" 
                },
                {
                    id: 7,
                    text: "JavaScript", 
                    icon: "mdi-language-javascript" 
                },
                {
                    id: 8,
                    text: "TypeScript", 
                    icon: "mdi-language-typescript" 
                },
                {
                    id: 9,
                    text: "git", 
                    icon: "mdi-git" 
                },
                {
                    id: 10,
                    text: "API's", 
                    icon: "mdi-api" 
                }
            ],
        },
        {
            fechaInicial:"ene 15, 2024",
            fechaFinal:"feb 30, 2024",
            empresa: "Grupo Salinas / Tienda Dummy",
            puesto: "Desarrollador Full Stack",
            descripcion: "Diseñé e implementé una arquitectura de microservicios como API’s para exchange de criptomonedas (compra, venta, transferencia y recepción) con Python, NestJS, TypeScript y base de datos no relacionales con MongoDB aplicando pruebas unitarias y de calidad para aplicaciones y banca en línea de Grupo Salinas como; Super Baz Total Play y Banco Azteca o cajeros de criptomonedas.",
            technologies: [ 
                {
                    id: 1,
                    text: "python", 
                    icon: "mdi-language-python" 
                },
                {
                    id: 2,
                    text: "NestJs", 
                    icon: "mdi-nodejs" 
                },
                {
                    id: 3,
                    text: "JavaScript", 
                    icon: "mdi-language-javascript" 
                },
                {
                    id: 4,
                    text: "TypeScript", 
                    icon: "mdi-language-typescript" 
                },
                {
                    id: 5,
                    text: "git", 
                    icon: "mdi-git" 
                },
                {
                    id: 6,
                    text: "API's", 
                    icon: "mdi-api" 
                },
                {
                    id: 7,
                    text: "MongoDB", 
                    icon: "mdi-database" 
                }
            ],
        },
        {
            fechaInicial:"ago 1, 2018",
            fechaFinal:"feb 15, 2021",
            empresa: "Facultad de Química. UNAM CU",
            puesto: "Becario - Desarrollador Full Stack",
            descripcion: "Desarrollo de sistemas C/S con Front-End; Vue 2, Bootstrap, PHP, JavaScript y Back-End. base de datos relacionales MySQL con administración y mantenimiento de servidores en Linux.",
            technologies: [ 
                {
                    id: 1,
                    text: "PHP", 
                    icon: "mdi-language-php" 
                },
                {
                    id: 2,
                    text: "MYSQL", 
                    icon: "mdi-database" 
                },
                {
                    id: 3,
                    text: "Sybase", 
                    icon: "mdi-database" 
                },
                {
                    id: 4,
                    text: "Node", 
                    icon: "mdi-nodejs" 
                },
                {
                    id: 5,
                    text: "Vue2", 
                    icon: "mdi-vuejs" 
                },
                {
                    id: 6,
                    text: "JavaScript", 
                    icon: "mdi-language-javascript" 
                },
                {
                    id: 7,
                    text: "Bootstrap", 
                    icon: "mdi-bootstrap" 
                },
                {
                    id: 8,
                    text: "Semantic UI", 
                    icon: "mdi-semantic-web" 
                },
                {
                    id: 9,
                    text: "Linux", 
                    icon: "mdi-linux" 
                },
                {
                    id: 10,
                    text: "git", 
                    icon: "mdi-git" 
                },
            ],
        }
    ]
</script>
<style scoped>
    .sombra-lottie {
        /* Filtro CSS que aplica sombra a la silueta del SVG */
        filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.5));
    }
    .v-card-text {
        -webkit-overflow-scrolling: touch;
        overflow-y: auto;
    }
    @media (max-width: 600px) {
        /* Reduce el espacio que ocupa el eje central del timeline */
        :deep(.v-timeline--vertical.v-timeline--side-end .v-timeline-item__body) {
            padding-inline-start: 12px !important; /* Espacio entre el punto y la carta */
        }
        
        :deep(.v-timeline-item__divider) {
            min-width: 40px !important; /* Reduce el ancho del carril del punto */
        }

        /* Ajuste para que el contenedor principal no tenga padding lateral excesivo */
        .v-container {
            padding-left: 8px !important;
            padding-right: 8px !important;
        }
    }
</style>