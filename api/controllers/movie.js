"use strict"
// include our "db"
var db = require('../../config/db')(),
    movieDB = require('../../config/movieDB')
// Exports all the functions to perform on the db
module.exports = {getAll, save, getOne, update, delMovie}

// GET /movie operationID
function getAll(req, res, next){    
    movieDB.find({})
    .then(movies => {
        console.log('cukk');
        res.json({ 
            movies: movies
        })
    })    
    .catch(err => {
        console.log(err);
        res.status(204).send(err)
    })
}
// function getAll(req, res, next){
//     res.json({ 
//         movies: db.find()
//     })
// }
// POST /movie/{id} operationId
function save(req, res, next){
    movieDB.create(req.body)
    .then(()=>res.json({
        success: 1, description: "Movie added to the list!"
    }))
    .catch(err => {
        console.log(err);
        res.status(204).send(err)
    })
}

// GET /movie/{id} operationId
function getOne(req, res, next){
    // req.swagger contains the path parameters
    var id = String(req.swagger.params.id.value)
    movieDB.findById(id)
    .then(movie => {
        res.json([movie])
    })
    .catch(err => {
        console.log(err);
        res.status(204).send([err.reason])
    })
}

// PUT /movie/{id} operationId
function update(req, res, next){
    // req.swagger containe the path parameters
    var id = String(req.swagger.params.id.value)
    var movie = req.body
    
    movieDB.findOneAndUpdate({_id:id}, movie)
    .then(resp =>{
        // console.log('==========================');
        res.json({
            success: 1, description:  "Movie updated!"
        })
    })
    .catch(err => {
        console.log(err);
        res.status(204).send(err)
    })
}

// DELETE /movie{id} operationId
function delMovie(req, res, next){
    // req.swagger contains the path parameters
    var id = req.swagger.params.id.value
    if (db.remove(id)) {
        res.json({
            success: 1, description: "Movie deleted!"
        })
    } else {
        res.status(204).send()
    }
}