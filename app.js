var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();
var port = process.env.PORT || 8000
//set up template engine
app.set('view engine', 'ejs');

//static
app.use(express.static('./public'));
//fire controllers
todoController(app);
//listen to port
//app.listen(3000);
//console.log('You are listening to port 3000');
server.listen(port, function() {
    console.log("App is running on port " + port);
});
