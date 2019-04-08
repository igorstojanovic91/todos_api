var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose');

app.get("/", function(req, res) {
    res.send("I got here"); //when here an object is plaed it is converted to JSON; use res.json({message: "Test"})
})


//Starting up server
var port = process.env.PORT || 3000
app.listen(port, process.env.IP, function() {
    console.log("app started");
})