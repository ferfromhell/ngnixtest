var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/testApi', function (req, res) {
  res.send('Hello World!');
});
app.post('/postApi', function(req, res) {
  res.send("Post api test");
 });
app.listen(6767, function () {
  console.log('Example app listening on port 6767!');
});