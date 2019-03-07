<template>
  <div class="play-game">
    <div class="row">

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
    computed: {
      dragon() {
        return this.$store.state.dragon
      },
      champion() {
        return this.$store.state.champion
      }
    },
    methods: {},
    components: {
      Dragon,
      Champion
    }
  }
</script>


<style scoped>

</style>