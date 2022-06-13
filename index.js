var express = require('express')
var app = express()
const port = 3000

app.get('/', (request, result) => {
	result.send(`Hello ${request.query.name || 'World'}!`)
})

app.get('/jake', (request, result) => {
    result.send(`Hello I'm Jake`)
})

app.get('/van', (request, result) => {
	result.send('Hello from Van!')
})

app.get('/SaketReddy', (request, result) => {
	//result.send(`Hello ${request.query.name || 'World'}!`)
	result.send(`Hi Saket Reddy!`)
})

app.get('/ray', (request, result) => {
	result.send(`Hello! (Connecting IP: ${request.ip || "Error, IP could not be found"})`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
