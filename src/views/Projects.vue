<template>
  <div id="projects" class="page">
    <Page
      heading="Se hva jeg har laget!"
      :img="require('../assets/computer.png')"
    />
  </div>
</template>

<script>
import Page from "@/components/Page.vue";

export default {
  name: "Project",
  components: {
    Page
  }
};
</script>
