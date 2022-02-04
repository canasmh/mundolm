const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")

const app = express();

var lang = "en"
// Header
var titleEn = "Welcome | MLM"
var titleEs = "Bienvenidos | MLM"
var title = titleEn

var navEn = ["About", "Insurance", "Get a Quote", "Make a Payment", "Contact"]
var navEs = ["Acerca de", "Seguros", "Conseguir Cotización", "Realizar un pago", "Contacto"]
var nav = navEn

//Index
var welcomeEn = ["Welcome", "...We serve with joy! 😊", "En español", "Get Quote"]
var welcomeEs = ["Bienvenidos", "...Servimos con alegría 😊", "In English", "Conseguir Cotización"]
var welcome = ""
var aboutEn = ["About Us", "Mundo Latino Multiservices, MLM, has as its mission, \
to take advantage of the wonderful opportunity to love through SERVICE. At MLM, \
we serve with", "joy, enthusiasm and efficiency,", "on all the services that we \
offer. We offer our clients the confidence of being able to count on us, because \
our", "SERVICE", "is unconditional."]
var aboutEs = ["Acerca de Nosotros", "Mundo Latino Multiservicios, MLM, tiene \
como misión, aprovechar la maravillosa oportunidad de amar, a través del SERVICIO. \
En MLM, estamos dispuestos a ejecutar con", "alegría, entusiasmo y eficiencia,",
"todos los servicios que en el ofrecemos. Brindamos a nuestros clientes, la \
confianza de poder contar con nosotros, pues nuestro", "SERVICIO", " es incondicional."]
var about = ""



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  if (lang == "en") {
    welcome = welcomeEn
    about = aboutEn
  } else {
    welcome = welcomeEs
    about = aboutEs
  }
  res.render('index', {lang: lang, title: title, nav: nav, welcome: welcome, about: about});
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
