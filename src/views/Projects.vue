<template>
  <div id="projects" class="page">
    <Page msg="Prosjekter" :img="require('../assets/computer.png')" />
  </div>
</template>

<script>
// @ is an alias to /src
import Page from "@/components/Page.vue";

export default {
  name: "Project",
  components: {
    Page
  }
};
</script>
