'use strict';

// Существует два синтаксиса объявления функции
// #1 Function Declaration

function showMessage() {
    console.log('Hello!');
};

// #2 Function Expression (функциональное выражение)

let showMessage2 = function () {
    console.log('Hello!');
};

showMessage2();

console.log( showMessage2 );
console.log( typeof showMessage2 );

// можно присвоить функции еще одну переменную

let show = showMessage2;

show();

console.log( show );
console.log( typeof show );

// Зачем нужен синтаксис Function Expression? Пример

function agreeCookies(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function agreeYes() {
    console.log('Вы приняли согласие о cookies');
}

function agreeNo() {
    console.log('Вы отказались от использования cookies');
}

agreeCookies('Наш сайт использует cookies. Нам нужно ваше согласие на использование cookies в браузере.', agreeYes, agreeNo);

// но можно реализовать через анонимные функции

function agreeCookies2(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

agreeCookies2(
    'Наш сайт использует cookies. Нам нужно ваше согласие на использование cookies в браузере.',
    function () { console.log('Вы приняли согласие о cookies') }, // за пределами скобок ф-ция не существует
    function () { console.log('Вы отказались от использования cookies') },
)

// функция объявленная по ситкаксису Function Expression не может быть вызвана до ее объявления

// как обойти ограничения области выидимости? Пример:

let age = prompt('Сколько вам лет?', 18)

let setAccess = null;

if(age < 18) {
    setAccess = function () {
        console.log('Доступ запрещен: вы слишком молоды');
    };
}
else {
    setAccess = function () {
        console.log('Доступ  разрешен');
    };
}

setAccess();

