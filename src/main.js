import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './quasar'
import './styles/app.scss'
import store from './store'
import VueMoment from 'vue-moment'

Vue.use(VueMoment)

Vue.config.productionTip = false
Vue.prototype.$imgUrl='https://pmart-cdn.s3.ap-south-1.amazonaws.com/'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
