var express = require("express"),
    router = express.Router(); //needed to break routes into chuncks

var db = require("../models") //requires automatically index file

router.get("/", function(req, res) {
    db.Todo.find()
    .then(function(todo) {
        res.json(todo); //201 in creaed
    })
    .catch(function(err) {
        res.send(err);
    })
})

router.post("/", function(req, res) {
    db.Todo.create(req.body)
  .then(function(newTodo){
      res.status(201).json(newTodo); //
  })
  .catch(function(err){
      res.send(err);
  })
})

router.get("/:todoId", function(req, res) {
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo) {
        res.json(foundTodo);
    })
    .catch(function(err) {
        res.send(err);
    })
})


module.exports = router; //exports router