<template>
  <div id="hjem" class="side">
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