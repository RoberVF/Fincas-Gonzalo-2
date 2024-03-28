import { createContext } from "react"

export const TaskContext = createContext()

// Para permitir el Fast Refresh, no exporto varias funciones en el mismo archivo,
// sino que prefiero crear para el context de Task 3 archivos.

// En este caso, solamente tengo el context de Task, sino habria que agruparlos 
// en una misma carpeta p.e. TaskContext/