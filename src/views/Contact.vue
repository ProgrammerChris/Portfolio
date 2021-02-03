<template>
  <div id="contact" class="page">
    <Page
      heading="Her får du kontakt med meg!"
      :img="require('../assets/contact.png')"
    />
    <div id="contact_wrapper">
      <img
        id="mail_img"
        alt="mail image"
        v-bind:src="require('../assets/mail.png')"
      />
      <form id="contact_form">Test</form>
    </div>
  </div>
</template>

<script>
import Page from "@/components/Page.vue";

export default {
  name: "Contact",
  components: {
    Page
  }
};
</script>

<style>
#contact_wrapper {
  display: grid;
  grid-row: 2;
}
#mail_img {
  display: none;
  margin: 0;
  height: 191px;
  width: 191px;
}
#contact_form {
  align-self: center;
}
@media screen and (min-width: 767px) {
  #mail_img {
    grid-column: 1;
    display: block;
    margin: 0;
    height: 191px;
    width: 191px;
  }
  #contact_form {
    grid-column: 2;
    align-self: center;
  }
}
</style>
