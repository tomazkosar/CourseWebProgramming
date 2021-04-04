var fs = require("fs"); 

var readableStreamEvent = fs.createReadStream("testfile.txt");

readableStreamEvent.on('data', function (chunkBuffer) { 
	// Called multiple times
	console.log('got chunk of', chunkBuffer.length, 'bytes');
});

readableStreamEvent.on('end', function() {
	// After read
	console.log('got all the data');
});

readableStreamEvent.on('error', function (err) {
	console.error('got error', err);
});

