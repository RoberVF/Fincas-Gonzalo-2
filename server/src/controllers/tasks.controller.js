
import Finca from '../model/Finca.js'; // Asegúrate de importar el modelo Finca
import Task from '../model/Task.js'; // Asegúrate de importar el modelo Task


export const createTask = async (req, res) => {
    try{
        // En el form el cliente envia como name=.. :
        const {fincaName, production, information, date} = req.body

        const finca = await Finca.findOne({name: fincaName})

        if(!finca){
            console.log("Req.body: ", req.body)
            console.log("Finca:", finca)
            return res.status(404).json({"message": "Finca no encontrada"})
        }

        const newTask = new Task({
            fincaId: finca._id,
            fincaName,
            production,
            information,
            date
        })

        const savedTask = await newTask.save()

        finca.tasks.push(savedTask._id) // Solo guardo el id para no sobrecargar la coleccion
        await finca.save()

        res.json({finca, newTask: savedTask})

    } catch (e){
        res.json(
            {
                "message": "No se ha podido crear la tarea",
                "information" : "Intentelo de nuevo y, si el problema persiste, pongase en contacto con el administrador de la pagina"
            }
        )
        console.log(e)
    }
}


export const getTasks = async(req, res) => {
    try{
        const {fincaName} = req.params // -> const fincaName = req.params.fincaName

        const tasksFinca = await Finca.findOne({name:fincaName}).populate('tasks')

        let tasksList = []

        for (let i = 0; i < tasksFinca.tasks.length; i++){
            let taskToAdd = await Task.findById(tasksFinca.tasks[i])
            tasksList.push(taskToAdd)
        }

        res.json(tasksList)


    } catch(e) {
        res.json(
            {
                "message": "No se han podido ver las tareas",
                "information" : "Intentelo de nuevo y, si el problema persiste, pongase en contacto con el administrador de la pagina"
            }
        )
        console.log(e)
    }
}