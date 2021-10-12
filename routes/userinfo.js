var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('userinfo', { title: 'User Data', message: 'Welcome to the user data page'});
  });

module.exports = router;
