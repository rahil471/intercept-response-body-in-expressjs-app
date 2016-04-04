var express = require('express'); 
var app = express();
var winston = require('winston');
var mung = require('express-mung');


app.use(mung.json(
    function transform(body, req, res) {
        winston.log('info', {Message:'API REQUEST RESPONSE LOG',  responseBody:JSON.stringify(body)});
        body.mungMessage = "I intercepted you!";
        return body;
    }
));

app.use(require('./controllers/api'));

app.listen('3000', function () {
    console.log('listening on port 3000');
});