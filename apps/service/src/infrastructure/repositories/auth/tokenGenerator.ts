import jwt from "jsonwebtoken";
import { UserId, Role } from "@packages";
import { TokenGenerator } from "@packages";

export class JwtTokenGenerator implements TokenGenerator {
  async generateAccessToken(userId: UserId, role: Role): Promise<string> {
    return jwt.sign(
      {
        sub: userId.getValue(),
        role,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "15m",
      },
    );
  }

  async generateRefreshToken(userId: UserId): Promise<string> {
    return jwt.sign(
      { sub: userId.getValue() },
      process.env.JWT_REFRESH_SECRET!,
      { expiresIn: "7d" },
    );
  }
}
