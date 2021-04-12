'use strict';

// циклы while

// пример №1

let S=0, i=1;
while(i<=1000) {
    S += 1/i;
    ++i;
}
console.log(S);

// пример №2

let V=0, w=1;
while(w<=1000 && V<5) {
    V += 1/w;
    ++w;
}
console.log(V);

// пример №3

let A=0, bb=1;
while((A += bb++) < 100);
console.log(A);

// цикл for синтаксис: for(<инициализация счетчика>;<условие>;<изменение счетчика>) {
//    [тело цикла]
// }

// пример №1

let Q=0;
for(let e=1; e<=1000; ++e) Q += 1/e;
console.log(Q);

// пример №2
// y = f(x) = kx + b, x = 0; 0.1; 0.2; ...; 1

let y, k = 0.5, b = 2;
for(let x=0; x <= 1; x += 0.1) {
    y = k*x + b;
    console.log(y);
}

// можно немного изменить: объявляю все переменные до цикла, проверяю словия в теле цикла, изменяю счетчик 
// в самом конце

// let y, k = 0.5, b = 2;
// let x=0;
// for(;;) {
//    if(x <= 1) break;    
//    y = k*x + b;
//    console.log(y);
//    x += 0.1;
// }


// цикл do while. Синтаксис 
// do {
//  [тело цикла]    
// }
// while(<выражение>);
// Особенность: Сначала производит действие, а потом проверяет условие.
// Пример

const PASSWORD = '1Q2W3E4R';
let password = null;
do {
    password = prompt('Введите пароль', '');
}
while(password != PASSWORD);
console.log('Вы вошли в систему!');

// Циклы можно комбинировать друг с другом. Пример, считаем двойную сумму ряда

let SUM=0, M=10, N=5;
for(let u = 1; u <= N; ++u)
    for(let o=1; o <= M; ++o)
        SUM += u * o;
console.log('SUM = ' + SUM);

// всеми циклами можно управлять с помощью break и continue

let SUM2=0, M2=10, N2=5;
for(let u2 = 1; u2 <= N2; ++u2)
    for(let o2=1; o2 <= M2; ++o2) {
        if(o2 == 5) break; // прерывается только внутренний цикл
        SUM2 += u2 * o2;
    }

console.log('SUM2 = ' + SUM2);

// как прервать оба цикла? нужна метка, ее придумываешь сама, как, например, имя переменной

let SUM3=0, M3=10, N3=5;
all: for(let u3 = 1; u3 <= N3; ++u3) // ставлю метку в начало, чтобы перервать оба цикла
    for(let o3=1; o3 <= M3; ++o3) {
        if(o3 == 5) break all; // метка all
        SUM3 += u3 * o3;
    }

console.log('SUM3 = ' + SUM3);

// continue пропускает тело цикла. Пример:

for(let h=-5; h <= 5; ++h) {
    if(h == 0) continue;
    console.log('i = ' + i);
}

// с continue можно использовать метку как с break
