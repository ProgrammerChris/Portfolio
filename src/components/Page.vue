<template>
  <div id="content">
    <img id="image" alt="Logo" v-bind:src="img" height="191" width="191" />
    <h1 id="heading">{{ heading }}</h1>
    <p id="text">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {
    heading: String,
    msg: String,
    img: String
  }
};
</script>

<style scoped>
@media screen AND (min-width: 600px) AND (max-height: 640px) {
  img {
    display: none;
  }
}
</style>

<style>
#content {
  display: grid;
  grid-template-rows: 200px 50px 75px auto;
}
img {
  grid-row: 1;
  justify-self: center;
}
#heading {
  grid-row: 3;
  margin: 0;
  padding: 0 20% 0 30%;
  align-self: center;
  text-align: start;
}
#text {
  grid-row: 4;
  margin: 0;
  line-height: 30px;
  padding: 0 20% 0 35%;
  text-align: start;
}
</style>
