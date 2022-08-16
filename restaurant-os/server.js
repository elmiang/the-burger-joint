var express = require('express');
var app = express();
const port = process.env.PORT || 8888;

var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port);
})

app.get('/api', function (req, res) {
  res.json({ message: `YOUR EXPRESS BACKEND IS CONNECTED TO REACT`});
})
