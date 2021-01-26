import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: false,
    themes: {
      light: {
        primary: '#fbac21',
        secondary: '#f09b1f',
        accent: '#975416',
        black: '#040404',
        primaryGreen: '#131c13',
        accentGreen: '#040c08',
        error: '#c13b2f',
        info: '#2780ba',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#b67d48',
        secondary: '#af9487',
        accent: '#975416',
        black: '#040404',
        primaryGreen: '#131c13',
        accentGreen: '#040c08',
        error: '#c13b2f',
        info: '#2780ba',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
  icons: {
    iconfont: 'fa',
  },
})
