
$(document).ready(function() {
  $('div.welcome-section').animate({left: '0', opacity: 1}, 750)

});

setTimeout(function() {
  $('.welcome-banner').animate({opacity: 1, top: '0'}, 750);
}, 650);

var textWrapper = document.querySelector('.motto');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='motto'>$&</span>");


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
}, 1500)

// setTimeout(function() {
//   $('nav').animate({opacity: 1}, 1200)
// }, 2500);
