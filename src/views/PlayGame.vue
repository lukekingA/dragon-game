<template>
  <div class="play-game container-fluid bg-dark">
    <div class="row">
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