let targetNumber; // загаданное число

function startGuessGame() {
// сгенерировать число от 1 до 100
targetNumber = Math.floor(Math.random() * 100) + 1;

// приветствие и начало игры в мини-окне через alert
alert("Угадайте число от 1 до 100. Я загадал число. Удачи!");

// запуск цикла угадывания
askGuess();
}

function askGuess() {
// показать подсказку и получить ввод
let userInput = prompt("Введите ваше предположение (целое число от 1 до 100):");

// обработка отмены (пользователь закрыл окно prompt)
if (userInput === null) {
alert("Игра окончена. Спасибо за участие!");
return;
}

// преобразовать ввод к числу
const guess = Number(userInput);

// валидация ввода
if (!Number.isFinite(guess) || !Number.isInteger(guess) || guess < 1 || guess > 100) {
alert("Пожалуйста, введите целое число от 1 до 100.");
askGuess();
return;
}

// сравнение с загаданным числом
if (guess === targetNumber) {
alert("Поздравляем! Вы угадали число " + targetNumber + "!");
return;
} else if (guess < targetNumber) {
alert("Загаданное число больше вашего предположения.");
} else {
alert("Загаданное число меньше вашего предположения.");
}

// повторный запрос
askGuess();
}


    // Функция для генерации случайного числа от min до max включительно
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Функция для генерации арифметической задачи
    function generateTask() {
      const operations = ['+', '-', '*', '/'];
      const operand1 = getRandomInt(1, 20);
      const operand2 = getRandomInt(1, 20);
      const operation = operations[getRandomInt(0, operations.length - 1)];

      // Для деления делимое должно быть кратно делителю, чтобы результат был целым числом
      if (operation === '/') {
        const dividend = operand1 * operand2; // гарантия целого результата
        return `${dividend} / ${operand2}`;
      }
      return `${operand1} ${operation} ${operand2}`;
    }

    // Функция для запроса ответа у пользователя и проверки его
    function askAndCheck() {
      const task = generateTask();
      const userAnswer = prompt(`Решите задачу: ${task}`);
      const correctAnswer = eval(task);

      if (Number(userAnswer) === correctAnswer) {
        alert('Верный ответ!');
      } else {
        alert(`Ошибка. Правильный ответ: ${correctAnswer}`);
      }
    }
