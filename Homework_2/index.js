// 1
btn_1 = document.getElementById('btn_1');
outputNumber = document.getElementById('outputNumber');

btn_1.onclick = function() {
    let inputValue = inputNumber.value;
    if (inputValue == ''){
        return
    }

    inputNumber = document.getElementById('inputNumber').value;
    outputNumber.value = Math.pow(inputNumber, 2);
    console.log(Math.pow(inputNumber, 2));
};


//2

btn_2 = document.getElementById('btn_2');
outputNumber_AB = document.getElementById('outputNumber_AB');

btn_2.onclick = function() {
    let inputValue_1 = inputNumber_A.value;
    if (inputValue_1 == ''){
        return
    }
    let inputValue_2 = inputNumber_B.value;
    if (inputValue_2 == ''){
        return
    }

    inputNumber_A = document.getElementById('inputNumber_A').value;
    inputNumber_B = document.getElementById('inputNumber_B').value;
    outputNumber_AB.value = (+inputNumber_A + +inputNumber_B)/2;
    console.log((+inputNumber_A + +inputNumber_B)/2);
};

// 3
btn_3 = document.getElementById('btn_3');
outputQuadro = document.getElementById('outputQuadro');

btn_3.onclick = function() {
    let inputValue = inputQuadro.value;
    if (inputValue == ''){
        return
    }

    inputQuadro = document.getElementById('inputQuadro').value;
    outputQuadro.value = Math.pow(inputQuadro, 2);
    console.log(Math.pow(inputQuadro, 2));
};

// 4
btn_4 = document.getElementById('btn_4');
outputMil = document.getElementById('outputMil');
const mil = 0.621371;

btn_4.onclick = function() {
    let inputValue = inputKm.value;
    if (inputValue == ''){
        return
    }

    inputKm = document.getElementById('inputKm').value;
    outputMil.value = Math.round(inputKm*mil*100)/100;
    console.log(Math.round(inputKm*mil*100)/100);
};

//5

btn_A = document.getElementById('btn_A');
btn_B = document.getElementById('btn_B');
btn_C = document.getElementById('btn_C');
btn_D = document.getElementById('btn_D');
outputSum = document.getElementById('outputSum');

btn_A.onclick = function() {
    let inputValue_1 = inputNumber_1.value;
    if (inputValue_1 == ''){
        return
    }
    let inputValue_2 = inputNumber_2.value;
    if (inputValue_2 == ''){
        return
    }

    inputNumber_1 = document.getElementById('inputNumber_1').value;
    inputNumber_2 = document.getElementById('inputNumber_2').value;
    outputSum.value = +inputNumber_1 + +inputNumber_2;
    console.log(+inputNumber_1 + +inputNumber_2);
};

btn_B.onclick = function() {
    let inputValue_1 = inputNumber_1.value;
    if (inputValue_1 == ''){
        return
    }
    let inputValue_2 = inputNumber_2.value;
    if (inputValue_2 == ''){
        return
    }

    inputNumber_1 = document.getElementById('inputNumber_1').value;
    inputNumber_2 = document.getElementById('inputNumber_2').value;
    outputSum.value = inputNumber_1 - inputNumber_2;
    console.log(inputNumber_1 - inputNumber_2);
};

btn_C.onclick = function() {
    let inputValue_1 = inputNumber_1.value;
    if (inputValue_1 == ''){
        return
    }
    let inputValue_2 = inputNumber_2.value;
    if (inputValue_2 == ''){
        return
    }

    inputNumber_1 = document.getElementById('inputNumber_1').value;
    inputNumber_2 = document.getElementById('inputNumber_2').value;
    outputSum.value = inputNumber_1 * inputNumber_2;
    console.log(inputNumber_1 * inputNumber_2);
};

btn_D.onclick = function() {
    let inputValue_1 = inputNumber_1.value;
    if (inputValue_1 == ''){
        return
    }
    let inputValue_2 = inputNumber_2.value;
    if (inputValue_2 == ''){
        return
    }

    inputNumber_1 = document.getElementById('inputNumber_1').value;
    inputNumber_2 = document.getElementById('inputNumber_2').value;
    outputSum.value = Math.round(inputNumber_1/inputNumber_2*100)/100
    console.log(inputNumber_1 / inputNumber_2);
};

//6

btn_6 = document.getElementById('btn_6');
outputX = document.getElementById('outputX');

btn_6.onclick = function() {
    let inputValue_1 = inputA.value;
    if (inputValue_1 == ''){
        return
    }
    
    let inputValue_2 = inputB.value;
    if (inputValue_2 == ''){
        return
    }

    inputA = document.getElementById('inputA').value;
    inputB = document.getElementById('inputB').value;
    outputX.value = Math.round(-inputB/inputA*100)/100;
    console.log(-inputB/inputA);
};

// 7

btn_7 = document.getElementById('btn_7');
outputHour = document.getElementById('outputHour');
outputMinut = document.getElementById('outputMinut');

btn_7.onclick = function() {
    let inputValue_1 = inputHour.value;
    if (inputValue_1 == ''){
        return
    }
    
    let inputValue_2 = inputMinut.value;
    if (inputValue_2 == ''){
        return
    }

    inputHour = document.getElementById('inputHour').value;
    inputMinut = document.getElementById('inputMinut').value;
    if (inputMinut == 0){
        outputHour.value = 24 - inputHour;
        outputMinut.value = 0 - inputMinut;
        console.log(24 - inputHour);
        console.log(0 - inputMinut);
    }

    else {
        outputHour.value = 23 - inputHour;
        outputMinut.value = 60 - inputMinut;
        console.log(23 - inputHour);
        console.log(60 - inputMinut);
    }

    if (outputHour.value < 10){
        outputHour.value = '0' + outputHour.value;
    }

    if (outputMinut.value < 10){
        outputMinut.value = '0' + outputMinut.value;
    }
};

//8

btn_8 = document.getElementById('btn_8');
output2Number = document.getElementById('output2Number');

btn_8.onclick = function() {
    let inputValue = input3Number.value;
    if (inputValue == ''){
        return
    }

    input3Number = document.getElementById('input3Number').value;
    input3Number_1 = Math.floor(input3Number/10);
    a = input3Number_1%10;
    output2Number.value = a;
    console.log(a);
};

//9

btn_9 = document.getElementById('btn_9');
output5Number = document.getElementById('output5Number');

btn_9.onclick = function() {
    let inputValue = input5Number.value;
    if (inputValue == ''){
        return
    }

    input5Number = document.getElementById('input5Number').value;
    input5Number_5 = input5Number%10;
    input5Number_5 = input5Number_5.toString();
    input5Number_1 = Math.floor(input5Number/10);
    input5Number_1 = input5Number_1.toString();
    output5Number.value = input5Number_5+input5Number_1;
    console.log(input5Number_5+input5Number_1);
};

//10

btn_10 = document.getElementById('btn_10');
outputCash = document.getElementById('outputCash');
const oklad = 250;

btn_10.onclick = function() {
    let inputValue = inputSale.value;
    if (inputValue == ''){
        return
    }

    inputSale = document.getElementById('inputSale').value;
    bonus_cash = inputSale*10/100;
    outputCash.value = +oklad + +bonus_cash;
    console.log(+oklad + +bonus_cash);
};