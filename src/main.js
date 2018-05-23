// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App.vue'

import 've-charts/lib/common'
import VeBarChart from 've-charts/lib/VeBarChart'
import VeDonutChart from 've-charts/lib/VeDonutChart'
import 've-charts/lib/ve-charts.min.css'

Vue.component('VeBarChart', VeBarChart)
Vue.component('VeDonutChart', VeDonutChart)

Vue.use(ElementUI, {
  size: 'small'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})