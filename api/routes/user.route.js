import express from 'express'
import { deleteUser, signOutUser, updateUser } from '../controller/user.controller'


const router = express.Router()

router.post('/update/:id',updateUser)
router.delete('/delte/:id',deleteUser)

export default router