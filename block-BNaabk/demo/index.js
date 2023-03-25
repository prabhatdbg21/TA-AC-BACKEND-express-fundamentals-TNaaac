var express = require ('express');

var app = express();

app.get('/', (req, res) => {
    res.send('index')
})

app.listen(3000, () => {
    console.log('server is listening at 3000')
})