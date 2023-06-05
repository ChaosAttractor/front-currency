import Vue from 'vue';
import VueX from 'vuex';
import api from './modules/api';

Vue.use(VueX);

export default new VueX.Store({
  modules: {
    api,
  },
});
