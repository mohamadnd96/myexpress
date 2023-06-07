
const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get('/test', async function (req, res) {
    try {
        const dateString = req.query.date;
        const epochMilliseconds = convertToEpoch(dateString);
        res.send({ result: epochMilliseconds })
    } catch (er) {
        res.send({ error: er })
    }

})

app.get('/', async function (req, res) {

    res.send({ page: "main" })
})

function convertToEpoch(dateString) {
    const [month, day, year] = dateString.split('.');
    const dateObject = new Date(`${year}-${month}-${day}`);
    const milliseconds = dateObject.getTime();
    return milliseconds;
}

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running on %s %s', host, port)
})