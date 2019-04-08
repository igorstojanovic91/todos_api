var express = require('express'),
    app     = express();

app.get("/", function(req, res) {
    res.send("I got here");
})

var port = process.env.PORT || 3000
app.listen(port, process.env.IP, function() {
    console.log("app started");
})