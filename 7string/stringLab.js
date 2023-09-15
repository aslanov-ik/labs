"use strict";

import {renderResponse} from "../main/script/functions.js";

alert(1);

let fullName = {
    secondName: prompt("Введите фамилию"),
    firstName: prompt("Введите имя"),
    thirdName: prompt("Введите отчество"),
};

const massName = fullName.secondName + fullName.firstName + fullName.thirdName;

renderResponse(
    `<div class="victory">[Вы ввели] ${fullName.secondName} ${fullName.firstName} ${fullName.thirdName}</div>`,
);

let check = (arg) => {
    for (let i = 0; i < arg.length; i++) {
        if (!isNaN(arg[i])) return false;
    }
    return true;
};

function filterName(string) {
                    string = string.toLowerCase();
         string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

if (check(massName)) {
    fullName.secondName = filterName(fullName.secondName);
    fullName.firstName = filterName(fullName.firstName);
    fullName.thirdName = filterName(fullName.thirdName);

    renderResponse(
        `<div class="victory">[Фильтрация] ${fullName.secondName} ${fullName.firstName} ${fullName.thirdName},
${fullName.secondName}, ${fullName.firstName[0]}. ${fullName.thirdName[0]}.</div>`,
    );
} else
    renderResponse(
        `<div class="error">[Ошибка] Проверьте правильность ввода данных!</div>`,
    );