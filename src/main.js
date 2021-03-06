import Vue from 'vue'
import VueYouTube from 'vue-youtube'
import App from './App.vue'
import axios from 'axios'
import VueRouter from "vue-router";

import VueDynamicForms from "@asigloo/vue-dynamic-forms";

Vue.use(VueDynamicForms);
Vue.use(VueRouter);
Vue.use(VueYouTube);

Vue.config.productionTip = false

const routes = [
  {
    path: "/",
    component: () => import("./pages/HomePage")
  },
  {
    path: "/DynamicFormExample",
    component: () => import("./components/DynamicFormExample")
  },
  {
    path: "/GuestBook",
    component: () => import("./pages/GuestBook")
  },
  {
    path: "/AddGuest",
    component: () => import("./pages/AddGuest")
  },
  {
    path: "/USGSsearch",
    component: () => import("./components/USGSsearch")
  },
  {
    path: "/DynamicCQ",
    component: () => import("./components/DynamicCQ")
  }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'https://sterner-strapi.herokuapp.com/'
    })
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
