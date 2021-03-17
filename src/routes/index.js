import express from 'express'
import { index } from '../controllers/index.controller'

var router = express.Router();


router.get('/', index)

export default router