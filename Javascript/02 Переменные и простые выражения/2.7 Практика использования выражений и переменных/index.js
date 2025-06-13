// let currentYear = 2023;

// let studentName = "Илья";
// let year = 2005;
// let height = 165;
// let weight = 73;

// let age = currentYear - year;
// let IMT = weight / (height * height)

// console.log(studentName, "возраст:", age, "рост:",height, "вес:", weight, "индекс массы тела:", IMT)

let currentYear = 2023;

let studentName = prompt("Введите имя");
let year = prompt("Введите год рождения");
let height = prompt("Введите рост");
let weight = prompt("Введите вес");

let age = currentYear - year;
let IMT = weight / (height * height)

console.log(studentName, "возраст:", age, "рост:",height, "вес:", weight, "индекс массы тела:", IMT)