const express = require('express');
const { homedir } = require('os');
const { format } = require('path');
const app = express();
const userRoute = require('./router/user-route');
var bodyParser = require('body-parser');

app.use(express.static("public"));


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get("/", (req, res)=>{
    res.statusCode = 202;
    // res.header('header-name', 'header-value');
    // res.cookie('name', 'Jack');
    // res.json({'name' : 'JACK'})
    // res.send(__dirname+"/home.html");
    res.sendFile(__dirname+"/home.html");
    // res.end();
})

app.use('/about', (req, res) =>{
    res.send('About Page');
    res.end();
})
app.post("/post", (req, res)=>{
    res.send('data posted')
    res.end();
})

app.delete('/delete', (req, res) =>{
    res.send('data deleted');
    res.end();
})

// * Router with no parameter from another file
// app.use(userRoute);

// * Router with extra parameter from another file
app.use('/user', userRoute)

// * Route with query parameter
app.get('/query', (req, res) => {

    // Normal style
    const id = req.query.id;
    const name = req.query.name;

    // ES6 style
    // const {id, name} = req.query;

    res.send(`Your id is = ${id} Your name is = ${name}`);

});

//  * http request with route parameter
app.get('/name/:name/roll/:roll', (req, res) => {
    const name = req.params.name;
    const roll = req.params.roll;
    res.send(`Your name is = ${name} and roll is = ${roll}`);
});

//  * http request with header parameter
app.get('/header', (req, res) => {
    const name = req.header('name');
    res.send(`${name}`);
});

//  * http request with form data

app.get('/form', (req, res) => {
    res.sendFile(__dirname+'/form.html');
});

// app.post('/form', jsonParser, (req, res) => {
    
//     res.send(req.body);
// });



// * Working with MiddleWare


const middleWare = (req, res, next) => {
    req.currentTime = new Date(Date.now())
    console.log('Middle ware running!');
    next();
}

// External middle ware
const mw = require('./middle-ware');
const { time } = require('console');

// universel middle ware
app.use((req, res, next)=>{
    req.middleWareName = 'universel middle ware';
    next();
})

// error handle middle ware

app.use((req, res, next) => {
    res.send('404 Bad request URL');
})

app.get('/middle-ware', middleWare, (req, res) => {
    res.send(`Middle ware running! at ${req.currentTime}`);
})

app.get('/universel-middle-ware', middleWare, (req, res) => {
    res.send(`Middle ware running! at ${req.middleWareName}`);
})

module.exports = app;