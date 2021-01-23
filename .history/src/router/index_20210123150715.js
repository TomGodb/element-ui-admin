import Vue from "vue";
import VueRouter from "vue-router";

import login from "@v/login/index.vue";
import Home from "@/Home/index.vue";
Vue.use(VueRouter);
import module from './modole'

export const currencyRoutes = [{
    path: "/",
    redirect: '/login'
  },
  {
    path: "/login",
    name: "login",
    component: login,
    query: {
      shopid: 222
    }
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    redirect: "/dashbord",
    children: module,
  },
];
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: currencyRoutes
});
// 导航守卫
router.beforeEach(async (to, from, next) => {

  if (to.path === "/login") {
    next();
  } else {

    next({
      path: to.path,
      query: {
        redirect: to.fullPath
      }
    });



  }
});
export default router;