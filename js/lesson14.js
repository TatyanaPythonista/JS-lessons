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

let fruits = ["apple", "pear", "watermelon"];

for(let i=0; i<fruits.length; ++i)
    console.log( fruits[i] );

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

// можно перебрать масси с помощью цикла for...of - этот цикл оптимизирован для работы с массивами
// for...in лучше использовать для перебора свойств объекта

for(let fruit of fruits)
    console.log( fruit ); // в этом цикле в переиенную fruit копируется элемент из массива, а не выводится
    // на прямую. В цикле на стр 29 элемент не копируется, а выводит сам элемент, а не копию --> элем можно менять
    // в цикле, если нужно

for(let j=0; j<fruits.length; ++j) {
    fruits[j] = "Peach";
    console.log( fruits[j] );
}

// Методы массива push - добавляет элемент и pop - удаляет последний элемент

let family = ['Tanya', 'Misha', 'cat'];
family.push('Timur');
console.log( family );

let animals = ['Зебра', 'Обезьяна', 'Петух', 'Корова'];

let delAnim = animals.pop();
console.log( delAnim );
console.log( animals );

// методы shift - удаляем и unshift - добавляем первый элемент массива
let shiftAnim = animals.shift(); // индексы сдвигаются и сптруктура массива не нарушается
console.log(shiftAnim);
console.log(animals);

// На базе этих методов можно поределить очереди

// FIFO - первый вошел, первый вышел - shift и push
// Стек - последний вошел, первый вышел - push и pop
// Стек работает быстрее, т.к в FIFO надо менять индексы

// Двумерные массивы

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log( matrix[1][1] );

// чтобы перебрать все элементы двумерного массива, надо использовать цикл for of 

for(let row of matrix) {
    let cols = '';
    for(let val of row)
        cols += val + ' ';

    console.log(cols);
};

// или через перебор индексов

for(let q=0; q < matrix.length; ++q) {
    let cols2 = '';
    for(let w=0; w < matrix[q].length; ++w)
        cols2 += matrix[q][w] + ' ';

    console.log(cols2);
};
