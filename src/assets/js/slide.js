$(document).ready(function () {
            $(".slider-destacados").slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                prevArrow: '<h3 class="prevArrow" style="cursor:pointer; color:rgb(0,117,201);"> <i class="fas fa-chevron-circle-left"></i></h3>',
                nextArrow: '<h3 class="nextArrow" style="cursor:pointer; color:rgb(0,117,201);"> <i class="fas fa-chevron-circle-right"></i></h3>',
                responsive: [
                    {
                        breakpoint: 984,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                ],
            })


});

