var express = require('express');
var app = express();

function logger(req, res, next){
    console.log(req.method, req.url);
    next()
}