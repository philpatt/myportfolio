$(document).ready(function() {

  $(window).scroll(function() {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 400) {
      $('.navbar').addClass('navbar-fixed-top fade-in');
      $('.navbar').removeClass('hidden fade-out');

    }
    if ($(window).scrollTop() < 401) {
      $('.navbar').removeClass('fade-in');
      $('.navbar').addClass('fade-out');
    }
  });

  $(".nav-link").click(function() {
      $('html,body').animate({
          scrollTop: $("#home #about #work #contact").offset().top},
          'slow');
  });
});

