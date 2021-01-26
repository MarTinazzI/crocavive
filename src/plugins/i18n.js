import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ptbr from '@/locales/ptbr'


Vue.use(VueI18n)

const messages = {
  PTBR: ptbr,
}

export default new VueI18n({
  locale: 'PTBR',
  fallbackLocale: 'PTBR',
  messages: messages
})
