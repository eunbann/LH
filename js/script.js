$(document).ready(function(){
    var swiper1 = new Swiper(".firstSwiper", {
        effect: "fade",
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },

                
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
      });

    var swiper2 = new Swiper('.secondSwiper', {
        loop: true,

        breakpoints:{
            1600:{
                slidesPerView: 5, 
                spaceBetween: 150,
            },
            1400:{
                slidesPerView: 4, 
                spaceBetween: 60,
            },
            1200:{
                slidesPerView: 3, 
                spaceBetween: 0,
            },
            800:{
                slidesPerView: 2,                 
            },
            // 800:{
            //     slidesPerView: 1, 
            //     spaceBetween: 100,
            // }
        },

    })

    sec7_layout();
    function sec7_layout(){
        let ww = $(window).width();
        if(ww >= 1400){
            var swiper3 = new Swiper('.thirdSwiper', {
                slidesPerView: 1, 
                spaceBetween: 0,        
        
                loop: true,
                effect: "fade",
                        loop: true,
                        autoplay: {
                            delay: 7000,
                            disableOnInteraction: false,
                        },
                pagination: {
                    el: ".swiper-pagination",
                    },
        
            });
        }else{
    
        }
    };
    $(window).resize(function(){
        ww = $(window).width();
        sec7_layout();
    });

    $('.menu1').mouseenter(function(){
        const result = $(this).attr('data-alt');
        $(`#${result}`).toggleClass('active');
    });
    $('.menu2,.menu3').mouseenter(function(){
        $('.banner .submenu-box').removeClass('active');
    });
    $('.banner .submenu-box').mouseleave(function(){
        $(this).removeClass('active');
    })

    $('.hambtn').click(function(){
        $(this).toggleClass('active');
        $('.hambtn-submenu-box').toggleClass('active');
    });
});