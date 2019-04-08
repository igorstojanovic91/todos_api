var express = require("express"),
    router = express.Router(); //needed to break routes into chuncks

var db = require("../models") //requires automatically index file

router.get("/", function(req, res) {
    db.Todo.find()
    .then(function(todo) {
        res.json(todos);
    })
    .catch(function(err) {
        res.send(err);
    })
})


module.exports = router; //exports router