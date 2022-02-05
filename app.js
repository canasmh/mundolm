const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

class Service {
  constructor(name, description, icon) {
    this.name = name;
    this.description = description;
    this.icon = icon
  }
}

class Team Member {
  constructor(name, description, img) {
    this.name = name
    this.description = description
    this.img = img
  }
}

// Header
var lang = "en";
var titleEn = "Welcome | MLM";
var titleEs = "Bienvenidos | MLM";
var title = titleEn;
var navEn = ["About", "Insurance", "Get a Quote", "Make a Payment", "Contact"];
var navEs = ["Acerca de", "Seguros", "Conseguir Cotización", "Realizar un pago",
"Contacto"];
var nav = navEn;

//Index
var welcomeEn = ["Welcome", "...We serve with joy! 😊", "En español",
"Get Quote"];
var welcomeEs = ["Bienvenidos", "...Servimos con alegría 😊", "In English",
"Conseguir Cotización"];
var welcome = "";
var aboutEn = ["About Us", "Mundo Latino Multiservices, MLM, has as its mission, \
to take advantage of the wonderful opportunity to love through SERVICE. At MLM, \
we serve with", "joy, enthusiasm and efficiency,", "on all the services that we \
offer. We offer our clients the confidence of being able to count on us, because \
our", "SERVICE", "is unconditional."];
var aboutEs = ["Acerca de Nosotros", "Mundo Latino Multiservicios, MLM, tiene \
como misión, aprovechar la maravillosa oportunidad de amar, a través del SERVICIO. \
En MLM, estamos dispuestos a ejecutar con", "alegría, entusiasmo y eficiencia,",
"todos los servicios que en el ofrecemos. Brindamos a nuestros clientes, la \
confianza de poder contar con nosotros, pues nuestro", "SERVICIO", " es \
incondicional."];
var about = "";
var servicesEn = ["Our Services", "We cover your needs of:", "...and many more!"];
var servicesEs = ["Nuestros Servicios", "Cubrimos sus necesidades de:",
"... y muchos mas!"];
var services = servicesEn
var serviceOneEn = new Service("Insurance", "Car, Home, Apartments, Workers Comp., \
General Liability, Commercial Auto", "fa-shield")
var serviceTwoEn = new Service("DMV Transactions", "License Plates, Transfers, \
Vehicle Registration, Decal Renewal, Automobile, Motorcycle, Trailer, Boat, \
Jet Ski", "fa-car")
var serviceThreeEn = new Service("Document Services", "Fax, Copy, E-Mails, \
Translations, etc.", "fa-copy")
var serviceFourEn = new Service("Travel Tickets", "Air, Sea and Land",
"fa-suitcase-rolling")
var serviceFiveEn = new Service("Public Notary, Marriage Officiant", "",
"fa-stamp")
var serviceSixEn = new Service("Money Order", "", "fa-money-check")
var serviceSevenEn = new Service("Wire Transfers", "", "fa-envelope-open-dollar")
var serviceEightEn = new Service("Bill Payments", "", "fa-file-invoice-dollar")
var serviceNineEn = new Service("Cash Checks", "", "fa-money-check-edit-alt")
var serviceTenEn = new Service("Shipping to Central & South America", "",
"fa-box-open")
var serviceElevenEn = new Service("Buy, Activate, or Recharge Cell Phone", "",
"fa-mobile")
var allServicesEn = [serviceOneEn, serviceTwoEn, serviceThreeEn, serviceFourEn,
  serviceFiveEn, serviceSixEn, serviceEightEn, serviceNineEn, serviceTenEn,
  serviceElevenEn]
var serviceOneEs = new Service("Seguros", "Auto, Casa, Apartamentos, Workers \
Comp., General Liability, Auto Comercial ", "fa-shield")
var serviceTwoEs = new Service("Transacciones del DMV", "Placas, Transferencias, \
Registro de Auto, Renovación de Sticker, Autos, Motos, Tráiler, Lancha, Jet Ski",
"fa-car")
var serviceThreeEs = new Service("Servicios de Documentos", "Fax, Copiar, Correo \
Electrónico, Traducciones, etc.", "fa-copy")
var serviceFourEs = new Service("Boletos de Viaje", "Aire, Mar y Tierra",
"fa-suitcase-rolling")
var serviceFiveEs = new Service("Notario Público, Oficiante de Matrimonios", "",
"fa-stamp")
var serviceSixEs = new Service("Money Order", "", "fa-money-check")
var serviceSevenEs = new Service("Envíos de dinero", "", "fa-envelope-open-dollar")
var serviceEightEs = new Service("Pagos de Biles", "Estatales, Nacionales e \
Internacionales", "fa-file-invoice-dollar")
var serviceNineEs = new Service("Cheques en Efectivo", "", "fa-money-check-edit-alt")
var serviceTenEs = new Service("Paqueteria, Sobres a Centro y Sur America", "",
"fa-box-open")
var serviceElevenEs = new Service("Venta, Activación y Recarga de Celulares", "",
"fa-mobile")
var allServicesEs = [serviceOneEs, serviceTwoEs, serviceThreeEs, serviceFourEs,
  serviceFiveEs, serviceSixEs, serviceEightEs, serviceNineEs, serviceTenEs,
  serviceElevenEs]
var allServices = allServicesEn

// OUR TEAM
var ourTeamEn = "Our Team"
var ourTeamEs = "Nuestro Equipo"
var ourTeam = ourTeamEn

// FOOTER
var footerEn = ["Contact Us", "Mon-Sat", "Sun"]
var footerEs = ["Contáctanos", "Lun-Sáb", "Dom"]
var footer = footerEn

app.get("/", function(req, res) {

  if (lang == "en") {
    welcome = welcomeEn;
    about = aboutEn;
    services = servicesEn
    allServices = allServicesEn
  } else {
    welcome = welcomeEs;
    about = aboutEs;
    services = servicesEs
    allServices = allServicesEs
  }

  res.render('index', {
    lang: lang,
    title: title,
    nav: nav,
    welcome: welcome,
    about: about,
    services: services,
    allServices: allServices,
    footer: footer
  });
});

app.get("/about", function(req, res) {
  res.render('about', {lang: lang, title: title, nav: nav, footer: footer});
});

app.get("/make-payment", function(req, res) {
  res.render('make-payment', {lang: lang, title: title, nav: nav, footer: footer});
});

app.get("/contact", function(req, res) {
  res.render('contact', {lang: lang, title: title, nav: nav, footer: footer});
});

app.post("/contact", function(req, res) {
  res.send("It works!")
})

app.get("/es", function(req, res) {
  if (lang=="en") {
    lang="es"
    title=titleEs
    nav=navEs
    footer=footerEs
  } else {
    lang="en"
    title=titleEn
    nav=navEn
    footer=footerEn
  }

  res.redirect("/")
});


app.listen(3000, function() {
  console.log("Server running on port 3000");
});
