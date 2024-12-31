class TeamMember {
  constructor(name, description, img) {
    this.name = name;
    this.description = description;
    this.img = img;
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

var ourTeamEn = "Our Team";
var ourTeamEs = "Nuestro Equipo";
var ourTeam;

var vicAndYanEn = new TeamMember("Victor and Yaneth", "Victor and Yaneth had \
been living in Greer for several years and saw the need for the Hispanic \
community to have a place where the same language was spoken to them and where \
their needs were fully met. Motivated by this great need, on November 27, Mundo \
Latino Multiservicios opened its doors to that beautiful and brave Hispanic \
community and to anyone who needed our services.", "images/v-y.png");
var nohemiEn = new TeamMember("Nohemí Riaño", "Nohemí is a young and \
charismatic woman, originally from Mexico, with more than five years of \
experience and knowledge of our products. This makes her have an excellent \
attention to our clients and an agile development in her service.",
"images/nohemi.png");
var normaEn = new TeamMember("Norma Cinto", "A tender and simple \
Guatemalan woman with more than three years she has delivered an excellent \
service, of providing ours in a simple, honest and loving way.",
"images/norma.png");
var yuriEn = new TeamMember("Yuridia Hernandez", "Yuri as affectionate \
as can be, offers us her excellent service from Mexico. She accompanied us in \
person for more than four years and now offers us her great service virtually. \
Yuri is agile, attentive and with a great commitment not only to our clients, \
but also to Mundo Latino Multiservicios.", "images/team-img-test.png");

var vicAndYanEs = new TeamMember("Victor y Yaneth", "Victor y Yaneth, \
llevaban varios años viviendo en Greer y veían la necesidad que tenia la \
comunidad hispana de tener un lugar donde, se les hablara el mismo idioma y \
donde sus necesidades fueran cubiertas en su totalidad. Motivados por esa gran \
necesidad, el día 27 de noviembre, Mundo Latino Multiservicios abrió sus \
puertas a esa hermosa y valiente comunidad Hispana y a todo aquel, que necesitara \
de nuestros servicios.", "images/v-y.png");
var nohemiEs = new TeamMember("Nohemí Riaño", "Nohemí es una joven y \
carismática mujer, oriunda de México, con mas de cinco años de experiencia y \
conocimiento de nuestros productos. Esto hace que tenga una excelente atención a \
nuestros clientes y un ágil desenvolvimiento en sus servicio.",
"images/nohemi.png");
var normaEs = new TeamMember("Norma Cinto", "Una tierna y sencilla mujer \
Guatemalteca con mas de tres años acompañados a entregar su excelente servicio, \
a nuestros clientes de una manera simple, honesta y amorosa.", "images/norma.png");
var yuriEs = new TeamMember("Yuridia Hernandez", "Yuri como \
cariñosamente, le decimos nosotros y nuestros clientes, nos ofrece su excelente \
servicio desde nuestro Call Center en México. Nos acompaño presencialmente por mas de cuatro años y \
ahora nos ofrece su gran servicio de manera virtual. Yuri es ágil atenta y con \
un gran compromiso no solo con nuestros clientes , sino con Mundo Latino \
Multiservicios.", "images/team-img-test.png");

var teamMembersEn = [vicAndYanEn, nohemiEn,
  normaEn, yuriEn];
var teamMembersEs = [vicAndYanEs, nohemiEs,
  normaEs, yuriEs];
var teamMembers;

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

if (localStorage.getItem("lang") == "en") {
  document.documentElement.setAttribute("lang", "en");
  title = titleEn;
  nav = navEn;
  dropDown = dropDownEn;
  ourTeam = ourTeamEn;
  teamMembers = teamMembersEn;
  footer = footerEn;
} else if (localStorage.getItem("lang") == "es") {
  document.documentElement.setAttribute("lang", "es");
  title = titleEs;
  nav = navEs;
  dropDown = dropDownEs;
  ourTeam = ourTeamEs;
  teamMembers = teamMembersEs;
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

$('a.btn-team')[0].textContent = ourTeam;
$('div.team-page h2')[0].textContent = ourTeam;

for (var i=0; i < teamMembers.length; i++) {
  $('div.team-member h4')[i].textContent = teamMembers[i].name;
  $('div.team-member p')[i].textContent = teamMembers[i].description;
}

$('div.contact-section h2')[0].textContent = footer[0];
$('p.schedule span')[0].textContent = footer[1];
$('p.schedule span')[1].textContent = footer[2];

$('p.schedule span')[2].textContent = footer[1];
$('p.schedule span')[3].textContent = footer[2];
