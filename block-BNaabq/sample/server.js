var express = require('express');
var logger = require('morgan')
var cookieParser = require('cookie-parser')

var app = express();


app.use(logger('dev'))

app.use(express.static(__dirname + '/public'))   

app.use(cookieParser());

app.use("/about", (req, res, next) => {
    res.cookie("username", "suraj");
    res.end('about page');
})

app.use((req, res, next) => {
    console.log(req.cookies);
})

app.get('/', (req, res) => {
    res.send('welcome')
})


app.listen(3000, () => {
    console.log('server is listening on port 3k')
})