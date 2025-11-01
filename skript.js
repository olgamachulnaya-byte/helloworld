
let password = 'мой сложный пароль';
let userInput = prompt('Введите пароль');
if (userInput === password) {
    alert('Пароль введен верно'); 
} else {
    alert('Пароль введен неправильно'); 
}

let c = 0;

if(c > 0 && c < 10){
    console.log('Верно');
}else{
    console.log('Неверно');
}

if(c > 0 && c < 10){
    console.log('Верно');
}else{
    console.log('Неверно');
}

c = -3;
if(c > 0 && c < 10){
    console.log('Верно');
}else{
    console.log('Неверно');
}

c = 2;
if(c > 0 && c < 10){
    console.log('Верно');
}else{
    console.log('Неверно');
}


let m = 80;
let e = 120;

if(m > 100 || e > 100) {
    console.log('Верно'); 
} else {
    console.log('Неверно');}


let y = '2'; 
let u = '3'; 
alert(parseInt(u) + parseInt(y));    

const monthNumber = 12; 
if(monthNumber > 12 || monthNumber <= 0) {
    console.log("Недопустимый номер месяца.");
} else {    
    switch(monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
        default:
            console.log("Ошибка!");
    }
}


console.log("Привет");
console.log("Привет");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 7; i <= 22; i++) {
  console.log(i);
}

const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let key in obj) {
  console.log(`${key} — зарплата ${obj[key]} долларов.`);
}


let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log("Результат:", n);
console.log("Количество итераций:", num);

const firstFriday = 3; // например, первая пятница — 3-е число месяца
const daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}