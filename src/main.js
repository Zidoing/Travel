// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'  // 通用设置 css  不同手机初始化样式不一样
import './assets/styles/border.css' // 通用设置 css  不同手机像素点不一样

Vue.config.productionTip = false;
fastClick.attach(document.body);   // 有的手机点击有300毫秒延迟  使用此模块可以让手机 马上点击事件触发

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
