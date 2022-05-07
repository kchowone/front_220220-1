'use strict';
// a_09_js_mathod.js

(function(){
  let arr = [1,4,5];
  arr[3] = 10;
  arr.push('apple', 'kiwi')
  arr.push('banana')
  
  arr.pop();//터뜨리겠다 / 하나밖에 못없앰.
  arr.pop();

  arr.shift(); // 배열 앞 없애줌
  arr.unshift(7);// 배열 앞을 생성

  console.log(arr);
  
  // console.log(arr.length);
  // arr.forEach(function(d,i){console.log(i,d)});
  arr.splice(2,2);//2번째부터 2개 없애라.
  console.log(arr);
  const arr2 = [...arr]//deep copy

  let addr = '서울시 마포구 연남동';
  const arrAdd = addr.split(' ');
  console.log( arrAdd );
  let num = '010-2244-7865'
  
  const arrNum = num.split('-');
  console.log(arrNum);
  let joinNum = arrNum.join('-');
  console.log(joinNum);

// jascript 배열 매소드 
})();
