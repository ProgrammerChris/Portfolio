<template>
  <div id="side">
    <img alt="Logo" v-bind:src="img" height="191" width="191">
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

<style scoped>
@media screen AND (min-width: 600px) AND (max-height: 640px) {
  img {
    display: none;
  }
}

</style>
