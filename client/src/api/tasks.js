import axios from './axios'

export const getTasksRequest = async () => axios.get("/tasks")
export const createTaskRequest = async (task) => axios.post("/tasks", task)