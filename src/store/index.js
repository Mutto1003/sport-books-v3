import { createStore } from "vuex";

export default createStore({
  state: {
    leagueId: 0,
    leagueName: "All League",
    isHiddenMenuHome: false,
    isHiddenBroker: true,
    isHiddenLoginPass: true,
    isHiddenLogin: false,
    componentTable: "EvenOddTable",
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

    getisHiddenLoginPass(state) {
      return state.getisHiddenLoginPass;
    },

    getisHiddenLogin(state) {
      return state.isHiddenLogin;
    },

    getcomponentTable(state) {
      return state.componentTable;
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

    misHiddenLoginPass(state, value) {
      state.isHiddenLoginPass = value;
    },

    misHiddenLogin(state, value) {
      state.isHiddenLogin = value;
    },

    mcomponentTable(state, value) {
      state.componentTable = value;
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

    actionisHiddenLoginPass(context, value) {
      context.commit("misHiddenLoginPass", value);
    },

    actionisHiddenLogin(context, value) {
      context.commit("misHiddenLogin", value);
    },

    actioncomponentTable(context, value) {
      context.commit("mcomponentTable", value);
    },
  },
  modules: {},
});
