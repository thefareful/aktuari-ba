$(document).ready(function(){
  $('.novosti-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    /*autoplay: true,
    autoplaySpeed: 7000,*/
    dots: true,
    arrows: false
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    speed: 1000
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    speed: 1000
  });
});