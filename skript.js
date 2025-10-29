let a = 20;
alert(a);

let b = 10;
alert(b);

let iPhone = ('Первый iPhone был выпущен в 2007 году.');
alert (iPhone);
 
let im = ('Брендан Айх');
alert (im);

let a = 10;
let b = 2;
let sum = a + b;
let difference =a - b;
let product = a*b;
let quotient =a/b;
alert(sum,);
alert(difference);
alert(product)
alert(quotient);

let b = 2;
let result = b**5;
alert(result);

let k = 9;
let d = 2;
let remainder =k%d;
alert(remainder);


let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

const user {
    name:"Шарик",
    age:"2",
    isAdmin:true,
};

let name = prompt('Как вас зовут?');
alert(`Привет, ${name}!`);


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