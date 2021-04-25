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
    go: function (driverName) {
        console.log('Водитель ' + driverName + ': машина едет')
    },
    stop: function () {
        console.log('Машина остановлена');
    }
};

bike.go('Тимур');
