'use strict';

// Функции. Синтаксис:
// function имя_функции([агументы]) {
//    [тело функции]    
// }

// Пример:

function out_log(message) {
    console.log(message);
}

out_log('Первый вызов'); // вызов функции может быть даже выше ее определения. Это возможно потому сто JS машина определяет
// все прописанные функции до выполнения скрипта

out_log('Второй вызов'); // в качестве параметров можно передать любые типы данных, но только строку

// Можно передавать несколько параметров и использовать переменные из глобального пространства и теле функции

function showMessage(from, text) {
    let message = from + ' ' + email + ': ' + text;
    console.log(message)
}

let email = 'anna@mail.ru'

showMessage('Аня', 'Привет!'); 
showMessage('Аня', 'Как дела?');

// если аргумент не предать, то выведется underfind. 
// Можно жестно в параметрях функции задать значение параметра: function showMessage(from, text='Привет!') {

// функции могут возвращать некоторое значение. Пример

function abs(r) {
    if(r < 0) r = -r;
    return r;
}

let result = abs(-5);
console.log(result);

// можно реализовать тоже самое через тернарный оператор

function abs2(p) {
    return (p < 0) ? -p : p;    
}

let result2 = abs2(-8);
console.log(result2);

// можно сделать несколько ретурнов через if, как в питоне

function div(a, b) {
    if(b == 0) return Infinity;
    return a/b
}

let result3 = div(3, 0)
console.log(result3)

// иногда функцию лучше разбить на две

function showPrimes(n) {
    for(let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}

function isPrime(i) {
    
}
