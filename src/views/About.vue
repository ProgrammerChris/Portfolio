<template>
  <div id="about" class="page">
    <Page heading="Ja, så var det litt om meg..." :img="require('../assets/ready.png')" />
  </div>
</template>

<script>
// @ is an alias to /src
import Page from "@/components/Page.vue";

export default {
  name: "About",
  components: {
    Page
  }
};
</script>
