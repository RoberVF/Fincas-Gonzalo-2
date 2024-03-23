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
    }
}, {
    timestamps: true
})


export default mongoose.model("Finca", fincaSchema)
