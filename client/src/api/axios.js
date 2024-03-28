import axios from 'axios'

const URL = "http://localhost:3000"

const instance = axios.create({
    baseURL: `${URL}/api/fincas`,
    credentials: true
})

export default instance