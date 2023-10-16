let count = 3;
started = false;

function start(){
    if (started) {
        return
    }
    let start_time = new Date();
    let stop_time = start_time.setMinutes(start_time.getMinutes() + count);

    let countdown = setInterval(function() {
        let now = new Date().getTime();
        let remain= stop_time - now;
        let min = Math.floor( (remain % (1000 * 60 * 60)) / (1000 * 60 ));
        let sec = Math.floor( (remain % (1000 * 60)) / 1000);
        sec = sec < 10 ? '0' + sec : sec;
        document.getElementById('timer').innerHTML = min + ':' + sec;
        if (remain < 0) {
            clearInterval(countdown);
            document.getElementById('timer').innerHTML = 'Время вышло!';
            document.getElementById('one').style.display = 'none';
            document.getElementById('two').style.display = 'none';
            document.getElementById('three').style.display = 'none';
            document.getElementById('four').style.display = 'none';
            document.getElementById('five').style.display = 'none';
            document.getElementById('push_two').style.display = 'none';
            document.getElementById('push_three').style.display = 'block';
        }
    }, 1000);
    started = true;
}

function start_test(){
    document.getElementById('head').style.display = 'none';
    document.getElementById('push').style.display = 'none';
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'block';
    document.getElementById('three').style.display = 'block';
    document.getElementById('four').style.display = 'block';
    document.getElementById('five').style.display = 'block';
    document.getElementById('head_timer').style.display = 'flex';
    document.getElementById('timer').style.display = 'block';
    document.getElementById('push_two').style.display = 'block';
    document.getElementById('push_three').style.display = 'none';
}

document.getElementById('push').onclick = () => {
    start_test();
    start();
}

document.getElementById('push_three').onclick = () => {
    started = false;
    document.getElementById('timer').innerHTML = '';
    document.getElementById('head').style.display = 'block';
    document.getElementById('push').style.display = 'block';
    document.getElementById('head_timer').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('push_two').style.display = 'none';
    document.getElementById('push_three').style.display = 'none';
}

document.getElementById('push_two').onclick = () =>{
    let point = 0;
    let rad1 = document.querySelectorAll('.rad1');
    for (let i = 0; i < rad1.length; i++){
        rad1[i].style.display = 'none';
        if(rad1[i].checked){
            if (rad1[i].value === '+'){
                point += 1;
            } 
            else if (rad1[i].value === '-'){
                point += 0;
            }
        }
    }

    let rad2 = document.querySelectorAll('.rad2');
    for (let i = 0; i < rad2.length; i++){
        rad2[i].style.display = 'none';
        if(rad2[i].checked){
            if (rad2[i].value === '+'){
                point += 1;
            } 
            else if (rad2[i].value === '-'){
                point += 0;
            }
        }
    }
    let rad3 = document.querySelectorAll('.rad3');
    for (let i = 0; i < rad3.length; i++){
        rad3[i].style.display = 'none';
        if(rad3[i].checked){
            if (rad3[i].value === '+'){
                point += 1;
            } 
            else if (rad3[i].value === '-'){
                point += 0;
            }
        }
    }
    let rad4 = document.querySelectorAll('.rad4');
    for (let i = 0; i < rad4.length; i++){
        rad4[i].style.display = 'none';
        if(rad4[i].checked){
            if (rad4[i].value === '+'){
                point += 1;
            } 
            else if (rad4[i].value === '-'){
                point += 0;
            }
        }
    }
    let rad5 = document.querySelectorAll('.rad5');
    for (let i = 0; i < rad5.length; i++){
        rad5[i].style.display = 'none';
        if(rad5[i].checked){
            if (rad5[i].value === '+'){
                point += 1;
            } 
            else if (rad5[i].value === '-'){
                point += 0;
            }
        }
    }
    document.getElementById('head_timer').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('push_two').style.display = 'none';
    document.getElementById('push_three').style.display = 'none';
    

    let green = document.querySelectorAll('.green');
    let red = document.querySelectorAll('.red');

    for (let i = 0; i < green.length; i++){
        green[i].style.color = 'green';
    }

    for (let i = 0; i < red.length; i++){
        red[i].style.color = 'red';
    }

    let fail = document.getElementById('fail');
    let like = document.getElementById('like');
    fail.innerHTML = 5 - point;
    
    if (fail.innerHTML == 0){
        like.innerHTML = 'Оценка - Отлично!';
    }

    else if (fail.innerHTML == 1){
        like.innerHTML = 'Оценка - Хорошо!';
    }

    else if (fail.innerHTML == 2){
        like.innerHTML = 'Оценка - Удовлетворительно!';
    }

    else{
        like.innerHTML = 'Тест не сдан!';
    }
    document.getElementById('last_text').style.display = 'block';
}

