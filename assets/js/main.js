(function($) {

    "use strict";

    jQuery('nav#dropdown').meanmenu();

    new WOW().init();

    $(".product-curosel").owlCarousel({

        autoPlay: false,

        slideSpeed: 2000,

        pagination: false,

        navigation: true,

        items: 4,

        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        itemsDesktop: [1199, 6],

        itemsDesktopSmall: [980, 3],

        itemsTablet: [768, 2],

        itemsMobile: [479, 1],

    });

    $(window).scroll(function(event) {

        if ($(document).scrollTop() >= 100) {

            $('.main-menu-area').addClass('fixed-menu');

        } else {

            $('.main-menu-area').removeClass('fixed-menu');

        }

    }).trigger('scroll');

    $(".latest-blog-curosel").owlCarousel({

        autoPlay: false,

        slideSpeed: 2000,

        pagination: false,

        navigation: true,

        items: 4,

        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        itemsDesktop: [1199, 3],

        itemsDesktopSmall: [980, 2],

        itemsTablet: [768, 1],

        itemsMobile: [479, 1],

    });

    $(".brand-carousel").owlCarousel({

        autoPlay: false,

        slideSpeed: 2000,

        pagination: false,

        navigation: true,

        items: 4,

        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        itemsDesktop: [1199, 5],

        itemsDesktopSmall: [980, 4],

        itemsTablet: [768, 2],

        itemsMobile: [479, 1],

    });

    $(".related-curosel").owlCarousel({

        autoPlay: false,

        slideSpeed: 2000,

        pagination: false,

        navigation: true,

        items: 5,

        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        itemsDesktop: [1199, 3],

        itemsDesktopSmall: [980, 3],

        itemsTablet: [768, 2],

        itemsMobile: [479, 1],

    });

    $(".banner-curosel").owlCarousel({

        autoPlay: false,

        slideSpeed: 2000,

        pagination: false,

        navigation: false,

        items: 1,

        itemsDesktop: [1199, 1],

        itemsDesktopSmall: [980, 1],

        itemsTablet: [768, 1],

        itemsMobile: [479, 1],

    });

    $(".category-curosel").owlCarousel({

        autoPlay: false,

        slideSpeed: 2000,

        pagination: false,

        navigation: true,

        items: 1,

        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        itemsDesktop: [1199, 1],

        itemsDesktopSmall: [980, 1],

        itemsTablet: [768, 1],

        itemsMobile: [479, 1],

    });

    $(".blog-gallery").owlCarousel({

        autoPlay: false,

        slideSpeed: 2000,

        pagination: false,

        navigation: true,

        items: 1,

        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        itemsDesktop: [1199, 1],

        itemsDesktopSmall: [980, 1],

        itemsTablet: [768, 1],

        itemsMobile: [479, 1],

    });

    

    $('.about-counter').counterUp({

        delay: 50,

        time: 3000

    });
	
	$.scrollUp({

        scrollText: '<i class="fa fa-angle-up"></i>',

        scrollSpeed: 900,

        animation: 'fade'

    });
	
	$("#feedback-tab").click(function() {

		$("#feedback-form").toggle("slide");

	});

})(jQuery);