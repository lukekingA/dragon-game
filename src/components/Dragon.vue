<template>
  <div class="dragon">
    <div class="card" @click="setDragon(dragon.id)">
      <img class="card-img-top" :src="dragon.imgUrl">
      <div class="card-body">
        <h4 class="card-title">{{dragon.name}}</h4>
      </div>
    </div>

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
      }

    },
    components: {}
  }
</script>


<style scoped>

</style>