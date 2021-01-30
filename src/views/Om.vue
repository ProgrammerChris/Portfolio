<template>
  <div id="om" class="side">
    <Side msg="Om" :img="require('../assets/ready.png')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Side from "@/components/Side.vue";

export default {
  name: "Om",
  components: {
    Side
  }
};
</script>
