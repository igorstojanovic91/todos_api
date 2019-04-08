var express = require("express"),
    router = express.Router(); //needed to break routes into chuncks

var db = require("../models") //requires automatically index file
var helpers = require("../helpers/todos")

router.route("/") //combines router.get("/") and router.post("/")
.get(helpers.getTodos) //gets it from helpers/todos.js export.getTodos
.post(helpers.createTodo)

router.route("/:todoId")
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)

module.exports = router; //exports router