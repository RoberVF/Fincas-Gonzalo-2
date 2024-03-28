import Finca from '../model/Finca.js'

export const getAllFincas = async (req, res) => {
    const fincas = await Finca.find({})
    res.json(fincas)
}

export const getFinca = async (req, res) => {
    const {fincaName} = req.params

    const finca = await Finca.findOne({name:fincaName})

    res.json(finca)
}

export const createFinca = async (req, res) => {
    // Esta funcion no se usara practicamente nunca ya que una vez estan las 5 o 6 
    // fincas creadas no se necesitaran crear mas.
    const {name, parras, dimentions, tasks} = req.body

    const newFinca = new Finca({
        name,
        parras ,
        dimentions,
        tasks
    })

    console.log(req.params)

    const savedFinca = await newFinca.save()

    res.json(savedFinca)
}