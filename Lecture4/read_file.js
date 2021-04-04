var fs = require("fs");

console.log("\nSync call! \n");
var data = fs.readFileSync('testfile.txt', 'utf8');
console.log("File contains: ", data);
 
console.log("Async call! \n");
fs.readFile("testfile.txt", readDoneCallback); 
function readDoneCallback(error, dataBuffer) {
	if (!error) {
		console.log("File contains: ", 
					dataBuffer.toString());
	}
}
console.log("Not yet file received!");



