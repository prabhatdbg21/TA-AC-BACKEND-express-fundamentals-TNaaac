// requires
var express = require('express');            // setup an express server
var logger = require('morgan')               // logger middleware
var cookieParser = require('cookie-parser')  // cookieParser middleware

// instantiate the app
var app = express();                         // setup an express server

// middleware
app.use(express.json());                           // to capture form data from request
app.use(express.urlencoded({extended: false}));    // to capture json data from request
app.use(express.static(__dirname + "/public"));    // add middleware for handling static assets
app.use(logger('dev'));                            // logger middleware
app.use(cookieParser());                           // cookieParser middleware

// routes
app.get('/', (req, res) => {                     // GET -> `/` route       OR    // main page on `/` route
    res.sendFile(__dirname + "/index.html")
});

app.get('/users', (req,res) => {                 // GET -> `/users` route
    res.send('My name is PRABHAT');
});

app.get('/projects', (req,res) => {              // projects page on `/projects` routes etc..
    res.sendFile(__dirname + "/projects.html")
});

// Error handler middlewares
app.use((req, res, next) => {              // a 404 handler for routes which are not handled
    res.status(404).send('Page not Found');
})

app.use((err, req, res, next) => {         // a 500 handler for client/server error
    res.status(500).send(err);
})

// listener
app.listen(4000, () => {                   // add a listener on port 4000
    console.log('server is listening on port 4k')
})
