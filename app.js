require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));


class Service {
  constructor(name, description, icon) {
    this.name = name;
    this.description = description;
    this.icon = icon;
  }
}

class TeamMember {
  constructor(name, description, img) {
    this.name = name;
    this.description = description;
    this.img = img;
  }
}

class ContactFormEntry {
  constructor(label, placeholder) {
    this.label = label;
    this.placeholder = placeholder;
  }
}

// Header
var lang = "es";
var titleEn = "Welcome | MLM";
var titleEs = "Bienvenidos | MLM";

var navEn = ["About", "Insurance", "Get a Quote", "Make a Payment", "Contact",
"En español"];
var navEs = ["Acerca de", "Seguros", "Conseguir Cotización", "Realizar un pago",
"Contacto", "In English"];


//Index
var welcomeEn = ["Welcome", "...We serve with joy! 😊", "En español",
"Get Quote"];
var welcomeEs = ["Bienvenidos", "...Servimos con alegría 😊", "In English",
"Conseguir Cotización"];
var welcome = welcomeEn;
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
var services = servicesEn;
var serviceOneEn = new Service("Insurance", "Car, Home, Apartments, Workers Comp., \
General Liability, Commercial Auto, etc.", "fa-shield");
var serviceTwoEn = new Service("DMV Transactions", "License Plates, Transfers, \
Vehicle Registration, Decal Renewal, Automobile, Motorcycle, Trailer, DNR transactions: \
Boat, Jet Ski", "fa-car");
var serviceThreeEn = new Service("Document Services", "Fax, Copy, E-Mails, \
Translations, etc.", "fa-copy");
var serviceFourEn = new Service("Travel Tickets", "Air, Sea and Land",
"fa-suitcase-rolling");
var serviceFiveEn = new Service("Public Notary", "Marriage Officiant, Certified \
Translations, Limited Power of Attorney, etc",
"fa-stamp");
var serviceSixEn = new Service("Money Order", "", "fa-money-check");
var serviceSevenEn = new Service("Wire Transfers", "", "fa-envelope-open-dollar");
var serviceEightEn = new Service("Bill Payments", "", "fa-file-invoice-dollar");
var serviceNineEn = new Service("Cash Checks", "", "fa-money-check-edit-alt");
var serviceTenEn = new Service("Shipping to Central & South America", "",
"fa-box-open");
var serviceElevenEn = new Service("Buy, Activate, or Recharge Cell Phone", "",
"fa-mobile");
var allServicesEn = [serviceOneEn, serviceTwoEn, serviceThreeEn, serviceFourEn,
  serviceFiveEn, serviceSixEn, serviceEightEn, serviceNineEn, serviceTenEn,
  serviceElevenEn];
var serviceOneEs = new Service("Seguros", "Auto, Casa, Apartamentos, Workers \
Comp., General Liability, Auto Comercial, etc.", "fa-shield");
var serviceTwoEs = new Service("Transacciones del DMV", "Placas, Transferencias, \
Registro de Auto, Renovación de Sticker, Autos, Motos, Tráiler, Transacciones del \
DNR: Lancha, Jet Ski, etc",
"fa-car");
var serviceThreeEs = new Service("Servicios de Documentos", "Fax, Copiar, Correo \
Electrónico, Traducciones, etc.", "fa-copy");
var serviceFourEs = new Service("Boletos de Viaje", "Aire, Mar y Tierra",
"fa-suitcase-rolling");
var serviceFiveEs = new Service("Notario Público", "Oficiante de Matrimonios, \
Traducciones, Poder especial, etc.",
"fa-stamp");
var serviceSixEs = new Service("Money Order", "", "fa-money-check");
var serviceSevenEs = new Service("Envíos de dinero", "", "fa-envelope-open-dollar");
var serviceEightEs = new Service("Pagos de Biles", "Estatales, Nacionales e \
Internacionales", "fa-file-invoice-dollar");
var serviceNineEs = new Service("Cheques en Efectivo", "", "fa-money-check-edit-alt");
var serviceTenEs = new Service("Paqueteria, Sobres a Centro y Sur America", "",
"fa-box-open");
var serviceElevenEs = new Service("Venta, Activación y Recarga de Celulares", "",
"fa-mobile");
var allServicesEs = [serviceOneEs, serviceTwoEs, serviceThreeEs, serviceFourEs,
  serviceFiveEs, serviceSixEs, serviceEightEs, serviceNineEs, serviceTenEs,
  serviceElevenEs];
var allServices = allServicesEn;

// OUR TEAM
var ourTeamEn = "Our Team";
var ourTeamEs = "Nuestro Equipo";
var ourTeam = ourTeamEn;

