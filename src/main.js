import Vue from 'vue'
import App from './App'
import '../static/weui/weui.css'
import store from './store'
Vue.config.productionTip = false
App.mpType = 'app'
// 注入store选项
Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()
