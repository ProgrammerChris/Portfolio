import Vue from "vue";
import VueRouter from "vue-router";
import Hjem from "../views/Hjem.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hjem",
    component: Hjem
  },
  {
    path: "/om",
    name: "Om",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Om.vue")
  },
  {
    path: "/prosjekter",
    name: "Prosjekter",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Prosjekter.vue")
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Kontakt.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