var teamMemberOneEn = new TeamMember("Victor and Yaneth", "Victor and Yaneth had \
been living in Greer for several years and saw the need for the Hispanic \
community to have a place where the same language was spoken to them and where \
their needs were fully met. Motivated by this great need, on November 27, Mundo \
Latino Multiservicios opened its doors to that beautiful and brave Hispanic \
community and to anyone who needed our services.", "images/team-img-test.png");
var teamMemberTwoEn = new TeamMember("Nohemí Riaño", "Nohemí is a young and \
charismatic woman, originally from Mexico, with more than five years of \
experience and knowledge of our products. This makes her have an excellent \
attention to our clients and an agile development in her service.",
"images/team-img-test.png");
var teamMemberThreeEn = new TeamMember("Andres Felipe Gonzalez", "A young \
Colombian, who has accompanied us on this walk for more than four years. Andres \
has a great knowledge, performance and development in systems, and can be trusted \
to respond with great mastery and speed in the service of our excellent products.",
"images/team-img-test.png");
var teamMemberFourEn = new TeamMember("Norma Cinto", "A tender and simple \
Guatemalan woman with more than three years she has delivered an excellent \
service, of providing ours in a simple, honest and loving way.",
"images/team-img-test.png");
var teamMemberFiveEn = new TeamMember("Yuridia Hernandez", "Yuri as affectionate \
as can be, offers us her excellent service from Mexico. She accompanied us in \
person for more than four years and now offers us her great service virtually. \
Yuri is agile, attentive and with a great commitment not only to our clients, \
but also to Mundo Latino Multiservicios.", "images/team-img-test.png");
var teamMemberOneEs = new TeamMember("Victor y Yaneth", "Victor y Yaneth, \
llevaban varios años viviendo en Greer y veían la necesidad de que tenia la \
comunidad hispana de tener un lugar donde, se les hablara el mismo idioma y \
donde sus necesidades fueran cubiertas en su totalidad. Motivados por esa gran \
necesidad, que el día 27 de noviembre, Mundo Latino Multiservicios abrió sus \
puertas a esa hermosa y valiente comunidad Hispana y a todo aquel, que necesitara \
de nuestros servicios.", "images/team-img-test.png");
var teamMemberTwoEs = new TeamMember("Nohemí Riaño", "Nohemí es una joven y \
carismática mujer, oriunda de México, con mas de cinco años de experiencia y \
conocimiento de nuestros productos. Esto hace que tenga una excelente atención a \
nuestro cliente y un ágil desenvolvimiento en sus servicio.",
"images/team-img-test.png");
var teamMemberThreeEs = new TeamMember("Andres Felipe Gonzalez", "Joven \
Colombiano, que nos acompaña en este caminar por mas de cuatro años. Andres \
tiene un gran conocimiento, desempeño y desenvolvimiento en sistemas, punto a \
favor, para agilizar y responder con gran maestría en el servicio de nuestros \
excelentes productos.", "images/team-img-test.png");
var teamMemberFourEs = new TeamMember("Norma Cinto", "Una tierna y sencilla mujer \
Guatemalteca con mas de tres años acompañados a entregar su excelente servicio, \
a nuestros de una manera simple, honesta y amorosa.", "images/team-img-test.png");
var teamMemberFiveEs = new TeamMember("Yuridia Hernandez", "Yuri como \
cariñosamente, le dimos nosotros y nuestros clientes, nos ofrece su excelente \
servicio desde México. Nos acompaño presencialmente por mas de cuatro años y \
ahora nos ofrece su gran servicio de manera virtual. Yuri es ágil atenta y con \
un gran compromiso no solo con nuestros clientes , sino con Mundo Latino \
Multiservicios.", "images/team-img-test.png");
var teamMembersEn = [teamMemberOneEn, teamMemberTwoEn, teamMemberThreeEn,
  teamMemberFourEn, teamMemberFiveEn];
var teamMembersEs = [teamMemberOneEs, teamMemberTwoEs, teamMemberThreeEs,
  teamMemberFourEs, teamMemberFiveEs];
var teamMembers = teamMembersEn;

// CONTACT
var contactUsEn = ["Have a Question?", "Send Message"];
var contactUsEs = ["Preguntas?", "Enviar Mensaje"];
var fullNameEn = new ContactFormEntry("Full Name", "Your Full Name");
var emailEn = new ContactFormEntry("Email", "youremail@address.com");
var phoneEn = new ContactFormEntry("Phone Number", "(123) 456 - 7890");
var messageEn = new ContactFormEntry("Message", "Write your message here...");

