var express = require('express');
var logger = require('morgan')


var app = express();


app.use(logger('dev'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + "/new.html")
})

app.post('/new', (req,res) => {

})

app.get('/users/:asdf', (req, res) => {
    var username = req.params.asdf;
    res.send(username);
})


app.listen(3000, () => {
    console.log('server is listening on port 3k')
})
