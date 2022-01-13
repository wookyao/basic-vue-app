import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "AppHomeScreen",
    component: () => import("@/views/home/index.vue"),
    meta: {
      white: true,
    },
  },
  {
    path: "/login",
    name: "AppLoginScreen",
    component: () => import("@/views/login/index.vue"),
    meta: {
      white: true,
    },
  },
];

export default routes;
