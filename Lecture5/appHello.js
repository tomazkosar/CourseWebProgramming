var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
  res.send('Hello from /hello !');
});

app.post('/hello', function(req, res){
   res.send("POST method at '/hello'!\n");
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});


