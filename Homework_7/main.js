//настройка анимации JS

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

// _________________________ 1 __________________________________

let input_number = document.getElementById("input_number_for_#");
let btn_1 = document.getElementById("btn_1_for_#");

btn_1.onclick = () => {
    if(input_number.value > 0){
        let result = '';
        for (let i = 1; i <= input_number.value; i++) {
            result += '#';
        }
        alert(result);
    }
    else{
        alert('Нету решеточек получается. Жалко....');
    }
}

// _________________________ 2 __________________________________

document.getElementById("btn_2").onclick = () => {
    alert(Math.pow(document.getElementById("input_number_1").value, document.getElementById("input_number_2").value));
}

// ___________________________ 3 ________________________________

let btn_3 = document.getElementById("btn_3");

btn_3.onclick = () => {
    let number_3 = document.getElementById("input_number_3").value;
    let number_4 = document.getElementById("input_number_4").value;
    let resultate = '';

    for (let i = 1; i <= Math.abs(number_3); i++) {
        if (number_3 % i == 0 && number_4 % i == 0) {
            resultate += i + ' ';
        }
    }
    alert("Общие делители для твоих чисел: " + resultate);
}

// ___________________________ 4 ________________________________

let btn_4 = document.getElementById("btn_4");

btn_4.onclick = () => {
    let factorial_number = document.getElementById("input_factorial_number").value;
    if (factorial_number > 0){
        let factorial = 1;
        for (let i = 1; i <= factorial_number; i++){
            factorial *= i;
        }
        alert(factorial_number + "! = " + factorial);
    }
    else{
        alert('Нужно ввести натуральное число больше 0.');
    }
}

// ___________________________ 5 _______________________________

let btn_5 = document.getElementById("btn_5");

btn_5.onclick = () => {
    let input_number_5 = document.getElementById("input_number_5").value;

    if(input_number_5 > 50){
        let end_number = input_number_5;
        let tries_1 = 0;
        do{
            end_number /= 2;
            tries_1++;
        } while (end_number > 50)

        alert('После всех делений получилось число: ' + end_number + '. Делений произведено: ' + tries_1);}
    else{
        alert('Введите число больше 50!');
    }
}
