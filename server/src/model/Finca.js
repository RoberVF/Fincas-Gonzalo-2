import mongoose from 'mongoose'

const fincaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    parras: {
        type: Number,
        required: false,
    },
    dimentions: {
        type: Number,
        required: false,
    },
    tasks: [{
        id: {
            type: mongoose.Schema.ObjectId,
            ref: "Task"
        },
    }]
}, {
    timestamps: true
})


export default mongoose.model("Finca", fincaSchema)
