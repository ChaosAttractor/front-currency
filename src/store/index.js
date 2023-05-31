import Vue from 'vue';
import VueX from 'vuex';
import api from './modules/api';

Vue.use(VueX);

export default new VueX.Store({
  state: {
    link: 'http://localhost:3000',
  },
  modules: {
    api,
  },
});
