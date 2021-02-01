<template>
  <div id="home" class="page">
    <Page
      heading="Hei!"
      msg="Velkommen til min nettside. Her vil du finne informasjon om meg og mine prosjekter, samt hvordan du kan komme i kontakt med meg. Ikke nøl med å ta kontakt 😃"
      :img="require('../assets/happy.png')"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Page from "@/components/Page.vue";

export default {
  name: "Home",
  components: {
    Page
  }
};
</script>
