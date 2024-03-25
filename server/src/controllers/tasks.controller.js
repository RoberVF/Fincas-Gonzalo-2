import mongoose from 'mongoose'

import Finca from '../model/Finca.js'; // Asegúrate de importar el modelo Finca
import Task from '../model/Task.js'; // Asegúrate de importar el modelo Task

export const createTask = async (req, res) => {
    try {
        const fincaId = "65ff292121eaf89dc6186bc2"

        const finca = await Finca.findById(fincaId);

        if (!finca) {
            return res.status(404).json({ message: "Finca no encontrada" })
        }

        // Creamos una nueva tarea
        const newTask = new Task({
            finca: fincaId, // Finca a la que va a ir destinada. 
            // finca: req.body.id_de_la_finca // se podria?
            production: req.body.production, 
            information: req.body.information,
            date: req.body.date
        })
      
        const savedTask = await newTask.save()

        finca.tasks.push(savedTask._id) // Meto la tarea en el array de tasks de Finca. Solo meto el id

        await finca.save()

        res.json({ finca, finalTask: savedTask })
    } catch (error) {
        console.error("Error al agregar tarea a la finca:", error)
        res.status(500).json({ message: "Error al agregar tarea a la finca" })
    }

    // finca -> Buscamos la finca por su id
    // newTask -> Creamos la tarea nueva con los datos que manda el formulario del frontend
    // savedTask -> Guardamos la tarea en Task (generalizado)
    // finca.tasks.push(savedTask._id) -> Metemos el id de la task guardada en el array tasks de Finca (Finca.tasks)
    // 
}

export const getTasks = async (req, res) => {
    const fincaId = "65ff292121eaf89dc6186bc2"

    const tasksFinca = await Finca.findById(fincaId).populate('tasks')

    // res.json(tasksFinca)

    let tasks = []

    for(let i = 0; i < tasksFinca.tasks.length; i++){
        let taskToAdd = await Task.findById(tasksFinca.tasks[i])
        tasks.push(taskToAdd)
    }
    res.json(tasks)

    // tasksFinca -> Busca toda la informacion de finca, viendo el array tasks, el cual solamente almacena los id's de la task
    // tasks -> Array vacio en el que se iran incluyendo las task completas (ya que antes solamente teniamos el id de las tasks)
    // Bucle for -> Recorremos el array tasks de Finca para buscar la informacion asociada al id de esa task e incluimos toda la informacion de la task en el array tasks
    // res.json(tasks) -> Mostramos todas las tasks del array Finca.tasks con la informacion
}