const fs = require('fs'),
      http = require('http');

let app = http.createServer((req, res) => {

    fs.readFile(__dirname + req.url, function (err,data) {
        if (err) {
            res.writeHead(404, {'Content-type': 'text/html'});
            res.end('<html><body><p>Nothing here!</p></body></html>');
            return;
        }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(data);

    });

    console.log('Client request received!');
});

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

