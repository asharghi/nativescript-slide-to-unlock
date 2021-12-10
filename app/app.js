import Vue from 'nativescript-vue'
import Home from './components/Home'
import UnlockSlider from '@nativescript-community/ui-vue-unlock-slider'
Vue.use(UnlockSlider)

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
