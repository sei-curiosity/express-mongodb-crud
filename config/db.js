const mongoose = require('mongoose')
const dbName = 'crud-express-mongodb'
mongoose.connect(`mongodb://localhost/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', ()=> console.error)
db.once('open', ()=> console.log("Database sucessfully connected (: "))


module.exports = db