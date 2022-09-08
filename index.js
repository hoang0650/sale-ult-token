var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var server = require("http").Server(app);

const PORT = 3000

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));


server.listen(PORT, () => {
  console.log("Running in port " + PORT);
});
app.get("/", function (req, res) {
  res.render("home");
});
