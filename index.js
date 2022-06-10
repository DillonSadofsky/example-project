var express = require('express')
var app = express()
const port = 3000

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