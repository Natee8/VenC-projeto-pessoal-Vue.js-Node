import type { Router } from "vue-router";
import { useAuthStore } from "src/infrastructure/stores/auth/authStore";
import { Routes } from "src/router/routes";

export function setupAuthGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();

    if (!authStore.isAuthenticated) {
      await authStore.loadFromStorage();
    }

    const isProtected = to.meta.requiresAuth;

    if (isProtected && !authStore.isAuthenticated) {
      return next({ path: Routes.login });
    }

    if (to.path === Routes.login && authStore.isAuthenticated) {
      return next({ path: Routes.home });
    }

    next();
  });
}
