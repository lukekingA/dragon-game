<template>
  <div class="dragon">
    <li>
      <div class="card" @click="setDragon(dragon.id)">
        <img class="card-img-top" :src="dragon.imgUrl">
        <div class="card-body">
          <h4 class="card-title">{{dragon.name}}</h4>
        </div>
      </div>
    </li>

  </div>
</template>


<script>
  export default {
    name: 'dragon',
    data() {
      return {}
    },
    props: ['dragon'],
    computed: {},
    methods: {
      setDragon(id) {
        this.$store.dispatch('setApiDragon', id)
        this.players.dragonId = id
        this.dragon = true
      },
      setChampion(id) {
        this.$store.dispatch('setApiChampion', id)
        this.players.championId = id
        this.champion = true
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>