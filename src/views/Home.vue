<template>
  <div id="home" class="page">
    <Page
      heading="Hei!"
      msg="Velkommen til min nettside. Her vil du finne informasjon om meg og mine prosjekter, samt hvordan du kan komme i kontakt med meg. Ikke nøl med å ta kontakt 😃"
      :img="require('../assets/happy.png')"
    />
    <router-link to="/kontakt" id="contact_button" tag="button">
      <span>Kontakt</span>
    </router-link>
  </div>
</template>

<script>
import Page from "@/components/Page.vue";

export default {
  name: "Home",
  components: {
    Page
  }
};
</script>

<style scoped>
#contact_button {
  width: 180px;
  height: 65px;
  background-color: #bf0f00;
  border-radius: 15px;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
  transition: all 0.5s;
  cursor: pointer;
  outline: none;
  justify-self: end;
  margin-right: 15%;
  padding-left: 35px;
  box-shadow: 5px 7px #bbb;
}
#contact_button span {
  cursor: pointer;
  transition: 0.5s;
}
#contact_button span:after {
  content: " 😄";
  opacity: 0;
  transition: 0.5s;
}
#contact_button:hover span {
  padding-right: 15px;
}
#contact_button:hover span:after {
  opacity: 1;
}
#contact_button:active {
  box-shadow: 0px 0px #bbb;
  transform: translateY(4px);
}
</style>
