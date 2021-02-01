import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/om",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/prosjekter",
    name: "Projects",
    component: () => import("@/views/Projects.vue")
  },
  {
    path: "/kontakt",
    name: "Contact",
    component: () => import("@/views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
