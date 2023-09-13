
let myArr = [];

for (i = 0; i < 10; i++) {
  let temp = prompt(`Введите число ${i + 1} из 10`);
  try {
    if (isNaN(temp)) {
      throw new Error();
    } else {
      myArr.push(temp);
      myArr.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
    }
  } catch (e) {
    renderResponse(
      `<div class="error">Ошибка! Запрещено вводить буквы. 
      Пожалуйста обновите страницу и начните заново. Вы ввели: ${temp}</div>`
    );
    console.log(e);
    break;
  }
}

if (myArr.length === 10)
  renderResponse(
    `<div class="victory">Вот ваш отсортированный массив: ${myArr}</div>`
  );

function renderResponse(text) {
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", `${text}`);
}