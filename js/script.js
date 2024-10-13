$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});