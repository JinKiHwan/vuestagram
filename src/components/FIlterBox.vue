<template>
  <div :class="$store.state.filter[i] + ' filter-item'" :style="{ backgroundImage: `url(` + $store.state.urlImage + `)` }" @click="fire"></div>
</template>

<script>
export default {
  name: 'filterBox',

  props: {
    urlImage: String,
    selectFilter: String,
    i: Number,
  },

  methods: {
    fire() {
      //this.emitter.emit('이벤트명작명', this.selectFilter);
      this.$store.commit('filterPicker', this.$store.state.filter[this.i]);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
