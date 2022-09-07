var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors({ credentials: true, origin: true }));

app.get("", function (req, res, next) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(9000, function () {
  console.log("CORS-enabled web server listening on port 9000");
});
