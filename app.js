var express = require('express'),
    app     = express();



var port = process.env.PORT || 3000
app.listen(port, process.env.IP, function() {
    console.log("app started");
})