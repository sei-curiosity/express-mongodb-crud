// require express
const express = require('express')
const app = express()
// require database configuration logic
const db = require('./config/db')
// require route files
const studentRouters = require('./app/routes/student_routes');

//bodyParser 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( {extended:true} ))
app.use(bodyParser.json())

// register route files
app.use(studentRouters)

//server
const port = 2030;
app.listen(port,() => {
    console.log(`Server running at port ${port}`)
})