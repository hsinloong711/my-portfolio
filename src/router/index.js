import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Work from "../views/Work.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Menu from "../views/Menu.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        enterClass: "animate__animated animate__fadeOutRight",
      },
    },
    {
      path: "/work",
      name: "work",
      component: Work,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        enterClass: "animate__animated animate__fadeOutRight",
      },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        enterClass: "animate__animated animate__fadeOutRight",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        enterClass: "animate__animated animate__fadeOutRight",
      },
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        enterClass: "animate__animated animate__fadeOutRight",
      },
    },
  ],
});

export default router;
