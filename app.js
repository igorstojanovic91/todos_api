var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose');

var todoRoutes = require("./routes/todos")

app.get("/", function(req, res) {
    res.send("Hello from root route"); //when here an object is plaed it is converted to JSON; use res.json({message: "Test"})
})

//establishing pattern for todo routes
app.use("/api/todos", todoRoutes);

//Starting up server
var port = process.env.PORT || 3000
app.listen(port, process.env.IP, function() {
    console.log("app started");
})