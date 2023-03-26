var express = require('express');

var app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    console.log (__dirname + '/public');
    next(); 
})

app.use(express.json());

app.use(express.urlencoded({extended: false})); 

app.use(express.static(__dirname + '/public'))                                                

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/json', (req, res) => {
    console.log(req.body);
})

app.post('/contact', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log('server is listening on port 3k')
})




/*
var express = require('express');

var app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next(); 
})

app.use(express.json());  // to capture the json data (add body {} in req)

app.use(express.urlencoded({extended: false})); // to capture the form data (add body {} in req)
                                                // true in case of nested obj , obj inside obj is known as nested object

app.use(express.static(__dirname + '/public'))                                                

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");  // absoulite path from the directory
})

app.post('/json', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log('server is listening on port 3k')
})
*/