var express = require('express');
var app = express();

app.get('/test/:name/:year((19[0-9]{2}|20[012][01]))', function(req, res) {
  res.send('URL Parameter: ' + req.params.name + " " + req.params.year);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});


