$('.customNextBtn').click(function () {
  $('#blogCarousel').carousel('next');
});
$('.customPreviousBtn').click(function () {
  $('#blogCarousel').carousel('prev');
});

$(document).ready(function () {
  (function ($) {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<img src='img/group-15.png'>",
        "<img src='img/group-8.png'>",
      ],
      navContainer: '.slide-button',
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });
 
  })(jQuery);
});


// Form
jQuery(".floatlabel input").focus(function() {
  var elementId = $(this).attr('id');
   jQuery("label[for=" + elementId + "]").addClass('floatlabel-shift');
});
jQuery(".floatlabel input").blur(function() {
   if($(this).val().length == 0) {
    var elementId = $(this).attr('id');
     jQuery("label[for=" + elementId + "]").removeClass('floatlabel-shift');
   }
});
jQuery(".floatlabel input").focus(function() {
  var elementId = $(this).attr('id');
   jQuery("label[for=" + elementId + "]").addClass('floatlabel-active');
});
jQuery(".floatlabel input").blur(function() {
  var elementId = $(this).attr('id');
   jQuery("label[for=" + elementId + "]").removeClass('floatlabel-active');
});


