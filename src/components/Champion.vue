<template>
  <div class="champion">
    <li>
      <div class="card" @click="setChampion(champion.id)">
        <img class="card-img-top" :src="champion.imgUrl">
        <div class="card-body">
          <h4 class="card-title">{{champion.name}}</h4>
        </div>
      </div>
    </li>
  </div>
</template>


<script>
  export default {
    name: 'champion',
    data() {
      return {}
    },
    props: ['champion'],
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>