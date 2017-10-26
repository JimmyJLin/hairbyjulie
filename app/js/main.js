$( document ).ready(() =>{
  console.log('script file loaded');
  // JQUERY GOES HERE!!

  $(".button-collapse").sideNav();

  $('.single-item').slick({
    autoplay: true,
    dots: true,
    swipeToSlide: true,
    accessibility: true,
    arrows: false
  });
})
