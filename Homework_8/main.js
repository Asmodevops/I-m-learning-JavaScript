let submit_button = document.getElementById('submit_button');
let color = document.getElementById('color');
let card_color = document.getElementById('header_section');
let card_number = document.getElementById('card_number');
let name_on_card = document.getElementById('name_on_card');
let month = document.getElementById('month');
let year = document.getElementById('year');
let cvv = document.getElementById('cvv');


color.oninput = () =>{
    card_color.style.backgroundColor = color.value;
}

submit_button.onclick = () =>{
    if (month.value <= 0 || month.value > 12 || year.value <= 0){
        alert('Введите корректный срок действия карты!')
    }

    else if (month.value > 0 || month.value <= 12 && year.value > 0){
        console.log('Пользователь выбрал для карты следующий цвет: ' + color.value);
        console.log('Пользователь выбрал следующий номер карты: ' + card_number.value)
        console.log('Пользователь ввел следующие данные владельца для карты: ' + name_on_card.value)
        console.log('Пользователь ввел следующий срок действия для карты: ' + month.value + '.' + year.value)
        console.log('Пользователь ввел следующий CVV / CVN для карты: ' + cvv.value)
    }
    
}



