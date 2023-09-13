import { renderResponse } from "./functions.js";

let arrayWithRandom = [];
function generateRandom(arg) {
  return Math.floor(Math.random() * arg);
}

function fillArrayWithPositive(arr) {
  for (let i = 0; i < 10; i++) {
    arr.push(generateRandom(50));
  }
  renderResponse(
    `<div class="victory">[Позитивный массив] ${arr.join(" | ")} </div>`,
  );
}

function fillArrayWithNegative(arr) {
  for (let i = 0; i < 10; i++) {
    arr[i] = generateRandom(-50);
  }
  renderResponse(
    `<div class="victory">[Негативный массив] ${arr.join(" | ")} </div>`,
  );
}

function fillArrayWithZero(arr) {
  for (let i = 0; i < 10; i++) {
    arr[i] = generateRandom(0);
  }
  renderResponse(
    `<div class="victory">[Нулевой массив] ${arr.join(" | ")} </div>`,
  );
}

function fillArrayWithEven(arr) {
  for (let i = 0; i < 10; i++) {
    let temp = generateRandom(50);
    while (temp === 0 && temp % 2 !== 0) {
      temp = generateRandom(50);
    }
    arr[i] = temp;
  }
  renderResponse(
    `<div class="victory">[Четный массив] ${arr.join(" | ")} </div>`,
  );
}

function findAvg(arg) {
  let temp = 0;
  arg.forEach((item) => {
    temp += item;
  });
  temp = temp / arg.length;
  temp > 0 ? (temp *= 2) : (temp *= -3);
  renderResponse(`<div class="victory">[Среднее] ${Math.floor(temp)} </div>`);
}

fillArrayWithPositive(arrayWithRandom);
findAvg(arrayWithRandom);
fillArrayWithNegative(arrayWithRandom);
findAvg(arrayWithRandom);
fillArrayWithZero(arrayWithRandom);
fillArrayWithEven(arrayWithRandom);