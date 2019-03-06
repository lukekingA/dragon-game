import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'
import {
  stat
} from 'fs';


let _api = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: [],
    champion: {},
    dragon: {},
    CurrentGame: {}
  },
  mutations: {
    setChampions(state, data) {
      state.champions = data
    },
    setDragons(state, data) {
      state.dragons = data
    },
    setChampion(state, data) {
      state.champion = data
    },
    setDragon(state, data) {
      state.dragon = data
    }

  },
  actions: {
    getChampions({
      commit,
      dispatch
    }) {
      _api.get('/champions').then(res => {
        commit('setChampions', res.data)
      })
    },
    getDragons({
      commit,
      dispatch
    }) {
      _api.get('/dragons').then(res => {
        commit('setDragons', res.data)
      })
    },
    setApiChampion({
      commit,
      dispatch
    }, id) {
      _api.get('/champions/:' + id).then(res => {
        commit('setChampion', res.data)
      })
    },
    setApiDragon({
      commit,
      dispatch
    }, id) {
      _api.get('/dragon/:' + id).then(res => {
        commit('setDragon', res.data)
      })
    }
  }
})