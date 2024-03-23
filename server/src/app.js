import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import mainRoutes from './routes/index.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(express.json())

// CORS
const corsOptions = {
    origin: function(origin, callback){
        if(!origin || FRONTEND_URL === origin){
            callback(null, true)
        } else{
            callback(new Error("Not allowed by CORS policity"))
        }
    },
    credentials: true
}
app.use(cors(corsOptions))

app.use(mainRoutes)

export default app