<template>
  <div class="kontakt">
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
