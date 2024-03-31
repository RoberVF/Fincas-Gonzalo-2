import { useState } from "react"
import {getAllFincas, getFinca, createFinca} from '../../api/routes'

import PropTypes from 'prop-types'

import { FincaContext } from "./FincaContext"

export function FincaProvider({children}){
    // const [fincas, setFincas] = useState([])
    const [finca, setFinca] = useState([])

    const getFincas = async () => {
        try{
            // const res = await getAllFincas()
            // setFincas(res.data)
            const res = await getAllFincas()
            setFinca(res.data)
            console.log("res.data getAllFincas: ", res.data)
        } catch(e){
            console.log(e)
        }
    }

    const createNewFinca = async (finca) => {
        try{
            await createFinca(finca)
            console.log("FincaContext finca: ", finca)

        } catch(e){
            console.log(e)
        }
    }

    const getOneFinca = async (finca) => {
        try{
            const res = await getFinca(finca)
            setFinca(res.data)
            console.log("res.data getOneFinca: ", res.data)
        } catch(e){
            console.log(e)
        }
    }

    return (
        <FincaContext.Provider value={{finca, getFincas, createNewFinca, getOneFinca}}>
            {children}
        </FincaContext.Provider>

    )

}

FincaProvider.propTypes = {
    children: PropTypes.node.isRequired
};