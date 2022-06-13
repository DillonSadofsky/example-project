var express = require('express')
var app = express()

app.get('/aj', function (req, res) {
  res.send('Ali Johnson')
})

app.listen(3000)