export type LoginParams = {
  email: string;
  password: string;
};

export type VerifyResetCodeParams = {
  email: string;
  code: string;
};

export type ResetPasswordParams = {
  email: string;
  code: string;
  newPassword: string;
};