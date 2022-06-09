var express = require('express')
var app = express()
const port = 3000

app.get('/ray', (request, result) => {
	result.send(`Hello ${request.query.name}!`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})