var express = require('express');

var app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next(); 
})

app.get('/', (req, res) => {
    res.send('welcome')
})


app.listen(4000, () => {
    console.log('server is listening on port 4k')
})