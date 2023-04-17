const fs = require('fs')
const express = require('express')
const app = express()

var debug = true
app.trace((request, response) => {//trace handling
	if(debug){console.log('trace request made')}
	response.writeHead(200, {'Content-Type':'application.json'})
	response = request
	if(response == request)
	if(debug){console.log(response)}
	return response.end()
})
app.use(express.json())//needed for conversion from json

app.get('/solo', (request, response) => {//loading single player
	fs.readFile('Chess.html', (err,data) => {
		if(err){
			response.writeHead(404, {'Content-Type':'text/plain'});
			return response.end('404 file not found');
		}
		response.writeHead(200, {'Content-Type':'text/html'})
		response.write(data)
		return response.end();
	})
});
app.get('/chess/:player', (request, response) => {
	let player = request.params.player
	if((player == 1)||(player == 2)){
		fs.readFile('Chess.html', (err,data) =>{
			if(err){
				response.writeHead(404, {'Content-Type':'text/plain'})
				return response.end('404 file not found')
			}
			response.writeHead(200, {'Content-Type':'text/html'})
			response.write(data)
			return response.end()
		})
	}
	response.writeHead(404, {'Content-Type':'text/plain'})
	return response.end('404 page not found')
})
app.get('/chess', (request, response) => {//page for navigation
	fs.readFile('home.html', (err,data) => {
		if(err){
			response.writeHead(404, {'Content-Type':'text/plain'})
			return response.end('404 file not found')
		}
		response.writeHead(200, {'Content-Type':'text/html'})
		response.write(data)
		return response.end()
	})
})
app.use((request, response) => {//invalid link handling(redirects to home page)
	response.writeHead(302, {'Location':'/chess'})
	return response.end()
})
app.listen(3000, () => {
	console.log('server running on port 3000')
})
// to start server use: node serverside.js when in correct directory