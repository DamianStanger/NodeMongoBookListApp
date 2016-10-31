var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine', 'ejs');

var books = [
    {
        title: 'war and peace',
        genre: 'fiction',
        author: 'Tolstoy',
        read: false
    },
    {
        title: 'Javascrip the good parts',
        genre: 'computing',
        author: 'Crockford',
        read: true
    },
    {
        title: 'Pragmatic programmer',
        genre: 'computing',
        author: 'Hunt',
        read: true
    }
];
bookRouter.route('/')
    .get(function(req, res) {
        res.render('books',{title:'hello from ejs',nav:[{text:'Books', link:'/books'}, {text:'Authors', link:'/authors'}],books:books});
    });
app.use('/books', bookRouter);

app.get('/', function (req, res) {
    res.render('index', {title:'hello from ejs', nav:[{text:'Books', link:'/books'}, {text:'Authors', link:'/authors'}]});
});
app.listen(port, function (err) {
    console.log('listening on port:' + port);
});
console.log('foobar');