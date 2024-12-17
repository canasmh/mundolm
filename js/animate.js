try {
  var textWrapper = document.querySelector('.motto');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='motto'>$&</span>");
}
catch (TypeError) {
  onHomePage = false;
}

setTimeout(function() {
  $('.scroll-down-div').animate({opacity: 1, top: '0'}, 1100)
}, 1000);

$('.team-btn-div').click(function() {
  let teamPage = document.getElementsByClassName("team-page")[0];
  teamPage.scrollIntoView({behavior: "smooth"});
});

$('.scroll-down-arrow').click(function() {
  let aboutUs = document.getElementsByClassName("about-section")[0];
  aboutUs.scrollIntoView({behavior: "smooth"});
});

function showModal() {

  const myModal = new bootstrap.Modal('#myModal', {
    keyboard: false,
    show: true
  })

  modalToggle = document.getElementById('toggleMyModal'); 
  myModal.show(modalToggle)
}

setTimeout(showModal, 3500);


$('.insurance-logo').hover(function () {
  $( this ).animate({height: '13.5rem', width: '13.5rem', margin: '4.5rem 2.5rem'}, 300);
}, function() {
  $( this ).animate({height: '12.5rem', width: '12.5rem', margin: '5rem 2.5rem'}, 300);
});
