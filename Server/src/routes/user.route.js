import express from 'express'
import { createUser, loginUser } from '../controllers/user.js'
const userRouter = express.Router()

userRouter.post('/login',loginUser)
userRouter.post('/signup',createUser)
export default userRouter