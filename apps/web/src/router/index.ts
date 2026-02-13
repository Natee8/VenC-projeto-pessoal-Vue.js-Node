import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./routes";

const Home = () => import("../interface/view/home/Home.vue");
const Login = () => import("../interface/view/auth/Login.vue");
const RegisterCarrehiver = () =>
  import("../interface/view/auth/register/RegisterCarrehiver.vue");
const RegisterOwner = () =>
  import("../interface/view/auth/register/RegisterOwner.vue");

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: Routes.home,
      name: "home",
      component: Home,
    },
    {
      path: Routes.login,
      name: "login",
      component: Login,
    },

    {
      path: Routes.registerCarrehiver,
      name: "register-carrehiver",
      component: RegisterCarrehiver,
    },
    {
      path: Routes.registerOwner,
      name: "register-owner",
      component: RegisterOwner,
    },
    {
      path: Routes.sendEmail,
      name: "send-email",
      component: () =>
        import("../interface/view/auth/resetPassword/SendEmail.vue"),
    },
    {
      path: Routes.sendCode,
      name: "send-code",
      component: () =>
        import("../interface/view/auth/resetPassword/SendCode.vue"),
    },
    {
      path: Routes.resetPassword,
      name: "reset-password",
      component: () =>
        import("../interface/view/auth/resetPassword/ResetPassword.vue"),
    },
  ],
});
