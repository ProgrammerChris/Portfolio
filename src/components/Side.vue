<template>
  <div id="side">
    <img id="image" alt="Logo" v-bind:src="img" height="191" width="191">
    <h1 class="overskrift">{{ msg }}</h1>
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
  #side{ 
    grid-template-rows: auto;
  }
}

.overskrift {
  grid-row: 2;
  margin: 0;
}

</style>

<style>
#side {
  display: grid;
  grid-template-rows: 200px auto;
  row-gap: 50px;
  justify-items: center;
}
</style>
