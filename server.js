// require express
const express = require('express')
const app = express()
// require database configuration logic
const db = require('./config/db')
// require route files

// register route files


//server
const port = 2030;
app.listen(port,() => {
    console.log(`Server running at port ${port}`)
})