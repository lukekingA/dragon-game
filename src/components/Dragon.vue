<template>
  <div class="dragon">
    <div class="card" @click="setDragon(dragon.id)">
      <img class="card-img-top" :src="dragon.imgUrl">
      <div class="card-body">
        <h4 class="card-title">{{dragon.name}}</h4>
        <p>Health: {{dragon.currentHP}}</p>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'dragon',
    data() {
      return {

      }
    },
    props: ['dragon'],
    computed: {},
    methods: {
      setDragon(id) {
        this.$store.dispatch('setApiDragon', id)
      },
      health() {
        return this.$store.state.health
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>