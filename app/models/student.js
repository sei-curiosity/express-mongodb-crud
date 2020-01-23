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

},{
    timestamps : true
})

//Model
///                            nameOfModel , Schema
const Student = mongoose.model('Student',StudentSchema)


module.exports = Student;
