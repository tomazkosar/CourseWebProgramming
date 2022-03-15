const http = require('http');

let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});

    if (req.url === '/index.html' || req.url==='/') {
        res.end('<html><body><p>Hello World!</p></body></html>')
    }
    else if (req.url === '/contact.html') {
        res.end('<html><body><p>Written by <a href="mailto:tomaz.kosar@um.si">Tomaz Kosar</a></p></body></html>')
    }
    if (req.url === '/about.html') {
        res.end('<html><body><p>Web programming course!</p></body></html>')
    }

    console.log('Client request received!');
});

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

