import '@babel/polyfill'

import Vue from 'vue'
// import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/config'
import { http, utils } from '@/utils'
import '@/style/base.scss'
// Vue.use(Antd)
Vue.config.productionTip = false
Vue.prototype.$http = http;
Vue.prototype.$utils = utils;
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
