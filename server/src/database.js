import mongoose from 'mongoose'

import {DB_USER, DB_PASS, DB_NAME} from './config.js'

export const connectDB = async () => {
    try{
        // await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_NAME}`)
        await mongoose.connect("mongodb://0.0.0.0:27017")
        console.log("> Database is connected!")
    } catch(e){
        console.log(e)
    }
}
