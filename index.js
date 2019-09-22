var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = 80;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: `${__dirname}/src` });
});

http.listen(port, () => console.log('listening on port:', port));
