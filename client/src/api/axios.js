import axios from 'axios'

const URL = "localhost:3000"

const instance = axios.create({
    baseURL: URL,
    credentials: true
})

export default instance