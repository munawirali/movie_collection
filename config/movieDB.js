const mongoose = require('mongoose')
// console.log(process.env.APPD); 

mongoose.connection.openUri(`${process.env.APPDB}`, err => {
    if (err) {
        console.log(err);
    }
})
var Schema = mongoose.Schema,
    MovieSchema = new Schema({
        title: {
            type: String
        },
        year: {
            type: Number
        }
    })
module.exports = mongoose.model('Movie', MovieSchema)