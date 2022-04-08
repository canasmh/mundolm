class Service {
  constructor(name, description, icon) {
    this.name = name;
    this.description = description;
    this.icon = icon;
  }
}

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

var welcomeEn = ["Welcome", "...We serve with joy! 😊", "En español", "Get Quote"];
var welcomeEs = ["Bienvenidos", "...Servimos con alegría 😊", "In English", "Conseguir Cotización"];
var welcome;

var aboutEn = ["About Us", "Mundo Latino Multiservices, MLM, has as its mission, to take advantage of the wonderful opportunity to love through SERVICE. At MLM, we serve with <b>joy, enthusiasm and efficiency,</b> on all the services that we offer. We offer our clients the confidence of being able to count on us, because our <i>SERVICE</i> is unconditional."];
var aboutEs = ["Acerca de Nosotros", "Mundo Latino Multiservicios, MLM, tiene como misión, aprovechar la maravillosa oportunidad de amar, a través del SERVICIO. En MLM, estamos dispuestos a ejecutar con <b>alegría, entusiasmo y eficiencia,</b> todos los servicios que en el ofrecemos. Brindamos a nuestros clientes, la confianza de poder contar con nosotros, pues nuestro <i>SERVICIO </i> es incondicional."];
var about;

var servicesEn = ["Our Services", "We cover your needs of:", "...and many more!"];
var servicesEs = ["Nuestros Servicios", "Cubrimos sus necesidades de:", "... y muchos mas!"];
var services;

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

var serviceOneEs = new Service("Seguros", "Auto, Casa, Apartamentos, Workers \
Comp., General Liability, Auto Comercial, etc.", "fa-shield");
var serviceTwoEs = new Service("Transacciones del DMV", "Placas, Transferencias, \
Registro de Auto, Renovación de Sticker, Autos, Motos, Tráiler, Transacciones del \
DNR: Lancha, Jet Ski, etc",
"fa-car");
var serviceThreeEs = new Service("Servicios de Documentos", "Fax, Fotocopias, Correo \
Electrónico, Traducciones, etc.", "fa-copy");
var serviceFourEs = new Service("Boletos de Viaje", "Aire, Mar y Tierra",
"fa-suitcase-rolling");
var serviceFiveEs = new Service("Notario Público", "Oficiante de Matrimonios, \
Traducciones, Poderes, etc.",
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

var allServicesEn = [serviceOneEn, serviceTwoEn, serviceThreeEn, serviceFourEn,
  serviceFiveEn, serviceSixEn, serviceEightEn, serviceNineEn, serviceTenEn,
  serviceElevenEn];
var allServicesEs = [serviceOneEs, serviceTwoEs, serviceThreeEs, serviceFourEs,
  serviceFiveEs, serviceSixEs, serviceEightEs, serviceNineEs, serviceTenEs,
  serviceElevenEs];
var allServices;

// FOOTER
var footerEn = ["Contact Us", "Mon-Sat", "Sun"];
var footerEs = ["Contáctanos", "Lun-Sáb", "Dom"];
var footer;


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
$('.es-btn').click(changeLanguage);



if (localStorage.getItem("lang") == "en") {
  document.documentElement.setAttribute("lang", "en");
  title = titleEn;
  nav = navEn;
  dropDown = dropDownEn;
  welcome = welcomeEn;
  about = aboutEn;
  services = servicesEn;
  allServices = allServicesEn;
  footer = footerEn;
} else if (localStorage.getItem("lang") == "es") {
  document.documentElement.setAttribute("lang", "es");
  title = titleEs;
  nav = navEs;
  dropDown = dropDownEs;
  welcome = welcomeEs;
  about = aboutEs;
  services = servicesEs;
  allServices = allServicesEs;
  footer = footerEs;
} else {
  console.log("Need to catch this")
}

document.title = title;
$('title').textContent = title
var navLinks = $('a.nav-link')
var dropDownItems = $('a.dropdown-item')

for (let i=0; i < navLinks.length; i++) {
  console.log(navLinks[i].textContent)
  navLinks[i].textContent = nav[i]
}

for (let i=0; i < dropDownItems.length; i++) {
  console.log(dropDownItems[i].textContent)
  dropDownItems[i].textContent = dropDown[i]
}

$('h2.welcome')[0].textContent = welcome[0];
$('p.motto')[0].textContent = welcome[1];
$('a.es-btn')[0].textContent = welcome[2];
$('a.quote-btn')[0].textContent = welcome[3];

$('div.about-section h2')[0].textContent = about[0]
$('div.about-section p')[0].innerHTML = about[1]

$('div.service-section h2')[0].textContent = services[0];
$('div.service-section p')[0].textContent = services[1];
// $('p.many-more')[0].textContent = services[2];

var serviceRow = $('div.service-row')[0]
var serviceInnerHTML = ''
for (i=0; i < allServices.length; i++) {
  serviceInnerHTML += '<div class="col-lg-4 col-md-4 col-sm-12 service-col"><i class="service-icon fas ';
  serviceInnerHTML += allServices[i].icon;
  serviceInnerHTML += '"></i><h4>';
  serviceInnerHTML += allServices[i].name;
  serviceInnerHTML+= '</h4><h6>';
  serviceInnerHTML += allServices[i].description;
  serviceInnerHTML += '</h6></div>';
}
serviceInnerHTML += '<p class="many-more">' + services[2] + '</p>'
console.log(serviceInnerHTML);
serviceRow.innerHTML = serviceInnerHTML

$('div.contact-section h2')[0].textContent = footer[0]
$('p.schedule span')[0].textContent = footer[1]
$('p.schedule span')[1].textContent = footer[2]

$('p.schedule span')[2].textContent = footer[1]
$('p.schedule span')[3].textContent = footer[2]
