//import exporess
const express = require('express');
// import student model
const Stduent = require('../models/student')
// router
const router = express.Router()

// index 
// GET - /students 
router.get('/students',(req,res) => {
    Stduent.find()
    .then(students => {
        res.status(200).json({students:students})
    })
    .catch(console.error)
})

// create
// POST - /students
router.post('/students',(req,res) => {
    const newStudent = req.body.student;
    Stduent.create(newStudent)
    .then(student => {
        res.status(201).json({student:student})
    })
    .catch(console.error)
})





module.exports =  router;