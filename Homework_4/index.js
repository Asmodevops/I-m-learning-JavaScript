// 1 блок

let outputDay = document.getElementById('outputDay');
let outputMonth = document.getElementById('outputMonth');
let outputYear = document.getElementById('outputYear');

let bt_4 = document.getElementById('bt_4');

bt_4.onclick = () => {
    let inputValueDay = inputDay.value;
    let inputValueMonth = inputMonth.value;
    let inputValueYear = inputYear.value;
    if (inputValueDay == '' || inputValueMonth == '' || inputValueYear == ''){
        return;
    }

    let day = +document.getElementById('inputDay').value;
    let month = +document.getElementById('inputMonth').value;
    let year = +document.getElementById('inputYear').value;
  
    if(month > 0 && month <= 12 && year > 0){
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
            if(day > 0 && day < 31){
                day += 1;
            }
            else if(month == 12 && day == 31){
                day = 1;
                month = 1;
                year += 1;
            }

            else if(day == 31){
                day = 1;
                month += 1;
            }

            else{
                alert('Ошибка!');
                return;
            }
        }
        else if(month == 2){
            if (year % 400 === 0 || year % 4 === 0 &&  year % 100 != 0){
                if(day > 0 && day < 29){
                    day += 1;
                }
                else if(day == 29){
                    day = 1;
                    month += 1;
                }

                else{
                    alert('Ошибка!');
                    return;
                }
            }
            else{
                if(day > 0 && day < 28){
                    day += 1;
                }
                else if(day == 28){
                    day = 1;
                    month += 1;
                }
                else{
                    alert('Ошибка!');
                    return;
                }
            }
        }
        else if (month == 4 ||  month == 6 || month == 9 || month == 11){
            if(day > 0 && day < 30){
                day += 1;
            }
            else if(day == 30){
                day = 1;
                month += 1;
            }
            else{
                alert('Ошибка!');
                return;
            }
        } 
    }
    else{
        alert('Ошибка!');
        return;
    }

    if(day > 0 && day <= 9){
        day = 0 + day.toString();
    }

    if(month > 0 && month <= 9){
        month = 0 + month.toString();
    }

    outputDay.value = day;
    outputMonth.value = month;
    outputYear.value = year;
}

// конвертер валют
let moneyInput = document.getElementById('moneyInput');
let currencyInput = document.getElementById('currency');
let bt_1 = document.getElementById('bt_1');
let outputMoney = document.getElementById('outputMoney');

const RATES = {
    usd: 0.0104,
    eur: 0.0096,
    azn: 0.0176
};

function convert(rub, currency) {
    if (!RATES[currency]){
        return null;
    }

    return Math.round(rub * RATES[currency]*100)/100;
}

bt_1.onclick = () => {
    let money = moneyInput.value;
    let currency = currencyInput.value;
    let result = convert(money, currency);
    if (money >= 0){
        if (!result){
            outputMoney.value = '';
            return;
        }
        outputMoney.value = result;
    }
    else{
        alert('Введенная сумма не может быть меньше нуля!');
        return;
    }


        
};