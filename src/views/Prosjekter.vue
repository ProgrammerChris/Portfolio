<template>
  <div class="prosjekter">
    <Side msg="Prosjekter" :img="require('../assets/computer.png')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Side from "@/components/Side.vue";

export default {
  name: "Prosjekter",
  components: {
    Side
  }
};
</script>
