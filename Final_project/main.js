$(document).ready(function(){

    $('#reservations_button').click(function(e){
        e.preventDefault();
        if($('#fname').val() != '' && $('#lname').val() != '' && $('#email').val() != ''){
            $('#fname').attr('disabled', 'disabled');
            $('#lname').attr('disabled', 'disabled');
            $('#email').attr('disabled', 'disabled');
            $('#davaToday').attr('disabled', 'disabled');
            
            console.log($('#fname').val() + ' ' + $('#lname').val() + ' забронировал столик на ' + $('#davaToday').val() + '.' + 'Связаться с клиентом можно по следующему номеру телефона: ' + $('#email').val());
                            
            alert('Спасибо! Наши сотрудники с вами свяжутся!');

        }
        else{
            alert('Некорректно заполнена форма. Проверьте заполнение всех полей.')
        }
    });

    
    $('#submit').click(function(e){
        e.preventDefault();
        if(($('#login').val() == 'admin') && ($('#password').val() == 'admin')){
            $('.module_one').toggle();
            alert('Добро пожаловать!');
            $('body').css({'overflow':'visible'});
            
        } else{
            alert('Мы вас не знаем.');
        }
    })

    
    $('.read_more_menu').click(function(){
        $('.module_all').fadeIn();
        $('.module_menu').fadeIn();
    });
    $('.read_more_peter').click(function(){
        $('.module_all').fadeIn();
        $('.module_peter').fadeIn();
    });
    $('.read_more_events').click(function(){
        $('.module_all').fadeIn();
        $('.module_events').fadeIn();
    });

    $('.close_module').click(function(){
        $('.module_all').fadeOut();
        $('.module_menu').fadeOut();
        $('.module_peter').fadeOut();
        $('.module_events').fadeOut();
    });

    $('.dot_one').click(function(){
        $('.animation_gallery').css('background-image', 'url("img/food2.jpg")');
        $('.dot_one').css('background-color', 'rgb(255, 255, 255)');
        $('.dot_two').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_three').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_four').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_five').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_six').css('background-color', 'rgba(201, 201, 201, 0.582)');
    })

    $('.dot_two').click(function(){
        $('.animation_gallery').css('background-image', 'url("img/gallery_6.jpg")');
        $('.dot_two').css('background-color', 'rgb(255, 255, 255)');
        $('.dot_one').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_three').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_four').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_five').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_six').css('background-color', 'rgba(201, 201, 201, 0.582)');
    })

    $('.dot_three').click(function(){
        $('.animation_gallery').css('background-image', 'url("img/gallery_5.jpg")');
        $('.dot_three').css('background-color', 'rgb(255, 255, 255)');
        $('.dot_one').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_two').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_four').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_five').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_six').css('background-color', 'rgba(201, 201, 201, 0.582)');
    })

    $('.dot_four').click(function(){
        $('.animation_gallery').css('background-image', 'url("img/gallery_3.jpg")');
        $('.dot_four').css('background-color', 'rgb(255, 255, 255)');
        $('.dot_one').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_two').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_three').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_five').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_six').css('background-color', 'rgba(201, 201, 201, 0.582)');
    })

    $('.dot_five').click(function(){
        $('.animation_gallery').css('background-image', 'url("img/gallery_2.jpg")');
        $('.dot_five').css('background-color', 'rgb(255, 255, 255)');
        $('.dot_one').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_two').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_three').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_four').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_six').css('background-color', 'rgba(201, 201, 201, 0.582)');
    })

    $('.dot_six').click(function(){
        $('.animation_gallery').css('background-image', 'url("img/gallery_4.png")');
        $('.dot_six').css('background-color', 'rgb(255, 255, 255)');
        $('.dot_one').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_two').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_three').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_four').css('background-color', 'rgba(201, 201, 201, 0.582)');
        $('.dot_five').css('background-color', 'rgba(201, 201, 201, 0.582)');
    })

})