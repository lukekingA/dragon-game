import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'
import {
  stat
} from 'fs';
import {
  debug
} from 'util';


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
    currentGame: {}
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
    },
    setGame(state, data) {
      state.currentGame = data
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
      _api.get('/champions/' + id).then(res => {
        commit('setChampion', res.data)
      })
    },
    setApiDragon({
      commit,
      dispatch
    }, id) {
      _api.get('/dragons/' + id).then(res => {
        commit('setDragon', res.data)
      })
    },
    makeApiGame({
      commit,
      dispatch
    }, players) {
      _api.post('/games', players).then(res => {
        commit('setGame', res.data)
        router.push({
          name: 'PlayGame',
          params: {
            id: res.data.game._id
          }
        })
      })
    },
    getApiGame({
      commit,
      dispatch
    }, id) {
      _api.get('/games/' + id).then(res => {
        commit('setGame', res.data)
        commit('setChampion', res.data._champion)
        commit('setDragon', res.data._dragon)
        debugger
        if (res.data._dragon.currentHP <= 0 || res.data._champion.hp <= 0) {
          console.log('game over')
        }
      })
    },
    apiPlayGame({
      commit,
      dispatch
    }, data) {
      _api.put('/games/' + data.gameId, data.attack).then(res => {
        dispatch('getApiGame', res.data._id)
      })
    }
  }
})