import mongoose from 'mongoose'

// Realmente se necesita este model o se puede crear un componente de React Fincas y un json q 
// guarde la informacion de las fincas y recorrerlo con un map?

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
