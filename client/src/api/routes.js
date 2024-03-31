import axios from './axios'

// Fincas 
export const getAllFincas = async () => axios.get("/")
export const getFinca = async (fincaName) => axios.get(`/${fincaName}`)
export const createFinca = async (finca) => axios.post("/createFinca", finca)

// Tasks
export const getTask = async (fincaName) => axios.get(`/getTasks/${fincaName}`)
export const createTask = async (task) => axios.post("/createTask", task)