'use strict';

// условные операторы if и switch

// if(<выражение>) оператор; Пример:

let x = -5;
if(x < 0) x = -x;
console.log('|x| = ' +x);

// Какие еще есть условные выражения? 
// a > b, a < b, a >= b, a <= b, a == b, a != b возвращают булевые значения. Пример:

console.log( 2 > 1 ); // true
console.log( 2 == 1); // false
console.log(2 != 1 ); // true

let result = 7 > 5; // результат сравнения присваивается переменной
console.log( result ); // true

// сравнение строк. Сравниваются посимвольно.

console.log('Я' > 'А'); // true
console.log('Кот' > 'Код'); // true
console.log('Сонный' > 'Сон'); // true

// Можно сравнивать разные типы данных. Например, строку с числом.

console.log('2' > 1); // true Строка преобразуется к числу
console.log('01' == 1); // true

console.log(true == 1); // true (true приводится к 1)
console.log(false == 0); // true (false приводится к 0)
console.log(null == undefined); // true (обе величины приводятся к 0), но...
console.log(null >= undefined); // В этих двух случаях undefind приводится к значению NaN и получаем false
console.log(null <= undefined);

// и еще одна странная непонятная особенность

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// === строгое сравнение (с учетом типа данных)

console.log(true === 0); // false
console.log(false === 0); // false
console.log('5' === 5); // false
console.log('7' === 7); // false
console.log(null === undefined); // false

// !== строгое неравенство
console.log('5' !== 5); // true
console.log(null !== undefined); // true

// if/else

let a = -5;
if(a < 0) console.log('a отрицательное число');
else if (a > 0) console.log('a положительно чесло');
else console.log('a равно 0');

// если после условия надо сделать несколько действий, то их нужно обособить в {}

let b = -10, sgn = 0;
if(b < 0) {
    sgn = -1;
    console.log('b отрицательное число', sgn);
}
else if(b > 0) {
    sgn = 1;
    console.log('b положительное число', sgn);
}
else console.log('b равен 0', sgn);

// тернарный условные оператор
// let result = условие ? значение1 : значение 2; - если условие истина, то result(y) присваивается значение1, а иначе 2
// пример

let sp = 'Это мой возраст';
let nsp = 'Это не мой возраст';
let age = 31;
let result2 = (age == 31) ? sp : nsp;
console.log(result2);

// реализуем проверку попадания x в диапазон [2; 7]
// && - выполняются оба условия, тогда true, 'и'

let v = 4;
if (v >= 2 && v <= 7) console.log('v попадает в диапазон [2; 7]');
else console.log('x не попадает в [2; 7]');

// реализуем проверку не попадания x в диапазон [2; 7]
// || - или - true если истина хотя бы одно

let vv = 4;
if (vv < 2 || vv > 7) console.log('vv не попадает в диапазон [2; 7]');
else console.log('vv попадает в [2; 7]');

// у && приоритет выше, чем у ||

// s в диапазоне [2;7], d не принадлежит [0;5]

let s = 4, d = -2;
if(s >= 2 && s <= 7 && (d < 0 || d > 5))
    console.log('s попадает в диапазон [2; 7], d не попадает в диапазон [0; 5]');

if(!"") console.log('пустая строка даёт false') // ! - не, поэтому true; у ! самый высокий приоритет

// оператор switch используется когда из множества вариантов надо выбрать один

let item = 3;
switch(item) {
    case 1: console.log('item = 1');break; // если не поставить break, то сработает не только оператор, case 3, но и все после него
    case 2: console.log('item = 2');break;
    case 3: console.log('item = 3');break;
    case 4: console.log('item = 4');break;
    default: console.log('item имеет другое значение'); // default не обязательное условие
}
