var express = require('express')
var app = express()
const port = 3000

app.get('/van', (request, result) => {
	result.send('Hello from Van!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})