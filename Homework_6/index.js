let task_header = document.querySelectorAll('.task_header');
for (let i = 0; i < task_header.length; i++){
    task_header[i].addEventListener ('click', function (){
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        }
        else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}


let bt_1 = document.getElementById('bt_1');

bt_1.onclick = () => {
    let input_number = document.getElementById('input_number').value;
    let output_number = '';
    for (let i = input_number; i >= 0; i--){
        output_number += i + ' ';
    }
    alert(output_number);
}

let bt_3 = document.getElementById('bt_3');
bt_3.onclick = () => {
    let mini_game = '';
    do{
        mini_game = prompt('Cколько будет 2+2*2?');
    } while (mini_game != 6);
    alert('Верно, молодец.')
}


let bt_4 = document.getElementById('bt_4');

bt_4.onclick = () =>{
    let input_number_2 = document.getElementById('input_number_2').value;
    if (input_number_2 > 0 && input_number_2 <= 100){
        let output_number_2 = '';
        for(i = 1; i <= 100; i++){
            if(i % input_number_2 == 0){
                output_number_2 += i + ' ';
            }
        }
        alert(output_number_2);
    }
    else{
        alert('Попробуй еще раз и введи число строго от 1 до 100!')
    }
}


let bt_5 = document.getElementById('bt_5');

bt_5.onclick = () =>{
    let input_number_3 = parseFloat(document.getElementById('input_number_3').value);
    let input_number_4 = parseFloat(document.getElementById('input_number_4').value);
    if (input_number_3 < input_number_4){
        if(input_number_4 - input_number_3 == 1 || input_number_4 - input_number_3 == 2){
            alert('В данном диапазоне нет четвертого элемента.');
        }

        else{
            let tries = 0;
            let output_number_3 = '';
            for(i = input_number_3; i <= input_number_4; i++){
                tries++;
                if(tries == 4){
                    tries = 0;
                    output_number_3 += i + ' ';
                }
            }
            alert(output_number_3);
        }
    }

    else{
        alert('Диапазон задан не верно. Попробуй еще раз.');
    }
}

let bt_6 = document.getElementById('bt_6');

bt_6.onclick = () =>{
    let input_number_5 = document.getElementById('input_number_5').value;
    if(input_number_5 > 1){
        let result = '';
        if (input_number_5 == 2){
            result = ('Число ' + input_number_5 + ' простое.');
        }
        else{
            for(let i = 2; i < input_number_5; i++){
                if(input_number_5 % i == 0) {
                    result = ('Число ' + input_number_5 + ' составное.');
                    break;
                }

                if (input_number_5 % i !=0) {
                    result = ('Число ' + input_number_5 + ' простое.');
                }
            }
        }
        alert(result);
    }
    else{
        alert('Невозможно проверить число меньше двух, так как оно попросту не может быть простым. Подумай еще и введи натуральное число больше единицы.')
    }
}
