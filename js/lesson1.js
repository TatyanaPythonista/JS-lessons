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

// Бывают случаи, когда тип переменной надо указать в явном виде

let g = true; // было булевое
g = String(g); // явно преобразовала в строковое
console.log(g);
console.log(typeof g);

let h = '123'; // была строка
let j = Number(h); // явно преодразуем ее в число
console.log(h);
console.log(typeof h);
console.log(j);
console.log(typeof j);

// в математических операциях есть автоматическое приведение данных. Пример:

console.log('6' / '3'); // вроде были строки, в получили число 2, есть искл "+", получим '63'
console.log('6' + '3');
console.log(Number('6') + Number('3'));

// приведение различных типов к числовому:

// underfind - NaN
// null - 0
// true/false - 1/0
// строка - пробельные символы по краям обрезаются. Далее, если остается пустая строка - 0, 
// иначе, пытается 'считаться', если не получается - NaN.

// Пример:

console.log(Number('   123   '));  // 123
console.log(Number('123x')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// преобразование в булевое значение: 0 и "" - false, остальное - true. Пример:

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean('')); // false
console.log(Boolean('0')); // true - строка не пустая, хоть и 0
console.log(Boolean("Hello!")); // true

// '=' оператор присваивания

let z = 10;
let x = 2*2+2; // у оператора присваивания низкий приоритет, поэтому сначала 
// выполняется арифметическая операция, а потом присваивание

// присваивание по цепочке

let v, n, m;
v = n = m = 2 + 2;
console.log(v, n, m);

let aa, bb = 1;
let cc = 3 - (aa = bb + 1);
console.log(aa, bb, cc);


// alert, prompt, confirm - функции работающие в браузерах
// alert - отображает модальное окно с сообщением и приостонавливает дальнейшее выполнение скрипта,
// пока окно (это называется модальное окно) не закрыто. Пример:

alert('Hello');

// prompt - похоже на alert только с полем ввода для ответа (второй аргумент - а-ля плейсхолдер, точнее 
// значение по умолчанию )

let age2 = prompt('Сколько вам лет?', 18);
console.log(age2);

// confirm - тоже самой, но с вариантами ответа OK или Отмена

let isCar = confirm("У тебя есть машина?");
console.log(isCar); // если ок, в кансоль выведется true
