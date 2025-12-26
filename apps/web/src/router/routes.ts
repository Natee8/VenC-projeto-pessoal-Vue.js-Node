// src/router/routes.ts

export const Routes = {
  home: '/',
  login: '/login',
  register: '/register',

  recoverEmail: '/login/recover/email',
  recoverCode: '/login/recover/code',
  newPassword: (token: string) => `/login/recover/${token}`,

  errors: {
    unauthorized: '/error/401',
    forbidden: '/error/403',
    notFound: '/error/404',
    internal: '/error/500',
  },

  account: '/dashboard/account',

} as const
