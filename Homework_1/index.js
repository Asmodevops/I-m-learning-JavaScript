guest = prompt("Как тебя зовут?");
alert('Привет, ' + guest + "!");

const data = 2023;
year = prompt("В каком году ты родился?");
alert('Значит в этом году тебе уже исполнилось, либо еще исполнится ' + (data - year) + ' лет.');

storona = prompt('Введи длину стороны квадрата. А я посчитаю тебе его периметр.')
alert('Периметр квадрата со стороной ' + storona +' равен: ' + (storona * 4) + '.')

const pi = 3.14;
r = prompt('Точно также можем посчитать площадь круга. Тебе нужно ввести только его радиус.')
alert('Площадь круга, радиус которого ' + r + ', составляет: ' + (pi * Math.pow(2, 2)) +'.')

distance = prompt('Введи расстояние между двумя городами (в километрах).')
time = prompt('А теперь скажи за сколько часов ты хочешь добраться из одного города в другой?')
alert('Чтобы проехать ' + distance + ' километров за ' + time + ' часов, тебе следует двигаться со скоростью ' + (distance / time) + ' километров в час.')

const convert = 0.9204
dollars = prompt('Давай представим, что тебе нужно конвертировать доллары в евро. Я помогу тебе в этом. Скажи, сколько у тебя есть долларов?')
alert('Конвертировав ' + dollars + ' долларов, ты получишь ' + (dollars * convert) + ' евро.')

flash = prompt('Введи объем флеш-накопителя в Гб, а я подскажу, сколько на нем поместится файлов объемом 820Мб.')
alert('На флешке с объемом ' + flash + ' Гб, может поместиться ' + Math.floor((flash * 1024)/820) + ' файлов с объемом 820Мб.')

money = prompt('Хочешь купить шоколадку? А сколько у тебя есть денег?')
chocolate = prompt('А сколько стоит шоколадка?')
alert('На ' + money + ' рублей, ты сможешь купить ' + Math.floor(money/chocolate) + ' шоколадок. При этом, у тебя останется ' + (money%chocolate) + ' рублей.')

number = prompt('Введи трехзначное число, а я покажу тебе его наоборот.') 
a = number%10 
a = a.toString()
number1 = Math.floor(number/10) 
b = number1%10 
b = b.toString()
number2 = Math.floor(number1/10) 
c = number2%10 
c = c.toString()
let d;
d = (a + b + c);
alert(d)

number_999 = prompt('Введи любое число, а я скажу четное оно или нет (true - четное, false - нечетное).')
alert(number_999 % 2 == 0)