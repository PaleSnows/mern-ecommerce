import express from 'express'
import { signIn, signout, signUp } from '../controller/auth.controller.js'

const router = express.Router()

router.post('/signup',signUp)
router.post('/signin',signIn)
router.get('/signOut',signout)

export default router