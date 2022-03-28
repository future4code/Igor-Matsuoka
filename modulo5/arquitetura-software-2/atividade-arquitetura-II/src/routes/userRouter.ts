import express from 'express'
import { signup } from '../controller/user/signup'
import { login } from '../controller/user/login'

export const userRouter = express.Router()

userRouter.post('/user/signup', signup)
userRouter.post('/user/login', login)