export const getTasks = (req, res) => {
    res.send("Get fincas")
}

export const createTask = async (req, res) => {
    // createTask -> Crea la task para una finca
    try {
        const {finca, production, information, date} = req.body
        const newTask = new Task ({
            finca,
            production,
            information,
            date
        })
        const savedTask = await newTask.save()
        res.json(savedTask)
    } catch (e) {
        console.log(e)
    }
}