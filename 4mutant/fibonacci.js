import { renderResponse } from "../main/script/functions.js";

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
  //меняем результат на 99
  let result = 99,
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
    `<div class="victory">[Я-мутант 1] Ряд Фибоначчи: ${fibArr.join(
      " | ",
    )} </div>`,
  );
}

function fibboMutant2() {
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
      //добавляем в массив num1 вместо result
      fibArr.push(num1);
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
    num1 = 1,
    num2 = 0,
    fibArr = [];

  //меням инкремент
  for (let i = 0; i < 15; ++i) {
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
    `<div class="victory">[Я - мутант 3] Ряд Фибоначчи: ${fibArr.join(
      " | ",
    )} </div>`,
  );
}

function fibboMutant4() {
  let result = 0,
    num1 = 1,
    num2 = 0,
    fibArr = [];
  for (let i = 0; i < 15; i++) {
    if (i == "0") fibArr.push(0);
    else if (i == "1") fibArr.push(1);
    else {
      result = num1 + num2;
      num2 = num1;
      num1 = result;
      fibArr.push(result);
    }
  }
  renderResponse(
    `<div class="victory">[Я - мутант 4] Ряд Фибоначчи: ${fibArr.join(
      " | ",
    )} </div>`,
  );
}

fibbo();
fibboMutant1();
fibboMutant2();
fibboMutant3();
fibboMutant4();