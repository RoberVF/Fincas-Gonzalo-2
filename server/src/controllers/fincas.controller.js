import Finca from '../model/Finca.js'
import Fincas from '../model/Finca.js'

export const getFincas = async (req, res) => {
    const fincas = await Fincas.find({})
    res.json(fincas)
}

export const getFincaTask = (finca) => {
    return async (req, res) => {
        try{
            const getFincaTask = await Finca.find({name: finca})
            res.json(getFincaTask)
        } catch(e){
            res.status(500).json({error: e.message})
        }
    }
}