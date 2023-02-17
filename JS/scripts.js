jQuery(document).ready(function () {

    jQuery(".home").click(function () {
        jQuery(".s-about").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-service").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-home").animate({ left: '46%' }, 10).css({ 'width': '45.5%', "opacity": '1', 'transition': '.5s' });
        jQuery(".s-portfolio").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-testimonial").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-gallery").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
    });
    jQuery(".about").click(function () {
        jQuery(".s-about").animate({ left: '46%' }, 10).css({ 'width': '45.5%', "opacity": '1', 'transition': '.5s' });
        jQuery(".s-home").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-service").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-portfolio").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-gallery").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-testimonial").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
    });

    jQuery(".service").click(function () {
        jQuery(".s-service").animate({ left: '46%' }, 10).css({ 'width': '45.5%', "opacity": '1', 'transition': '.5s' });
        jQuery(".s-about").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-home").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-portfolio").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-testimonial").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-gallery").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
    });
    jQuery(".portfolio").click(function () {
        jQuery(".s-portfolio").animate({ left: '46%' }, 10).css({ 'width': '45.5%', "opacity": '1', 'transition': '.5s' });
        jQuery(".s-about").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-service").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-gallery").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-home").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-testimonial").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
    });
    jQuery(".testimonial").click(function () {
        jQuery(".s-testimonial").animate({ left: '46%' }, 10).css({ 'width': '45.5%', "opacity": '1', 'transition': '.5s' });
        jQuery(".s-portfolio").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-about").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-service").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-gallery").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-home").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });

    });
    jQuery(".gallery").click(function () {
        jQuery(".s-gallery").animate({ left: '46%' }, 10).css({ 'width': '45.5%', "opacity": '1', 'transition': '.5s' });
        jQuery(".s-about").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-home").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-service").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-portfolio").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
        jQuery(".s-testimonial").animate({ right: '1%' }, 10).css({ 'width': '1%', "opacity": '0', 'transition': '.5s' });
    });

    var width = jQuery(this).width();
    if (width <= 760) {
        jQuery(".info").hide();
        jQuery(".m-menu").show();
        jQuery(".row").css({ 'flex-direction': 'column' });
        jQuery(".section").css({ 'position': 'inherit' });
        jQuery(".s-home").css({ 'opacity': '1', 'width': '90%' });
        jQuery(".s-about").css({ 'opacity': '1', 'width': '90%' });
        jQuery(".s-gallery").css({ 'opacity': '1', 'width': '90%' });
        jQuery(".s-service").css({ 'opacity': '1', 'width': '90%' });
        jQuery(".s-portfolio").css({ 'opacity': '1', 'width': '90%' });
        jQuery(".intro").css({ 'width': '95%' });
        jQuery(".content").css({ 'width': '95%' });
    }
    else {
        jQuery(".m-menu").hide();
        jQuery(".info").show();
    }

});