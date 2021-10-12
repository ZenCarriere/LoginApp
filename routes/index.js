var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login', message: 'Please enter your login information!' });
});

router.post('/login', urlencodedParser, function (req, res) {

  if(req.body.name == "jbloggs" && req.body.password == "TUShannon"){
    res.render('members', { name: req.body.name, password: req.body.password});
  }
   else{
    res.render('index', { title: 'Login', message: 'Sorry incorrect details' });
  }


  
});

module.exports = router;
