'use strict';

// Объекты, циклы for in

// все программы на JS используют объекты. Как работать с объектом? Синтаксис
// [переменная=] {
// ключ1: значение1,
// ключ2: значение2,  
// ...  
// ключN: значениеN       
// };

// Пример:

let book = {
    title: 'Название',
    author: 'автор',
    nPages: 0,
    price: 0
};

// как обращаться? Как к аргументу в классе в питоне

console.log(book.title); // Название

// как добавить свойство к существующему объекту? Как в питоне с defaultdict, 
// но синтаксис как у аргумента класса

book.isSalled = false; // ключ - isSalled, значение - false

// чтобы изменить, надо просто написать:
book.isSalled = true;  // изменила значение
delete book.isSalled; // удалила свойство
console.log(book.isSalled); // так как удалила это ключ, значение будет underfined

// оператор in изпользуется чтобы понять есть или нет у объекта какое-то свойство

console.log('isSalled' in book); // false так как удалила
console.log('price' in book); // true 
// но чаще делают вот так:
if(book.isSalled === undefined)
    console.log('isSalled не существует');

// можно создать пустой объект
let magazine = {}; // так
let magazine2 = new Object(); // или так

// если ключ - несколько слов, то ставим ковычки

let book2 = {
    title: 'название',
    author: 'автор',
    nPages: 0,
    'size book2': {height: 100, width: 20}
};
// а обратиться к этому свойству вот так
book2['size book'] = {height: 100, width: 50}; // меняю свойство
console.log(book2['size book']);

// можно объявить переменную и присвоить ей значение свойства. И обращаться к свойству через переменную

let keyName = 'size book2';
console.log(book2[keyName]);

// как это можно использовать? Пример
let keyName2 = prompt('Что вы хотите узнать о книге?', 'title'); // пользовтель присваивает значение переменной
console.log(book2[keyName2]); // и в консоль выводим свойство

// можно наоборот: сначала сделать присвоение свойства

let newKey = 'color'

let car = {
    model: 'toyota',
    [newKey]: 'black',
};

console.log(car[newKey]);
console.log(car.color);

// имя ключа можно изменить

let newKey2 = 'color'

let car2 = {
    model: 'toyota',
    [newKey2+'Car']: 'black',
};

console.log(car2.colorCar);

// создание объекта внитри функции

let car3 = creatCar('Golf', 'grey');

function creatCar(model, color) {
    return {
        model: model,
        color: color
    };
}

console.log(car3.model);

// вывод ключ/значение через цикл

let book3 = {
    title: 'Му-му',
    author: 'Тургенев',
    price: 100,
    nPages: 282
};

for(let key in book3) {
    console.log(key+": "+book3[key]);
}

// если вывести ключи ввиде чисел, то они выведутся в порядке возрастания

let phoneCodes = {
    '7': 'Russia',
    '49': 'Germany',
    '41': 'Switzerland',
    '1': 'USA'
};

for(let code in phoneCodes) {
    console.log(code);
}

// это можно изменить, добавив, например, +

// рассмотрим пример: let a = 'a'; let b = a - в этом случае строка копируется, то есть теперь у нас две строки,
// которые мы можем менять независимо друг от друга. Но если так слелать с объектом, то получится просто две 
// ссылки, которые ссылаются на один объект

// если объект через определен через const объект все равно можно менять. Невозможно изменить только
// саму переменную
