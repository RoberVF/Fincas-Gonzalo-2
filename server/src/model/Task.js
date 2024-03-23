import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    finca: {
        type: String,
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