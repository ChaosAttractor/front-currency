import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import vuetify from './plugins/vuetify';

// todo https://docs.arealidea.com/services/development_web/notes/frontend-develop.html
// todo прикрутить eslint плагин и настроить проверку на option api vue
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
