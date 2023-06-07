
const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get('/test', async function (req, res) {

    res.send({page:"test"})
})

app.get('/', async function (req, res) {

    res.send({page:"main"})
})



var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running on %s %s', host, port)
})