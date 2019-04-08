var express = require("express"),
    router = express.Router(); //needed to break routes into chuncks


router.get("/", function(req, res) {
    res.send("Hello from todos routes");
})


module.exports = router; //exports router