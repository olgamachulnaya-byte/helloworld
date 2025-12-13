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


    const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

// Функция для запуска викторины
function startQuiz() {
    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const q = quiz[i];
        const answer = prompt(q.question + "\n" + q.options.join("\n"));
        if (parseInt(answer) === q.correctAnswer) {
            correctCount++;
        }
    }

    alert("Правильных ответов: " + correctCount);
}

// Функция для переворачивания текста
function reverseText() {
    // Запрашиваем у пользователя текст
    const input = prompt("Введите текст:");
    // Переворачиваем текст
    const reversed = input.split("").reverse().join("");
    // Выводим перевёрнутый текст
    alert("Перевёрнутый текст: " + reversed);
}

function playRPS() {
  const options = ["камень", "ножницы", "бумага"];

  // Запрашиваем выбор пользователя
  let userChoice = prompt("Выберите: камень, ножницы или бумага");
  if (!userChoice) return alert("Игра отменена");

  userChoice = userChoice.toLowerCase();
  if (!options.includes(userChoice)) {
    return alert("Некорректный выбор. Пожалуйста, выберите камень, ножницы или бумага.");
  }

  // Выбор компьютера
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  // Определение результата
  let result = "";
  if (userChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    result = "Вы победили!";
  } else {
    result = "Вы проиграли!";
  }

  // Вывод результата
  alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}\n${result}`);
}

  // Генерация случайного цвета в формате hex
  function getRandomColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    return `#${hex.toUpperCase()}`;
  }

  // Приближённая светлота для контраста кнопки
  function getLuminance(hexColor) {
    const r = parseInt(hexColor.substr(1,2), 16) / 255;
    const g = parseInt(hexColor.substr(3,2), 16) / 255;
    const b = parseInt(hexColor.substr(5,2), 16) / 255;
    const srgb = [r,g,b].map(v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  }

  // Основная функция: меняет фон элемента .mini-igri
  function randomizeArenaColor() {
    const color = getRandomColor();

    // Фон именно элемента с классом .mini-igri
    const arena = document.querySelector('.mini-igri');
    if (arena) {
      arena.style.backgroundColor = color;
    }

    // Контраст текста кнопки
    const luminance = getLuminance(color);
    const btn = document.querySelector('.mini-igri__button');
    if (btn) {
      btn.style.color = luminance > 0.55 ? '#000000' : '#FFFFFF';
    }

    // Пример: можно вывести цвет в alert/prompt, если нужно
    // alert(`Сгенерирован новый цвет: ${color}`);
    // prompt('Продолжить?', 'да');
  }

  // По желанию: задать первый цвет при загрузке
  // window.addEventListener('DOMContentLoaded', randomizeArenaColor);