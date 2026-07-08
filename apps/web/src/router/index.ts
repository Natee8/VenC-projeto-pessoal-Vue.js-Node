import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./routes";
import { setupAuthGuard } from "src/interface/utils/authGuard";

const Home = () => import("../interface/view/home/Home.vue");
const Login = () => import("../interface/view/auth/Login.vue");
const RegisterBase = () =>
  import("../interface/view/auth/register/register.vue");
const SendEmail = () =>
  import("../interface/view/auth/resetPassword/SendEmail.vue");
const SendCode = () =>
  import("../interface/view/auth/resetPassword/SendCode.vue");
const ResetPassword = () =>
  import("../interface/view/auth/resetPassword/ResetPassword.vue");
const about = () => import("../interface/view/About/About.vue");
const forCaregivers = () =>
  import("../interface/view/ForCarregivers/Carregiver.vue");
const caregiversPublic = () =>
  import("../interface/view/CarregiversPublic/CarregiverPublic.vue");
const forOwners = () => import("../interface/view/ForOwners/Owners.vue");
const carregiversWork = () =>
  import("../interface/view/Carregivers/Work/CarregiversWork.vue");

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: Routes.home,
      name: "home",
      component: Home,
    },
    {
      path: Routes.carregivers.carregiversWork,
      name: "caregivers-work",
      meta: { requiresAuth: true },
      component: carregiversWork,
    },
    {
      path: Routes.about,
      name: "about",
      component: about,
    },
    {
      path: Routes.caregiversPublic,
      name: "caregivers-public",
      component: caregiversPublic,
    },
    {
      path: Routes.forCaregivers,
      name: "for-caregivers",
      component: forCaregivers,
    },
    {
      path: Routes.forOwners,
      name: "for-owners",
      component: forOwners,
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

setupAuthGuard(router);
