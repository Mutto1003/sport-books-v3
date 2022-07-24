import { createStore } from "vuex";

export default createStore({
  state: {
    leagueId: 0,
    leagueName: "All League",
  },
  getters: {
    getleagueId(state) {
      return state.leagueId;
    },

    getleagueName(state) {
      return state.leagueName
    }
  },
  mutations: {
    mleagueId(state, value) {
      state.leagueId = value;
    },
    
    mleagueName(state ,value){
      state.leagueName = value
    }
  },
  actions: {
    actionleagueId(context, value) {
      context.commit("mleagueId", value);
    },

    actionleagueName(context, value){
      context.commit("mleagueName" ,value)
    }
  },
  modules: {},
});
