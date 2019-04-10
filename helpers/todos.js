
var db = require("../models") //requires automatically index file

exports.getTodos = function(req, res) {
    db.Todo.find()
    .then(function(todo) {
        res.json(todo); //201 in creaed
    })
    .catch(function(err) {
        res.send(err);
    })
}

exports.createTodo = function(req, res) {
    console.log("CREAETE TODO", req.body)
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo); //
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getTodo = function(req, res) {
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo) {
        res.json(foundTodo);
    })
    .catch(function(err) {
        res.send(err);
    })
}

exports.updateTodo = function(req, res) {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //responds by default with old data, unless specified with {new: true}
    .then(function(updateTodo) {
        res.json(updateTodo);
    })
    .catch(function(err) {
        res.send(err);
    })
}

exports.deleteTodo = function(req, res) {
    db.Todo.findOneAndDelete({_id: req.params.todoId})
    .then(function(){
        res.json({message: "We deleted it"});
    })
    .catch(function(err) {
        console.log(err)
        res.send(err);
    })
}

module.exports = exports;