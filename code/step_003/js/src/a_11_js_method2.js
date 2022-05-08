'use strict';
//a_11_js_method2.js

const arr = ['banana', 'orange', 'graph', 'kiwi', 'strawberry'];
const arrCopy = [...arr];
arrCopy.sort(); //A~Z순서대로
console.log(arr,arrCopy);
arrCopy.reverse(); //한번 정리했던걸 역순으로.
console.log(arr,arrCopy);

const arrNum = [1,2,3,4,5,6,7,8,9,10,11,15,28,29,35,50];
// arrNum.sort( (a ,b) => a - b );
arrNum.sort( (a ,b) =>{return a - b} );
console.log(arrNum);

// --------------------------------------------------
// reduce
const arrNum2 = [1,3,5,8,10,22,53];
let totalNum = 0;
for(let i = 0; i < arrNum2.length; i+=1){
  totalNum += arrNum2[i];
}
console.log(totalNum);

let totalNum2 = arrNum2.reduce((a,b) =>{return a += b});
console.log(totalNum2);

// reduce : [1,2,3,4,5,6] -> 1+2+3+4+5+5
// map :    [1,2,3,4,5,6] -> [1,4,9,16,25,36]
// filter : [1,2,3,4,5,6] -> [2,3,4]

// ---------------------------------------------------
// filter : filter메소드는 내부함수의  teturn에서 조건이 참인경우만 허용
const filterNum = [];
for(let i = 0; i < arrNum2.length; i+=1 ){
  if(arrNum2[i] > 5 && arrNum2[i] < 30){
    filterNum.push(arrNum2[i])
  }else{
    continue;//건너뛰어랏
  }
}
console.log(filterNum);

const filterArrNum = arrNum2.filter(function(data){
  return 5 < data && data < 30; // 5보다 크고 30보다 크게
});
console.log( filterArrNum);

// ---------------------------------------------------
//map : 배열의 내용을 일괄 수행하는 기능.
const upDataNum = [];
// for(let i = 0; i < arrNum2.length; i+=1){
// let sampleNum = arrNum2[i] ** 2;//제곱
// upDataNum.push(sampleNum);
// }

arrNum2.forEach(function(data, index){
let sampleNum = data ** 3;
upDataNum.push(sampleNum);
});
console.log(arrNum2,upDataNum);

const setArrNum =  arrNum2.map(function(data, index){
  return data ** 3;
});
console.log(setArrNum);
