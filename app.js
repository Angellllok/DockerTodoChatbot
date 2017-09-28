var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static
app.use(express.static('./public'));
//fire controllers
todoController(app);
//listen to port
//app.listen(3000);
//console.log('You are listening to port 3000');
app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
