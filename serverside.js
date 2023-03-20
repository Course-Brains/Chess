const http = require('http');
const fs = require('fs')
const url = require('url')

var debug = true

http.createServer((request, response) => {
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.end('hello world')
}).listen(3000);
console.log('server running on port 3000')

// to start server use: node serverside.js when in correct directory
/* code to fetch:

*/