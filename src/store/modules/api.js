import axios from '../../../axios';

export default {
  actions: {
    async getDaily(context) {
      await axios
        .get(`/daily`)
        .then(res =>
          context.commit('updateDaily', JSON.parse(res.data[0].valute)),
        );
    },
    async getCurrency(context) {
      let data = {};
      await axios
        .get(`/currency`)
        .then(res => (data = JSON.parse(res.data[0].rate)));
      data.RUB = 1;
      context.commit('updateCurrency', data);
    },
  },
  mutations: {
    updateDaily(state, data) {
      state.daily = data;
    },
    updateCurrency(state, data) {
      state.currency = data;
    },
  },
  state: {
    daily: [],
    currency: [],
  },
  getters: {
    getterDaily(state) {
      return state.daily;
    },
    getterCurrency(state) {
      return state.currency;
    },
  },
};
