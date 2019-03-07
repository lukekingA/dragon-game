<template>
  <div class="new-game container-fluid bg-dark">
    <div class="my-0 py-4">
      <button class="btn btn-lg bg-light text-dark" v-if="dragon.name && champion.name" @click="getGame">Play</button>
    </div>
    <div class="row">
      <div class="col-6">
        <ul class="row">
          <div class="col-6" v-for="champion in champions">
            <li>
              <champion :champion="champion"></champion>
            </li>
          </div>
        </ul>
      </div>
      <div class="col-6">
        <ul class="row">
          <div class="col-6" v-for="dragon in dragons">
            <li>
              <dragon :dragon="dragon"></dragon>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
  import Dragon from '@/components/Dragon.vue'
  import Champion from '@/components/Champion.vue'
  export default {
    name: 'new-game',
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getDragons')
      this.$store.dispatch('getChampions')
    },
    computed: {
      dragons() {
        return this.$store.state.dragons
      },
      champions() {
        return this.$store.state.champions
      },
      dragon() {
        return this.$store.state.dragon
      },
      champion() {
        return this.$store.state.champion
      }
    },
    methods: {
      getGame() {
        let players = {
          dragonId: this.dragon.id,
          championId: this.champion.id
        }
        this.$store.dispatch('makeApiGame', players)
      }
    },
    components: {
      Dragon,
      Champion
    }
  }
</script>


<style scoped>
  li {
    list-style: none;
  }
</style>