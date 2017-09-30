var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
//app.use(express.static('./public'));
app.use('/', tokenHandler);
//fire controllers
todoController(app);
router.get('/', function(req, res, next) {
    var token = req.body.token('token');
    if(!token)
    {
        res.render('error', {
            'message': "You must indicate a Token"
        });
    }

});

module.exports = router;
//listen to port
app.listen(process.env.PORT || 3000);
console.log('You are listening to port 3000');
