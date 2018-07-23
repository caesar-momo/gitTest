import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueResource from 'vue-resource'
import GitHubAPI from 'vue-github-api'

export const bus = new Vue();

Vue.use(VueResource);
Vue.use(GitHubAPI,{token: 'user Personal Access Token'})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
