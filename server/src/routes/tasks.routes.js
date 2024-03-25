import { Router } from 'express'
import {  createTask, getTasks } from '../controllers/tasks.controller.js'

const route = Router()

route.get("/getTasks", getTasks)
route.post("/createTask", createTask)

export default route