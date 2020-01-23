//import exporess
const express = require('express');
// import student model
const Student = require('../models/student')
// router
const router = express.Router()

// index 
// GET - /students 
router.get('/students',(req,res) => {
    Student.find()
    .then(students => {
        res.status(200).json({students:students})
    })
    .catch(console.error)
})

// create
// POST - /students
router.post('/students',(req,res) => {
    const newStudent = req.body.student;
    Student.create(newStudent)
    .then(student => {
        res.status(201).json({student:student})
    })
    .catch(console.error)
})


//show
// GET - /students/:id
// /students/32423j3g4333das6s7
router.get('/students/:id', (req,res) => {
    const studentId = req.params.id

    Student.findById(studentId)
    .then(student => {
        res.status(200).json({student:student})
    })
    .catch(console.error)
})

//Update
// PATCH - /students/:id
router.patch('/students/:id',(req,res) => {
    const studentBody = req.body.student;
    const studentId = req.params.id;
    // Student.findById(studentId)
    // .then(student => {
    //    return student.update(studentBody)
    // })
    // .then( () => res.sendStatus(204) )
    // .catch(console.error)
    Student.findByIdAndUpdate(studentId,studentBody)
    .then((student) => res.status(204))
    .catch(console.error)
})


//Destroy
// Delete - /students/:id
router.delete('/students/:id',(request,response) => {
    const studentId = request.params.id
    Student.findByIdAndDelete(studentId)
    .then(() => response.sendStatus(204))
    .catch(console.error)
    // Student.findById(studentId)
    // .then(student => {
    //     return student.remove()
    // })
    // .then(() => response.sendStatus(204) )
    // .catch(console.error)
})

module.exports =  router;