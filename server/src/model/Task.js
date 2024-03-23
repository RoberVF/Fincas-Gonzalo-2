import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    finca: {
        //Finca de referencia (relacion uno a uno)
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Finca',
        required: true
    },
    production: {
        type: Number,
        required: true
    },
    information: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("Task", taskSchema)