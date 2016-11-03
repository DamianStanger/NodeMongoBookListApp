var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

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
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection  = db.collection('books');
                collection.insertMany(books, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
            //res.send('inserting books');
        });

    return adminRouter;
};

module.exports = router;