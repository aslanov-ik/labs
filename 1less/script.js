function PowNonNeg(x, n) {
  let z = 1;
  x = Number(x);
  n = Number(n);
  if (isNaN(n) || isNaN(x)) {
    renderResponse(
      `<div class="error">Ошибка! X и N должны быть цифрами, вы ввели: X = ${x}, N = ${n}</div>`
    );
  } else if (!Number.isInteger(x) || !Number.isInteger(n)) {
    renderResponse(
      `<div class="error">Ошибка! X и N должны быть целым вы ввели: X = ${x}, N = ${n}</div>`
    );
  } else if (x < 0 || x > 999)
    renderResponse(
      `<div class="error">Ошибка! X должно лежать в диапозоне [0...999], вы ввели: ${x}</div>`
    );
  else if (n < 1 || n > 100)
    renderResponse(
      `<div class="error">Ошибка! N должно лежать в диапозоне [1...100], вы ввели: ${n}</div>`
    );
  else if (n > 0) {
    z = Math.pow(x, n);
    document
      .querySelector(".container")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="victory">${x} в степени ${n} = ${z}</div>`
      );
    document
      .querySelector(".container")
      .insertAdjacentHTML("afterbegin", `<span>Успех!</span>`);
  }
  return z;
}

let variableX = prompt("Введите ваше число (X)");
let variableN = prompt("В какую степень возвести? (N)");

PowNonNeg(variableX, variableN);

function renderResponse(text) {
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", `${text}`);
}
