var express = require('express');
var app = express();

app.use('/user', function(req, res, next) {
  console.log('Middleware response 1');
  next();
});

app.use('/user', function(req, res, next) {
  console.log('Middleware response 2');
  next();
});

app.get('/user', function(req, res) {
  res.send('Hello from user!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});


