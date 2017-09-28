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
app.listen(3000);
console.log('You are listening to port 3000');
const router = express.Router();

/* GET home page. */
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
