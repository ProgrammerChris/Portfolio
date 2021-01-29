<template>
  <div class="hjem">
    <Side msg="Hjem" :img="require('../assets/happy.png')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Side from "@/components/Side.vue";

export default {
  name: "Hjem",
  components: {
    Side
  }
};
</script>

<style scoped>
#hjem {
  display: grid;
  grid-column: 2;
  grid-row: 1;
}
</style>
