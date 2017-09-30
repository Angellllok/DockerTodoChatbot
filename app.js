var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();
const router = express.Router();
//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

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
//fire controllers
todoController(app);
//listen to port
app.listen(process.env.PORT || 3000);
console.log('You are listening to port 3000');
