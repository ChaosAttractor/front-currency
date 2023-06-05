import axios from "../../../axios"

export default {
  actions: {
    async getCurrency(context) {
      let data = {};
      await axios
        .get(`/currency`)
        .then(res => (data = res.data));
      context.commit('updateCurrency', data);
    },
  },
  mutations: {
    updateCurrency(state, data) {
      state.currency = data;
    },
  },
  state: {
    currency: [],
  },
  getters: {
    getterCurrency(state) {
      return state.currency;
    },
  },
};
