$(document).ready(function(){

  cardRotate();

  $(window).resize(function(){
    cardRotate();
  });

  $('.ham').on('click', (e) => {
    console.log(e);
    var x = window.scrollX,
        y = window.scrollY;
    $('.ham').toggleClass('ham-active');
    $('.left-menu').toggleClass('left-menu-active');
    $('.content').toggleClass('content-active');
    $('.ham').toggleClass('content-active');
    if ($('.content').hasClass('content-active')){
      $(window).on('scroll', () => {
        window.scrollTo(x, y);
      });
    } else {
      $(window).off('scroll');
    }
  });

  $('.owl-carousel').owlCarousel({
    center: true,
    nav: true,
    loop: true,
    margin: 25,
    responsive: {
      320: {
        items:1
      },
      560: {
        items:1
      },
      780: {
        items:2
      },
      960: {
        items:3
      },
      1100: {
        items:3
      }

    }
  });
});

function cardRotate(){
  if ($(window).width() >= 1231){
    $('.card-wrapper').addClass('c-active');

    $('.card').on('click', function(){
      $('.card-wrapper').toggleClass('c-active');
    });

    $(window).on('scroll', function(){
      if (!$('.card-wrapper').hasClass('c-active'))
        $('.card-wrapper').addClass('c-active');
    });
  }
  else {
    $('.card-wrapper').removeClass('c-active');
  }
}
