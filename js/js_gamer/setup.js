$('.owlCarousel').owlCarousel({
    loop: false,
    margin:10,
    nav:false,
    autoWidth: true,
    URLhashListener:true,
    startPosition: 'URLHash',
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
