import Task from '../model/Task.js'
import Finca from '../model/Finca.js'
import mongoose from 'mongoose'

export const getTasks = async (req, res) => {

    // El task no coge el ObjectId de la finca!. Problemas en la relacion uno a uno
    // Hay varias fincas y cada una de esa finca va a tener multiples tasks.
    // const findFinca = new mongoose.Types.ObjectId("65ff292121eaf89dc6186bc2")
    const fincaId = "65ff292121eaf89dc6186bc2"
    // const tasks = await Task.find({ finca: findFinca })
    // const tasks = await Task.aggregate([
    //     {
    //         $match: {
    //             finca: new mongoose.Types.ObjectId(fincaId)
    //         }
    //     }
    // ])
    const _id = new mongoose.Types.ObjectId("65ff292121eaf89dc6186bc2")
    // const tasks = await Task.find({finca: _id}) // Se coge la _id correctamente pero es en tipo ObjectId, mientras que en la bbdd esta en tipo finca: String, no finca: ObjectId
    console.log(_id)
    res.json(_id)
}

export const createTask = async (req, res) => {
    // createTask -> Crea la task para una finca
    try {
        const { finca, production, information, date } = req.body
        const newTask = new Task({
            finca,
            production,
            information,
            date
        })
        const savedTask = await newTask.save()
        res.json(savedTask)
    } catch (e) {
        console.log(e)
    }
}