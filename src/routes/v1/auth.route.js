import express from 'express'

import { login } from '../../controllers/v1/auth.controller'
import tokenTest from '../../middlewares/jwt.middleware'

const router = express.Router()

router.route('/login')
  .post(
    login
  )

// 테스트용
router.route('/token-test')
  .get(
    tokenTest
  )

export default router