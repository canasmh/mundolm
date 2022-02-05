// Check to see if on homepage
let onHomePage = true;

try {
  var textWrapper = document.querySelector('.motto');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='motto'>$&</span>");
}
catch (TypeError) {
  onHomePage = false;
}

if (onHomePage) {
  $(document).ready(function() {
    $('div.welcome-section').animate({left: '0', opacity: 1}, 800)

  });

  setTimeout(function() {
    $('.welcome-banner').animate({opacity: 1, top: '0'}, 700);
    $('.scroll-down-div').animate({opacity: 1, top: '0'}, 700)
  }, 900);

  setTimeout(function() {
    anime.timeline({loop: false})
      .add({
        targets: '.motto',
        scale: [6,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 800,
        delay: (el, i) => 65*i
      });
  }, 1900);
}



$('.team-btn-div').click(function() {
  let teamPage = document.getElementsByClassName("team-page")[0];
  teamPage.scrollIntoView({behavior: "smooth"});
});

$('.scroll-down-arrow').click(function() {
  let aboutUs = document.getElementsByClassName("about-section")[0];
  aboutUs.scrollIntoView({behavior: "smooth"});

});
