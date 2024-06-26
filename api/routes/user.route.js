import express from 'express'
import { deleteUser,  updateUser } from '../controller/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js'


const router = express.Router()

router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',deleteUser)

export default router