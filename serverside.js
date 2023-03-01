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