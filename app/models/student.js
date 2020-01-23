const mongoose = require('mongoose');


//Schema
const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    grade:{
        type: Number,
        required: true
    },
    age: {
        type: Number,
        min:18
    },
    city:{
        type: String
    }

},{})