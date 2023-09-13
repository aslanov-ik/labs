import { renderResponse } from "../main/script/functions.js";

let myNum = prompt("Введите число");

function factor(arg) {
  let helpNum = 1;
  myNum = Number(myNum);
  if (isNaN(myNum))
    renderResponse(`<div class="error">Ошибка! Введите число</div>`);
  else if (myNum <= 0)
    renderResponse(
      `<div class="error">Ошибка! Введите число больше 0. Вы ввели: ${myNum}</div>`
    );
  else if (!Number.isInteger(myNum))
    renderResponse(
      `<div class="error">Ошибка! Введите целое число. Вы ввели: ${myNum}</div>`
    );
  else {
    for (let i = 1; i <= arg; i++) {
      helpNum *= i;
    }
    renderResponse(
      `<div class="victory">Факториал числа ${myNum} = ${helpNum}</div>`
    );
  }
}

function factorMutation(arg) {
  let helpNum = 1;
  myNum = Number(myNum);
  if (isNaN(myNum))
    renderResponse(
      `<div class="error">[Я - мутант 1] Ошибка! Введите число</div>`
    );
  else if (myNum <= 0)
    renderResponse(
      `<div class="error">[Я - мутант 1] Ошибка! Введите число больше 0. Вы ввели: ${myNum}</div>`
    );
  //Убираем знак отрицания из условия
  else if (Number.isInteger(myNum))
    renderResponse(
      `<div class="error">[Я - мутант 1] Ошибка! Введите целое число. Вы ввели: ${myNum}</div>`
    );
  else {
    for (let i = 1; i <= arg; i++) {
      helpNum *= i;
    }
    renderResponse(
      `<div class="victory">[Я - мутант 1] Факториал числа ${myNum} = ${helpNum}</div>`
    );
  }
}

factor(myNum);
factorMutation(myNum);