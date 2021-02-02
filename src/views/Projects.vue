<template>
  <div id="projects" class="page">
    <Page heading="Se hva jeg har laget!" :img="require('../assets/computer.png')" />
    <div>Prosjekter i et grid her</div>
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
