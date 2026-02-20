import { Router } from "express";
import { PasswordService } from "../application/service/passwordComparer.js";
import { UsersRepository } from "../infrastructure/repositories/auth/authLogin.repository.js";
import { CreateUserBaseUseCase } from "../application/usecases/profiles/createUserBase.usecase.js";
import { CreateUserBaseController } from "../controllers/createUserBase.js";

const router = Router();

const usersRepo = new UsersRepository();
const passwordService = new PasswordService();

const createUserBaseUseCase = new CreateUserBaseUseCase(
  usersRepo,
  passwordService,
);

const controller = new CreateUserBaseController(createUserBaseUseCase);

router.post("/register", (req, res) => {
  return controller.handle(req, res);
});

export { router };
