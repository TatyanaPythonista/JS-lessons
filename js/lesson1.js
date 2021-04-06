/* это моя первая программа  */

'use strict';

let user = 'Tanya',
    age = 22,
    email = 'tanya@mail.ru';

age = 33;

const PI = 3.1415;

console.log(user, age, email, PI);

/* тип переменной определяется типом данных, которые ей присвоены */

// в js 7 основных типов данных

// 1 type - number. Example:

let a = 5;
let b = 7.23;

// есть 5 числовых типов: десятичные(целые), приближенные к вещественным (десятичные дроби), экспоненциальные,
// восьмиричные, шестнадцатиричные

// typeof - оператор для отределения типа переменной. Пример:

console.log(typeof a);

// Infinity - тип переменной 'бесконечность'. Может быть -Infinity. Пример:

let c = 1/0;

console.log(c);

// NaN - получается в результате неправильной математической операции. Пример:

let d = 'string'/2 + 10;
console.log(d);

// 2 type - string. Строки можно записывать в 3 вариантах:

let message1 = 'Hello';
let message2 = "hello";
let message3 = `HELLO`; // в строку вот с такими кавычками можно встраивать различные переменные. Пример:

let e = 5, f = 10;
let message4 = `e = ${e}, f = ${f}`; // а-ля f-strings

console.log(message4);

// экранирование символов. Пример:

let cl = "class=\"my_class\""; // или использовать одинарные ковычки
console.log(cl);

// 3 type bool - булевые значения - true, false

let isWin = true, isCheckedField = false;
console.log(typeof isCheckedField);

let isGreater = 4 > 1;
console.log(isGreater)

// 4 type - null. indefind - значение переменной не присвоено, в null - присвоено, но не определено

// 5 type - Symbol - для создания уникальных идентификаторов

let id = Symbol();
let id2 = Symbol('id');

console.log(id === id2)




