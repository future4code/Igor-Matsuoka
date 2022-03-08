import express from 'express'
import { createTask } from '../controller/task/createTask'
import { getTaskById } from '../controller/task/getTaskById'

export const taskRouter = express.Router()

taskRouter.put('/task', createTask)
taskRouter.get('/task/:id', getTaskById)