//Задание 1
const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr); // Выведет: JS

//Задание 2
function filterByStart(arr, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerPrefix));
}
 const words = ['Apple', 'application', 'Banana', 'apricot', 'Orange'];
const result = filterByStart(words, 'app');
console.log(result); // ['Apple', 'application', 'apricot']

//Задание 3
const num = 32.58884;

console.log("До меньшего целого:", Math.floor(num)); // 32
console.log("До большего целого:", Math.ceil(num));  // 33
console.log("До ближайшего целого:", Math.round(num)); // 33

//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

console.log("Минимальное значение:", Math.min(...numbers)); // 21
console.log("Максимальное значение:", Math.max(...numbers)); // 77
//Задание 5

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}
//Задание 6
function getRandomArray(num) {
    const length = Math.floor(num / 2);
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (num + 1)));
    }
    return result;
}
console.log(getRandomArray(10)); // Например, [7, 3, 1, 9, 0]
//Задание 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(5, 10)); // Например, 7

//Задание 8
const currentDate = new Date();
console.log(currentDate);

//Задание 9
function formatDate(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня",
                    "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const weekdays = ["воскресенье", "понедельник", "вторник", "среда",
                      "четверг", "пятница", "суббота"];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

// Пример использования:
const now = new Date();
console.log(formatDate(now));