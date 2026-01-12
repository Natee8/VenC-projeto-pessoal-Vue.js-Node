// auth.routes.ts
import { Router } from 'express'

import { UsersRepository } from '../infrastructure/repositories/auth/authLogin.repository'

import { PasswordService } from '../../../../packages/core/domain/passwordComparer'

import { AuthenticateUserUseCase } from '../application/usecases/auth/auth.usecase'
import { GenerateTokenUseCase } from '../application/usecases/auth/generateToken.usecase'
import { RefreshTokenUseCase } from '../application/usecases/auth/refreshToken.usecase'
import { LogoutUseCase } from '../application/usecases/auth/logout.usecase'

import { IEither } from '../core/interface/IEighter'

const router = Router()

// ================= INFRA =================
const usersRepo = new UsersRepository()
const refreshTokenRepo = new PrismaRefreshTokenRepository()
const passwordService = new PasswordService()
const tokenGenerator = new JwtTokenGenerator()

// ================= USE CASES =================
const authUseCase = new AuthenticateUserUseCase(usersRepo, passwordService)
const generateTokenUseCase = new GenerateTokenUseCase(
  tokenGenerator,
  refreshTokenRepo
)

const refreshTokenUseCase = new RefreshTokenUseCase(
  refreshTokenRepo,
  tokenGenerator
)

const logoutUseCase = new LogoutUseCase(refreshTokenRepo)

// ================= LOGIN =================
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const authResult = await authUseCase.execute(email, password)

  if (!authResult.isSuccess()) {
    return res.status(401).json({ message: authResult.value.message })
  }

  const tokenResult = await generateTokenUseCase.execute(authResult.value)

  return res.json({
    message: 'Login ok',
    data: tokenResult
  })
})

// ================= REFRESH =================
router.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body

  const result = await refreshTokenUseCase.execute(refreshToken)

  if (!result.isSuccess()) {
    return res.status(401).json({ message: result.value.message })
  }

  return res.json({
    message: 'Token renovado com sucesso',
    data: result.value
  })
})

// ================= LOGOUT =================
router.post('/logout', async (req, res) => {
  const { refreshToken } = req.body

  await refreshTokenRepo.revoke(refreshToken)

  return res.json({ message: 'Logout realizado com sucesso' })
})

export default router
