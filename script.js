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


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          console.log('scrollin');
        });
      }
    }
  });
});


