import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    message: "Muitas tentativas de login. Tente novamente em 15 minutos.",
  },
  statusCode: 429,
  skipSuccessfulRequests: false,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip || "unknown",
});

export const codeEmailLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
  message: {
    message: "Muitas requisições de código. Tente novamente em 5 minutos.",
  },
  statusCode: 429,
  skipSuccessfulRequests: false,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip || "unknown",
});

export const resetPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: {
    message:
      "Muitas tentativas de reset de senha. Tente novamente em 15 minutos.",
  },
  statusCode: 429,
  skipSuccessfulRequests: false,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip || "unknown",
});
