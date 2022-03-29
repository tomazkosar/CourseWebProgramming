var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.session.userId);
  res.render('index', { userId: req.session.userId, username:req.session.username });
});

module.exports = router;
