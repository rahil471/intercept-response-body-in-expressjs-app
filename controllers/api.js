var express = require('express'); 
var router = express.Router();

router.get('/api1', function(req, res){
    res.json({
        errorCode:0,
        message: 'Hola! I\'m API one'
    });
});

router.get('/api2', function(req, res){
    res.json({
        errorCode:0,
        message: 'Marhabaan! Me API two man'
    });
});

module.exports = router;