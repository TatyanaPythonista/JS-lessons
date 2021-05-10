'use strict';

// Массивы (array), методы push, pop, shift, unshift, многомерные массивы

let array = [1, 2, 3, 4];

// Как обратиться к элементу массива? 
// <имя массива>[индекс элемента]
// пример:

console.log( array[0], array[5] ); // элемента с индексом 5 нет, в консоле underfind

// Меняю элемент в массиве
array[1] = 'Timur';
console.log( array );
// Добавляю элемент
array[4] = 'Лимон';
console.log( array );

// array.length - определяем длину массива как максимальный индекс + 1
// Это важно! Например, добавлю элемент с индексом 999
array[999] = 'Love';
console.log( array.length ); // теперь length = 1000, хотя элементов всего 6

// length можно использовать в цикле for

let fruts = ["apple", "pear", "watermelon"];

for(let i=0; i<fruts.length; ++i)
    console.log( fruts[i] );

// С помощью length можно обрезать массивы
// Пример:

let cars = ['tayota', 'volga', 'golf', 'BMW', 'Audi'];
cars.length = 3;
console.log( cars ) // выводится только три элемента
// Попытаюсь изменить длину массива на прежнюю
cars.length = 5;
console.log( cars ); // получаем ["tayota", "volga", "golf", empty × 2]

// Массивы могут содержать самые разные данные

let differents = ['Яблоко', {name: 'John'}, true, function() { alert('Hello!'); }];

console.log( differents[1].name );

// Массив хранит упорядочные данные, но эту упорядочность можно нарушить вот так
let digits = [];
digits[9999] = 1; // добавляю элемент 1 с индексом 9999 --> получаем неупорядочный массив.

// или можно начать рассматривать массив как объект и добавить свойство
digits.zero = null; // получаем тоже неупорядочный