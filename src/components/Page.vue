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

<style>
/* Landscape for handheld devices */
@media handheld, (orientation: landscape) and (max-width: 813px) {
  #image {
    display: none;
  }
  #app {
    grid-template-rows: 50px;
  }
  #nav {
    grid-row: 1;
  }
}
#content {
  display: grid;
  align-content: center;
}
img {
  grid-row: 1;
  margin-bottom: 50px;
  justify-self: center;
}
#heading {
  grid-row: 2;
  margin: 0;
  padding-left: 15%;
  padding-right: 10%;
  align-self: end;
  text-align: start;
  font-size: 2em;
  padding-top: 10px;
}
#text {
  grid-row: 3;
  margin: 0;
  line-height: 1.5em;
  text-align: start;
  font-size: 1.25em;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 50px;
}

/* Media Query her for større størrelse på header på desktop */
</style>
