import axios from 'axios';

export default {
  actions: {
    async getDaily(context) {
      await axios
        .get(`${this.state.link}/daily`)
        .then(res =>
          context.commit('updateDaily', JSON.parse(res.data[0].valute)),
        );
    },
    async getCurrency(context) {
      await axios
        .get(`${this.state.link}/currency`)
        .then(res =>
          context.commit('updateCurrency', JSON.parse(res.data[0].rate)),
        );
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
