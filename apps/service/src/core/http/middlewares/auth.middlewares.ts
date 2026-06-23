import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

type TokenPayload = JwtPayload & {
  sub?: string | number;
};

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token não enviado" });
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    return res.status(401).json({ message: "Token inválido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    if (typeof decoded === "string") {
      return res.status(401).json({ message: "Token inválido" });
    }

    const payload = decoded as TokenPayload;

    if (!payload.sub) {
      return res.status(401).json({ message: "Token sem subject" });
    }

    req.user = {
      sub: Number(payload.sub),
    };

    return next();
  } catch {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}
