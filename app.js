const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render('index');
});

app.get("/about", function(req, res) {
  res.render('about');
});

app.get("/make-payment", function(req, res) {
  res.render('make-payment');
});

app.get("/get-quote", function(req, res) {
  res.render('get-quote');
});

app.get("/contact", function(req, res) {
  res.render('contact');
});


app.listen(3000, function() {
  console.log("Server running on port 3000");
});
