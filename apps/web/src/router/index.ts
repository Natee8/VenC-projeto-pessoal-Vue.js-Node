import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./routes";

const Home = () => import("../interface/view/home/Home.vue");
const Login = () => import("../interface/view/auth/Login.vue");
const RegisterBase = () =>
  import("../interface/view/auth/register/RegisterBase.vue");
const RegisterOwner = () =>
  import("../interface/view/auth/register/RegisterOwner.vue");
const RegisterCarrehiver = () =>
  import("../interface/view/auth/register/RegisterCarrehiver.vue");
const SendEmail = () =>
  import("../interface/view/auth/resetPassword/SendEmail.vue");
const SendCode = () =>
  import("../interface/view/auth/resetPassword/SendCode.vue");
const ResetPassword = () =>
  import("../interface/view/auth/resetPassword/ResetPassword.vue");

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
      path: Routes.register,
      name: "register",
      component: RegisterBase,
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
      component: SendEmail,
    },
    {
      path: Routes.sendCode,
      name: "send-code",
      component: SendCode,
    },
    {
      path: Routes.resetPassword,
      name: "reset-password",
      component: ResetPassword,
    },
  ],
});
