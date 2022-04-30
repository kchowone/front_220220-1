'use strict';
//a_04_js_operation.js

// operator(계산자,연산자), literal( 변수로 된 값)
let num, num2;

num = 10;
num2 = 20;

[num,num2] = [30,40];
console.log(num2);

// 사칙연산 : + - * / %

let rel1 = num + num2;
console.log( rel1 ); // 70

rel1 = rel1 + 10;
console.log( rel1 ); //80

//나는 나 자신에게 10을 더할거야!
//ㄴ 나에게 10을 더할거야!
// rel1 = rel1 + 10;
rel1 += 10;
console.log(rel1);//90

rel1 -= 5;
console.log(rel1);//85

rel1 *= 20;
console.log(rel1); //1700

rel1 /= 15;
rel1= parseInt(rel1); //정수 :parseInt
console.log(rel1);

let rel2 = rel1 % 10;
console.log (rel2);

//rel1에게 10으로 나누었을때 몫 필요없고, 나머지 값은?
rel1 %=10; 
console.log(rel1);

//-----------------------------
let rel3 = num2;
console.log( rel3 );

rel3 += 1;
console.log(rel3 );

rel3++;//후치, 증가연산
console.log( rel3 );
++rel3;//전치, 증가연산
console.log( rel3 );//43

console.log( ++rel3 );
console.log( ++rel3 );
console.log( rel3++ );
console.log( rel3++ );
console.log( 'rel3:', rel3 );

rel3--;
console.log(rel3);
--rel3;
console.log(rel3);

//=, ===, !, !== , <, <= , >, >= , ++ , -- , += , -= ..... (복합연산자)
// && , || (비교연산자)
// 조건문 : if, switch , 삼항연산자
// 반복문 : for, for-in , forEach , while, do-while

