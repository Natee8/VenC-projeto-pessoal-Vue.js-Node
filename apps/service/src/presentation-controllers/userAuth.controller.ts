import { Router, Request, Response } from "express";
import { PasswordService } from "../application/service/passwordComparer.js";
import { Email } from "../../../../packages/src/valuesObjects/email.js";
import { UsersRepository } from "../infrastructure/repositories/auth/authLogin.repository.js";

const router = Router();
const usersRepo = new UsersRepository();
const passwordService = new PasswordService();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const emailVO = Email.create(email);
    const passwordHash = await passwordService.hash(password);

    const created = await usersRepo.saveUserDirectly({
      email: emailVO.value,
      passwordHash,
      isActive: true,
    });

    return res.status(201).json({
      message: "Usuário criado com sucesso!",
      userId: created.id,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({ message: "Erro desconhecido" });
  }
});

export { router };
