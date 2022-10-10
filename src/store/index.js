import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Cards = require('./cards.json');

export default new Vuex.Store({
  state: {
    items: Cards,
    filterNumber: '',
    filterType: '',
  },
  getters: {
    cards({ items, filterNumber, filterType }) {
      let result = [...items];
      if (filterType) {
        result = result.filter(({ type }) => (type === filterType));
      }

      if (filterNumber) {
        result = result.filter(({ number }) => (number.indexOf(filterNumber) >= 0));
      }
      return result;
    },

    allTypes({ items }) {
      return items.map(({ type }) => (type)).filter((item, i, ar) => ar.indexOf(item) === i);
    },
  },
  mutations: {
    filterNumber(state, val) {
      state.filterNumber = val;
    },

    filterType(state, val) {
      state.filterType = val;
    },
  },
  actions: {
  },
  modules: {
  },
});
