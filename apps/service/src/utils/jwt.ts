import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "change_me_secure_secret";

export function signResetToken(
  payload: { email: string; code: string },
  expiresIn = "15m",
) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyResetToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded as {
      email: string;
      code: string;
      iat?: number;
      exp?: number;
    };
  } catch (err) {
    throw new Error("Token inválido ou expirado");
  }
}
