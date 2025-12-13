// Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 10) {
    break; // Прерываем цикл после вывода значения 10
  }
}
// Задание 2
const array = [1, 5, 4, 10, 0, 3];
const index = array.indexOf(4);
console.log(index); // выведет 2

// Задание 3
const arr2 = [1, 3, 5, 10, 20];
const result = arr2.join(' ');
console.log(result);

//Задание 4
const result1 = [];

for (let i = 0; i < 3; i++) {
  const innerArray = [];
  for (let j = 0; j < 3; j++) {
    innerArray.push(1);
  }
  result1.push(innerArray);
}

console.log(result1);
//Задание 5
const arr4 = [1, 1, 1];
arr4.push(2, 2, 2);
console.log(arr4);

//Задание 6
const arr5 = [9, 8, 7, 'a', 6, 5];
arr5.sort(); // Сортирует массив
const filteredArr = arr5.filter(element => element !== 'a'); // Удаляет 'a'
console.log(filteredArr); // Выводит отсортированный массив без 'a'
//Задание 7
const numbers = [9, 8, 7, 6, 5];
const userInput = prompt('Угадайте число');

if (numbers.includes(Number(userInput))) {
  alert('Угадал');
} else {
  alert('Не угадал');
}
//Задание 8
const str = 'abcdef';

// Преобразование строки в массив символов
const arr6 = str.split('');

// Разворот массива
const reversedArr = arr6.reverse();

// Преобразование массива обратно в строку
const reversedStr = reversedArr.join('');

console.log(reversedStr); // выводит 'fedcba'

//Задание 9
const arr7 = [[1, 2, 3], [4, 5, 6]];

const merged = [...arr7[0], ...arr7[1]];

console.log(merged); 
//Задание 10
const numbers1 = [3, 7, 1, 9, 5, 2]; // произвольный массив из чисел от 1 до 10

for (let i = 0; i < numbers1.length - 1; i++) {
  const sum = numbers1[i] + numbers1[i + 1];
  console.log(sum);
}
//Задание 11

 function squareArray(arr) {
  return arr.map(num => num * num);
}

const inputArray = [1, 2, 3, 4, 5];
const squaredArray = squareArray(inputArray);
console.log(squaredArray); // выведет [1, 4, 9, 16, 25]

//Задание 12
function getLengths(arr) {
  return arr.map(str => str.length);
}

const inputArray1 = ["hello", "world", "javascript"];
const lengthsArray = getLengths(inputArray1);
console.log(lengthsArray); // выведет [5, 5, 10]

//Задание 13

function getNegativeNumbers(arr) {
  return arr.filter(num => num < 0);
}

const inputArray2 = [1, -2, 3, -4, 0, -5, 6];
const negativeArray = getNegativeNumbers(inputArray2);
console.log(negativeArray); // выведет [-2, -4, -5]

//Задание 14
const numbers2 = [];

// Генерация массива из 10 случайных чисел от 0 до 10
for (let i = 0; i < 10; i++) {
  numbers2.push(Math.floor(Math.random() * 11)); // Math.random() * 11 — числа от 0 до 10 включительно, округляем вниз
}

// Фильтрация чётных чисел
const evenNumbers = numbers2.filter(num => num % 2 === 0);

console.log('Исходный массив:', numbers2);
console.log('Массив с четными числами:', evenNumbers);
//Задание 15
 const numbers3 = [];

// Генерируем массив из 6 чисел от 1 до 10
for (let i = 0; i < 6; i++) {
  numbers3.push(Math.floor(Math.random() * 10) + 1);
}

// Вычисляем сумму элементов массива с помощью reduce()
const sum = numbers3.reduce((acc, num) => acc + num, 0);

// Находим среднее арифметическое
const average = sum / numbers3.length;

console.log('Массив:', numbers3);
console.log('Среднее арифметическое:', average);
























//Задание 1
 function minOfTwo(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(minOfTwo(8, 4));
console.log(minOfTwo(6, 6));

//Задание 2
function checkEvenOdd(n) {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}
console.log(checkEvenOdd(4)); 
console.log(checkEvenOdd(7)); 
//Задание 3
function printSquare(num) {
 console.log(num * num);
}
printSquare(5);

function getSquare(num) {
  return num * num;
}
let result5 = getSquare(5);
console.log(result5);

//Задание 4
function checkAge() {
  let age = prompt("Сколько вам лет?");
  age = Number(age);

  if (age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
  } else if (age >= 13) {
    alert("Добро пожаловать!");
  } else {
    alert("Вы ввели неправильное значение");
  }
}

//Задание 5
function multiplyIfNumbers(a, b) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (isNaN(num1) || isNaN(num2)) {
    return 'Одно или оба значения не являются числом';
  } else {
    return num1 * num2;
  }
}
console.log(multiplyIfNumbers(3, 4)); 
console.log(multiplyIfNumbers('5', '2')); 
console.log(multiplyIfNumbers('a', 2));
 
//Задание 6
function cubeNumber() {
  let input = prompt("Введите число:");
  let num = Number(input);

  if (isNaN(num)) {
    return "Переданный параметр не является числом";
  } else {
    let cube = Math.pow(num, 3);
    return `${num} в кубе равняется ${cube}`;
  }
}
for (let i = 0; i <= 10; i++) {
  console.log(cubeNumber(i));
}
//Ворой вариант
function cubeNumberParam(n) {
  let num = Number(n);

  if (isNaN(num)) {
    return "Переданный параметр не является числом";
  } else {
    let cube = Math.pow(num, 3);
    return `${num} в кубе равняется ${cube}`;
  }
}

for (let i = 0; i <= 10; i++) {
  console.log(cubeNumberParam(i));
}
//Здание 7
const circle1 = {
  radius: 5,
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};
console.log(circle1.getArea());       
console.log(circle1.getPerimeter()); 
console.log(circle2.getArea());      
console.log(circle2.getPerimeter());
