<template>
  <div class="side">
    <img alt="Logo" v-bind:src="img" height="191" width="191">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Side",
  props: {
    msg: String,
    img: String
  }
}
</script>

<style>
#hjem {
  display: grid;
  grid-column: 2;
  grid-row: 1;
}
</style>
