const express = require('express');
const app = express();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

app.get('/angle', (req, res) => {
    res.sendFile(__dirname+'/angle.html');
})

app.get('/circle', (req, res) => {
    res.sendFile(__dirname+'/circle.html');
})

app.post('/circle', urlencodedParser, (req, res) => {
    const radius = req.body.radius;
    const area = (radius*radius)*Math.PI
    res.send(`Area is = ${area}`);
});

module.exports = app;