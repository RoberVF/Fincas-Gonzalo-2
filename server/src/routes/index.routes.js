import {Router} from 'express'
import { getFincas, getFincaTask } from '../controllers/fincas.controller.js'
import { getTasks, createTask } from '../controllers/tasks.controller.js'

const route = Router()

route.get("/", (req, res) => {
    res.send("Funciona!")
})

route.get("/fincas", getFincas)

route.get("/tasks/:finca", getTasks)
route.post("/tasks", createTask)

//Rutas de las fincas
const fincas = ["tempranillo", "almendro", "fondo", "chica", "calvaritos"]
for(let i = 0; i < fincas.length; i++){
    route.get(`/fincas/${fincas[i]}`, getFincaTask(`Finca ${fincas[i]}`))
}

export default route