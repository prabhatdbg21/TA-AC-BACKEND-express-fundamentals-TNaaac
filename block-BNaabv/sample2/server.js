var express = require('express');            // setup an express server
var logger = require('morgan')               // logger middleware
var cookieParser = require('cookie-parser')  // cookieParser middleware

var app = express();                         // setup an express server

// middleware
app.use(express.json());                           // to capture form data from request
app.use(express.urlencoded({extended: false}));    // to capture json data from request
app.use(logger('dev'));                            // logger middleware
app.use(cookieParser());                           // cookieParser middleware

/*
app.use((req, res, next) => {                      // add a middleware to send cookie to the client.    
    var count = req.cookies.count;
    if(count) {
        res.cookie("count", Number(count) + 1)
    }
    else{
        res.cookie("count", 1);
    }
    console.log(count);
    next()
})

OR
*/

app.use((req, res, next) => {                           // add a middleware to send cookie to the client.  
    res.cookie("username", "xyz");
    next();
})

app.use('/admin', (req, res, next) => {               // for 500 error
    next("Unauthorized User");
});

// routes
app.get('/', (req, res) => {                     // GET -> `/` with HTML response saying 'Welcome to express' in H2.
    res.send('<h2> Welcome to express </h2>');
});

app.get('/about', (req,res) => {                 // GET -> `/about` with plain text content saying 'My name is qwerty'
    res.send('My name is PRABHAT');
});

app.post('/form', (req, res) => {      // add POST request on `/form` route to capture form data from postman and send entire form data through response in json format
    res.json(req.body);
});

app.post('/json', (req, res) => {      // add POST request on `/json` route to capture JSON data from postman and send entire data in response in plain text format.
    res.json(req.body);
});

app.get('/users/:username', (req, res) => {  // a router to capture params from the request on a route `/users/:username` using GET request.
    var username = req.params.username; 
    res.send (`<h2> ${username} </h2>`) ;  // capture the username and respond with username in HTML response.
});


// Error handler middlewares
app.use((req, res, next) => {              // a 404 handler for routes which are not handled
    res.status(404).send('Page not Found');
})

app.use((err, req, res, next) => {         // a 500 handler for client/server error
    console.log(err);
    res.status(500).send(err);
})

app.listen(3000, () => {                   // add a listener on port 3000
    console.log('server is listening on port 3k')
})
