// 1 блок

let outputYears = document.getElementById('outputYears');
let bt_1 = document.getElementById('bt_1');

bt_1.onclick = () => {
    let inputValue = inputYears.value;
    if (inputValue == ''){
        return
    }

    inputYears = document.getElementById('inputYears').value;
    if (inputYears >= 0 && inputYears <= 120){
        if (inputYears <= 12){
            outputYears.value = ('Ты еще ребенок. Хорошо учись, полезно питайся и слушайся родителей. Это важно.');
        }

        else if (inputYears > 12 && inputYears < 18){
            outputYears.value = ('Может ты уже не ребенок, но ты еще подросток. Продолжай хорошо учиться и быть послушным.');
        }

        else if (inputYears >= 18 && inputYears < 60){
            outputYears.value = ('Ты уже взрослый. Не забывай, что это не просто цифра, но еще и большая ответственность.');
        }

        else{
            outputYears.value = ('Ты пенсионер. Позвони внукам, займи очередь в ЖЭК, главное не переведи деньги мошенникам.');
        }
    }

    else if (inputYears >120){
        outputYears.value = ('Столько не живут, дружок. Ну, конечно, если ты не Тибетский монах. В ином случае, скорее всего ты уже мертв.');
    }

    else{
        outputYears.value = ('Ошибочка, дружок. Не пытайся меня обмануть и введи корректный возраст, пожалуйста.');
    }
}

// 2 блок

let outputNumber = document.getElementById('outputNumber');
let bt_2 = document.getElementById('bt_2');

let a_0 = ')';
let a_1 = '!';
let a_2 = '@';
let a_3 = '#';
let a_4 = '$';
let a_5 = '%';
let a_6 = '^';
let a_7 = '&';
let a_8 = '*';
let a_9 = '(';

bt_2.onclick = () => {
    let inputValue_2 = inputNumber.value;
    if (inputValue_2 == ''){
        return
    }

    inputNumber = document.getElementById('inputNumber').value;
    if ( inputNumber >= 0 && inputNumber <= 9){
        if (inputNumber == 0){
            outputNumber.value = (a_0);
        }

        else if (inputNumber == 1){
            outputNumber.value = (a_1);
        }

        else if (inputNumber == 2){
            outputNumber.value = (a_2);
        }

        else if (inputNumber == 3){
            outputNumber.value = (a_3);
        }

        else if (inputNumber == 4){
            outputNumber.value = (a_4);
        }

        else if (inputNumber == 5){
            outputNumber.value = (a_5);
        }

        else if (inputNumber == 6){
            outputNumber.value = (a_6);
        }

        else if (inputNumber == 7){
            outputNumber.value = (a_7);
        }

        else if (inputNumber == 8){
            outputNumber.value = (a_8);
        }

        else if (inputNumber == 9){
            outputNumber.value = (a_9);
        }
    }

    else{
        alert('Введи число от 0 до 9! Не играй со мной.');
    }
}

// 3 блок

let outputNumber_3 = document.getElementById('outputNumber_3');
let bt_3 = document.getElementById('bt_3');

bt_3.onclick = () => {
    let inputValue_3 = inputNumber_3.value;
    if (inputValue_3 == ''){
        return;
    }

    inputNumber_3 = document.getElementById('inputNumber_3').value;
    if (inputNumber_3.length === 3){
        a1 = inputNumber_3%10;
        inputNumber_3 = Math.floor(inputNumber_3/10);
        a2 = inputNumber_3%10;
        inputNumber_3 = Math.floor(inputNumber_3/10);
        a3 = inputNumber_3%10;
        if (a1 === a2 || a1 === a3 || a2 === a3){
            if (a1 === a2 || a1 === a3){
                outputNumber_3.value = ('Повторяется цифра ' + a1 + '.');
            }
            else if (a2 === a3 || a2 === a1){
                outputNumber_3.value = ('Повторяется цифра ' + a2 + '.');
            }
            else if (a3 === a1 || a3 === a2){
                outputNumber_3.value = ('Повторяется цифра ' + a3 + '.');
            }
        }
        else{
            outputNumber_3.value = ('Повторяющихся цифр нет.');
        }
    }

    else{
        alert('В условии было сказано написать трехзначное число. Или там что-то не понятно написано?');
    }
}