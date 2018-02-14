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
});



function mouseEnter(pNum,skillA,skillB,skillC,skillD) {
  console.log(pNum,skillA,skillB,skillC,skillD);
  var projImg = document.getElementById('image');
  var proj = document.getElementById('p');
  var idle = document.getElementById('idle-image');  
  console.log(skillA);
  projImg.src ="img/projects/proj"+pNum+".jpg";
  proj.style.visibility = 'visible';
}

function mouseLeave(pNum, skillA, skillB, skillC, skillD) {
  var projImg = document.getElementById('image');
  var proj = document.getElementById('p');
  var idle = document.getElementById('idle-image');
  projImg.src = "";
  proj.style.visibility = 'hidden';
  
  // projImg.src = "img/projects/proj" + pNum + ".png";

}


