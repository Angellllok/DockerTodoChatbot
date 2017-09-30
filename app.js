var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static
app.use(express.static('./public'));
//fire controllers
//todoController(app);
app.get('/todo', function(req, res){
  //get data from mongodb
  Todo.find({}, function(err, data){
    if (err) throw err;
    res.render('todo', {todos: data});
  });
//listen to port
app.listen(process.env.PORT || 3000);
console.log('You are listening to port 3000');
