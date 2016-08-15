var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('scratchpad');
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
});