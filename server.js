var express = require('express');
var compression = require('compression');
var app = express();
app.use(compression());
app.use(express.static('public'));
var server = app.listen('3000', '0.0.0.0', function () {
    console.log('Application Running: http://localhost:%d', server.address().port);
});