var express = require("express"),
    nano = require('nano')('http://localhost:5984'),
    app = express();

app.get("/", function (req, res) {
  res.send("Hey buddy!");
});

app.listen(process.env.PORT || 3000 , function () {
  console.log('Express listening on port ' + process.env.PORT + ' or 3000');
});