var fullNameEs = new ContactFormEntry("Nombre Completo", "Su nombre completo");
var emailEs = new ContactFormEntry("Correo Electrónico", "SuCorreo@Electronico.com");
var phoneEs = new ContactFormEntry("Número de teléfono", "(123) 456 - 7890");
var messageEs = new ContactFormEntry("Mensaje", "Ingrese su mensaje aquí...");

var successEn = "Your message was sent successfully!"
var successEs = "¡Su mensaje fue enviado exitosamente!"

var errorEn = "There was an error. Please try again later."
var errorEs = "Hubo un error. Por favor, inténtelo de nuevo más tarde."

var successMessage = successEn
var errorMessage = errorEn

var contactUs = contactUsEn;
var fullName = fullNameEn;
var email = emailEn;
var phone = phoneEn
var message = messageEn;

// FOOTER
var footerEn = ["Contact Us", "Mon-Sat", "Sun"];
var footerEs = ["Contáctanos", "Lun-Sáb", "Dom"];

if (lang=="en") {
  var title = titleEn;
  var nav = navEn;
  var footer = footerEn;
} else {
  var title = titleEs;
  var nav = navEs;
  var footer = footerEs;
}


app.get("/", function(req, res) {

  if (lang == "en") {
    welcome = welcomeEn;
    about = aboutEn;
    services = servicesEn;
    allServices = allServicesEn;
  } else {
    welcome = welcomeEs;
    about = aboutEs;
    services = servicesEs;
    allServices = allServicesEs;
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
  if (lang=="en") {
    ourTeam = ourTeamEn;
    teamMembers = teamMembersEn;
  } else {
    ourTeam = ourTeamEs;
    teamMembers = teamMembersEs;
  }
  res.render('about', {
    lang: lang,
    title: title,
    nav: nav,
    ourTeam: ourTeam,
    teamMembers: teamMembers,
    footer: footer});
});

app.get("/make-payment", function(req, res) {
  const insurancePath = path.join(__dirname, 'public/images/insurance');
  insuranceSrc = []
  // console.log(insuranceSrc)
  fs.readdir(insurancePath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      }
      files.forEach(function (file) {
        insuranceSrc.push("images/insurance/" + file)
      });
      res.render('make-payment', {
        lang: lang,
        title: title,
        nav: nav,
        insurances: insuranceSrc,
        footer: footer});
    });
  });


app.get("/contact", function(req, res) {
  if (lang=="en") {
    contactUs = contactUsEn;
    fullName = fullNameEn;
    email = emailEn;
    phone = phoneEn
    message = messageEn;
  } else {
    contactUs = contactUsEs;
    fullName = fullNameEs;
    email = emailEs;
    phone = phoneEs;
    message = messageEs;
  }
  res.render('contact', {
    lang: lang,
    title: title,
    nav: nav,
    contactUs: contactUs,
    fullName: fullName,
    email: email,
    phone: phone,
    message: message,
    footer: footer});
});

app.post("/contact", function(req, res) {

  var transporter = nodemailer.createTransport({
    host: 'mail.mundolm.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS
    }
  });

  var nameFromForm = req.body.fullName;
  var emailFromForm = req.body.emailAddress;
  var numberFromForm = req.body.phoneNumber;
  var messageFromForm = req.body.message;

  var mailOptions = {
    from: emailFromForm,
    to: 'questions@mundolm.com',
    subject: 'PREGUNTA DE CLIENTE DESDE MUNDOLM.COM',
    text: "PREGUNTA DE: " + nameFromForm + "\n\n" + messageFromForm + "\n\nTel: "
    + numberFromForm + "\nCorreo Electronico: " + emailFromForm
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {

      res.redirect("/failure")
    } else {
      res.redirect("/success")
  }
});
});

app.get('/success', function(req, res) {
  if (lang=="en") {
    successMessage = successEn
  } else {
    successMessage = successEs
  }
  res.render('success', {
    lang: lang,
    title: title,
    nav: nav,
    alert: successMessage,
    contactUs: contactUs,
    fullName: fullName,
    email: email,
    message: message,
    footer: footer
  });
});

app.get('/failure', function(req, res) {
  if (lang=="en") {
    errorMessage = errorEn
  } else {
    errorMessage = errorEs
  }
  res.render('failure', {
    lang: lang,
    title: title,
    nav: nav,
    alert: errorMessage,
    contactUs: contactUs,
    fullName: fullName,
    email: email,
    message: message,
    footer: footer
  });
});

app.get("/es", function(req, res) {
  if (lang=="en") {
    lang="es";
    title=titleEs;
    nav=navEs;
    footer=footerEs;
  } else {
    lang="en";
    title=titleEn;
    nav=navEn;
    footer=footerEn;
  }

  res.redirect("/");
});


app.listen(3000, function() {
  console.log("Server running on port 3000");
});
