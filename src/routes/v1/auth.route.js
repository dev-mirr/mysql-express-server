import express from 'express'

import { login, tokenTest } from '../../controllers/v1/auth.controller'

const router = express.Router()

router.route('/login')
  .post(
    login
  )

// 테스트용
router.route('/tokenTest')
  .get(
    tokenTest
  )

export default router