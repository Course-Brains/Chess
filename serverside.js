const http = require('http');
const querystring = require('querystring');

const server = http.createServer((request, response) => {
	console.log(querystring.stringify(response.body))
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.write('Hello, World!');
	response.statusCode = 200
	response.statusTest = "yay"
	response.end()
});

server.listen(3000, () => {
	console.log('Server running on port 3000');
});
// to start server use: node serverside.js when in correct directory
/* code to fetch:
fetch('http://localhost:3000', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		username: 'exampleUser',
		password: 'examplePassword'
	}),
	mode:'no-cors'
})
	.then(response => {console.log(response)})
	.then(data => console.log(data))
	.catch(error => console.error(error));
*/