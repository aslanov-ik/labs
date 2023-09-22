import { renderResponse } from "../main/script/functions.js";

let arrayWithRandom = [];
const testRange = [-1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3];
function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function complexArray(arr) {
  arr = [];
  testRange.forEach((item) => {
    if (item < 0) arr.push(Math.pow(item, 2));
    else if (item === 0) arr.push(item);
    else if (item > 0 && item <= 1) arr.push(Math.pow(item, 3));
    else arr.push(Math.log(item).toFixed(3));
  });
  renderResponse(
    `<div class="victory">[Сложная функция] ${arr.join(" | ")} </div>`,
  );
}
function fillArrayWithPositive(arr) {
  for (let i = 0; i < 10; i++) {
    arr.push(generateRandom(1, 50));
  }
  renderResponse(
    `<div class="victory">[Позитивный массив] ${arr.join(" | ")} </div>`,
  );
}

function fillArrayWithNegative(arr) {
  for (let i = 0; i < 10; i++) {
    arr[i] = generateRandom(-50, -1);
  }
  renderResponse(
    `<div class="victory">[Негативный массив] ${arr.join(" | ")} </div>`,
  );
}

function fillArrayWithZero(arr) {
  for (let i = 0; i < 10; i++) {
    arr[i] = generateRandom(0, 0);
  }
  renderResponse(
    `<div class="victory">[Нулевой массив] ${arr.join(" | ")} </div>`,
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
complexArray(arrayWithRandom);
// fillArrayWithEven(arrayWithRandom);