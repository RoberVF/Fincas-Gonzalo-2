import { useContext } from "react"
import { FincaContext } from './FincaContext'

export const useFinca = () => {
    const context = useContext(FincaContext)

    if (!context) {
        throw new Error("No context on useFinca!")
    }

    return context
}
