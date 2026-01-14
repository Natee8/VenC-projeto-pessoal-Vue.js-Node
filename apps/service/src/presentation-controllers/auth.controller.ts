import { Router } from 'express'

import { UsersRepository } from '../infrastructure/repositories/auth/authLogin.repository.js'

import { AuthenticateUserUseCase } from '../application/usecases/auth/auth.usecase.js'
import { GenerateTokenUseCase } from '../application/usecases/auth/generateToken.usecase.js'
import { RefreshTokenUseCase } from '../application/usecases/auth/refreshToken.usecase.js'

import { JwtTokenGenerator } from '../infrastructure/repositories/auth/tokenGenerator.js'
import { RefreshTokenRepository } from '../infrastructure/repositories/auth/refreshToken.repository.js'
import { getErrorMessage } from '../utils/getErrorMessage.js'
import { PasswordService } from '../application/service/passwordComparer.js'
import { Email } from '../../../../packages/src/valuesObjects/email.js'


export const router: Router = Router();

const usersRepo = new UsersRepository()
const refreshTokenRepo = new RefreshTokenRepository()
const passwordService = new PasswordService()
const tokenGenerator = new JwtTokenGenerator()

const authUseCase = new AuthenticateUserUseCase(usersRepo, passwordService)
const generateTokenUseCase = new GenerateTokenUseCase(
  tokenGenerator,
  refreshTokenRepo
)

const refreshTokenUseCase = new RefreshTokenUseCase(
  refreshTokenRepo,
  tokenGenerator
)

/**
 * LOGIN
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  let emailVO: Email

  try {
    emailVO = Email.create(email)
  }  catch (error: unknown) {
    return res.status(400).json({
      message: getErrorMessage(error)
    })
  }

  const authResult = await authUseCase.execute(
    emailVO,
    password
  )

  if (authResult.isException()) {
  return res.status(401).json({
    message: authResult.error.message
  })
}


  const tokenResult = await generateTokenUseCase.execute(authResult.value)

  return res.json({
    message: 'Login ok',
    data: tokenResult.value
  })
})

/**
 * REFRESH TOKEN
 */
router.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body

  const result = await refreshTokenUseCase.execute(refreshToken)

  if (result.isException()) {
  return res.status(401).json({
    message: result.error.message
  })
}

  return res.json({
    message: 'Token renovado com sucesso',
    data: result.value
  })
})

router.post('/logout', async (req, res) => {
  const { refreshToken } = req.body

  await refreshTokenRepo.revoke(refreshToken)

  return res.json({
    message: 'Logout realizado com sucesso'
  })
})

export default router
