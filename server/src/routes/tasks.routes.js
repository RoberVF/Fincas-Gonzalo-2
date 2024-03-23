import { Router } from 'express'
import { getTasks, createTask } from '../controllers/tasks.controller.js'

const route = Router()

route.get("/getTask", getTasks)
route.post("", createTask)

export default route