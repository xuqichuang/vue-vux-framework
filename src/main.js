// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from "./store"

FastClick.attach(document.body)

Vue.config.productionTip = false

// es6转es5
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()

// 封装后的http请求
import http from './http'
Vue.use(http);

// 全局组件入口
import components from './components'
Vue.use(components);
Vue.use(VueRouter)
// 全局样式入口
import '@/common/less/index.less'

const Home = () => import('@/views/HelloWorld').then(m => m.default)
const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
