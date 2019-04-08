var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost:27017/todos-api", {useNewUrlParser: true});
mongoose.Promise = Promise; //allows us to use promise syntax -> so we can chain on .then .catch