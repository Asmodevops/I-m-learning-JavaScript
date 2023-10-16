//                  1 задача

let array = [];

let button_one = document.querySelector('.button_task_one');
let output_one = document.querySelector('.output_task_one');

button_one.onclick = () => {
    for (let i = array.length; i < 10; i++) {
        array[i] = Math.floor(Math.random() * (99 - 1)) + 1;      
    }
    output_one.innerHTML = array;
    console.log(array);
}


//                  2 задача


let button_two = document.querySelector('.button_task_two');
let output_two = document.querySelector('.output_task_two');

button_two.onclick = () => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 ==0){
            newArray.push(array[i]);
        }
    }
    output_two.innerHTML = newArray;
    console.log(newArray);
}


//                  3 задача


let button_three = document.querySelector('.button_task_three');
let output_three = document.querySelector('.output_task_three');

button_three.onclick = () => {
    if (array.length > 0) {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        output_three.innerHTML = result;
        console.log(result);
    }
}



//                  4 задача

let button_four = document.querySelector('.button_task_four');
let output_four = document.querySelector('.output_task_four');

button_four.onclick = () => {
    if (array.length > 0) {
        let max_number = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max_number) {
                max_number = array[i];
            }
        }
        output_four.innerHTML = max_number;
        console.log(max_number);
    }
}


//                  Кнопка рестарт


let restart = document.querySelector('.button_restart');
restart.onclick = () => {
    array = [];
    output_one.innerHTML = '';
    output_two.innerHTML = '';
    output_three.innerHTML = '';
    output_four.innerHTML = '';
}