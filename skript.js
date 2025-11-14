
    (function () {
      // Генерация числа от 1 до 100
      let secret = Math.floor(Math.random() * 100) + 1;
      let attempts = 0;
      let finished = false;

      // Функция подсказки через alert-подсказку
      function promptGuess() {
        // Запросить у пользователя ввод через prompt
        const input = prompt("Угадайте число от 1 до 100:");
        if (input === null) {
          // Пользователь отменил ввод
          alert("Игра окончена. Спасибо за игру!");
          return;
        }
        const guess = Number(input);
        if (Number.isNaN(guess) || guess < 1 || guess > 100) {
          alert("Пожалуйста, введите число от 1 до 100.");
          promptGuess();
          return;
        }

        attempts++;
        if (guess === secret) {
          alert(`Поздравляю! Вы угадали число ${secret} за ${attempts} попыток.`);
          finished = true;
          // Опционально: можно предложить начать заново
          const снова = confirm("Хотите сыграть ещё раз?");
          if (снова) {
            // Сбрасываем состояние и запускаем новую игру
            secret = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            finished = false;
            promptGuess();
          }
          return;
        } else if (guess < secret) {
          alert("Загаданное число больше вашего.");
          promptGuess();
        } else {
          alert("Загаданное число меньше вашего.");
          promptGuess();
        }
      }

      // Запуск игры
       function promptGuess() {
        alert("Началась новая игра: загаданное число от 1 до 100.");
      promptGuess();
       }
    })();