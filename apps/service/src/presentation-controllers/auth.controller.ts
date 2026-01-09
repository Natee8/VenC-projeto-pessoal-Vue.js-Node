// auth.routes.ts
import { Router } from 'express'
import { UsersRepository } from '../infrastructure/repositories/auth/authLogin.repository'
import { PasswordService } from '../../../../packages/core/domain/passwordComparer'
import { AuthenticateUserUseCase } from '../application/usecases/auth/auth.usecase'
import { LogoutUseCase } from '../application/usecases/auth/logout.usecase'
import { RefreshTokenUseCase } from '../application/usecases/auth/refreshToken.usecase'
import { TokenGenerator } from '../../../../packages/domain/repositories/Auth.repositories'
import { UserAuth } from '../../../../packages/domain/entities/userAuthEntity'
import { IEither } from '../core/interface/IEighter'

const router = Router()

// Repositórios e serviços
const usersRepo = new UsersRepository()
const passwordService = new PasswordService()
const tokenGenerator = new TokenGenerator() // Instância do generator

// UseCases
const authUseCase = new AuthenticateUserUseCase(usersRepo, passwordService)
const logoutUseCase = new LogoutUseCase(usersRepo) // ou refreshTokenRepo
const refreshUseCase = new RefreshTokenUseCase(usersRepo, tokenGenerator)

// ================= LOGIN =================
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const result: IEither<{ message: string }, UserAuth> = await authUseCase.execute(email, password)

  if (result.isSuccess()) {
    res.json({ message: 'Login ok', data: result.value })
  } else {
    res.status(401).json({ message: result.value.message })
  }
})

// ================= LOGOUT =================
router.post('/logout', async (req, res) => {
  const { userId } = req.body
  const result: IEither<{ message: string }, void> = await logoutUseCase.execute(userId)

  if (result.isSuccess()) {
    res.json({ message: 'Logout realizado com sucesso!' })
  } else {
    res.status(400).json({ message: result.value.message })
  }
})

// ================= REFRESH TOKEN =================
interface IRefreshResponse {
  accessToken: string
  refreshToken: string
}

router.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body
  const result: IEither<{ message: string }, IRefreshResponse> = await refreshUseCase.execute(refreshToken)

  if (result.isSuccess()) {
    res.json({ message: 'Token renovado com sucesso', data: result.value })
  } else {
    res.status(401).json({ message: result.value.message })
  }
})

export default router
