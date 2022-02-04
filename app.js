const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")

const app = express();

var lang = "en"
var langButton = "En español"

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render('index', {lang: lang, langButton: langButton});
});

app.get("/about", function(req, res) {
  res.render('about', {lang: lang});
});

app.get("/make-payment", function(req, res) {
  res.render('make-payment', {lang: lang});
});

app.get("/contact", function(req, res) {
  res.render('contact', {lang: lang});
});

app.post("/contact", function(req, res) {
  res.send("It works!", {lang: lang})
})

app.get("/es", function(req, res) {
  if (lang=="en") {
    lang="es"
    langButton="In English"
  }

  else {
    lang="en"
    langButton="En español"
  }

  res.redirect("/")
});


app.listen(3000, function() {
  console.log("Server running on port 3000");
});
