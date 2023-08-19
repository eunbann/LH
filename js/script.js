$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
      },
      breakpoints:{
        1300:{
          slidesPerView: 3,
          spaceBetween: 30,
        },
        800:{
          slidesPerView: 2,
          spaceBetween: 20,
        }
      }
    });

  $('header .main-header .main-box .menu1').mouseenter(function(){
    $('.sub_menu').addClass('active');
    $(this).addClass('active');
  });
  $('.sub_menu').mouseleave(function(){
    $(this).removeClass('active');
    $('header .main-header .main-box .menu1').removeClass('active');
  });

  $('.sec-3 .sec3-body .sec3-main .sec3-menu').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    const result = $(this).attr('data-alt');

    $('.sec-3 .sec3-body .sec3-box').removeClass('active');
    $(`#${result}`).addClass('active');
  });

  $('header .main-header .ham_btn').click(function(){
    $(this).toggleClass('active');
    $('.sub_menu_m').toggleClass('active');
  });
});