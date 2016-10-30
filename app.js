var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/', function (req, res) {
    res.send('foo foo foo foo foobar');
});
app.listen(port, function (err) {
    console.log('listening on port:' + port);
});
console.log('foobar');