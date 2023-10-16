$(document).ready(function(){
    let color = document.getElementById('color');
    let card_color = document.getElementById('header_section');

    color.oninput = () =>{
        card_color.style.backgroundColor = color.value;
    }

    $('#submit_button').click(function(e){
        e.preventDefault();
        if($('#card_number').val() == '' || $('#name_on_card').val() == '' || $('#month').val() == '' || $('#year').val() == '' || $('#cvv').val() == ''){
            alert('Вы не заполнили все поля! Повнимательне пожалуйста.')
        }
        else{
            if($('#month').val() <= 0 || $('#month').val() > 12 || $('#year').val() <= 2023){
                alert('Вы ввели некорректную дату! Минимальный срок действия карты - 2 месяца.')
            }
            else{
                $('#card_number').attr('disabled', 'disabled');
                $('#name_on_card').attr('disabled', 'disabled');
                $('#month').attr('disabled', 'disabled');
                $('#year').attr('disabled', 'disabled');
                $('#cvv').attr('disabled', 'disabled');
                $('#color').attr('disabled', 'disabled');
                $('#submit_button').attr('disabled', 'disabled');
                
                $('.start_text').hide();
                $('.final_text').show();
                $('.open_form').html('Заглянуть');

                console.log('Номер карты: ' + $('#card_number').val());
                console.log('Данные владельца карты: ' + $('#name_on_card').val());
                console.log('Cрок действия карты: ' + $('#month').val() + '.' + $('#year').val());
                console.log('CVV код: ' + $('#cvv').val());
                console.log('Цвет карты: ' + color.value);
                                
                alert('Спасибо! Наши сотрудники с вами свяжутся!')
            }
        }
    })
    
    // открыть по кнопке
    $('.open_form').click(function(){
        $('.block').fadeIn();
    });

    //закрыть на крестик
    $('.close-form').click(function(){
        $('.block').fadeOut();
    });
  
});