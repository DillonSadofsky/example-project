var express = require('express')
var app = express()
const port = 3000

app.get('/SaketReddy', (request, result) => {
	//result.send(`Hello ${request.query.name || 'World'}!`)
	result.send(`Hi Saket Reddy!`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})