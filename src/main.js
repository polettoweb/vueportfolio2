import Vue from 'vue'
import App from './App.vue'
import router from './router'
import StoryblokVue from 'storyblok-vue'

Vue.use(StoryblokVue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')