<template>
  <div class="new-game container-fluid bg-dark">
    <div class="my-0 py-4">
      <button class="btn btn-lg bg-light text-dark" v-if="dragon && champion">Play</button>
    </div>
    <div class="row">
      <div class="col-6">
        <ul class="row">
          <div class="col-6" v-for="champion in champions">
            <champion :champion="champion"></champion>
          </div>
        </ul>
      </div>
      <div class="col-6">
        <ul class="row">
          <div class="col-6" v-for="dragon in dragons">
            <dragon :dragon="dragon"></dragon>
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
      return {
        players: {},
        dragon: false,
        champion: false
      }
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
      }
    },
    methods: {

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