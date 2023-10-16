$('.play_animation').click(function animation(){
    $('.animation_logo')
    .animate({
        marginRight: "100%"
    }, 1300)
    .animate({
        marginRight: "-100%"
    }, 1300, animation)
});



$('.text').hover(function (){
    $(this)
    .stop()
    .animate({
        fontSize: "28pt"
    }, 1000);
}, function (){
    $(this)
    .stop()
    .animate({
        fontSize: "14pt"
    }, 1000)
});