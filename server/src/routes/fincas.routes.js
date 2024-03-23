import {Router} from 'express'

import { getFincas, getFincaTask } from '../controllers/fincas.controller.js'

const route = Router()

//Rutas de las fincas
route.get("", getFincas)

const fincas = ["tempranillo", "almendro", "fondo", "chica", "calvaritos"]
for(let i = 0; i < fincas.length; i++){
    route.get(`/${fincas[i]}`, getFincaTask(`Finca ${fincas[i]}`))
}

export default route