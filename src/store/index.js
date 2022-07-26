import { createStore } from "vuex";

export default createStore({
  state: {
    leagueId: 0,
    leagueName: "All League",
    isHiddenMenuHome: false,
    isHiddenBroker: true,
  },
  getters: {
    getleagueId(state) {
      return state.leagueId;
    },

    getleagueName(state) {
      return state.leagueName;
    },

    getisHiddenMenuHome(state) {
      return state.isHiddenMenuHome;
    },

    getisHiddenBroker(state) {
      return state.isHiddenBroker;
    },
  },
  mutations: {
    mleagueId(state, value) {
      state.leagueId = value;
    },

    mleagueName(state, value) {
      state.leagueName = value;
    },

    misHiddenMenuHome(state, value) {
      state.isHiddenMenuHome = value;
    },

    misHiddenBroker(state, value) {
      state.isHiddenBroker = value;
    },
  },
  actions: {
    actionleagueId(context, value) {
      context.commit("mleagueId", value);
    },

    actionleagueName(context, value) {
      context.commit("mleagueName", value);
    },

    actionisHiddenMenuHome(context, value) {
      context.commit("misHiddenMenuHome", value);
    },

    actionisHiddenBroker(context, value) {
      context.commit("misHiddenBroker", value);
    },
  },
  modules: {},
});
