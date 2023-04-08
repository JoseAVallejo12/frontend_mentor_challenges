import { createRouter, createWebHistory } from "vue-router";
import Home from "./challenges/Home.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/qr_code",
      component: () => import("./challenges/qr_code_component/CodeQr.vue"),
    },
    {
      path: "/password_generator",
      component: () =>
        import("./challenges/password_generator/PasswordGenerator.vue"),
    },
  ],
});
