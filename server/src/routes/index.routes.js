import {Router} from 'express'

const route = Router()

route.get("/", (req, res) => {
    res.send("Welcome to the homepage!")
})

export default route