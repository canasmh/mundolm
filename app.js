const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")

const app = express();

var lang = "en"

var titleEn = "Welcome | MLM"
var titleEs = "Bienvenidos | MLM"
var title = titleEn

var navEn = ["About", "Insurance", "Get a Quote", "Make a Payment", "Contact"]
var navEs = ["Acerca de", "Seguros", "Conseguir Cotización", "Realizar un pago", "Contacto"]
var nav = navEn

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render('index', {lang: lang, title: title, nav: nav});
});

app.get("/about", function(req, res) {
  res.render('about', {lang: lang, title: title, nav: nav});
});

app.get("/make-payment", function(req, res) {
  res.render('make-payment', {lang: lang, title: title, nav: nav});
});

app.get("/contact", function(req, res) {
  res.render('contact', {lang: lang, title: title, nav: nav});
});

app.post("/contact", function(req, res) {
  res.send("It works!", {lang: lang})
})

app.get("/es", function(req, res) {
  if (lang=="en") {
    lang="es"
    title=titleEs
    nav=navEs
  }

  else {
    lang="en"
    title=titleEn
    nav=navEn
  }

  res.redirect("/")
});


app.listen(3000, function() {
  console.log("Server running on port 3000");
});
