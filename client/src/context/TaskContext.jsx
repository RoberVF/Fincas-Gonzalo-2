import { createContext, useState, useContext } from "react"
import {createTaskRequest, getTasksRequest} from '../api/tasks'

const TaskContext = createContext()

export const useTasks = () => {
    // const context = useContext(TaskContext)

    // if(!context){
    //     throw new Error ("No context on useTasks!")
    // }

    // return context
    try{
        return useContext(TaskProvider)
    } catch(e){
        throw new Error("No context on useTasks!")
        console.log(e)
    }
}

export function TaskProvider({children}){
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        try{
            const res = await getTasksRequest()
            setTasks(res.data)
        } catch(e){
            console.log(e)
        }
    }

    const createTask = async (task) => {
        // try{
        //     await createTaskRequest(task)
        // } catch(e){
        //     console.log(e)
        // }
        const response = await createTaskRequest(task)
        console.log(response)
    }

    return (
        <TaskContext.Provider value={{tasks, getTasks, createTask}}>
            {children}
        </TaskContext.Provider>

    )

}