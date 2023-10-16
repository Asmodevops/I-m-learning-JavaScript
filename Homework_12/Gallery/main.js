// //работа с миниатюрами

$(document).ready(function(){
    
    //блокировка стандартного поведения браузера при нажатии на картинку
    $('.small a').click(function(e){
        e.preventDefault();
    });

    //наведение мыши на маленькие картинки
    $('.small a').hover(function(){
        if($('.big img').attr('src') != $(this).attr('href')){

            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                heightL: '100%',
            })
        }
    });

    //нажатие на кнопку "+"
    $('.button').click(function(){
        $('.block').slideToggle();

        if($('.button').text() == '+'){
            $('.button').text('-')
        } else{
            $('.button').text('+')
        }
    })

    //выделение выбранной артинки (css свойства)
    $('.small a img').hover(function (){
        $(this)
        .stop()
        .animate({
            opacity: "0.65"
        }, 600);
    }, function (){
        $(this)
        .stop()
        .animate({
            opacity: "1"
        }, 600)
    });
});