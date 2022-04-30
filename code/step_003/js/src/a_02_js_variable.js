'use strict';
// a_02_js_variavle.js

//document.write('무엇이든 나와라!!');
//document.write('<p> 요소일것인가? 글자일 것인가?</p>');
//alert('message!!!');
console.log('나와라');

var checkNumber = 1;
console.log(checkNumber);

var checkName ='chowon';
console.log(checkName);

var resultName = checkNumber  + checkName;
console.log(resultName);

var likeNumber = '10';
console.log(likeNumber + checkNumber); //101

console.log(checkNumber - likeNumber); // -9  js특징 : 자동 형변환
console.log(checkName - likeNumber); 
// 문자라고 하더라도 어떠한 계산을 거치는 경우 실제 계산이 안되면 NaN(Not a Number)을 표출한다.


var convertNumber = parseInt(checkNumber + likeNumber);
// var convertNumber = parseInt(likeNumber + checkNumber);
// var convertNumber = parseInt('문자' + checkNumber + likeNumber);
// var convertNumber = parseInt(checkNumber + likeNumber + '문자' );

//parseIn: 정수로 변환해주겠다! / 1문자10 / 앞에 문자가 있으면 계산이 안돼~~~

console.log(convertNumber);

checkNumber = 100;
console.log(checkNumber); // 변수 재사용은 안됨.

//---------------------------------------

var btn = document.querySelector('.btn');
var count = document.querySelector('.count')
var countNumber = 0;

//btn을 이벤트발생(클릭)시 count내부에 숫자가 1씩 증가
btn.addEventListener('click',function(){
  countNumber = countNumber + 1;
  count.innerText = countNumber;

})

//--------------------------------
console.clear();

console.log('sample :',sample)
var sample;

// sample = 100;
// console.log('sample :', sample)

//---------------------------------

//.date_list 내부에 날짜에 해당하는 요소를 삽입 (31개)


var date_list=document.querySelector('.date_list');
var i=1;
for ( ;i <= 31; i = i+1){
//document.write('<li><button type="button">'+ i +'일</button></li>');
  console.log(i);
//date_list.innerHTML ='<li><button type="button">'+ i +'일</button></li>';
}

console.log('i :', i);

//라면봉지를 생성 - > 라면 내부에 무언가를 채우기 - > 진열
//-------------------------------


/*
var 변수의 문제점
1. Hoisting  현상이 일어나면서 var 변수선언은 상단에 초기화 처리된 것으로 인식
2. 한번 선언 후에는 다시 재선언을 하면 가능하다.
3. scope(영역) 제한에 다소 균형이 맞지 않는다.
*/
let user ='chowon';
console.log(user) //undefind
user = 'your';
console.log(user);

let k=1;
for(; k <=100; k=k+1){
  console.log('k:', k);
}
console.log('k is outer for:', k);

const onlyOne = 10;
console.log(onlyOne)
onlyOne=999;
//const 한번 선언하면 끝

//var  이제는 사용x -> let, const를 사용한다.
// 1. 'let' 호이스팅현상은 사라지지 않는다. 다만 초기화가 되지 않을뿐
// 2. 'let' , 'const'  한번 선언한 변수는 재선언 불가능 / 값도 바꿀수 없다.
// 3. 'let' 범위에 대한 설정이 더 민감해졌다.
// 4. 'const'는 선언과 동시에 값을 입력해야한다.