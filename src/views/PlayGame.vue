<template>
  <div class="play-game container-fluid bg-dark">
    <div v-if="!win" class="row">
      <div class="col-6">
        <champion :champion="champion"></champion>
        <div class="mt-2">
          <button class="mr-2 btn bg-light text-dark" v-for="(attack,index) in champion.attacks" @click="sendAttack(index)">{{index}}</button>
        </div>
      </div>
      <div class="col-6">
        <dragon :dragon="dragon"></dragon>
      </div>
    </div>
    <div class="container-fluid bg-dark" v-if="win">
      <div class="row">
        <div class="col col-sm-4 offset-sm-4" v-if="dragon.currentHP">
          <div class="card mb-5">
            <img class="card-img-top" :src="dragon.imgUrl">
            <div class="card-body">
              <h4 class="">{{dragon.name}} has defeated You</h4>
            </div>
          </div>
        </div>
        <div class="col col-sm-4 offset-sm-4" v-if="!dragon.currentHP">
          <div class="card mb-5">
            <img class="card-img-top" :src="champion.imgUrl">
            <div class="card-body">
              <h4 class=""> You have Slayed the {{dragon.name}}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class=" col col-sm-4 offset-sm-4 d-flex justify-content-around pb-4">
          <button @click="playAgain" class="btn bg-light text-dark">Play Again</button>
          <button @click="newGame" class="btn bg-light text-dark">New game</button>
        </div>
      </div c>
    </div>
  </div>
</template>


<script>
  import Dragon from '@/components/Dragon.vue'
  import Champion from '@/components/Champion.vue'
  export default {
    name: 'play-game',
    data() {
      return {}
    },
    props: ['id'],
    computed: {
      dragon() {
        return this.$store.state.dragon
      },
      champion() {
        return this.$store.state.champion
      },
      win() {
        return this.$store.state.winGame
      }
    },
    mounted() {
      this.$store.dispatch('getApiGame', this.id)
    },
    methods: {
      sendAttack(type) {
        let data = {
          attack: {
            attack: type
          },
          gameId: this.id
        }
        this.$store.dispatch('apiPlayGame', data)
      },
      playAgain() {
        this.$store.dispatch('playAgain')
      },
      newGame() {
        this.$store.dispatch('newGame')
      }
    },
    components: {
      Dragon,
      Champion
    }
  }
</script>


<style scoped>

</style>

//this.$store.state.currentGame.game._id