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
let result = getSquare(5);
console.log(result);

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