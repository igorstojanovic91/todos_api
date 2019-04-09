var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    bodyParser  = require("body-parser");

//Initialiszing body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views')) //serve views/ directory
app.use(express.static("public"))

var todoRoutes = require("./routes/todos")

app.get("/", function(req, res) {
    res.sendFile("index.html"); //when here an object is plaed it is converted to JSON; use res.json({message: "Test"})
})

//establishing pattern for todo routes
app.use("/api/todos", todoRoutes);

//Starting up server
var port = process.env.PORT || 3000
app.listen(port, process.env.IP, function() {
    console.log("app started");
})