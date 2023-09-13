import { renderResponse } from "./functions.js";

function fibbo() {
  let result = 0,
    num1 = 1,
    num2 = 0,
    fibArr = [];

  for (let i = 0; i < 15; i++) {
    if (i === 0) fibArr.push(0);
    else if (i === 1) fibArr.push(1);
    else {
      result = num1 + num2;
      num2 = num1;
      num1 = result;
      fibArr.push(result);
    }
  }
  renderResponse(
    `<div class="victory"> Ряд Фибоначчи: ${fibArr.join(" | ")} </div>`,
  );
}

function fibboMutant1() {
  let result = 0,
    num1 = 1,
    num2 = 0,
    fibArr = [];

  for (let i = 0; i < 15; i++) {
    if (i === 0) fibArr.push(0);
    else if (i === 1) fibArr.push(1);
    else {
      //Вычитание вместо сложения
      result = num1 - num2;
      num2 = num1;
      num1 = result;
      fibArr.push(result);
    }
  }
  renderResponse(
    `<div class="victory">[Я - мутант 1] Ряд Фибоначчи: ${fibArr.join(
      " | ",
    )} </div>`,
  );
}

function fibboMutant2() {
  let result = 0,
    num1 = 1,
    num2 = 0,
    fibArr = [];

  //стартуем с 3 вместо 0
  for (let i = 3; i < 15; i++) {
    if (i === 0) fibArr.push(0);
    else if (i === 1) fibArr.push(1);
    else {
      result = num1 + num2;
      num2 = num1;
      num1 = result;
      fibArr.push(result);
    }
  }
  renderResponse(
    `<div class="victory">[Я - мутант 2] Ряд Фибоначчи: ${fibArr.join(
      " | ",
    )} </div>`,
  );
}

function fibboMutant3() {
  let result = 0,
    //num1 изменили на отрицание
    num1 = -1,
    num2 = 0,
    fibArr = [];
  //цикл уходит в минус
  for (let i = 0; i > -5; i--) {
    if (i === 0) fibArr.push(0);
    else if (i === 1) fibArr.push(1);
    else {
      result = num1 + num2;
      num2 = num1;
      num1 = result;
      fibArr.push(result);
    }
  }
  renderResponse(
    `<div class="victory">[Я Мутант 3] Ряд Фибоначчи: ${fibArr.join(
      " | ",
    )} </div>`,
  );
}

function fibboMutant4() {
  let result = 0,
    num1 = 1,
    num2 = 0,
    fibArr = [];
  // меняем знак сравнения в цикле
  for (let i = 0; i > 15; i++) {
    if (i === 0) fibArr.push(0);
    else if (i === 1) fibArr.push(1);
    else {
      result = num1 + num2;
      num2 = num1;
      num1 = result;
      fibArr.push(result);
    }
  }
  renderResponse(
    `<div class="victory">[Я Мутант 4] Ряд Фибоначчи: ${fibArr.join(
      " | ",
    )} </div>`,
  );
}

fibbo();
fibboMutant1();
fibboMutant2();
fibboMutant3();
fibboMutant4();