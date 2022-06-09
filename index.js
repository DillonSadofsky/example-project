var express = require('express')
var app = express()
const port = 3000

app.get('/', (request, result) => {
	result.send(`Hello ${request.query.name || 'World'}!`)
})

app.get('/Izak', (request, result) => {
	// I wanted this to be a hyperlink in my text but I'm not
	// sure how to do this, I would love to learn.
	var mySite = ('http://yellowiron.flywheelsites.com/izak/')

	result.send('Greetings, here is my webpage: ' +  mySite)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})