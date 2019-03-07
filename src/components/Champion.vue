<template>
  <div class="champion">
    <div :class="{'border-success' : getChampion.name == champion.name}" class="card border" @click="setChampion(champion.id)">
      <img class="card-img-top" :src="champion.imgUrl">
      <div class="card-body">
        <h4 class="card-title">{{champion.name}}</h4>
        <div class="d-flex flex-column">
          <span>Class: {{champion.class}}</span>
          <span>Race: {{champion.race}}</span>
          <span>Health: {{champion.hp}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'champion',
    data() {
      return {}
    },
    props: ['champion'],
    computed: {
      getChampion() {
        return this.$store.state.champion
      }
    },
    methods: {
      setChampion(id) {
        this.$store.dispatch('setApiChampion', id)
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