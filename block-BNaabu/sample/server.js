var express = require('express');
var logger = require('morgan')


var app = express();

// middleware
app.use(logger('dev'))

app.use('/admin', (req, res, next) => {
    next("Unauthorized User")
})

// routes
app.get('/', (req, res) => {
    res.send('welcome')
})

app.get('/about', (req,res) => {
    res.send('users Page')
})

// Error handler middlewares
app.use((req, res, next) => {
    res.send('Page not Found');
})

app.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
})

app.listen(3000, () => {
    console.log('server is listening on port 3k')
})
