var express = require("express");
app = express();
var port = 5000;
app.get('/', function (req, res) {
    res.send("foo foo foo foo foobar");
});
app.listen(port, function (err) {
    console.log("listening on port:" + port);
})
console.log("foobar");