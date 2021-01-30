<template>
  <div id="kontakt" class="side">
    <Side msg="Kontakt" :img="require('../assets/contact.png')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Side from "@/components/Side.vue";

export default {
  name: "Kontakt",
  components: {
    Side
  }
};
</script>