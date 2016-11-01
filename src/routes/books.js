var express = require('express');
var bookRouter = express.Router();

var router = function(nav) {
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
        .get(function (req, res) {
            res.render('books', {
                title: 'hello from ejs',
                nav: nav,
                books: books
            });
        });
    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('book', {
                title: 'book',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};

module.exports = router;