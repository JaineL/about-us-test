$(function(){

    if ($(window).width() > 1100) {
        $('.js-block__doing').slick('unslick');
    }
    else {
        $('.js-block__doing').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<i class="fas fa-arrow-left"></i>',
            nextArrow: '<i class="fas fa-arrow-right"></i>',
            responsive: [
                {
                    breakpoint: 801,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});