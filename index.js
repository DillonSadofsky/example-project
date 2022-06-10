var express = require('express')
var app = express()
const port = 3000

app.get('/', (request, result) => {
	result.send(`Hello ${request.query.name || 'World'}!`)
})

app.get('/jake', (request, result) => {
    result.send(`Hello I'm Jake`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})