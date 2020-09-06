import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SavedItems from "../views/SavedItems.vue";
import RegistForm from "../views/RegistForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/saveditems",
    name: "saveditems",
    component: SavedItems,
  },
  {
    path: "/registform/:item_id?/edit",
    name: "registform",
    component: RegistForm,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
