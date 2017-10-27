$( document ).ready(() =>{
  console.log('script file loaded');
  // JQUERY GOES HERE!!

  $(".button-collapse").sideNav();

  $('#main_slider').slick({
    autoplay: true,
    dots: true,
    swipeToSlide: true,
    accessibility: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false
  });

  $('#v_slider').slick({
    autoplay: true,
    dots: true,
    swipeToSlide: true,
    accessibility: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false
  });

})
