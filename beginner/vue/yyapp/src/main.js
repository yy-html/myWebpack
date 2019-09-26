// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
//import './main.scss'
Vue.use(MintUI)

Vue.config.productionTip = false

//全局导航守卫
//router.beforeEach( (to,from,next) => {
//	console.log('to',to,'from',from)
//	to.fullPath == '/home' ? next(false) : next()
//})
Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#root',
  data: {
      msg: 'root',
  },
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted(){
  		console.log(this.msg,this)
  }
})
