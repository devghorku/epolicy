import Vue from 'vue'

import './styles/quasar.scss'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.addon.css'
import { Quasar,Notify } from 'quasar'

Vue.use(Quasar, {
  config: {
      notify:{
          position: 'top-right',
          timeout: 2500,
      }
  },
  plugins: {
      Notify
  }
 })