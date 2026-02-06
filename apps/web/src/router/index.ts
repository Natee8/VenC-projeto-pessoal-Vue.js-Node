import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./routes";

const Home = () => import("../interface/view/home/Home.vue");
//const Login = () => import("../interface/view/auth/Login.vue");
//const Register = () => import("../interface/view/auth/Register.vue");

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: Routes.home,
      name: "home",
      component: Home,
    },
    /*{
      path: Routes.login,
      name: "login",
      component: Login,
    },
    {
      path: Routes.register,
      name: "register",
      component: Register,
    },*/
  ],
});
