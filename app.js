/*navbar solid scroll */
$(window).scroll(function() {
  if ($(document).scrollTop() > 1000) {
    $('nav').addClass('nav-solid');
  } else {
    $('nav').removeClass('nav-solid');
  }
  
});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

 /*color link navbar*/
 window.addEventListener('load', function (){
  chemin = window.location.pathname;
  home = '/excellenceAlpha.github.io/index.html';
  job = '/excellenceAlpha.github.io/job.html';
  don = '/excellenceAlpha.github.io/don.html';
  gouv = '/excellenceAlpha.github.io/gouv.html';
  if(chemin == home) {
    $('.home-link').addClass('color');
  }
  if(chemin == gouv) {
      $('.gouv-link').addClass('color');
  }
  if(chemin == job) {
    $('.job-link').addClass('color');
  }
  if(chemin == don) {
    $('.don-link').addClass('color');
  }
})
console.log(chemin);