import {Router} from 'express'

import { getAllFincas, getFinca, createFinca } from '../controllers/fincas.controller.js'

const route = Router()

//Rutas de las fincas. .../fincas/...

route.get("/", getAllFincas)

route.get("/:fincaName", getFinca)

route.post("/createFinca", createFinca)

export default route