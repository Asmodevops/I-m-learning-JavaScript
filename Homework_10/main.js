//                  Task 1

$('#bmw').click(function(){
    $('#bmw_information').toggle(800).css("display", "flex");
});

$('#mercedes').click(function(){
    $('#mercedes_information').toggle(800).css("display", "flex");
});

$('#lexus').click(function(){
    $('#lexus_information').toggle(800).css("display", "flex");
});


$('#but').click(function(){
    let time = ($('#distance').val() / $('#auto').val());
    let result = 0;
    let rest = 0;
    for (let i = 1; i <= time; i++){
        result++
        if(result % 4 == 0){
            rest++;
        }
    }
    if(result % 4 == 0){
        rest -= 1;
    }
    $('#output').html('В дороге примерно: ' + result + '. Плюс на отдых: ' + rest + '.');
});

//                  Task 2


let second = '';
let minut = '';
let hour = ''; 
$('.input_time').click(function(){
    second = $('.second').val();
    minut = $('.minut').val();
    hour = $('.hour').val();
    if(hour && minut && second){
        if(hour >= 0 && hour < 24 && minut >= 0 && minut < 60 && second >= 0 && second < 60){
            $('.output_time').html('Время: ' + hour + ':' + minut + ':' + second);
        }
        else{
            alert('Введено некорректное время!');
        }
    }
    else{
        alert('Введено некорректное время!');
    }
});

$('.second_input_time').click(function(){
    let second_second = $('.second_second').val();
    let second_minut = $('.second_minut').val();
    let second_hour = $('.second_hour').val();
    second = +second + +second_second;
    minut = +minut + +second_minut;
    hour = +hour + +second_hour;
    
    let final_second = 0;
    let final_minut = 0;
    let final_hour = 0;
    
    for(let i = 1; i <= second; i++){
        final_second++;
        if(i % 60 == 0){
            minut++;
            final_second -= 60;
        }
    }

    for(let j = 1; j <= minut; j++){
        final_minut++;
        if(j % 60 == 0){
            hour++;
            final_minut -= 60;
        }
    }

    for(let k = 1; k <= hour; k++){
        final_hour++;
        if(k % 24 == 0){
            final_hour -= 24;
        }
    }
    second = final_second;
    minut = final_minut;
    hour = final_hour;
    console.log(final_hour, final_minut, final_second);
    $('.second_output_time').html('Финальное время: ' + hour + ':' + minut + ':' + second);
});