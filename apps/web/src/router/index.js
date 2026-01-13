import { createRouter, createWebHistory } from 'vue-router';
import { Routes } from './routes';
import Home from '../interface/view/home/home.vue';
const routes = [
    {
        path: Routes.home,
        name: 'home',
        component: Home,
    },
    {
        path: Routes.login,
        name: 'login',
        component: LoginView,
    },
    {
        path: Routes.register,
        name: 'register',
        component: RegisterView,
    },
    {
        path: Routes.product,
        name: 'product',
        component: ProductView,
    },
    {
        path: Routes.Admin,
        name: 'admin',
        component: AdminView,
    },
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
});
