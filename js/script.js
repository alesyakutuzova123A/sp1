$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger, .navbar__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:1,
        autoplay: false,
        speed:1000,
        autoplaySpeed:1000,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});
