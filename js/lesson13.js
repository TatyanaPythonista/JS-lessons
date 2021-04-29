'use strict';

// Создаём копию объекта

let book = {
    title: 'название',
    author: 'автор',
    nPages: 0,
    price: 0,
};

let lib = {} // сначала создаём пустой объект

for (let key in book) {
    lib[key] = book[key]; // в начале создаём lib[key], а потом присваиваем значение
    console.log(key + ': ' + lib[key])
}

// но так можно скопировать только приметивные типы данных. Более сложный пример

let book2 = {
    title: 'название',
    author: 'автор',
    nPages: 0,
    price: 0,
    size: {height: 100, width: 50}
};
// если мы сделаем как в первом случае, то скопирутеся только ссылка на сложенный объект, но не сам объек, 
// то есть полный клон не создастся. Исправить можно так

function cloneDeepObj(dest, obj) {
    for (let key in obj) {
        if((typeof obj[key]) == 'object') {
            dest[key] = cloneDeepObj({}, obj[key]);
        }
        else {
            dest[key] = obj[key];
        }
    }
    return dest;
}

let lib2 = cloneDeepObj({}, book2);
book2.size.height = 0 // эта строка для проверки, если все норм, то должно быть 100, а не 0
console.log(lib2);

// на деле наша фукнция может давать ошибки, так как она не учитывает все типы данных.
// если необходимо сделать глубокое копирование объектов, то лучше использовать Structured cloning algorithm
// или использую JS библиотеку lodash (там есть метод _.cloneDeep(obj))

// Если на практике необходимо создать множество однотипных объектов, используются функции конструкторы
// Имя функции конструктора должно начинаться с заглавной буквы

function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}

let book3 = new Book("Муму", "Тургенев", 10)
console.log( book3 );

// Как это работает?
// 1. Создаётся новый пустой объект, но который указывает this
// 2. Выполняется тело функции, добавляя в объект новые свойства
// 3. Возвращается значение this.

// Т.о. мы можем создавать множество однотипных объектов, используя ф-цию конструктор

// Можно использовать анонимные функции в качестве конструктора. Пример:

let car = new function() {
    this.model = 'reno';
    this.go = function() {
        console.log("Машина едет");
    }
}

car.go();
console.log( car );