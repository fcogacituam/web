$(document).ready(function () {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        if(elemTop <= docViewBottom){
            return true;
        }
        // return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function animar(elem,efecto){
        $(elem).addClass("opacity1")
        if ($(elem).hasClass('up')) {
            $(elem).addClass(efecto+'InUp');
        }
        if ($(elem).hasClass('left')) {
            $(elem).addClass(efecto+'InLeft');
        }
        if ($(elem).hasClass('right')) {
            $(elem).addClass(efecto+'InRight');
        }
        if ($(elem).hasClass('down')) {
            $(elem).addClass(efecto+'InDown');
        }
    }

    // If element is scrolled into view, fade it in
    $(window).scroll(function () {
        $('.animar').each(function () {
            if (isScrolledIntoView(this) === true) {
                if ($(this).hasClass('fade')) {
                   animar($(this),'fade')
                }
                if ($(this).hasClass('bounce')) {
                    animar($(this), 'bounce')
                }
                if ($(this).hasClass('slide')) {
                    animar($(this), 'slide')
                }
            }
        });
    });
});