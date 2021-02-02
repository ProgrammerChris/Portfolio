<template>
  <div id="contact" class="page">
    <Page heading="Her får du kontakt med meg!" :img="require('../assets/contact.png')" />
  </div>
</template>

<script>
// @ is an alias to /src
import Page from "@/components/Page.vue";

export default {
  name: "Contact",
  components: {
    Page
  }
};
</script>
