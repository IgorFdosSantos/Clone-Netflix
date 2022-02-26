$('.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:10,
    nav:false,
    animateOut: 'slideOutDown',
    animateIn:'flipInX',
    stagePadding: 30,
    smartSpeed: 450,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

$('.teste').owlCarousel({
    autoWidth: true,
    center: true, 
    nav: false,
})
