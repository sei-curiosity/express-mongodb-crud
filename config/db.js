const mongoose = require('mongoose')
const dbName = 'crud-express-mongodb'
mongoose.connect(`mongodb://localhost/${dbName}`)

const db = mongoose.connection

db.on('error', ()=> console.error)
db.once('open', ()=> console.log("conneted"))


module.exports = db