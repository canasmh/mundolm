// SET LANGUAGE
if (localStorage.getItem("lang")) {

} else {
  localStorage.setItem("lang", "en");
}

// Header
var titleEn = "Welcome | MLM";
var titleEs = "Bienvenidos | MLM";
var title;

var navEn = ["About", "Insurance", "Contact", "En español"];
var navEs = ["Acerca de", "Seguros", "Contacto", "In English"];
var nav;

var dropDownEn = ["Get a Quote", "Make a Payment"];
var dropDownEs =  ["Conseguir Cotización", "Realizar un pago"];
var dropDown;


var footerEn = ["Contact Us", "Mon-Sat", "Sun"];
var footerEs = ["Contáctanos", "Lun-Sáb", "Dom"];
var footer;

var paymentHeaderEn = "Auto Insurance and Commercial Insurance";
var paymentHeaderEs = "Seguros y Seguros Comerciales";
var paymentHeader;

function changeLanguage() {
  if (localStorage.getItem("lang") == "en") {
    localStorage.setItem("lang", "es");

  } else if (localStorage.getItem("lang") == "es") {
    localStorage.setItem("lang", "en");

  } else {
    console.log("Need to catch this");
  }
  console.log(localStorage.getItem("lang"))
}

$('.lang-link').click(changeLanguage);

if (localStorage.getItem("lang") == "en") {
  document.documentElement.setAttribute("lang", "en");
  title = titleEn;
  nav = navEn;
  dropDown = dropDownEn;
  paymentHeader = paymentHeaderEn;
  footer = footerEn;
} else if (localStorage.getItem("lang") == "es") {
  document.documentElement.setAttribute("lang", "es");
  title = titleEs;
  nav = navEs;
  dropDown = dropDownEs;
  paymentHeader = paymentHeaderEs;
  footer = footerEs;
} else {
  console.log("Need to catch this");
}

document.title = title;
$('title').textContent = title;
var navLinks = $('a.nav-link');
var dropDownItems = $('a.dropdown-item');

for (let i=0; i < navLinks.length; i++) {
  navLinks[i].textContent = nav[i];
}

for (let i=0; i < dropDownItems.length; i++) {
  dropDownItems[i].textContent = dropDown[i];
}

$('div.make-payment-page h2')[0].textContent = paymentHeader;

$('div.contact-section h2')[0].textContent = footer[0];
$('p.schedule span')[0].textContent = footer[1];
$('p.schedule span')[1].textContent = footer[2];

$('p.schedule span')[2].textContent = footer[1];
$('p.schedule span')[3].textContent = footer[2];
