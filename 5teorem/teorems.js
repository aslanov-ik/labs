function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log("[Ошибка]: Введите число.");
console.log("[Ошибка]: Вы ввели пустую строку, введите число");
console.log("[Ошибка]: Введите положительное число. Ваш ввод: -69");

//Теорема 9.1
let myNumber = 10;

//Теорема 9.2
myNumber = randomNumber(-10, 20);

//Теорема 9.3
let secondNumber = myNumber * 2;

//Теорема 9.4
secondNumber % 2 === 0 ? (secondNumber = 0) : (secondNumber = 1);

//Теорема 9.5
if (secondNumber === 0) console.log(`Вторая переменная равна: ${secondNumber}`);

//Теорема 9.6 и 9.7
while (secondNumber < 10) {
  console.log(
    `Сейчас вторая переменная равна: ${secondNumber}, продолжается работа цикла`,
  );
  secondNumber += 3;
}

console.log(
  `Сейчас вторая переменная равна: ${secondNumber} и мы вышли из цикла!`,
);