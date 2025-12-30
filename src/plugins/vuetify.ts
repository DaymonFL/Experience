/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { es } from 'vuetify/locale'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light:{
        colors:{
          background: '#EEEEEE',
          surface: '#FFFFFF',
        }
      },
      dark:{
        colors:{
          background: '#282a42',
          surface: '#30334e',
        }
      }
    },
  },
  locale: {
    messages: { es },
  },
})
