var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

var nav = [{text:'Books', link:'/books'}, {text:'Authors', link:'/authors'}];
var bookRouter = require('./src/routes/books')(nav);
var adminRouter = require('./src/routes/admin')(nav);

app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', {title:'hello from ejs', nav:[{text:'Books', link:'/books'}, {text:'Authors', link:'/authors'}]});
});
app.listen(port, function (err) {
    console.log('listening on port:' + port);
});
console.log('foobar');