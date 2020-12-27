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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
