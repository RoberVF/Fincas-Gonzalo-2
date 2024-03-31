import { useState } from "react"
import {getTask, createTask} from '../../api/routes'

import PropTypes from 'prop-types'

import { TaskContext } from "./TaskContext"

export function TaskProvider({children}){
    const [tasks, setTasks] = useState([])

    const getTasks = async (fincaName) => {
        try{
            const res = await getTask(fincaName)
            setTasks(res.data)
            console.log("res.data: ", res.data)
        } catch(e){
            console.log(e)
        }
    }

    const createNewTask = async (task) => {
        try{
            await createTask(task)
            console.log("TaskContext task: ", task)

        } catch(e){
            console.log(e)
        }
    }

    return (
        <TaskContext.Provider value={{tasks, getTasks, createNewTask}}>
            {children}
        </TaskContext.Provider>

    )

}

TaskProvider.propTypes = {
    children: PropTypes.node.isRequired
};