// ScrollTop
var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Cloud animation
$('#cloud').hover(
  function () {
    $(this).toggleClass('fa-cloud');
    $(this).toggleClass('fa-cloud-sun-rain');
  });

// Shopping Cart Animation
$('#shop').hover(function () {
  // $(this).animate({ right: "+=10" }, 500);
  $(this).toggle("bounce", { times: 1 }, "slow");
});

//Binoclouars Animation 
// $('document').onscroll(function () {
//   $('.fa-binoculars').slideUp();
// })

// Video Modal
$(function () {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
});


// Slick Slider
$('.slider').slick({
  infinite: true,
  slideToShow:1,
  slideToScroll: 1,
  // autoplay:true,
  // autoplaySpeed: 4000
});

