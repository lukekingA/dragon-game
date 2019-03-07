import Vue from 'vue'
import Router from 'vue-router'
import NewGame from './views/NewGame.vue'
import PlayGame from './views/PlayGame.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: 'newgame'
    },
    {
      path: '/newgame',
      name: 'NewGame',
      component: NewGame
    },
    {
      path: '/newgame/:id',
      name: 'PlayGame',
      props: true,
      component: PlayGame
    }
  ]
})