$( document ).ready(function() {
    $("#quickbio").typed({
        strings: ["bold.^1000", "passionate.^1000", "creative.^1000", "a developer/designer."],
        typeSpeed: 10,
        backSpeed: 20
    });
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
    }, 2000);
    });

    $("#photo-carousel").owlCarousel({
        autoPlay: 5000,
        paginationSpeed: 2000,
        rewindSpeed: 2000,
        singleItem: true
    });
});
