require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

class ContactFormEntry {
  constructor(label, placeholder) {
    this.label = label;
    this.placeholder = placeholder;
  }
}

// Header
var lang = "en";
var titleEn = "Welcome | MLM";
var titleEs = "Bienvenidos | MLM";

var navEn = ["About", "Insurance", "Get a Quote", "Make a Payment", "Contact",
"En español"];
var navEs = ["Acerca de", "Seguros", "Conseguir Cotización", "Realizar un pago",
"Contacto", "In English"];

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


app.get("/contact", function(req, res) {
  currentPage = "contact";
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

  res.redirect("/")

});


app.listen(PORT, function() {
  console.log("Server running on port " + PORT);
});
