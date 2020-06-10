$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= $("header").height()) {
        $(".sticky-logo").addClass("downkHeader");


    } else {
        $(".sticky-logo").removeClass("downkHeader");

    }
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();


    if (scroll > $("header").height()) {
        $(".sticky-logo").removeClass("fadeout").addClass("open");
    } else {
        $(".sticky-logo").addClass("fadeout");
    }
});

$(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top > $("header").height()) {
        $("#up-button").addClass("show-up")
    } else {
        $("#up-button").removeClass("show-up")
    }
});



$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= $("header").height()) {
        $(".none-logo").addClass("show-logo");
    } else {
        $(".none-logo").removeClass("show-logo");
    }
});








$('.slider-first').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000000000,
    dots: true,
    responsive: [
        {
            breakpoint: 992, // tablet breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.sec-slider-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
        {
            breakpoint: 992, // tablet breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});
$('.third-slider-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
        {
            breakpoint: 992, // tablet breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.main-video').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.video-box',
   
});
$('.video-box').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.main-video',
    dots: false,
    arrows: true,
    // centerMode: true,
    focusOnSelect: true,
    responsive: [
      
        {
            breakpoint: 480, // mobile breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});
document.getElementById("burger-button").addEventListener("click", function () {
    document.getElementById("burger").classList.toggle("active");



});