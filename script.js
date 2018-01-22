$(document).ready(function() {

  $(window).scroll(function() {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 200) {
      $('.navbar').addClass('navbar-fixed-top fade-in');
      $('.navbar').removeClass('hidden fade-out');

    }
    if ($(window).scrollTop() < 701) {
      $('.navbar').removeClass('fade-in');
      $('.navbar').addClass('fade-out');
    }
  });
});