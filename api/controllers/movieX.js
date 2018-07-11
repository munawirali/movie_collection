const Mongoose = require('mongoose')
const SMCrud = require('swagger-mongoose-crud')

const schema = new Mongoose.schema({
    title: {
        type: string
    },
    year: {
        type: string
    }
})

const options = {
    collectionName: 'Cinema'
}

const crud = new SMCrud(schema,'Movie',options)

var exports = {}

exports.create = crud.create
exports.update = crud.update
exports.index = crud.index
exports.destroy = crud.destroy
exports.show = crud.show

module.exports = exports