'use strict';

// методы объекта. Очень похоже на методы в классе в питоне. Только здесь не создают эеземпляр класса.
// пример

let car = {
    model: 'toyota',
    color: 'black',
    go: function () { // а вот и первый метод
        console.log('машина едет');
    }
};

car.go(); // вызываю метод

// добавляю метод в объект
car.stop = function () {
    console.log('Машина остановлена');
}

car.stop();

// передача аргументов методам
let bike = {
    model: "Olimpic",
    color: 'pink',
    go: function (driverName) { // можно убрать function и : по новым стандартам
        console.log('Водитель ' + driverName + ': машина едет')
    },
    stop: function () {
        console.log('Машина остановлена');
    },
    getModel() {
        return this.model; // что вернуть свойство(атрибут) надо добавить this.
    }
};

bike.go('Тимур');
console.log(bike.getModel());

let car1 = {model: 'toyota'};
let car2 = {model: 'opel'};

car1.getModel = getModel;
car2.getModel = getModel;

console.log( car1.getModel() );
console.log( car2.getModel() );

function getModel () {
    return this.model;
}

