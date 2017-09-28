var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();
app.set('port', (process.env.PORT || 5000));
//set up template engine
app.set('view engine', 'ejs');

//static
app.use(express.static('./public'));
//fire controllers
todoController(app);
//listen to port
//app.listen(3000);
//console.log('You are listening to port 3000');
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
