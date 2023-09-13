let helpNum = 1;
let myNum = prompt("Введите число");

function factor(arg) {
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
    for (let i = 1; i <= arg - 1; i++) {
      helpNum *= i;
    }
    renderResponse(
      `<div class="victory">Факториал числа ${myNum} = ${helpNum}</div>`
    );
  }
}

function renderResponse(text) {
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", `${text}`);
}

factor(myNum);
