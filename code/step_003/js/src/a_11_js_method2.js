'use strict';
//a_11_js_method2.js

const arr = ['banana', 'orange', 'graph', 'kiwi', 'strawberry'];
const arrCopy = [...arr];
arrCopy.sort(); //A~Z순서대로
console.log(arr,arrCopy);
arrCopy.reverse(); //한번 정리했던걸 역순으로.
console.log(arr,arrCopy);

const arrNum = [1,2,3,4,5,6,7,8,9,10,11,15,28,29,35,50];
arrNum.sort();
console.log(arrNum);// 1끼리 2끼리 모이는 현상을 볼수있음
